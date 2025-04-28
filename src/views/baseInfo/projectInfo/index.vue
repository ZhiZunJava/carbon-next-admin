<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryRef" :model="queryParams" :inline="true" label-width="68px">
      <el-form-item label="项目名" prop="name">
        <el-input v-model="queryParams.name" placeholder="请输入项目名" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="开始日期" style="width: 308px">
        <el-date-picker
          v-model="daterangeStartDate"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="结束日期" style="width: 308px">
        <el-date-picker
          v-model="daterangeEndDate"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="项目状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择项目状态" clearable>
          <el-option v-for="dict in project_status" :key="dict.value" :label="dict.label" :value="dict.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button v-hasPermi="['baseInfo:projectInfo:add']" type="primary" plain icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['baseInfo:projectInfo:edit']"
          type="success"
          plain
          icon="Edit"
          :disabled="single"
          @click="handleUpdate"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['baseInfo:projectInfo:remove']"
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['baseInfo:projectInfo:export']"
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          >导出</el-button
        >
      </el-col>
      <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="projectInfoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="项目名" align="center" prop="name" />
      <el-table-column label="负责人" align="center" prop="leader" />
      <el-table-column label="开始日期" align="center" prop="startDate" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.startDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束日期" align="center" prop="endDate" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.endDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="项目介绍" align="center" prop="description" width="100">
        <template #default="scope">
          <image-preview :src="scope.row.description" :width="50" :height="50" />
        </template>
      </el-table-column>
      <el-table-column label="项目状态" align="center" prop="status">
        <template #default="scope">
          <dict-tag :options="project_status" :value="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button
            v-hasPermi="['baseInfo:projectInfo:edit']"
            link
            type="primary"
            icon="Edit"
            @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button
            v-hasPermi="['baseInfo:projectInfo:remove']"
            link
            type="primary"
            icon="Delete"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      :total="total"
      @pagination="getList"
    />

    <!-- 添加或修改项目维护对话框 -->
    <el-dialog v-model="open" :title="title" width="500px" append-to-body>
      <el-form ref="projectInfoRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="项目名" prop="name">
          <el-input v-model="form.name" placeholder="请输入项目名" />
        </el-form-item>
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="form.leader" placeholder="请输入负责人" />
        </el-form-item>
        <el-form-item label="开始日期" prop="startDate">
          <el-date-picker
            v-model="form.startDate"
            clearable
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="请选择开始日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" prop="endDate">
          <el-date-picker
            v-model="form.endDate"
            clearable
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="请选择结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="项目介绍" prop="description">
          <image-upload v-model="form.description" />
        </el-form-item>
        <el-form-item label="项目状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio v-for="dict in project_status" :key="dict.value" :label="dict.value">{{ dict.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="ProjectInfo">
import {
  addProjectInfo,
  delProjectInfo,
  getProjectInfo,
  listProjectInfo,
  updateProjectInfo,
} from '@/api/baseInfo/projectInfo';

const { proxy } = getCurrentInstance();
const { project_status } = proxy.useDict('project_status');

const projectInfoList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref('');
const daterangeStartDate = ref([]);
const daterangeEndDate = ref([]);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    name: null,
    startDate: null,
    endDate: null,
    status: null,
  },
  rules: {
    name: [{ required: true, message: '项目名不能为空', trigger: 'blur' }],
    leader: [{ required: true, message: '负责人不能为空', trigger: 'blur' }],
    startDate: [{ required: true, message: '开始日期不能为空', trigger: 'blur' }],
    endDate: [{ required: true, message: '结束日期不能为空', trigger: 'blur' }],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询项目维护列表 */
function getList() {
  loading.value = true;
  queryParams.value.params = {};
  if (daterangeStartDate != null && daterangeStartDate != '') {
    queryParams.value.params.beginStartDate = daterangeStartDate.value[0];
    queryParams.value.params.endStartDate = daterangeStartDate.value[1];
  }
  if (daterangeEndDate != null && daterangeEndDate != '') {
    queryParams.value.params.beginEndDate = daterangeEndDate.value[0];
    queryParams.value.params.endEndDate = daterangeEndDate.value[1];
  }
  listProjectInfo(queryParams.value).then((response) => {
    projectInfoList.value = response.rows;
    total.value = response.total;
    loading.value = false;
  });
}

// 取消按钮
function cancel() {
  open.value = false;
  reset();
}

// 表单重置
function reset() {
  form.value = {
    id: null,
    name: null,
    leader: null,
    startDate: null,
    endDate: null,
    description: null,
    status: null,
  };
  proxy.resetForm('projectInfoRef');
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  daterangeStartDate.value = [];
  daterangeEndDate.value = [];
  proxy.resetForm('queryRef');
  handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
  reset();
  open.value = true;
  title.value = '添加项目维护';
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value;
  getProjectInfo(_id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = '修改项目维护';
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs.projectInfoRef.validate((valid) => {
    if (valid) {
      if (form.value.id != null) {
        updateProjectInfo(form.value).then((response) => {
          proxy.$modal.msgSuccess('修改成功');
          open.value = false;
          getList();
        });
      } else {
        addProjectInfo(form.value).then((response) => {
          proxy.$modal.msgSuccess('新增成功');
          open.value = false;
          getList();
        });
      }
    }
  });
}

/** 删除按钮操作 */
function handleDelete(row) {
  const _ids = row.id || ids.value;
  proxy.$modal
    .confirm(`是否确认删除项目维护编号为"${_ids}"的数据项？`)
    .then(function () {
      return delProjectInfo(_ids);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess('删除成功');
    })
    .catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    'baseInfo/projectInfo/export',
    {
      ...queryParams.value,
    },
    `projectInfo_${new Date().getTime()}.xlsx`,
  );
}

getList();
</script>

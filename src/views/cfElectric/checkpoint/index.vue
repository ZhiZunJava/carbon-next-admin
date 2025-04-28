<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryRef" :model="queryParams" :inline="true" label-width="98px">
      <el-form-item label="检测点名称" prop="name">
        <el-input v-model="queryParams.name" placeholder="请输入检测点名称" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="检测点地址" prop="address">
        <el-input v-model="queryParams.address" placeholder="请输入检测点地址" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择状态" clearable>
          <el-option v-for="dict in overload_status" :key="dict.value" :label="dict.label" :value="dict.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button v-hasPermi="['cfElectric:checkpoint:add']" type="primary" plain icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['cfElectric:checkpoint:edit']"
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
          v-hasPermi="['cfElectric:checkpoint:remove']"
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
          v-hasPermi="['cfElectric:checkpoint:export']"
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          >导出</el-button
        >
      </el-col>
      <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="checkpointList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="检测点名称" align="center" prop="name" />
      <el-table-column label="检测点地址" align="center" prop="address" />
      <el-table-column label="实时功率" align="center" prop="rtPower" />
      <el-table-column label="实时电压" align="center" prop="rtVoltage" />
      <el-table-column label="状态" align="center" prop="status">
        <template #default="scope">
          <dict-tag :options="overload_status" :value="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="上报时间" align="center" prop="createTime" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button
            v-hasPermi="['cfElectric:checkpoint:edit']"
            link
            type="primary"
            icon="Edit"
            @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button
            v-hasPermi="['cfElectric:checkpoint:remove']"
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

    <!-- 添加或修改能效预警对话框 -->
    <el-dialog v-model="open" :title="title" width="500px" append-to-body>
      <el-form ref="checkpointRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="检测点名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入检测点名称" />
        </el-form-item>
        <el-form-item label="检测点地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入检测点地址" />
        </el-form-item>
        <el-form-item label="实时功率" prop="rtPower">
          <el-input v-model="form.rtPower" placeholder="请输入实时功率" />
        </el-form-item>
        <el-form-item label="实时电压" prop="rtVoltage">
          <el-input v-model="form.rtVoltage" placeholder="请输入实时电压" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio v-for="dict in overload_status" :key="dict.value" :label="dict.value">{{ dict.label }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
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

<script setup name="Checkpoint">
import {
  addCheckpoint,
  delCheckpoint,
  getCheckpoint,
  listCheckpoint,
  updateCheckpoint,
} from '@/api/cfElectric/checkpoint';

const { proxy } = getCurrentInstance();
const { overload_status } = proxy.useDict('overload_status');

const checkpointList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref('');

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    name: null,
    address: null,
    status: null,
  },
  rules: {
    name: [{ required: true, message: '检测点名称不能为空', trigger: 'blur' }],
    address: [{ required: true, message: '检测点地址不能为空', trigger: 'blur' }],
    rtPower: [{ required: true, message: '实时功率不能为空', trigger: 'blur' }],
    rtVoltage: [{ required: true, message: '实时电压不能为空', trigger: 'blur' }],
    status: [{ required: true, message: '状态不能为空', trigger: 'change' }],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询能效预警列表 */
function getList() {
  loading.value = true;
  listCheckpoint(queryParams.value).then((response) => {
    checkpointList.value = response.rows;
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
    address: null,
    rtPower: null,
    rtVoltage: null,
    status: null,
    remark: null,
    createBy: null,
    createTime: null,
  };
  proxy.resetForm('checkpointRef');
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
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
  title.value = '添加能效预警';
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value;
  getCheckpoint(_id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = '修改能效预警';
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs.checkpointRef.validate((valid) => {
    if (valid) {
      if (form.value.id != null) {
        updateCheckpoint(form.value).then((response) => {
          proxy.$modal.msgSuccess('修改成功');
          open.value = false;
          getList();
        });
      } else {
        addCheckpoint(form.value).then((response) => {
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
    .confirm(`是否确认删除能效预警编号为"${_ids}"的数据项？`)
    .then(function () {
      return delCheckpoint(_ids);
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
    'cfElectric/checkpoint/export',
    {
      ...queryParams.value,
    },
    `checkpoint_${new Date().getTime()}.xlsx`,
  );
}

getList();
</script>

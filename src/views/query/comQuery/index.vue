<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryRef" :model="queryParams" :inline="true" label-width="68px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="queryParams.name" placeholder="请输入名称" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="关键字" prop="code">
        <el-input v-model="queryParams.code" placeholder="请输入关键字" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="queryParams.type" placeholder="请选择通用查询类型" clearable>
          <el-option v-for="dict in sys_query_type" :key="dict.value" :label="dict.label" :value="dict.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button v-hasPermi="['query:comQuery:add']" type="primary" plain icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          v-hasPermi="['query:comQuery:edit']"
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
          v-hasPermi="['query:comQuery:remove']"
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button v-hasPermi="['query:comQuery:export']" type="warning" plain icon="Download" @click="handleExport"
          >导出</el-button
        >
      </el-col>
      <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="comQueryList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="名称" align="center" prop="name" />
      <el-table-column label="关键字" align="center" prop="code" />
      <el-table-column label="类型" align="center" prop="type">
        <template #default="scope">
          <dict-tag :options="sys_query_type" :value="scope.row.type" />
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button
            v-hasPermi="['query:comQuery:edit']"
            link
            type="primary"
            icon="Edit"
            @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button
            v-hasPermi="['query:comQuery:remove']"
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

    <!-- 添加或修改通用查询对话框 -->
    <el-dialog v-model="open" :title="title" width="500px" append-to-body>
      <el-form ref="comQueryRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="关键字" prop="code">
          <el-input v-model="form.code" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="sql语句" prop="customSql">
          <el-input v-model="form.customSql" class="mb8" type="textarea" placeholder="请输入内容" />
          <el-button type="primary" size="mini" @click="handleTest(form.customSql)">测试</el-button>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option
              v-for="dict in sys_query_type"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="说明" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入说明" />
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

<script setup name="ComQuery">
import { addComQuery, delComQuery, getComQuery, listComQuery, testBizData, updateComQuery } from '@/api/query/comQuery';

const { proxy } = getCurrentInstance();
const { sys_query_type } = proxy.useDict('sys_query_type');

const comQueryList = ref([]);
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
    code: null,
    type: null,
  },
  rules: {
    name: [{ required: true, message: '名称不能为空', trigger: 'blur' }],
    code: [{ required: true, message: '关键字不能为空', trigger: 'blur' }],
    customSql: [{ required: true, message: 'sql语句不能为空', trigger: 'blur' }],
    type: [{ required: true, message: '类型不能为空', trigger: 'change' }],
  },
});

const { queryParams, form, rules } = toRefs(data);

function handleTest(sql) {
  if (!sql) {
    proxy.$modal.msgError('sql不能为空');
  }
  testBizData({ customSql: sql }).then((res) => {
    proxy.$modal.msgSuccess('测试成功');
  });
}

/** 查询通用查询列表 */
function getList() {
  loading.value = true;
  listComQuery(queryParams.value).then((response) => {
    comQueryList.value = response.rows;
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
    code: null,
    remark: null,
    customSql: null,
    type: null,
    config: null,
  };
  proxy.resetForm('comQueryRef');
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
  title.value = '添加通用查询';
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value;
  getComQuery(_id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = '修改通用查询';
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs.comQueryRef.validate((valid) => {
    if (valid) {
      if (form.value.id != null) {
        updateComQuery(form.value).then((response) => {
          proxy.$modal.msgSuccess('修改成功');
          open.value = false;
          getList();
        });
      } else {
        addComQuery(form.value).then((response) => {
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
    .confirm(`是否确认删除通用查询编号为"${_ids}"的数据项？`)
    .then(function () {
      return delComQuery(_ids);
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
    'query/comQuery/export',
    {
      ...queryParams.value,
    },
    `comQuery_${new Date().getTime()}.xlsx`,
  );
}

getList();
</script>

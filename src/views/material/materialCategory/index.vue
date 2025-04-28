<template>
  <div class="app-container">
    <el-form v-show="showSearch" ref="queryRef" :model="queryParams" :inline="true" label-width="68px">
      <el-form-item label="分类编码" prop="code">
        <el-input v-model="queryParams.code" placeholder="请输入分类编码" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button v-hasPermi="['material:materialCategory:add']" type="primary" plain icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button type="info" plain icon="Sort" @click="toggleExpandAll">展开/折叠</el-button>
      </el-col>
      <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
    </el-row>

    <el-table
      v-if="refreshTable"
      v-loading="loading"
      :data="materialCategoryList"
      row-key="id"
      :default-expand-all="isExpandAll"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column label="分类编码" prop="code" />
      <el-table-column label="分类名称" align="center" prop="name" />
      <el-table-column label="说明" align="center" prop="remark" />
      <el-table-column label="父级分类编号" align="center" prop="parentId" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template #default="scope">
          <el-button
            v-hasPermi="['material:materialCategory:edit']"
            link
            type="primary"
            icon="Edit"
            @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button
            v-hasPermi="['material:materialCategory:add']"
            link
            type="primary"
            icon="Plus"
            @click="handleAdd(scope.row)"
            >新增</el-button
          >
          <el-button
            v-hasPermi="['material:materialCategory:remove']"
            link
            type="primary"
            icon="Delete"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加或修改物料分类对话框 -->
    <el-dialog v-model="open" :title="title" width="500px" append-to-body>
      <el-form ref="materialCategoryRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="父级分类" prop="parentId">
          <el-tree-select
            v-model="form.parentId"
            :data="materialCategoryOptions"
            :props="{ value: 'id', label: 'name', children: 'children' }"
            value-key="id"
            placeholder="请选择父级分类编号"
            check-strictly
          />
        </el-form-item>
        <el-form-item label="分类编码" prop="code">
          <el-input v-model="form.code" placeholder="请输入分类编码" />
        </el-form-item>
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入分类名称" />
        </el-form-item>
        <el-form-item label="说明" prop="remark">
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

<script setup name="MaterialCategory">
import {
  addMaterialCategory,
  delMaterialCategory,
  getMaterialCategory,
  listMaterialCategory,
  updateMaterialCategory,
} from '@/api/material/materialCategory';

const { proxy } = getCurrentInstance();

const materialCategoryList = ref([]);
const materialCategoryOptions = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const title = ref('');
const isExpandAll = ref(true);
const refreshTable = ref(true);

const data = reactive({
  form: {},
  queryParams: {
    code: null,
  },
  rules: {
    code: [{ required: true, message: '分类编码不能为空', trigger: 'blur' }],
    name: [{ required: true, message: '分类名称不能为空', trigger: 'blur' }],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询物料分类列表 */
function getList() {
  loading.value = true;
  listMaterialCategory(queryParams.value).then((response) => {
    materialCategoryList.value = proxy.handleTree(response.data, 'id', 'parentId');
    loading.value = false;
  });
}

/** 查询物料分类下拉树结构 */
function getTreeselect() {
  listMaterialCategory().then((response) => {
    materialCategoryOptions.value = [];
    const data = { id: 0, name: '顶级节点', children: [] };
    data.children = proxy.handleTree(response.data, 'id', 'parentId');
    materialCategoryOptions.value.push(data);
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
    code: null,
    name: null,
    remark: null,
    parentId: null,
  };
  proxy.resetForm('materialCategoryRef');
}

/** 搜索按钮操作 */
function handleQuery() {
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm('queryRef');
  handleQuery();
}

/** 新增按钮操作 */
function handleAdd(row) {
  reset();
  getTreeselect();
  if (row != null && row.id) {
    form.value.parentId = row.id;
  } else {
    form.value.parentId = 0;
  }
  open.value = true;
  title.value = '添加物料分类';
}

/** 展开/折叠操作 */
function toggleExpandAll() {
  refreshTable.value = false;
  isExpandAll.value = !isExpandAll.value;
  nextTick(() => {
    refreshTable.value = true;
  });
}

/** 修改按钮操作 */
async function handleUpdate(row) {
  reset();
  await getTreeselect();
  if (row != null) {
    form.value.parentId = row.parentId;
  }
  getMaterialCategory(row.id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = '修改物料分类';
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs.materialCategoryRef.validate((valid) => {
    if (valid) {
      if (form.value.id != null) {
        updateMaterialCategory(form.value).then((response) => {
          proxy.$modal.msgSuccess('修改成功');
          open.value = false;
          getList();
        });
      } else {
        addMaterialCategory(form.value).then((response) => {
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
  proxy.$modal
    .confirm(`是否确认删除物料分类编号为"${row.id}"的数据项？`)
    .then(function () {
      return delMaterialCategory(row.id);
    })
    .then(() => {
      getList();
      proxy.$modal.msgSuccess('删除成功');
    })
    .catch(() => {});
}

getList();
</script>

<template>
  <div class="app-container">
    <el-row :gutter="20">
      <splitpanes :horizontal="appStore.device === 'mobile'" class="default-theme">
        <pane size="16">
          <el-col>
            <div class="head-container">
              <el-input
                v-model="categoryName"
                placeholder="请输入分类名称"
                clearable
                prefix-icon="Search"
                style="margin-bottom: 20px"
              />
            </div>
            <div class="head-container">
              <el-tree
                ref="categoryTreeRef"
                :data="materialCategoryOptions"
                :props="{ value: 'id', label: 'name', children: 'children' }"
                :expand-on-click-node="false"
                :filter-node-method="filterNode"
                node-key="id"
                highlight-current
                default-expand-all
                @node-click="handleNodeClick"
              />
            </div>
          </el-col>
        </pane>
        <pane size="84">
          <el-col>
            <el-form v-show="showSearch" ref="queryRef" :model="queryParams" :inline="true" label-width="68px">
              <el-form-item label="物料编码" prop="code">
                <el-input
                  v-model="queryParams.code"
                  placeholder="请输入物料编码"
                  clearable
                  @keyup.enter="handleQuery"
                />
              </el-form-item>
              <el-form-item label="物料名称" prop="name">
                <el-input
                  v-model="queryParams.name"
                  placeholder="请输入物料名称"
                  clearable
                  @keyup.enter="handleQuery"
                />
              </el-form-item>
              <el-form-item label="型号" prop="model">
                <el-input v-model="queryParams.model" placeholder="请输入型号" clearable @keyup.enter="handleQuery" />
              </el-form-item>
              <el-form-item label="规格" prop="specification">
                <el-input
                  v-model="queryParams.specification"
                  placeholder="请输入规格"
                  clearable
                  @keyup.enter="handleQuery"
                />
              </el-form-item>
              <el-form-item label="单位" prop="unit">
                <el-input v-model="queryParams.unit" placeholder="请输入单位" clearable @keyup.enter="handleQuery" />
              </el-form-item>
              <el-form-item label="类型" prop="type">
                <el-select v-model="queryParams.type" placeholder="请选择类型" clearable>
                  <el-option v-for="dict in material_type" :key="dict.value" :label="dict.label" :value="dict.value" />
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                <el-button icon="Refresh" @click="resetQuery">重置</el-button>
              </el-form-item>
            </el-form>

            <el-row :gutter="10" class="mb8">
              <el-col :span="1.5">
                <el-button
                  v-hasPermi="['material:materialInfo:add']"
                  type="primary"
                  plain
                  icon="Plus"
                  @click="handleAdd"
                  >新增</el-button
                >
              </el-col>
              <el-col :span="1.5">
                <el-button
                  v-hasPermi="['material:materialInfo:edit']"
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
                  v-hasPermi="['material:materialInfo:remove']"
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
                  v-hasPermi="['material:materialInfo:export']"
                  type="warning"
                  plain
                  icon="Download"
                  @click="handleExport"
                  >导出</el-button
                >
              </el-col>

              <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
            </el-row>

            <el-table v-loading="loading" :data="materialInfoList" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" align="center" />
              <el-table-column label="编号" align="center" prop="id" />
              <el-table-column label="物料编码" align="center" prop="code" />
              <el-table-column label="物料名称" align="center" prop="name" />
              <el-table-column label="型号" align="center" prop="model" />
              <el-table-column label="规格" align="center" prop="specification" />
              <el-table-column label="单位" align="center" prop="unit" />
              <el-table-column label="单价" align="center" prop="price" />
              <el-table-column label="类型" align="center" prop="type">
                <template #default="scope">
                  <dict-tag :options="material_type" :value="scope.row.type" />
                </template>
              </el-table-column>
              <el-table-column label="备注" align="center" prop="remark" />
              <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                  <el-button
                    v-hasPermi="['material:materialInfo:edit']"
                    link
                    type="primary"
                    icon="Edit"
                    @click="handleUpdate(scope.row)"
                    >修改</el-button
                  >
                  <el-button
                    v-hasPermi="['material:materialInfo:remove']"
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
          </el-col>
        </pane>
      </splitpanes>
    </el-row>

    <!-- 添加或修改物料档案对话框 -->
    <el-dialog v-model="open" :title="title" width="500px" append-to-body>
      <el-form ref="materialInfoRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="分类编号" prop="categoryId">
          <el-tree-select
            v-model="form.categoryId"
            :data="materialCategoryOptions"
            :props="{ value: 'id', label: 'name', children: 'children' }"
            value-key="id"
            placeholder="请选择分类编号"
            check-strictly
          />
        </el-form-item>
        <el-form-item label="物料编码" prop="code">
          <el-input v-model="form.code" placeholder="请输入物料编码" />
        </el-form-item>
        <el-form-item label="物料名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入物料名称" />
        </el-form-item>
        <el-form-item label="型号" prop="model">
          <el-input v-model="form.model" placeholder="请输入型号" />
        </el-form-item>
        <el-form-item label="规格" prop="specification">
          <el-input v-model="form.specification" placeholder="请输入规格" />
        </el-form-item>
        <el-form-item label="单位" prop="unit">
          <el-input v-model="form.unit" placeholder="请输入单位" />
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="form.price" placeholder="请输入单价" />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="form.type" placeholder="请选择类型">
            <el-option
              v-for="dict in material_type"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" />
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

<script setup name="MaterialInfo">
import 'splitpanes/dist/splitpanes.css';

import { Pane, Splitpanes } from 'splitpanes';

import { listMaterialCategory } from '@/api/material/materialCategory';
import {
  addMaterialInfo,
  delMaterialInfo,
  getMaterialInfo,
  listMaterialInfo,
  updateMaterialInfo,
} from '@/api/material/materialInfo';
import useAppStore from '@/store/modules/app';

const { proxy } = getCurrentInstance();
const { material_type } = proxy.useDict('material_type');
const appStore = useAppStore();
const materialInfoList = ref([]);
const materialCategoryOptions = ref([]);
const categoryName = ref('');
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
    categoryId: null,
    code: null,
    name: null,
    model: null,
    specification: null,
    unit: null,
    type: null,
  },
  rules: {
    categoryId: [{ required: true, message: '分类编号不能为空', trigger: 'blur' }],
    name: [{ required: true, message: '物料名称不能为空', trigger: 'blur' }],
  },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询物料分类下拉树结构 */
function getTreeSelect() {
  listMaterialCategory().then((response) => {
    materialCategoryOptions.value = [];
    const data = { id: 0, name: '分类', children: [] };
    data.children = proxy.handleTree(response.data, 'id', 'parentId');
    materialCategoryOptions.value.push(data);
  });
}

/** 查询物料档案列表 */
function getList() {
  loading.value = true;
  listMaterialInfo(queryParams.value).then((response) => {
    materialInfoList.value = response.rows;
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
    categoryId: null,
    code: null,
    name: null,
    model: null,
    specification: null,
    unit: null,
    price: null,
    type: null,
    remark: null,
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
  };
  proxy.resetForm('materialInfoRef');
}

/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
function resetQuery() {
  proxy.resetForm('queryRef');
  queryParams.value.categoryId = null;
  proxy.$refs.categoryTreeRef.setCurrentKey(null);
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
  title.value = '添加物料档案';
}

/** 修改按钮操作 */
function handleUpdate(row) {
  reset();
  const _id = row.id || ids.value;
  getMaterialInfo(_id).then((response) => {
    form.value = response.data;
    open.value = true;
    title.value = '修改物料档案';
  });
}

/** 提交按钮 */
function submitForm() {
  proxy.$refs.materialInfoRef.validate((valid) => {
    if (valid) {
      if (form.value.id != null) {
        updateMaterialInfo(form.value).then((response) => {
          proxy.$modal.msgSuccess('修改成功');
          open.value = false;
          getList();
        });
      } else {
        addMaterialInfo(form.value).then((response) => {
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
    .confirm(`是否确认删除物料档案编号为"${_ids}"的数据项？`)
    .then(function () {
      return delMaterialInfo(_ids);
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
    'material/materialInfo/export',
    {
      ...queryParams.value,
    },
    `materialInfo_${new Date().getTime()}.xlsx`,
  );
}

/** 通过条件过滤节点  */
const filterNode = (value, data) => {
  if (!value) return true;
  console.log(data);
  return data.name.indexOf(value) !== -1;
};

/** 根据名称筛选部门树 */
watch(categoryName, (val) => {
  proxy.$refs.categoryTreeRef.filter(val);
});

/** 节点单击事件 */
function handleNodeClick(data) {
  queryParams.value.categoryId = data.id;
  handleQuery();
}

getList();
getTreeSelect();
</script>

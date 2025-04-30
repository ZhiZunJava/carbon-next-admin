<template>
  <el-dialog
    v-model="open"
    :title="title"
    :close-on-click-modal="false"
    :show-close="false"
    width="80%"
    append-to-body
    @open="handleOpen"
  >
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
              <el-form-item label="物料型号" prop="model">
                <el-input v-model="queryParams.model" placeholder="请输入型号" clearable @keyup.enter="handleQuery" />
              </el-form-item>
              <el-form-item label="物料规格" prop="specification">
                <el-input
                  v-model="queryParams.specification"
                  placeholder="请输入规格"
                  clearable
                  @keyup.enter="handleQuery"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                <el-button icon="Refresh" @click="resetQuery">重置</el-button>
              </el-form-item>
            </el-form>

            <el-row :gutter="10" class="mb8">
              <el-col v-if="!isSingle" :span="1.5">
                <el-button type="primary" plain icon="Plus" @click="handleSelect">选择</el-button>
              </el-col>
              <el-col :span="1.5">
                <el-button type="warning" plain @click="cancel">取消</el-button>
              </el-col>
              <right-toolbar v-model:show-search="showSearch" @query-table="getList"></right-toolbar>
            </el-row>

            <el-table v-loading="loading" :data="materialInfoList" @selection-change="handleSelectionChange">
              <el-table-column v-if="!isSingle" type="selection" width="55" align="center" />
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
                  <el-button link type="primary" icon="Edit" @click="handleSelect(scope.row)">选择</el-button>
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
  </el-dialog>
</template>

<script setup name="MaterialInfo">
import 'splitpanes/dist/splitpanes.css';

import { Pane, Splitpanes } from 'splitpanes';

import { listMaterialCategory } from '@/api/material/materialCategory';
import { listMaterialInfo } from '@/api/material/materialInfo';
import useAppStore from '@/store/modules/app';

const { proxy } = getCurrentInstance();
const { material_type } = proxy.useDict('material_type');

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '选择物料档案',
  },
  isSingle: {
    type: Boolean,
    default: true,
  },
});

const { open, title, isSingle } = toRefs(props);

const emits = defineEmits(['onSelected', 'onCancel']);

const appStore = useAppStore();
const materialInfoList = ref([]);
const selectionList = ref([]);
const materialCategoryOptions = ref([]);
const categoryName = ref('');
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const data = reactive({
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    categoryId: null,
    code: null,
    name: null,
    model: null,
    specification: null,
  },
});

const { queryParams } = toRefs(data);

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
  selectionList.value = [];
  selectionList.value.push(selection);
  ids.value = selection.map((item) => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

function handleSelect(row) {
  if (row) {
    selectionList.value = [];
    selectionList.value.push(row);
  }
  emits('onSelected', selectionList.value);
}

function cancel() {
  selectionList.value = [];
  emits('onCancel');
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

function handleOpen() {
  getList();
  getTreeSelect();
}
</script>

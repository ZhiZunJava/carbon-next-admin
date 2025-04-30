<template>
    <div class="app-container">
        <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="98px">
            <el-form-item label="生产线名称" prop="productLineName">
                <el-input v-model="queryParams.productLineName" placeholder="请输入生产线名称" clearable
                    @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button type="primary" plain icon="Plus" @click="handleAdd"
                    v-hasPermi="['mesModel:factoryModel:add']">新增</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate"
                    v-hasPermi="['mesModel:factoryModel:edit']">修改</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete"
                    v-hasPermi="['mesModel:factoryModel:remove']">删除</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="warning" plain icon="Download" @click="handleExport"
                    v-hasPermi="['mesModel:factoryModel:export']">导出</el-button>
            </el-col>
            <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="factoryModelList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="编号" align="center" prop="id" />
            <el-table-column label="产品" align="center" prop="materialName" />
            <el-table-column label="生产线名称" align="center" prop="productLineName" />
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                        v-hasPermi="['mesModel:factoryModel:edit']">修改</el-button>
                    <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"
                        v-hasPermi="['mesModel:factoryModel:remove']">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize" @pagination="getList" />

        <!-- 添加或修改工厂建模对话框 -->
        <el-dialog :title="title" v-model="open" width="1000px" append-to-body>
            <el-form ref="factoryModelRef" :model="form" :inline="true" :rules="rules" label-width="100px">
                <el-form-item label="生产线名称" prop="productLineName">
                    <el-input v-model="form.productLineName" placeholder="请输入生产线名称" />
                </el-form-item>
                <el-form-item label="产品" prop="materialName">
                    <el-input v-model="form.materialName" placeholder="请选择产品" disabled>
                        <template #append>
                            <el-button @click="handleSelectMaterial">选择</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="产品型号" prop="productModel">
                    <el-input v-model="form.productModel" placeholder="" disabled />
                </el-form-item>
                <el-form-item label="产品规格" prop="productSpecification">
                    <el-input v-model="form.productSpecification" placeholder="" disabled />
                </el-form-item>
                <el-form-item label="描述">
                    <editor v-model="form.remark" :min-height="192" />
                </el-form-item>
                <el-divider content-position="center">工厂建模明细信息</el-divider>
                <el-row :gutter="10" class="mb8">
                    <el-col :span="1.5">
                        <el-button type="primary" icon="Plus" @click="handleAddMesFactoryModelDetail">添加</el-button>
                    </el-col>
                    <el-col :span="1.5">
                        <el-button type="danger" icon="Delete" @click="handleDeleteMesFactoryModelDetail">删除</el-button>
                    </el-col>
                </el-row>
                <el-table :data="mesFactoryModelDetailList" :row-class-name="rowMesFactoryModelDetailIndex"
                    @selection-change="handleMesFactoryModelDetailSelectionChange" ref="mesFactoryModelDetail">
                    <el-table-column type="selection" width="50" align="center" />
                    <el-table-column label="序号" align="center" prop="index" width="50" />
                    <el-table-column label="设备" prop="equipmentId" width="200">
                        <template #default="scope">
                            <el-form-item class="sub-table"
                                v-if="scope.$index > -1"
                                :prop="`mesFactoryModelDetailList.${scope.$index}.equipmentId`"
                                :rules="rules.equipmentId">
                                <el-select v-model="scope.row.equipmentId" placeholder="请选择设备编号" clearable
                                    @change="handleEquipmentChange(scope.row, scope.$index)">
                                    <el-option v-for="dict in comQuery_query_equipment" :key="dict.value"
                                        :label="dict.label" :value="parseInt(dict.value)"></el-option>
                                </el-select>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column label="编码" align="center" prop="code" />
                    <el-table-column label="型号" align="center" prop="model" />
                    <el-table-column label="生产日期" align="center" prop="productDate">
                        <template #default="scope">
                            <span>{{ parseTime(scope.row.productDate, '{y}-{m}-{d}') }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="生产批号" align="center" prop="batchNo" />
                    <el-table-column label="制造商" align="center" prop="manufacturer" />
                </el-table>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm">确 定</el-button>
                    <el-button @click="cancel">取 消</el-button>
                </div>
            </template>
        </el-dialog>
        <material-select :open="materialSelectOpen" @onSelected="handleMaterialSelected"
            @onCancel="handleMaterialCancel"></material-select>
    </div>
</template>

<script setup name="FactoryModel">
import { listFactoryModel, getFactoryModel, delFactoryModel, addFactoryModel, updateFactoryModel } from "@/api/mesModel/factoryModel";
import materialSelect from "@/components/Material/MaterialSelect.vue";
import { getEquipmentInfo } from '@/api/baseInfo/equipmentInfo'

const { proxy } = getCurrentInstance();
const { comQuery_query_equipment } = proxy.useDict('comQuery_query_equipment');

const factoryModelList = ref([]);
const mesFactoryModelDetailList = ref([]);
const open = ref(false);
const materialSelectOpen = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const checkedMesFactoryModelDetail = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
    form: {},
    queryParams: {
        pageNum: 1,
        pageSize: 10,
        productLineName: null,
    },
    rules: {
        materialName: [
            { required: true, message: "物料不能为空", trigger: "blur" }
        ],
        productLineName: [
            { required: true, message: "生产线名称不能为空", trigger: "blur" },
            { max: 20, message: "生产线名称最多20个字符", trigger: "blur" }
        ],
        equipmentId: [
            { required: true, message: "设备不能为空", trigger: "change" }
        ],
    }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询工厂建模列表 */
function getList() {
    loading.value = true;
    listFactoryModel(queryParams.value).then(response => {
        factoryModelList.value = response.rows;
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
        materialId: null,
        materialName: null,
        productModel: null,
        productSpecification: null,
        productLineName: null,
        remark: null
    };
    mesFactoryModelDetailList.value = [];
    proxy.resetForm("factoryModelRef");
}

/** 搜索按钮操作 */
function handleQuery() {
    queryParams.value.pageNum = 1;
    getList();
}

/** 重置按钮操作 */
function resetQuery() {
    proxy.resetForm("queryRef");
    handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
    ids.value = selection.map(item => item.id);
    single.value = selection.length != 1;
    multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
    reset();
    open.value = true;
    title.value = "添加工厂建模";
}

function handleSelectMaterial() {
    materialSelectOpen.value = true;
}

function handleMaterialSelected(material) {
    if (material && material.length > 0) {
        const data = material[0];
        form.value.materialId = data.id;
        form.value.materialName = data.name;
        form.value.productModel = data.model;
        form.value.productSpecification = data.specification;
        materialSelectOpen.value = false;
    }
}

function handleMaterialCancel() {
    materialSelectOpen.value = false;
}

function handleEquipmentChange(row, index) {
    if (row.equipmentId) {
        const rowData = mesFactoryModelDetailList.value[index];
        getEquipmentDetail(row.equipmentId, rowData);
    }
}

function getEquipmentDetail(equipmentId, rowData) {
    if (!equipmentId) {
        return void 0;
    }

    getEquipmentInfo(equipmentId).then(response => {
        const data = response.data;
        rowData.code = data.code;
        rowData.model = data.model;
        rowData.productDate = data.productDate;
        rowData.batchNo = data.batchNo;
        rowData.manufacturer = data.manufacturer;
    });
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value
    getFactoryModel(_id).then(response => {
        form.value = response.data;
        response.data.mesFactoryModelDetailList.forEach(eq => {
            let obj = {
                code: '',
                manufacturer: '',
                productDate: '',
                batchNo: '',
                model: ''
            };
            mesFactoryModelDetailList.value.push(Object.assign(obj, eq))
        });
        mesFactoryModelDetailList.value.forEach(eq => {
            getEquipmentDetail(eq.equipmentId, eq);
        })
        open.value = true;
        title.value = "修改工厂建模";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["factoryModelRef"].validate(valid => {
        if (valid) {
            form.value.mesFactoryModelDetailList = mesFactoryModelDetailList.value;
            if (form.value.id != null) {
                updateFactoryModel(form.value).then(response => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addFactoryModel(form.value).then(response => {
                    proxy.$modal.msgSuccess("新增成功");
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
    proxy.$modal.confirm('是否确认删除工厂建模编号为"' + _ids + '"的数据项？').then(function () {
        return delFactoryModel(_ids);
    }).then(() => {
        getList();
        proxy.$modal.msgSuccess("删除成功");
    }).catch(() => { });
}

/** 工厂建模明细序号 */
function rowMesFactoryModelDetailIndex({ row, rowIndex }) {
    row.index = rowIndex + 1;
}

/** 工厂建模明细添加按钮操作 */
function handleAddMesFactoryModelDetail() {
    let obj = {};
    obj.equipmentId = "";
    obj.code = "";
    obj.model = "";
    obj.manufacturer = "";
    obj.productDate = "";
    obj.batchNo = "";
    mesFactoryModelDetailList.value.push(obj);
}

/** 工厂建模明细删除按钮操作 */
function handleDeleteMesFactoryModelDetail() {
    if (checkedMesFactoryModelDetail.value.length == 0) {
        proxy.$modal.msgError("请先选择要删除的工厂建模明细数据");
    } else {
        const mesFactoryModelDetails = mesFactoryModelDetailList.value;
        const checkedMesFactoryModelDetails = checkedMesFactoryModelDetail.value;
        mesFactoryModelDetailList.value = mesFactoryModelDetails.filter(function (item) {
            return checkedMesFactoryModelDetails.indexOf(item.index) == -1
        });
    }
}

/** 复选框选中数据 */
function handleMesFactoryModelDetailSelectionChange(selection) {
    checkedMesFactoryModelDetail.value = selection.map(item => item.index)
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download('mesModel/factoryModel/export', {
        ...queryParams.value
    }, `factoryModel_${new Date().getTime()}.xlsx`)
}

watch(mesFactoryModelDetailList, (val) => {
    form.value.mesFactoryModelDetailList = val;
}, {
    deep: true,
    immediate: true
})

getList();
</script>
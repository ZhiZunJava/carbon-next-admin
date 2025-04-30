<template>
    <div class="app-container">
        <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
            <el-form-item label="工艺名称" prop="processName">
                <el-input v-model="queryParams.processName" placeholder="请输入工艺名称" clearable
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
                    v-hasPermi="['mesModel:processModel:add']">新增</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate"
                    v-hasPermi="['mesModel:processModel:edit']">修改</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete"
                    v-hasPermi="['mesModel:processModel:remove']">删除</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="warning" plain icon="Download" @click="handleExport"
                    v-hasPermi="['mesModel:processModel:export']">导出</el-button>
            </el-col>
            <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="processModelList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="编号" align="center" prop="id" />
            <el-table-column label="工艺名称" align="center" prop="processName" />
            <el-table-column label="产品" align="center" prop="materialName" />
            <el-table-column label="型号" prop="materialModel">
            </el-table-column>
            <el-table-column label="规格" prop="materialSpecification">
            </el-table-column>
            <el-table-column label="单位" prop="materialUnit">
            </el-table-column>
            <el-table-column label="单位耗电量" align="center" prop="powerConsume" />
            <el-table-column label="备注" align="center" prop="remark" />
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                        v-hasPermi="['mesModel:processModel:edit']">修改</el-button>
                    <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"
                        v-hasPermi="['mesModel:processModel:remove']">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize" @pagination="getList" />

        <!-- 添加或修改工艺建模对话框 -->
        <el-dialog :title="title" v-model="open" width="800px" append-to-body>
            <el-form ref="processModelRef" :model="form" :rules="rules" label-width="100px">
                <el-form-item label="产品" prop="materialName">
                    <el-input v-model="form.materialName" placeholder="请选择产品" disabled>
                        <template #append>
                            <el-button @click="handleSelectMaterial">选择</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="工艺名称" prop="processName">
                    <el-input v-model="form.processName" placeholder="请输入工艺名称" />
                </el-form-item>
                <el-form-item label="单位耗电量" prop="powerConsume">
                    <el-input v-model="form.powerConsume" placeholder="请输入单位耗电量" />
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
                </el-form-item>
                <el-form-item label="工艺描述">
                    <editor v-model="form.description" :min-height="192" />
                </el-form-item>
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

<script setup name="ProcessModel">
import { listProcessModel, getProcessModel, delProcessModel, addProcessModel, updateProcessModel } from "@/api/mesModel/processModel";
import materialSelect from "@/components/Material/MaterialSelect.vue";
const { proxy } = getCurrentInstance();

const processModelList = ref([]);
const open = ref(false);
const materialSelectOpen = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
    form: {},
    queryParams: {
        pageNum: 1,
        pageSize: 10,
        processName: null,
    },
    rules: {
        materialName: [
          { required: true, message: "物料不能为空", trigger: "blur" }
        ],
        processName: [
          { required: true, message: "工艺名称不能为空", trigger: "blur" }
        ],
        powerConsume: [
          { required: true, message: "耗电量不能为空", trigger: "blur" }
        ],
        remark:[
          { max: 100, message: "备注最多100个字符", trigger: "blur" }
        ]
    }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询工艺建模列表 */
function getList() {
    loading.value = true;
    listProcessModel(queryParams.value).then(response => {
        processModelList.value = response.rows;
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
        processName: null,
        description: null,
        powerConsume: null,
        remark: null
    };
    proxy.resetForm("processModelRef");
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

function handleSelectMaterial() {
    materialSelectOpen.value = true;
}

function handleMaterialSelected(material) {
    if (material && material.length > 0) {
        const data = material[0];
        form.value.materialId = data.id;
        form.value.materialName = data.name;
        materialSelectOpen.value = false;
    }
}

function handleMaterialCancel() {
    materialSelectOpen.value = false;
}

/** 新增按钮操作 */
function handleAdd() {
    reset();
    open.value = true;
    title.value = "添加工艺建模";
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value
    getProcessModel(_id).then(response => {
        form.value = response.data;
        open.value = true;
        title.value = "修改工艺建模";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["processModelRef"].validate(valid => {
        if (valid) {
            if (form.value.id != null) {
                updateProcessModel(form.value).then(response => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addProcessModel(form.value).then(response => {
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
    proxy.$modal.confirm('是否确认删除工艺建模编号为"' + _ids + '"的数据项？').then(function () {
        return delProcessModel(_ids);
    }).then(() => {
        getList();
        proxy.$modal.msgSuccess("删除成功");
    }).catch(() => { });
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download('mesModel/processModel/export', {
        ...queryParams.value
    }, `processModel_${new Date().getTime()}.xlsx`)
}

getList();
</script>
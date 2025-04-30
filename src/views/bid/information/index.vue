<template>
    <div class="app-container">
        <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
            <el-form-item label="标题" prop="title">
                <el-input v-model="queryParams.title" placeholder="请输入标题" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="发布时间" prop="publishDatetime">
                <el-date-picker clearable v-model="queryParams.publishDatetime" type="date" value-format="YYYY-MM-DD"
                    placeholder="请选择发布时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="发布者" prop="publisher">
                <el-input v-model="queryParams.publisher" placeholder="请输入发布者" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
                <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button type="primary" plain icon="Plus" @click="handleAdd"
                    v-hasPermi="['bid:information:add']">新增</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate"
                    v-hasPermi="['bid:information:edit']">修改</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete"
                    v-hasPermi="['bid:information:remove']">删除</el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button type="warning" plain icon="Download" @click="handleExport"
                    v-hasPermi="['bid:information:export']">导出</el-button>
            </el-col>
            <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="informationList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="No." type="index" width="50"></el-table-column>
            <el-table-column label="标题" align="center" prop="title" />
            <el-table-column label="发布时间" align="center" prop="publishDatetime" width="180">
                <template #default="scope">
                    <span>{{ parseTime(scope.row.publishDatetime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="发布者" align="center" prop="publisher" />
            <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
                <template #default="scope">
                    <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)"
                        v-hasPermi="['bid:information:edit']">修改</el-button>
                    <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"
                        v-hasPermi="['bid:information:remove']">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize" @pagination="getList" />

        <!-- 添加或修改平台动态对话框 -->
        <el-dialog :title="title" v-model="open" width="800px" append-to-body>
            <el-form ref="informationRef" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="form.title" placeholder="请输入标题" />
                </el-form-item>
                <el-form-item label="发布者" prop="publisher">
                    <el-input v-model="form.publisher" placeholder="请输入发布者" />
                </el-form-item>
                <el-form-item label="发布时间" prop="publishDatetime">
                    <el-date-picker clearable v-model="form.publishDatetime" type="date" value-format="YYYY-MM-DD"
                        placeholder="请选择发布时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="内容">
                    <editor v-model="form.content" :min-height="300" />
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

<script setup name="Information">
import { listInformation, getInformation, delInformation, addInformation, updateInformation } from "@/api/bid/information";

const { proxy } = getCurrentInstance();

const informationList = ref([]);
const open = ref(false);
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
        title: null,
        publishDatetime: null,
        publisher: null,
    },
    rules: {
        title: [
            { required: true, message: "标题不能为空", trigger: "blur" }
        ],
        content: [
            { required: true, message: "内容不能为空", trigger: "blur" }
        ],
    }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询平台动态列表 */
function getList() {
    loading.value = true;
    listInformation(queryParams.value).then(response => {
        informationList.value = response.rows;
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
        title: null,
        content: null,
        publishDatetime: null,
        publisher: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null
    };
    proxy.resetForm("informationRef");
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
    title.value = "添加平台动态";
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value
    getInformation(_id).then(response => {
        form.value = response.data;
        open.value = true;
        title.value = "修改平台动态";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["informationRef"].validate(valid => {
        if (valid) {
            if (form.value.id != null) {
                updateInformation(form.value).then(response => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addInformation(form.value).then(response => {
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
    proxy.$modal.confirm('是否确认删除平台动态编号为"' + _ids + '"的数据项？').then(function () {
        return delInformation(_ids);
    }).then(() => {
        getList();
        proxy.$modal.msgSuccess("删除成功");
    }).catch(() => { });
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download('bid/information/export', {
        ...queryParams.value
    }, `information_${new Date().getTime()}.xlsx`)
}

getList();
</script>
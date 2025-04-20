import request from '@/utils/request'

// 查询出库申请列表
export function listOutWarehouseApply(query) {
  return request({
    url: '/wmsApply/outWarehouseApply/list',
    method: 'get',
    params: query
  })
}

// 查询出库申请详细
export function getOutWarehouseApply(id) {
  return request({
    url: '/wmsApply/outWarehouseApply/' + id,
    method: 'get'
  })
}

// 新增出库申请
export function addOutWarehouseApply(data) {
  return request({
    url: '/wmsApply/outWarehouseApply',
    method: 'post',
    data: data
  })
}
// 执行拣货
export function outWarehouse(data) {
  return request({
    url: '/wmsApply/outWarehouseApply/outWarehouse',
    method: 'post',
    data: data
  })
}

// 出库盘点
export function checkOutInventory(data) {
  return request({
    url: '/wmsApply/outWarehouseApply/check/outInventory',
    method: 'post',
    data: data
  })
}

// 发货
export function delivery(data) {
  return request({
    url: '/wmsApply/outWarehouseApply/delivery',
    method: 'post',
    data: data
  })
}

// 修改出库申请
export function updateOutWarehouseApply(data) {
  return request({
    url: '/wmsApply/outWarehouseApply',
    method: 'put',
    data: data
  })
}

// 删除出库申请
export function delOutWarehouseApply(id) {
  return request({
    url: '/wmsApply/outWarehouseApply/' + id,
    method: 'delete'
  })
}

// 导出出库申请
export function exportOutWarehouseApply(query) {
  return request({
    url: '/wmsApply/outWarehouseApply/export',
    method: 'get',
    params: query
  })
}

// 提交入库申请
export function submitOutWarehouseApply(data) {
  return request({
    url: '/wmsApply/outWarehouseApply/submit',
    method: 'put',
    data: data
  })
}
// 查询待审核入库申请列表
export function listOutWarehouseApply4Audit(query) {
  return request({
    url: '/wmsApply/outWarehouseApply/audit/list',
    method: 'get',
    params: query
  })
}
// 审核入库申请
export function auditOutWarehouseApply(data) {
  return request({
    url: '/wmsApply/outWarehouseApply/audit',
    method: 'put',
    data: data
  })
}
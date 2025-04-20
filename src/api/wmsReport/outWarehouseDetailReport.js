import request from '@/utils/request'

// 查询物料出库明细列表
export function listOutWarehouseDetailReport(query) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport/list',
    method: 'get',
    params: query
  })
}

// 查询物料出库明细详细
export function getOutWarehouseDetailReport(materialId) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport/' + materialId,
    method: 'get'
  })
}

// 新增物料出库明细
export function addOutWarehouseDetailReport(data) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport',
    method: 'post',
    data: data
  })
}

// 修改物料出库明细
export function updateOutWarehouseDetailReport(data) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport',
    method: 'put',
    data: data
  })
}

// 删除物料出库明细
export function delOutWarehouseDetailReport(materialId) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport/' + materialId,
    method: 'delete'
  })
}

// 导出物料出库明细
export function exportOutWarehouseDetailReport(query) {
  return request({
    url: '/wmsReport/outWarehouseDetailReport/export',
    method: 'get',
    params: query
  })
}
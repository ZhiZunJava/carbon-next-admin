import request from '@/utils/request'

// 查询库存明细报表列表
export function listMaterialInventoryDetailReport(query) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport/list',
    method: 'get',
    params: query
  })
}

// 查询库存明细报表详细
export function getMaterialInventoryDetailReport(whId) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport/' + whId,
    method: 'get'
  })
}

// 新增库存明细报表
export function addMaterialInventoryDetailReport(data) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport',
    method: 'post',
    data: data
  })
}

// 修改库存明细报表
export function updateMaterialInventoryDetailReport(data) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport',
    method: 'put',
    data: data
  })
}

// 删除库存明细报表
export function delMaterialInventoryDetailReport(whId) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport/' + whId,
    method: 'delete'
  })
}

// 导出库存明细报表
export function exportMaterialInventoryDetailReport(query) {
  return request({
    url: '/wmsReport/materialInventoryDetailReport/export',
    method: 'get',
    params: query
  })
}
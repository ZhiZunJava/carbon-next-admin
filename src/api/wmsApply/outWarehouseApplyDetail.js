import request from '@/utils/request'

// 查询出库申请明细列表
export function listOutWarehouseApplyDetail(query) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询出库申请明细详细
export function getOutWarehouseApplyDetail(id) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail/' + id,
    method: 'get'
  })
}

// 新增出库申请明细
export function addOutWarehouseApplyDetail(data) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail',
    method: 'post',
    data: data
  })
}

// 修改出库申请明细
export function updateOutWarehouseApplyDetail(data) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail',
    method: 'put',
    data: data
  })
}

// 删除出库申请明细
export function delOutWarehouseApplyDetail(id) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail/' + id,
    method: 'delete'
  })
}

// 导出出库申请明细
export function exportOutWarehouseApplyDetail(query) {
  return request({
    url: '/wmsApply/outWarehouseApplyDetail/export',
    method: 'get',
    params: query
  })
}
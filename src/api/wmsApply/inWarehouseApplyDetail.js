import request from '@/utils/request'

// 查询入库申请明细列表
export function listInWarehouseApplyDetail(query) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询入库申请明细详细
export function getInWarehouseApplyDetail(id) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail/' + id,
    method: 'get'
  })
}

// 新增入库申请明细
export function addInWarehouseApplyDetail(data) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail',
    method: 'post',
    data: data
  })
}

// 修改入库申请明细
export function updateInWarehouseApplyDetail(data) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail',
    method: 'put',
    data: data
  })
}

// 删除入库申请明细
export function delInWarehouseApplyDetail(id) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail/' + id,
    method: 'delete'
  })
}

// 导出入库申请明细
export function exportInWarehouseApplyDetail(query) {
  return request({
    url: '/wmsApply/inWarehouseApplyDetail/export',
    method: 'get',
    params: query
  })
}
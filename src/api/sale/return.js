import request from '@/utils/request'

// 查询销售退货列表
export function listReturn(query) {
  return request({
    url: '/sale/return/list',
    method: 'get',
    params: query
  })
}

// 查询销售退货详细
export function getReturn(id) {
  return request({
    url: '/sale/return/' + id,
    method: 'get'
  })
}

// 新增销售退货
export function addReturn(data) {
  return request({
    url: '/sale/return',
    method: 'post',
    data: data
  })
}

// 修改销售退货
export function updateReturn(data) {
  return request({
    url: '/sale/return',
    method: 'put',
    data: data
  })
}

// 删除销售退货
export function delReturn(id) {
  return request({
    url: '/sale/return/' + id,
    method: 'delete'
  })
}

// 导出销售退货
export function exportReturn(query) {
  return request({
    url: '/sale/return/export',
    method: 'get',
    params: query
  })
}


// 根据销售发货单ID查询采购退货详细列表
export function listReturnDetail(deliveryId) {
  return request({
    url: '/sale/return/detailList/' + deliveryId,
    method: 'get'
  })
}
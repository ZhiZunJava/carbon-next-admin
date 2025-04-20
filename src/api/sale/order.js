import request from '@/utils/request'

// 查询销售订单列表
export function listOrder(query) {
  return request({
    url: '/sale/order/list',
    method: 'get',
    params: query
  })
}

// 查询销售订单详细
export function getOrder(id) {
  return request({
    url: '/sale/order/' + id,
    method: 'get'
  })
}

// 新增销售订单
export function addOrder(data) {
  return request({
    url: '/sale/order',
    method: 'post',
    data: data
  })
}

// 修改销售订单
export function updateOrder(data) {
  return request({
    url: '/sale/order',
    method: 'put',
    data: data
  })
}

// 删除销售订单
export function delOrder(id) {
  return request({
    url: '/sale/order/' + id,
    method: 'delete'
  })
}

// 导出销售订单
export function exportOrder(query) {
  return request({
    url: '/sale/order/export',
    method: 'get',
    params: query
  })
}

// 提交销售订单
export function submitOrder(data) {
  return request({
    url: '/sale/order/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核销售订单列表
export function listOrder4Audit(query) {
  return request({
    url: '/sale/order/audit/list',
    method: 'get',
    params: query
  })
}
// 审核销售订单
export function auditOrder(data) {
  return request({
    url: '/sale/order/audit',
    method: 'put',
    data: data
  })
}
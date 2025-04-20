import request from '@/utils/request'

// 查询销售发货单列表
export function listDelivery(query) {
  return request({
    url: '/sale/delivery/list',
    method: 'get',
    params: query
  })
}

// 查询销售发货单详细
export function getDelivery(id) {
  return request({
    url: '/sale/delivery/' + id,
    method: 'get'
  })
}

// 新增销售发货单
export function addDelivery(data) {
  return request({
    url: '/sale/delivery',
    method: 'post',
    data: data
  })
}

// 修改销售发货单
export function updateDelivery(data) {
  return request({
    url: '/sale/delivery',
    method: 'put',
    data: data
  })
}

// 删除销售发货单
export function delDelivery(id) {
  return request({
    url: '/sale/delivery/' + id,
    method: 'delete'
  })
}

// 导出销售发货单
export function exportDelivery(query) {
  return request({
    url: '/sale/delivery/export',
    method: 'get',
    params: query
  })
}
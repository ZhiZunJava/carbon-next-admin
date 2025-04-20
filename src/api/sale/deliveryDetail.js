import request from '@/utils/request'

// 查询发货单明细列表
export function listDeliveryDetail(query) {
  return request({
    url: '/sale/deliveryDetail/list',
    method: 'get',
    params: query
  })
}

// 查询发货单明细详细
export function getDeliveryDetail(id) {
  return request({
    url: '/sale/deliveryDetail/' + id,
    method: 'get'
  })
}

// 新增发货单明细
export function addDeliveryDetail(data) {
  return request({
    url: '/sale/deliveryDetail',
    method: 'post',
    data: data
  })
}

// 修改发货单明细
export function updateDeliveryDetail(data) {
  return request({
    url: '/sale/deliveryDetail',
    method: 'put',
    data: data
  })
}

// 删除发货单明细
export function delDeliveryDetail(id) {
  return request({
    url: '/sale/deliveryDetail/' + id,
    method: 'delete'
  })
}

// 导出发货单明细
export function exportDeliveryDetail(query) {
  return request({
    url: '/sale/deliveryDetail/export',
    method: 'get',
    params: query
  })
}
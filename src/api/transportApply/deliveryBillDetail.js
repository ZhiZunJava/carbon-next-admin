import request from '@/utils/request'

// 查询配送单明细列表
export function listDeliveryBillDetail(query) {
  return request({
    url: '/transportApply/deliveryBillDetail/list',
    method: 'get',
    params: query
  })
}

// 查询配送单明细详细
export function getDeliveryBillDetail(id) {
  return request({
    url: '/transportApply/deliveryBillDetail/' + id,
    method: 'get'
  })
}

// 新增配送单明细
export function addDeliveryBillDetail(data) {
  return request({
    url: '/transportApply/deliveryBillDetail',
    method: 'post',
    data: data
  })
}

// 修改配送单明细
export function updateDeliveryBillDetail(data) {
  return request({
    url: '/transportApply/deliveryBillDetail',
    method: 'put',
    data: data
  })
}

// 删除配送单明细
export function delDeliveryBillDetail(id) {
  return request({
    url: '/transportApply/deliveryBillDetail/' + id,
    method: 'delete'
  })
}

// 导出配送单明细
export function exportDeliveryBillDetail(query) {
  return request({
    url: '/transportApply/deliveryBillDetail/export',
    method: 'get',
    params: query
  })
}
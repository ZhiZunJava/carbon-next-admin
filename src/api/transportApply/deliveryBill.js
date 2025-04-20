import request from '@/utils/request'

// 查询配送管理列表
export function listDeliveryBill(query) {
  return request({
    url: '/transportApply/deliveryBill/list',
    method: 'get',
    params: query
  })
}

// 查询配送管理详细
export function getDeliveryBill(id) {
  return request({
    url: '/transportApply/deliveryBill/' + id,
    method: 'get'
  })
}

// 新增配送管理
export function addDeliveryBill(data) {
  return request({
    url: '/transportApply/deliveryBill',
    method: 'post',
    data: data
  })
}

// 修改配送单状态
export function updateDeliveryBillStatus(data) {
  return request({
    url: '/transportApply/deliveryBill/update/status',
    method: 'post',
    data: data
  })
}

// 修改配送管理
export function updateDeliveryBill(data) {
  return request({
    url: '/transportApply/deliveryBill',
    method: 'put',
    data: data
  })
}

// 删除配送管理
export function delDeliveryBill(id) {
  return request({
    url: '/transportApply/deliveryBill/' + id,
    method: 'delete'
  })
}

// 导出配送管理
export function exportDeliveryBill(query) {
  return request({
    url: '/transportApply/deliveryBill/export',
    method: 'get',
    params: query
  })
}
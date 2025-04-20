import request from '@/utils/request'

// 查询采购退货列表
export function listReturn(query) {
  return request({
    url: '/purchase/return/list',
    method: 'get',
    params: query
  })
}

// 查询采购退货详细
export function getReturn(id) {
  return request({
    url: '/purchase/return/' + id,
    method: 'get'
  })
}

// 新增采购退货
export function addReturn(data) {
  return request({
    url: '/purchase/return',
    method: 'post',
    data: data
  })
}

// 修改采购退货
export function updateReturn(data) {
  return request({
    url: '/purchase/return',
    method: 'put',
    data: data
  })
}

// 删除采购退货
export function delReturn(id) {
  return request({
    url: '/purchase/return/' + id,
    method: 'delete'
  })
}

// 导出采购退货
export function exportReturn(query) {
  return request({
    url: '/purchase/return/export',
    method: 'get',
    params: query
  })
}
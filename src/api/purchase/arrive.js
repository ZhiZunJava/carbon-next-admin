import request from '@/utils/request'

// 查询采购到货列表
export function listArrive(query) {
  return request({
    url: '/purchase/arrive/list',
    method: 'get',
    params: query
  })
}

// 查询采购到货详细
export function getArrive(id) {
  return request({
    url: '/purchase/arrive/' + id,
    method: 'get'
  })
}

// 新增采购到货
export function addArrive(data) {
  return request({
    url: '/purchase/arrive',
    method: 'post',
    data: data
  })
}

// 修改采购到货
export function updateArrive(data) {
  return request({
    url: '/purchase/arrive',
    method: 'put',
    data: data
  })
}

// 删除采购到货
export function delArrive(id) {
  return request({
    url: '/purchase/arrive/' + id,
    method: 'delete'
  })
}

// 导出采购到货
export function exportArrive(query) {
  return request({
    url: '/purchase/arrive/export',
    method: 'get',
    params: query
  })
}
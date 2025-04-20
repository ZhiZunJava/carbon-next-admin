import request from '@/utils/request'

// 查询到货明细列表
export function listArriveDetail(query) {
  return request({
    url: '/purchase/arriveDetail/list',
    method: 'get',
    params: query
  })
}

// 查询到货明细详细
export function getArriveDetail(id) {
  return request({
    url: '/purchase/arriveDetail/' + id,
    method: 'get'
  })
}

// 新增到货明细
export function addArriveDetail(data) {
  return request({
    url: '/purchase/arriveDetail',
    method: 'post',
    data: data
  })
}

// 修改到货明细
export function updateArriveDetail(data) {
  return request({
    url: '/purchase/arriveDetail',
    method: 'put',
    data: data
  })
}

// 删除到货明细
export function delArriveDetail(id) {
  return request({
    url: '/purchase/arriveDetail/' + id,
    method: 'delete'
  })
}

// 导出到货明细
export function exportArriveDetail(query) {
  return request({
    url: '/purchase/arriveDetail/export',
    method: 'get',
    params: query
  })
}
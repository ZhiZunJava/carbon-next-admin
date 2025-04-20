import request from '@/utils/request'

// 查询生产完工单列表
export function listProductFinish(query) {
  return request({
    url: '/mesProduct/productFinish/list',
    method: 'get',
    params: query
  })
}

// 查询生产完工单详细
export function getProductFinish(id) {
  return request({
    url: '/mesProduct/productFinish/' + id,
    method: 'get'
  })
}

// 新增生产完工单
export function addProductFinish(data) {
  return request({
    url: '/mesProduct/productFinish',
    method: 'post',
    data: data
  })
}

// 修改生产完工单
export function updateProductFinish(data) {
  return request({
    url: '/mesProduct/productFinish',
    method: 'put',
    data: data
  })
}

// 删除生产完工单
export function delProductFinish(id) {
  return request({
    url: '/mesProduct/productFinish/' + id,
    method: 'delete'
  })
}

// 导出生产完工单
export function exportProductFinish(query) {
  return request({
    url: '/mesProduct/productFinish/export',
    method: 'get',
    params: query
  })
}

// 修改生产完工单状态
export function updateProductFinishStatus(data) {
  return request({
    url: '/mesProduct/productFinish/update/status',
    method: 'put',
    data: data
  })
}
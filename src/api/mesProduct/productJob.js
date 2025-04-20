import request from '@/utils/request'

// 查询生产作业列表
export function listProductJob(query) {
  return request({
    url: '/mesProduct/productJob/list',
    method: 'get',
    params: query
  })
}

// 查询生产作业详细
export function getProductJob(id) {
  return request({
    url: '/mesProduct/productJob/' + id,
    method: 'get'
  })
}

// 新增生产作业
export function addProductJob(data) {
  return request({
    url: '/mesProduct/productJob',
    method: 'post',
    data: data
  })
}

// 修改生产作业
export function updateProductJob(data) {
  return request({
    url: '/mesProduct/productJob',
    method: 'put',
    data: data
  })
}

// 删除生产作业
export function delProductJob(id) {
  return request({
    url: '/mesProduct/productJob/' + id,
    method: 'delete'
  })
}

// 导出生产作业
export function exportProductJob(query) {
  return request({
    url: '/mesProduct/productJob/export',
    method: 'get',
    params: query
  })
}

// 修改生产作业状态
export function updateProductJobStatus(data) {
  return request({
    url: '/mesProduct/productJob/change/status',
    method: 'put',
    data: data
  })
}
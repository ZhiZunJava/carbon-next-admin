import request from '@/utils/request'

// 查询计划排产列表
export function listProductSchedule(query) {
  return request({
    url: '/mesPlan/productSchedule/list',
    method: 'get',
    params: query
  })
}

// 查询计划排产详细
export function getProductSchedule(id) {
  return request({
    url: '/mesPlan/productSchedule/' + id,
    method: 'get'
  })
}

// 新增计划排产
export function addProductSchedule(data) {
  return request({
    url: '/mesPlan/productSchedule',
    method: 'post',
    data: data
  })
}

// 修改计划排产
export function updateProductSchedule(data) {
  return request({
    url: '/mesPlan/productSchedule',
    method: 'put',
    data: data
  })
}

// 发布计划排产
export function publishProductSchedule(data) {
  return request({
    url: '/mesPlan/productSchedule/publish',
    method: 'put',
    data: data
  })
}

// 删除计划排产
export function delProductSchedule(id) {
  return request({
    url: '/mesPlan/productSchedule/' + id,
    method: 'delete'
  })
}

// 导出计划排产
export function exportProductSchedule(query) {
  return request({
    url: '/mesPlan/productSchedule/export',
    method: 'get',
    params: query
  })
}
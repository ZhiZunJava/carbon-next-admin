import request from '@/utils/request'

// 查询排产物料信息列表
export function listProductScheduleMaterial(query) {
  return request({
    url: '/mesPlan/productScheduleMaterial/list',
    method: 'get',
    params: query
  })
}

// 查询排产物料信息详细
export function getProductScheduleMaterial(id) {
  return request({
    url: '/mesPlan/productScheduleMaterial/' + id,
    method: 'get'
  })
}

// 新增排产物料信息
export function addProductScheduleMaterial(data) {
  return request({
    url: '/mesPlan/productScheduleMaterial',
    method: 'post',
    data: data
  })
}

// 修改排产物料信息
export function updateProductScheduleMaterial(data) {
  return request({
    url: '/mesPlan/productScheduleMaterial',
    method: 'put',
    data: data
  })
}

// 删除排产物料信息
export function delProductScheduleMaterial(id) {
  return request({
    url: '/mesPlan/productScheduleMaterial/' + id,
    method: 'delete'
  })
}

// 导出排产物料信息
export function exportProductScheduleMaterial(query) {
  return request({
    url: '/mesPlan/productScheduleMaterial/export',
    method: 'get',
    params: query
  })
}
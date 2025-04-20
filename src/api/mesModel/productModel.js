import request from '@/utils/request'

// 查询产品建模列表
export function listProductModel(query) {
  return request({
    url: '/mesModel/productModel/list',
    method: 'get',
    params: query
  })
}

// 查询产品建模详细
export function getProductModel(id) {
  return request({
    url: '/mesModel/productModel/' + id,
    method: 'get'
  })
}

// 新增产品建模
export function addProductModel(data) {
  return request({
    url: '/mesModel/productModel',
    method: 'post',
    data: data
  })
}

// 修改产品建模
export function updateProductModel(data) {
  return request({
    url: '/mesModel/productModel',
    method: 'put',
    data: data
  })
}

// 删除产品建模
export function delProductModel(id) {
  return request({
    url: '/mesModel/productModel/' + id,
    method: 'delete'
  })
}

// 导出产品建模
export function exportProductModel(query) {
  return request({
    url: '/mesModel/productModel/export',
    method: 'get',
    params: query
  })
}
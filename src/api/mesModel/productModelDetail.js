import request from '@/utils/request'

// 查询产品模型明细列表
export function listProductModelDetail(query) {
  return request({
    url: '/mesModel/productModelDetail/list',
    method: 'get',
    params: query
  })
}

// 查询产品模型明细详细
export function getProductModelDetail(id) {
  return request({
    url: '/mesModel/productModelDetail/' + id,
    method: 'get'
  })
}

// 新增产品模型明细
export function addProductModelDetail(data) {
  return request({
    url: '/mesModel/productModelDetail',
    method: 'post',
    data: data
  })
}

// 修改产品模型明细
export function updateProductModelDetail(data) {
  return request({
    url: '/mesModel/productModelDetail',
    method: 'put',
    data: data
  })
}

// 删除产品模型明细
export function delProductModelDetail(id) {
  return request({
    url: '/mesModel/productModelDetail/' + id,
    method: 'delete'
  })
}

// 导出产品模型明细
export function exportProductModelDetail(query) {
  return request({
    url: '/mesModel/productModelDetail/export',
    method: 'get',
    params: query
  })
}
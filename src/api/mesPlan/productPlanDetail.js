import request from '@/utils/request'

// 查询生产计划明细列表
export function listProductPlanDetail(query) {
  return request({
    url: '/mesPlan/productPlanDetail/list',
    method: 'get',
    params: query
  })
}

// 查询生产计划明细详细
export function getProductPlanDetail(id) {
  return request({
    url: '/mesPlan/productPlanDetail/' + id,
    method: 'get'
  })
}

// 新增生产计划明细
export function addProductPlanDetail(data) {
  return request({
    url: '/mesPlan/productPlanDetail',
    method: 'post',
    data: data
  })
}

// 修改生产计划明细
export function updateProductPlanDetail(data) {
  return request({
    url: '/mesPlan/productPlanDetail',
    method: 'put',
    data: data
  })
}

// 删除生产计划明细
export function delProductPlanDetail(id) {
  return request({
    url: '/mesPlan/productPlanDetail/' + id,
    method: 'delete'
  })
}

// 导出生产计划明细
export function exportProductPlanDetail(query) {
  return request({
    url: '/mesPlan/productPlanDetail/export',
    method: 'get',
    params: query
  })
}
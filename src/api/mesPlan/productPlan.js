import request from '@/utils/request'

// 查询生产计划列表
export function listProductPlan(query) {
  return request({
    url: '/mesPlan/productPlan/list',
    method: 'get',
    params: query
  })
}

// 查询待审核和已审核生产计划列表
export function listProductPlan4Audit(query) {
  return request({
    url: '/mesPlan/productPlan/audit/list',
    method: 'get',
    params: query
  })
}

// 查询生产计划详细
export function getProductPlan(id) {
  return request({
    url: '/mesPlan/productPlan/' + id,
    method: 'get'
  })
}

// 新增生产计划
export function addProductPlan(data) {
  return request({
    url: '/mesPlan/productPlan',
    method: 'post',
    data: data
  })
}

// 修改生产计划
export function updateProductPlan(data) {
  return request({
    url: '/mesPlan/productPlan',
    method: 'put',
    data: data
  })
}

// 提交生产计划
export function submitProductPlan(data) {
  return request({
    url: '/mesPlan/productPlan/submit',
    method: 'put',
    data: data
  })
}

// 审核生产计划
export function auditProductPlan(data) {
  return request({
    url: '/mesPlan/productPlan/audit',
    method: 'put',
    data: data
  })
}

// 删除生产计划
export function delProductPlan(id) {
  return request({
    url: '/mesPlan/productPlan/' + id,
    method: 'delete'
  })
}

// 导出生产计划
export function exportProductPlan(query) {
  return request({
    url: '/mesPlan/productPlan/export',
    method: 'get',
    params: query
  })
}

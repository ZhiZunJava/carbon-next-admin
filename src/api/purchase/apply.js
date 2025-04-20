import request from '@/utils/request'

// 查询采购申请列表
export function listApply(query) {
  return request({
    url: '/purchase/apply/list',
    method: 'get',
    params: query
  })
}

// 查询采购申请详细
export function getApply(id) {
  return request({
    url: '/purchase/apply/' + id,
    method: 'get'
  })
}

// 新增采购申请
export function addApply(data) {
  return request({
    url: '/purchase/apply',
    method: 'post',
    data: data
  })
}

// 修改采购申请
export function updateApply(data) {
  return request({
    url: '/purchase/apply',
    method: 'put',
    data: data
  })
}

// 删除采购申请
export function delApply(id) {
  return request({
    url: '/purchase/apply/' + id,
    method: 'delete'
  })
}

// 导出采购申请
export function exportApply(query) {
  return request({
    url: '/purchase/apply/export',
    method: 'get',
    params: query
  })
}

// 提交采购申请
export function submitApply(data) {
  return request({
    url: '/purchase/apply/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核采购申请列表
export function listApply4Audit(query) {
  return request({
    url: '/purchase/apply/audit/list',
    method: 'get',
    params: query
  })
}
// 审核采购申请
export function auditApply(data) {
  return request({
    url: '/purchase/apply/audit',
    method: 'put',
    data: data
  })
}

// 根据计划ID查询采购申请详细列表
export function listApplyDetailByPlanId(planId) {
  return request({
    url: '/purchase/apply/applyDetailList/' + planId,
    method: 'get'
  })
}
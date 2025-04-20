import request from '@/utils/request'

// 查询采购计划列表
export function listPlan(query) {
  return request({
    url: '/purchase/plan/list',
    method: 'get',
    params: query
  })
}

// 查询采购计划详细
export function getPlan(id) {
  return request({
    url: '/purchase/plan/' + id,
    method: 'get'
  })
}

// 新增采购计划
export function addPlan(data) {
  return request({
    url: '/purchase/plan',
    method: 'post',
    data: data
  })
}

// 修改采购计划
export function updatePlan(data) {
  return request({
    url: '/purchase/plan',
    method: 'put',
    data: data
  })
}

// 删除采购计划
export function delPlan(id) {
  return request({
    url: '/purchase/plan/' + id,
    method: 'delete'
  })
}

// 导出采购计划
export function exportPlan(query) {
  return request({
    url: '/purchase/plan/export',
    method: 'get',
    params: query
  })
}


// 提交采购计划
export function submitPlan(data) {
  return request({
    url: '/purchase/plan/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核采购计划列表
export function listPlan4Audit(query) {
  return request({
    url: '/purchase/plan/audit/list',
    method: 'get',
    params: query
  })
}
// 审核采购计划
export function auditPlan(data) {
  return request({
    url: '/purchase/plan/audit',
    method: 'put',
    data: data
  })
}
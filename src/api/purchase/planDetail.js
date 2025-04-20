import request from '@/utils/request'

// 查询采购计划详细列表
export function listPlanDetail(query) {
  return request({
    url: '/purchase/planDetail/list',
    method: 'get',
    params: query
  })
}

// 查询采购计划详细详细
export function getPlanDetail(id) {
  return request({
    url: '/purchase/planDetail/' + id,
    method: 'get'
  })
}

// 新增采购计划详细
export function addPlanDetail(data) {
  return request({
    url: '/purchase/planDetail',
    method: 'post',
    data: data
  })
}

// 修改采购计划详细
export function updatePlanDetail(data) {
  return request({
    url: '/purchase/planDetail',
    method: 'put',
    data: data
  })
}

// 删除采购计划详细
export function delPlanDetail(id) {
  return request({
    url: '/purchase/planDetail/' + id,
    method: 'delete'
  })
}

// 导出采购计划详细
export function exportPlanDetail(query) {
  return request({
    url: '/purchase/planDetail/export',
    method: 'get',
    params: query
  })
}
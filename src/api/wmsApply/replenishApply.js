import request from '@/utils/request'

// 查询补货申请列表
export function listReplenishApply(query) {
  return request({
    url: '/wmsApply/replenishApply/list',
    method: 'get',
    params: query
  })
}

// 查询补货申请详细
export function getReplenishApply(id) {
  return request({
    url: '/wmsApply/replenishApply/' + id,
    method: 'get'
  })
}

// 新增补货申请
export function addReplenishApply(data) {
  return request({
    url: '/wmsApply/replenishApply',
    method: 'post',
    data: data
  })
}

// 修改补货申请
export function updateReplenishApply(data) {
  return request({
    url: '/wmsApply/replenishApply',
    method: 'put',
    data: data
  })
}

// 删除补货申请
export function delReplenishApply(id) {
  return request({
    url: '/wmsApply/replenishApply/' + id,
    method: 'delete'
  })
}

// 导出补货申请
export function exportReplenishApply(query) {
  return request({
    url: '/wmsApply/replenishApply/export',
    method: 'get',
    params: query
  })
}

// 提交补货申请
export function submitReplenishApply(data) {
  return request({
    url: '/wmsApply/replenishApply/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核补货申请列表
export function listReplenishApply4Audit(query) {
  return request({
    url: '/wmsApply/replenishApply/audit/list',
    method: 'get',
    params: query
  })
}

// 审核补货申请
export function auditReplenishApply(data) {
  return request({
    url: '/wmsApply/replenishApply/audit',
    method: 'put',
    data: data
  })
}

// 生成采购申请
export function genPurchaseApply(data) {
  return request({
    url: '/wmsApply/replenishApply/genPurchaseApply',
    method: 'post',
    data: data
  })
}


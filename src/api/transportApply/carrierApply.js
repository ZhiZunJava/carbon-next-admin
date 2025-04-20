import request from '@/utils/request'

// 查询承运申请列表
export function listCarrierApply(query) {
  return request({
    url: '/transportApply/carrierApply/list',
    method: 'get',
    params: query
  })
}

// 查询承运申请详细
export function getCarrierApply(id) {
  return request({
    url: '/transportApply/carrierApply/' + id,
    method: 'get'
  })
}

// 新增承运申请
export function addCarrierApply(data) {
  return request({
    url: '/transportApply/carrierApply',
    method: 'post',
    data: data
  })
}

// 修改承运申请
export function updateCarrierApply(data) {
  return request({
    url: '/transportApply/carrierApply',
    method: 'put',
    data: data
  })
}

// 删除承运申请
export function delCarrierApply(id) {
  return request({
    url: '/transportApply/carrierApply/' + id,
    method: 'delete'
  })
}

// 导出承运申请
export function exportCarrierApply(query) {
  return request({
    url: '/transportApply/carrierApply/export',
    method: 'get',
    params: query
  })
}

// 提交承运申请
export function submitCarrierApply(data) {
  return request({
    url: '/transportApply/carrierApply/submit',
    method: 'put',
    data: data
  })
}
// 查询待审核承运申请列表
export function listCarrierApply4Audit(query) {
  return request({
    url: '/transportApply/carrierApply/audit/list',
    method: 'get',
    params: query
  })
}
// 审核承运申请
export function auditCarrierApply(data) {
  return request({
    url: '/transportApply/carrierApply/audit',
    method: 'put',
    data: data
  })
}
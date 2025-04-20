import request from '@/utils/request'

// 查询领料申请列表
export function listRequisitionApply(query) {
  return request({
    url: '/mesProduct/requisitionApply/list',
    method: 'get',
    params: query
  })
}

// 查询待审核和已审核领料申请列表
export function listRequisitionApply4Audit(query) {
  return request({
    url: '/mesProduct/requisitionApply/audit/list',
    method: 'get',
    params: query
  })
}

// 查询领料申请详细
export function getRequisitionApply(id) {
  return request({
    url: '/mesProduct/requisitionApply/' + id,
    method: 'get'
  })
}

// 新增领料申请
export function addRequisitionApply(data) {
  return request({
    url: '/mesProduct/requisitionApply',
    method: 'post',
    data: data
  })
}

// 修改领料申请
export function updateRequisitionApply(data) {
  return request({
    url: '/mesProduct/requisitionApply',
    method: 'put',
    data: data
  })
}

// 删除领料申请
export function delRequisitionApply(id) {
  return request({
    url: '/mesProduct/requisitionApply/' + id,
    method: 'delete'
  })
}

// 导出领料申请
export function exportRequisitionApply(query) {
  return request({
    url: '/mesProduct/requisitionApply/export',
    method: 'get',
    params: query
  })
}
// 提交领料申请
export function submitRequisitionApply(data) {
  return request({
    url: '/mesProduct/requisitionApply/submit',
    method: 'put',
    data: data
  })
}
// 审核领料申请
export function auditRequisitionApply(data) {
  return request({
    url: '/mesProduct/requisitionApply/audit',
    method: 'put',
    data: data
  })
}

// 设置检验状态
export function setCheckRequisition(data) {
  return request({
    url: '/mesProduct/requisitionApply/set/check',
    method: 'put',
    data: data
  })
}
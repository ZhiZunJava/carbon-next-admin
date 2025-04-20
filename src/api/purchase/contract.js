import request from '@/utils/request'

// 查询采购合同列表
export function listContract(query) {
  return request({
    url: '/purchase/contract/list',
    method: 'get',
    params: query
  })
}

// 查询采购合同详细
export function getContract(id) {
  return request({
    url: '/purchase/contract/' + id,
    method: 'get'
  })
}

// 新增采购合同
export function addContract(data) {
  return request({
    url: '/purchase/contract',
    method: 'post',
    data: data
  })
}

// 修改采购合同
export function updateContract(data) {
  return request({
    url: '/purchase/contract',
    method: 'put',
    data: data
  })
}

// 删除采购合同
export function delContract(id) {
  return request({
    url: '/purchase/contract/' + id,
    method: 'delete'
  })
}

// 导出采购合同
export function exportContract(query) {
  return request({
    url: '/purchase/contract/export',
    method: 'get',
    params: query
  })
}


// 提交采购合同
export function submitContract(data) {
  return request({
    url: '/purchase/contract/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核采购合同列表
export function listContract4Audit(query) {
  return request({
    url: '/purchase/contract/audit/list',
    method: 'get',
    params: query
  })
}
// 审核采购合同
export function auditContract(data) {
  return request({
    url: '/purchase/contract/audit',
    method: 'put',
    data: data
  })
}
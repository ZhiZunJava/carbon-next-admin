import request from '@/utils/request'

// 查询销售合同列表
export function listContract(query) {
  return request({
    url: '/sale/contract/list',
    method: 'get',
    params: query
  })
}

// 查询销售合同详细
export function getContract(id) {
  return request({
    url: '/sale/contract/' + id,
    method: 'get'
  })
}

// 新增销售合同
export function addContract(data) {
  return request({
    url: '/sale/contract',
    method: 'post',
    data: data
  })
}

// 修改销售合同
export function updateContract(data) {
  return request({
    url: '/sale/contract',
    method: 'put',
    data: data
  })
}

// 删除销售合同
export function delContract(id) {
  return request({
    url: '/sale/contract/' + id,
    method: 'delete'
  })
}

// 导出销售合同
export function exportContract(query) {
  return request({
    url: '/sale/contract/export',
    method: 'get',
    params: query
  })
}

// 提交销售合同
export function submitContract(data) {
  return request({
    url: '/sale/contract/submit',
    method: 'put',
    data: data
  })
}

// 查询待审核销售合同列表
export function listContract4Audit(query) {
  return request({
    url: '/sale/contract/audit/list',
    method: 'get',
    params: query
  })
}
// 审核销售合同
export function auditContract(data) {
  return request({
    url: '/sale/contract/audit',
    method: 'put',
    data: data
  })
}


// 生成发货单
export function genDelivery(data) {
  return request({
    url: '/sale/contract/genDelivery',
    method: 'post',
    data: data
  })
}

// 根据订单封装采购合同信息
export function genContractInfo(orderId) {
  return request({
    url: '/sale/contract/genContractInfo/' + orderId,
    method: 'get'
  })
}

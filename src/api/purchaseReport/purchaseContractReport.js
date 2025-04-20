import request from '@/utils/request'

// 查询采购合同报表列表
export function listPurchaseContractReport(query) {
  return request({
    url: '/purchaseReport/purchaseContractReport/list',
    method: 'get',
    params: query
  })
}

// 查询采购合同报表详细
export function getPurchaseContractReport(contractId) {
  return request({
    url: '/purchaseReport/purchaseContractReport/' + contractId,
    method: 'get'
  })
}


// 按月份统计采购付款
export function monthReport(query) {
  return request({
    url: '/purchaseReport/purchaseContractReport/byMonth',
    method: 'get',
    params: query
  })
}

// 按季度统计采购付款
export function quarterReport(query) {
  return request({
    url: '/purchaseReport/purchaseContractReport/byQuarter',
    method: 'get',
    params: query
  })
}

// 按月份统计供应商对账
export function monthSupplierReport(query) {
  return request({
    url: '/purchaseReport/purchaseContractReport/supplier/byMonth',
    method: 'get',
    params: query
  })
}

// 按季度统计供应商对账
export function quarterSupplierReport(query) {
  return request({
    url: '/purchaseReport/purchaseContractReport/supplier/byQuarter',
    method: 'get',
    params: query
  })
}
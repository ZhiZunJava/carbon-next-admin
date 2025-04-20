import request from '@/utils/request'

// 查询销售合同明细列表
export function listContractDetail(query) {
  return request({
    url: '/report/scmSale/contractDetail/list',
    method: 'get',
    params: query
  })
}


// 导出销售合同明细
export function exportContractDetail(query) {
  return request({
    url: '/report/scmSale/contractDetail/export',
    method: 'get',
    params: query
  })
}

// 查询销售台账列表
export function listSaleBook(query) {
  return request({
    url: '/report/scmSale/saleBook/list',
    method: 'get',
    params: query
  })
}


// 导出销售明细
export function exportSaleBook(query) {
  return request({
    url: '/report/scmSale/saleBook/export',
    method: 'get',
    params: query
  })
}
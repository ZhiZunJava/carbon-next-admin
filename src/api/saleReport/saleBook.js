import request from '@/utils/request'

// 查询销售台账列表
export function listSaleBook(query) {
  return request({
    url: '/report/scmSale/saleBook/list',
    method: 'get',
    params: query
  })
}


// 导出销售台账
export function exportSaleBook(query) {
  return request({
    url: '/report/scmSale/saleBook/export',
    method: 'get',
    params: query
  })
}
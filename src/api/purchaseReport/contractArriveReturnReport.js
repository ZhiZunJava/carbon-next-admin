import request from '@/utils/request'


// 按月份统计采购-入库-退货报表
export function monthReport(query) {
  return request({
    url: '/report/scmPurchase/contractInwarehouseReturnReport/byMonth',
    method: 'get',
    params: query
  })
}

// 按季度统计采购-入库-退货报表
export function quarterReport(query) {
  return request({
    url: '/report/scmPurchase/contractInwarehouseReturnReport/byQuarter',
    method: 'get',
    params: query
  })
}
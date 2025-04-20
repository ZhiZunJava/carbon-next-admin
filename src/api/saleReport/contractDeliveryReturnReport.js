import request from '@/utils/request'

// 按月份统计销售-发货-退货报表
export function monthReport(query) {
  return request({
    url: '/report/scmSale/contractDeliveryReturnReport/byMonth',
    method: 'get',
    params: query
  })
}

// 按季度统计销售-发货-退货报表
export function quarterReport(query) {
  return request({
    url: '/report/scmSale/contractDeliveryReturnReport/byQuarter',
    method: 'get',
    params: query
  })
}
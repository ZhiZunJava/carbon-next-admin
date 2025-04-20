import request from '@/utils/request'

// 查询销售合同月报表列表
export function listSaleContractReportByMonth(query) {
  return request({
    url: '/saleReport/saleContractReport/byMonth',
    method: 'get',
    params: query
  })
}



// 导出销售合同报表
export function exportSaleContractReportByMonth(query) {
  return request({
    url: '/saleReport/saleContractReport/export/byMonth',
    method: 'get',
    params: query
  })
}

// 查询销售合同季度报表列表
export function listSaleContractReportByQuarter(query) {
  return request({
    url: '/saleReport/saleContractReport/byQuarter',
    method: 'get',
    params: query
  })
}



// 导出销售合同报表
export function exportSaleContractReportByQuarter(query) {
  return request({
    url: '/saleReport/saleContractReport/export/byQuarter',
    method: 'get',
    params: query
  })
}



// 查询订单收款月份统计
export function orderStatByMonth(query) {
  return request({
    url: '/saleReport/saleContractReport/orderStat/byMonth',
    method: 'get',
    params: query
  })
}



// 查询订单收款季度统计
export function orderStatByQuarter(query) {
  return request({
    url: '/saleReport/saleContractReport/orderStat/byQuarter',
    method: 'get',
    params: query
  })
}

export function financeReportByMonth(query) {
  return request({
    url: '/saleReport/saleContractReport/financeReport/byMonth',
    method: 'get',
    params: query
  })
}


export function financeReportByQuarter(query) {
  return request({
    url: '/saleReport/saleContractReport/financeReport/byQuarter',
    method: 'get',
    params: query
  })
}



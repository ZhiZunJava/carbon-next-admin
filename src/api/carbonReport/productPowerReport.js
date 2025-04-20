import request from '@/utils/request'

// 查询产品能耗报表
export function productPowerReportOverall(query) {
  return request({
    url: '/carbonReport/productPowerReport/list',
    method: 'get',
    params: query
  })
}

// 查询生产能耗月度报表
export function productPowerReportByMonth(query) {
  return request({
    url: '/carbonReport/productPowerReport/month',
    method: 'get',
    params: query
  })
}

// 查询生产能耗年度报表
export function productPowerReportByYear(query) {
  return request({
    url: '/carbonReport/productPowerReport/year',
    method: 'get',
    params: query
  })
}

// 查询生产能耗日报表
export function productPowerReportByDay(query) {
  return request({
    url: '/carbonReport/productPowerReport/day',
    method: 'get',
    params: query
  })
}

// 查询VIEW详细
export function getProductPowerReport(planId) {
  return request({
    url: '/carbonReport/productPowerReport/' + planId,
    method: 'get'
  })
}

// 导出VIEW
export function exportProductPowerReport(query) {
  return request({
    url: '/carbonReport/productPowerReport/export',
    method: 'get',
    params: query
  })
}
import request from '@/utils/request'

// 查询销售计划达成率报表列表
export function listSalePlanDetailReport(query) {
  return request({
    url: '/saleReport/salePlanDetailReport/list',
    method: 'get',
    params: query
  })
}

// 查询销售计划达成率报表详细
export function getSalePlanDetailReport(planNo) {
  return request({
    url: '/saleReport/salePlanDetailReport/' + planNo,
    method: 'get'
  })
}

// 新增销售计划达成率报表
export function addSalePlanDetailReport(data) {
  return request({
    url: '/saleReport/salePlanDetailReport',
    method: 'post',
    data: data
  })
}

// 修改销售计划达成率报表
export function updateSalePlanDetailReport(data) {
  return request({
    url: '/saleReport/salePlanDetailReport',
    method: 'put',
    data: data
  })
}

// 删除销售计划达成率报表
export function delSalePlanDetailReport(planNo) {
  return request({
    url: '/saleReport/salePlanDetailReport/' + planNo,
    method: 'delete'
  })
}

// 导出销售计划达成率报表
export function exportSalePlanDetailReport(query) {
  return request({
    url: '/saleReport/salePlanDetailReport/export',
    method: 'get',
    params: query
  })
}
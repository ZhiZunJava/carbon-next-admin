import request from '@/utils/request'

// 查询指标配置列表
export function listPlanDetail(query) {
  return request({
    url: '/sale/planDetail/list',
    method: 'get',
    params: query
  })
}

// 查询指标配置详细
export function getPlanDetail(id) {
  return request({
    url: '/sale/planDetail/' + id,
    method: 'get'
  })
}

// 新增指标配置
export function addPlanDetail(data) {
  return request({
    url: '/sale/planDetail',
    method: 'post',
    data: data
  })
}

// 修改指标配置
export function updatePlanDetail(data) {
  return request({
    url: '/sale/planDetail',
    method: 'put',
    data: data
  })
}

// 删除指标配置
export function delPlanDetail(id) {
  return request({
    url: '/sale/planDetail/' + id,
    method: 'delete'
  })
}

// 导出指标配置
export function exportPlanDetail(query) {
  return request({
    url: '/sale/planDetail/export',
    method: 'get',
    params: query
  })
}
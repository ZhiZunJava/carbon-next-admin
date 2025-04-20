import request from '@/utils/request'

// 查询补货申请明细列表
export function listReplenishApplyDetail(query) {
  return request({
    url: '/wmsApply/replenishApplyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询补货申请明细详细
export function getReplenishApplyDetail(id) {
  return request({
    url: '/wmsApply/replenishApplyDetail/' + id,
    method: 'get'
  })
}

// 新增补货申请明细
export function addReplenishApplyDetail(data) {
  return request({
    url: '/wmsApply/replenishApplyDetail',
    method: 'post',
    data: data
  })
}

// 修改补货申请明细
export function updateReplenishApplyDetail(data) {
  return request({
    url: '/wmsApply/replenishApplyDetail',
    method: 'put',
    data: data
  })
}

// 删除补货申请明细
export function delReplenishApplyDetail(id) {
  return request({
    url: '/wmsApply/replenishApplyDetail/' + id,
    method: 'delete'
  })
}

// 导出补货申请明细
export function exportReplenishApplyDetail(query) {
  return request({
    url: '/wmsApply/replenishApplyDetail/export',
    method: 'get',
    params: query
  })
}
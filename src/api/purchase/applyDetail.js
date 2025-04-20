import request from '@/utils/request'

// 查询采购申请明细列表
export function listApplyDetail(query) {
  return request({
    url: '/purchase/applyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询采购申请明细详细
export function getApplyDetail(id) {
  return request({
    url: '/purchase/applyDetail/' + id,
    method: 'get'
  })
}

// 新增采购申请明细
export function addApplyDetail(data) {
  return request({
    url: '/purchase/applyDetail',
    method: 'post',
    data: data
  })
}

// 修改采购申请明细
export function updateApplyDetail(data) {
  return request({
    url: '/purchase/applyDetail',
    method: 'put',
    data: data
  })
}

// 删除采购申请明细
export function delApplyDetail(id) {
  return request({
    url: '/purchase/applyDetail/' + id,
    method: 'delete'
  })
}

// 导出采购申请明细
export function exportApplyDetail(query) {
  return request({
    url: '/purchase/applyDetail/export',
    method: 'get',
    params: query
  })
}
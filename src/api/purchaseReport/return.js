import request from '@/utils/request'

// 查询采购退货统计列表
export function listReturn(query) {
  return request({
    url: '/report/scmPurchase/return/list',
    method: 'get',
    params: query
  })
}

// 导出采购退货报表统计
export function exportReturn(query) {
  return request({
    url: '/report/scmPurchase/return/export',
    method: 'get',
    params: query
  })
}
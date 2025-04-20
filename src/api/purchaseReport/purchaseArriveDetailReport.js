import request from '@/utils/request'

// 查询采购到货详细报表列表
export function listPurchaseArriveDetailReport(query) {
  return request({
    url: '/purchaseReport/purchaseArriveDetailReport/list',
    method: 'get',
    params: query
  })
}

// 导出采购到货详细报表
export function exportPurchaseArriveDetailReport(query) {
  return request({
    url: '/purchaseReport/purchaseArriveDetailReport/export',
    method: 'get',
    params: query
  })
}
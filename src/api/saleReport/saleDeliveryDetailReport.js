import request from '@/utils/request'

// 查询销售发货退货明细报表列表
export function listSaleDeliveryDetailReport(query) {
  return request({
    url: '/saleReport/saleDeliveryDetailReport/list',
    method: 'get',
    params: query
  })
}

// 导出销售发货退货明细报表
export function exportSaleDeliveryDetailReport(query) {
  return request({
    url: '/saleReport/saleDeliveryDetailReport/export',
    method: 'get',
    params: query
  })
}
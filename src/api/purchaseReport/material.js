import request from '@/utils/request'

// 查询采购物料报表统计列表
export function listMaterial(query) {
  return request({
    url: '/report/scmPurchase/material/list',
    method: 'get',
    params: query
  })
}

// 导出采购物料报表统计
export function exportMaterial(query) {
  return request({
    url: '/report/scmPurchase/material/export',
    method: 'get',
    params: query
  })
}


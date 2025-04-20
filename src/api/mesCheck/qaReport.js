import request from '@/utils/request'

// 查询生产检验单列表
export function listProductCheck(query) {
  return request({
    url: '/report/mesCheck/productCheck/list',
    method: 'get',
    params: query
  })
}


// 导出生产检验单
export function exportProductCheck(query) {
  return request({
    url: '/report/mesCheck/productCheck/export',
    method: 'get',
    params: query
  })
}
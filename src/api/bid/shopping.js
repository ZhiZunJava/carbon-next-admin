import request from '@/utils/request'

// 查询商品列表
export function listShopping(query) {
  return request({
    url: '/bid/shopping/list',
    method: 'get',
    params: query
  })
}

// 查询商品详细
export function getShopping(id) {
  return request({
    url: '/bid/shopping/' + id,
    method: 'get'
  })
}

// 新增商品
export function addShopping(data) {
  return request({
    url: '/bid/shopping',
    method: 'post',
    data: data
  })
}

// 修改商品
export function updateShopping(data) {
  return request({
    url: '/bid/shopping',
    method: 'put',
    data: data
  })
}

// 删除商品
export function delShopping(id) {
  return request({
    url: '/bid/shopping/' + id,
    method: 'delete'
  })
}

// 导出商品
export function exportShopping(query) {
  return request({
    url: '/bid/shopping/export',
    method: 'get',
    params: query
  })
}
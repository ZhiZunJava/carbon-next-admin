import request from '@/utils/request'

// 查询生产检验单列表
export function listProductCheck(query) {
  return request({
    url: '/mesCheck/productCheck/list',
    method: 'get',
    params: query
  })
}

// 查询生产检验单详细
export function getProductCheck(id) {
  return request({
    url: '/mesCheck/productCheck/' + id,
    method: 'get'
  })
}

// 新增生产检验单
export function addProductCheck(data) {
  return request({
    url: '/mesCheck/productCheck',
    method: 'post',
    data: data
  })
}

// 修改生产检验单
export function updateProductCheck(data) {
  return request({
    url: '/mesCheck/productCheck',
    method: 'put',
    data: data
  })
}

// 删除生产检验单
export function delProductCheck(id) {
  return request({
    url: '/mesCheck/productCheck/' + id,
    method: 'delete'
  })
}

// 导出生产检验单
export function exportProductCheck(query) {
  return request({
    url: '/mesCheck/productCheck/export',
    method: 'get',
    params: query
  })
}
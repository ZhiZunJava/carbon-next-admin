import request from '@/utils/request'

// 查询生产作业物料列表
export function listProductJobMaterial(query) {
  return request({
    url: '/mesProduct/productJobMaterial/list',
    method: 'get',
    params: query
  })
}

// 查询生产作业物料详细
export function getProductJobMaterial(id) {
  return request({
    url: '/mesProduct/productJobMaterial/' + id,
    method: 'get'
  })
}

// 新增生产作业物料
export function addProductJobMaterial(data) {
  return request({
    url: '/mesProduct/productJobMaterial',
    method: 'post',
    data: data
  })
}

// 修改生产作业物料
export function updateProductJobMaterial(data) {
  return request({
    url: '/mesProduct/productJobMaterial',
    method: 'put',
    data: data
  })
}

// 删除生产作业物料
export function delProductJobMaterial(id) {
  return request({
    url: '/mesProduct/productJobMaterial/' + id,
    method: 'delete'
  })
}

// 导出生产作业物料
export function exportProductJobMaterial(query) {
  return request({
    url: '/mesProduct/productJobMaterial/export',
    method: 'get',
    params: query
  })
}
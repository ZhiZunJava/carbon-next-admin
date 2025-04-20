import request from '@/utils/request'

// 查询仓库物料明细列表
export function listMaterialInventoryDetail(query) {
  return request({
    url: '/material/materialInventoryDetail/list',
    method: 'get',
    params: query
  })
}

// 查询仓库物料明细详细
export function getMaterialInventoryDetail(id) {
  return request({
    url: '/material/materialInventoryDetail/' + id,
    method: 'get'
  })
}

// 新增仓库物料明细
export function addMaterialInventoryDetail(data) {
  return request({
    url: '/material/materialInventoryDetail',
    method: 'post',
    data: data
  })
}

// 修改仓库物料明细
export function updateMaterialInventoryDetail(data) {
  return request({
    url: '/material/materialInventoryDetail',
    method: 'put',
    data: data
  })
}

// 删除仓库物料明细
export function delMaterialInventoryDetail(id) {
  return request({
    url: '/material/materialInventoryDetail/' + id,
    method: 'delete'
  })
}

// 导出仓库物料明细
export function exportMaterialInventoryDetail(query) {
  return request({
    url: '/material/materialInventoryDetail/export',
    method: 'get',
    params: query
  })
}
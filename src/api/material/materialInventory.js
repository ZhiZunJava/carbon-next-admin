import request from '@/utils/request'

// 查询仓库物料信息列表
export function listMaterialInventory(query) {
  return request({
    url: '/material/materialInventory/list',
    method: 'get',
    params: query
  })
}

// 查询仓库物料信息详细
export function getMaterialInventory(id) {
  return request({
    url: '/material/materialInventory/' + id,
    method: 'get'
  })
}

// 新增仓库物料信息
export function addMaterialInventory(data) {
  return request({
    url: '/material/materialInventory',
    method: 'post',
    data: data
  })
}

// 修改仓库物料信息
export function updateMaterialInventory(data) {
  return request({
    url: '/material/materialInventory',
    method: 'put',
    data: data
  })
}

// 删除仓库物料信息
export function delMaterialInventory(id) {
  return request({
    url: '/material/materialInventory/' + id,
    method: 'delete'
  })
}

// 导出仓库物料信息
export function exportMaterialInventory(query) {
  return request({
    url: '/material/materialInventory/export',
    method: 'get',
    params: query
  })
}
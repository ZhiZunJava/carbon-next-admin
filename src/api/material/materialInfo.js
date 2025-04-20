import request from '@/utils/request'

// 查询物料档案管理列表
export function listMaterialInfo(query) {
  return request({
    url: '/material/materialInfo/list',
    method: 'get',
    params: query
  })
}

// 查询物料档案管理详细
export function getMaterialInfo(id) {
  return request({
    url: '/material/materialInfo/' + id,
    method: 'get'
  })
}

// 新增物料档案管理
export function addMaterialInfo(data) {
  return request({
    url: '/material/materialInfo',
    method: 'post',
    data: data
  })
}

// 修改物料档案管理
export function updateMaterialInfo(data) {
  return request({
    url: '/material/materialInfo',
    method: 'put',
    data: data
  })
}

// 删除物料档案管理
export function delMaterialInfo(id) {
  return request({
    url: '/material/materialInfo/' + id,
    method: 'delete'
  })
}

// 导出物料档案管理
export function exportMaterialInfo(query) {
  return request({
    url: '/material/materialInfo/export',
    method: 'get',
    params: query
  })
}
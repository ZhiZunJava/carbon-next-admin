import request from '@/utils/request'

// 查询物料标签模板列表
export function listMaterialTag(query) {
  return request({
    url: '/material/materialTag/list',
    method: 'get',
    params: query
  })
}

// 查询物料标签模板详细
export function getMaterialTag(id) {
  return request({
    url: '/material/materialTag/' + id,
    method: 'get'
  })
}

// 新增物料标签模板
export function addMaterialTag(data) {
  return request({
    url: '/material/materialTag',
    method: 'post',
    data: data
  })
}

// 修改物料标签模板
export function updateMaterialTag(data) {
  return request({
    url: '/material/materialTag',
    method: 'put',
    data: data
  })
}

// 删除物料标签模板
export function delMaterialTag(id) {
  return request({
    url: '/material/materialTag/' + id,
    method: 'delete'
  })
}

// 导出物料标签模板
export function exportMaterialTag(query) {
  return request({
    url: '/material/materialTag/export',
    method: 'get',
    params: query
  })
}
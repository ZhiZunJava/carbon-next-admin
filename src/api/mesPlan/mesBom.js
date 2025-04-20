import request from '@/utils/request'

// 查询BOM管理列表
export function listMesBom(query) {
  return request({
    url: '/mesPlan/mesBom/list',
    method: 'get',
    params: query
  })
}

// 查询BOM管理详细
export function getMesBom(id) {
  return request({
    url: '/mesPlan/mesBom/' + id,
    method: 'get'
  })
}

// 新增BOM管理
export function addMesBom(data) {
  return request({
    url: '/mesPlan/mesBom',
    method: 'post',
    data: data
  })
}

// 修改BOM管理
export function updateMesBom(data) {
  return request({
    url: '/mesPlan/mesBom',
    method: 'put',
    data: data
  })
}

// 删除BOM管理
export function delMesBom(id) {
  return request({
    url: '/mesPlan/mesBom/' + id,
    method: 'delete'
  })
}

// 导出BOM管理
export function exportMesBom(query) {
  return request({
    url: '/mesPlan/mesBom/export',
    method: 'get',
    params: query
  })
}
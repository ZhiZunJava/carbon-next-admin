import request from '@/utils/request'

// 查询货主信息列表
export function listOwner(query) {
  return request({
    url: '/wms/owner/list',
    method: 'get',
    params: query
  })
}

// 查询货主信息详细
export function getOwner(id) {
  return request({
    url: '/wms/owner/' + id,
    method: 'get'
  })
}

// 新增货主信息
export function addOwner(data) {
  return request({
    url: '/wms/owner',
    method: 'post',
    data: data
  })
}

// 修改货主信息
export function updateOwner(data) {
  return request({
    url: '/wms/owner',
    method: 'put',
    data: data
  })
}

// 删除货主信息
export function delOwner(id) {
  return request({
    url: '/wms/owner/' + id,
    method: 'delete'
  })
}

// 导出货主信息
export function exportOwner(query) {
  return request({
    url: '/wms/owner/export',
    method: 'get',
    params: query
  })
}
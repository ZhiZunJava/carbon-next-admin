import request from '@/utils/request'

// 查询投标企业信息列表
export function listEnterprise(query) {
  return request({
    url: '/bid/enterprise/list',
    method: 'get',
    params: query
  })
}

// 查询投标企业信息详细
export function getEnterprise(id) {
  return request({
    url: '/bid/enterprise/' + id,
    method: 'get'
  })
}

// 新增投标企业信息
export function addEnterprise(data) {
  return request({
    url: '/bid/enterprise',
    method: 'post',
    data: data
  })
}

// 修改投标企业信息
export function updateEnterprise(data) {
  return request({
    url: '/bid/enterprise',
    method: 'put',
    data: data
  })
}

// 删除投标企业信息
export function delEnterprise(id) {
  return request({
    url: '/bid/enterprise/' + id,
    method: 'delete'
  })
}

// 导出投标企业信息
export function exportEnterprise(query) {
  return request({
    url: '/bid/enterprise/export',
    method: 'get',
    params: query
  })
}

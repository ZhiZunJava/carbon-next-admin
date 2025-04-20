import request from '@/utils/request'

// 查询固定碳排放列表
export function listEmissionFixed(query) {
  return request({
    url: '/cfConfig/emissionFixed/list',
    method: 'get',
    params: query
  })
}

// 查询固定碳排放详细
export function getEmissionFixed(id) {
  return request({
    url: '/cfConfig/emissionFixed/' + id,
    method: 'get'
  })
}

// 新增固定碳排放
export function addEmissionFixed(data) {
  return request({
    url: '/cfConfig/emissionFixed',
    method: 'post',
    data: data
  })
}

// 修改固定碳排放
export function updateEmissionFixed(data) {
  return request({
    url: '/cfConfig/emissionFixed',
    method: 'put',
    data: data
  })
}

// 删除固定碳排放
export function delEmissionFixed(id) {
  return request({
    url: '/cfConfig/emissionFixed/' + id,
    method: 'delete'
  })
}

// 导出固定碳排放
export function exportEmissionFixed(query) {
  return request({
    url: '/cfConfig/emissionFixed/export',
    method: 'get',
    params: query
  })
}
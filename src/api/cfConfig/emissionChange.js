import request from '@/utils/request'

// 查询变化碳排放列表
export function listEmissionChange(query) {
  return request({
    url: '/cfConfig/emissionChange/list',
    method: 'get',
    params: query
  })
}

// 查询变化碳排放详细
export function getEmissionChange(id) {
  return request({
    url: '/cfConfig/emissionChange/' + id,
    method: 'get'
  })
}

// 新增变化碳排放
export function addEmissionChange(data) {
  return request({
    url: '/cfConfig/emissionChange',
    method: 'post',
    data: data
  })
}

// 修改变化碳排放
export function updateEmissionChange(data) {
  return request({
    url: '/cfConfig/emissionChange',
    method: 'put',
    data: data
  })
}

// 删除变化碳排放
export function delEmissionChange(id) {
  return request({
    url: '/cfConfig/emissionChange/' + id,
    method: 'delete'
  })
}

// 导出变化碳排放
export function exportEmissionChange(query) {
  return request({
    url: '/cfConfig/emissionChange/export',
    method: 'get',
    params: query
  })
}
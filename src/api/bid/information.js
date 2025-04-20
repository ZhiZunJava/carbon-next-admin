import request from '@/utils/request'

// 查询平台动态列表
export function listInformation(query) {
  return request({
    url: '/bid/information/list',
    method: 'get',
    params: query
  })
}

// 查询平台动态详细
export function getInformation(id) {
  return request({
    url: '/bid/information/' + id,
    method: 'get'
  })
}

// 新增平台动态
export function addInformation(data) {
  return request({
    url: '/bid/information',
    method: 'post',
    data: data
  })
}

// 修改平台动态
export function updateInformation(data) {
  return request({
    url: '/bid/information',
    method: 'put',
    data: data
  })
}

// 删除平台动态
export function delInformation(id) {
  return request({
    url: '/bid/information/' + id,
    method: 'delete'
  })
}

// 导出平台动态
export function exportInformation(query) {
  return request({
    url: '/bid/information/export',
    method: 'get',
    params: query
  })
}

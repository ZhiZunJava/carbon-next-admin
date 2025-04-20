import request from '@/utils/request'

// 查询用户积分列表
export function listIntegral(query) {
  return request({
    url: '/bid/integral/list',
    method: 'get',
    params: query
  })
}

// 查询用户积分详细
export function getIntegral(id) {
  return request({
    url: '/bid/integral/' + id,
    method: 'get'
  })
}

// 新增用户积分
export function addIntegral(data) {
  return request({
    url: '/bid/integral',
    method: 'post',
    data: data
  })
}

// 修改用户积分
export function updateIntegral(data) {
  return request({
    url: '/bid/integral',
    method: 'put',
    data: data
  })
}

// 删除用户积分
export function delIntegral(id) {
  return request({
    url: '/bid/integral/' + id,
    method: 'delete'
  })
}

// 导出用户积分
export function exportIntegral(query) {
  return request({
    url: '/bid/integral/export',
    method: 'get',
    params: query
  })
}
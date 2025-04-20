import request from '@/utils/request'

// 查询碳中和计算比例列表
export function listNeutral(query) {
  return request({
    url: '/cfConfig/neutral/list',
    method: 'get',
    params: query
  })
}

// 查询碳中和计算比例详细
export function getNeutral(id) {
  return request({
    url: '/cfConfig/neutral/' + id,
    method: 'get'
  })
}

// 新增碳中和计算比例
export function addNeutral(data) {
  return request({
    url: '/cfConfig/neutral',
    method: 'post',
    data: data
  })
}

// 修改碳中和计算比例
export function updateNeutral(data) {
  return request({
    url: '/cfConfig/neutral',
    method: 'put',
    data: data
  })
}

// 删除碳中和计算比例
export function delNeutral(id) {
  return request({
    url: '/cfConfig/neutral/' + id,
    method: 'delete'
  })
}

// 导出碳中和计算比例
export function exportNeutral(query) {
  return request({
    url: '/cfConfig/neutral/export',
    method: 'get',
    params: query
  })
}
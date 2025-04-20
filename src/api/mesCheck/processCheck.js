import request from '@/utils/request'

// 查询生产采样单列表
export function listProcessCheck(query) {
  return request({
    url: '/mesCheck/processCheck/list',
    method: 'get',
    params: query
  })
}

// 查询生产采样单详细
export function getProcessCheck(id) {
  return request({
    url: '/mesCheck/processCheck/' + id,
    method: 'get'
  })
}

// 新增生产采样单
export function addProcessCheck(data) {
  return request({
    url: '/mesCheck/processCheck',
    method: 'post',
    data: data
  })
}

// 修改生产采样单
export function updateProcessCheck(data) {
  return request({
    url: '/mesCheck/processCheck',
    method: 'put',
    data: data
  })
}

// 删除生产采样单
export function delProcessCheck(id) {
  return request({
    url: '/mesCheck/processCheck/' + id,
    method: 'delete'
  })
}

// 导出生产采样单
export function exportProcessCheck(query) {
  return request({
    url: '/mesCheck/processCheck/export',
    method: 'get',
    params: query
  })
}
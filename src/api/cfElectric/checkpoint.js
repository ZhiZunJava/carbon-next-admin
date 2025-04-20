import request from '@/utils/request'

// 查询能效预警列表
export function listCheckpoint(query) {
  return request({
    url: '/cfElectric/checkpoint/list',
    method: 'get',
    params: query
  })
}

// 查询能效预警详细
export function getCheckpoint(id) {
  return request({
    url: '/cfElectric/checkpoint/' + id,
    method: 'get'
  })
}

// 新增能效预警
export function addCheckpoint(data) {
  return request({
    url: '/cfElectric/checkpoint',
    method: 'post',
    data: data
  })
}

// 修改能效预警
export function updateCheckpoint(data) {
  return request({
    url: '/cfElectric/checkpoint',
    method: 'put',
    data: data
  })
}

// 删除能效预警
export function delCheckpoint(id) {
  return request({
    url: '/cfElectric/checkpoint/' + id,
    method: 'delete'
  })
}
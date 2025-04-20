import request from '@/utils/request'

// 查询能效检测点列表
export function listCheckpoint(query) {
  return request({
    url: '/cfElectric/checkpoint/list',
    method: 'get',
    params: query
  })
}

// 查询能效检测点详细
export function getCheckpoint(id) {
  return request({
    url: '/cfElectric/checkpoint/' + id,
    method: 'get'
  })
}

// 新增能效检测点
export function addCheckpoint(data) {
  return request({
    url: '/cfElectric/checkpoint',
    method: 'post',
    data: data
  })
}

// 修改能效检测点
export function updateCheckpoint(data) {
  return request({
    url: '/cfElectric/checkpoint',
    method: 'put',
    data: data
  })
}

// 删除能效检测点
export function delCheckpoint(id) {
  return request({
    url: '/cfElectric/checkpoint/' + id,
    method: 'delete'
  })
}

// 导出能效检测点
export function exportCheckpoint(query) {
  return request({
    url: '/cfElectric/checkpoint/export',
    method: 'get',
    params: query
  })
}
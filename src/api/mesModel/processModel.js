import request from '@/utils/request'

// 查询工艺建模列表
export function listProcessModel(query) {
  return request({
    url: '/mesModel/processModel/list',
    method: 'get',
    params: query
  })
}

// 查询工艺建模详细
export function getProcessModel(id) {
  return request({
    url: '/mesModel/processModel/' + id,
    method: 'get'
  })
}

// 新增工艺建模
export function addProcessModel(data) {
  return request({
    url: '/mesModel/processModel',
    method: 'post',
    data: data
  })
}

// 修改工艺建模
export function updateProcessModel(data) {
  return request({
    url: '/mesModel/processModel',
    method: 'put',
    data: data
  })
}

// 删除工艺建模
export function delProcessModel(id) {
  return request({
    url: '/mesModel/processModel/' + id,
    method: 'delete'
  })
}

// 导出工艺建模
export function exportProcessModel(query) {
  return request({
    url: '/mesModel/processModel/export',
    method: 'get',
    params: query
  })
}
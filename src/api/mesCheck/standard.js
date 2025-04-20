import request from '@/utils/request'

// 查询质检标准列表
export function listStandard(query) {
  return request({
    url: '/mesCheck/standard/list',
    method: 'get',
    params: query
  })
}

// 查询质检标准详细
export function getStandard(id) {
  return request({
    url: '/mesCheck/standard/' + id,
    method: 'get'
  })
}

// 新增质检标准
export function addStandard(data) {
  return request({
    url: '/mesCheck/standard',
    method: 'post',
    data: data
  })
}

// 修改质检标准
export function updateStandard(data) {
  return request({
    url: '/mesCheck/standard',
    method: 'put',
    data: data
  })
}

// 删除质检标准
export function delStandard(id) {
  return request({
    url: '/mesCheck/standard/' + id,
    method: 'delete'
  })
}

// 导出质检标准
export function exportStandard(query) {
  return request({
    url: '/mesCheck/standard/export',
    method: 'get',
    params: query
  })
}
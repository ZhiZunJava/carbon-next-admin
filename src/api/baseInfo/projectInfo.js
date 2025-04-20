import request from '@/utils/request'

// 查询项目维护列表
export function listProjectInfo(query) {
  return request({
    url: '/baseInfo/projectInfo/list',
    method: 'get',
    params: query
  })
}

// 查询项目维护详细
export function getProjectInfo(id) {
  return request({
    url: '/baseInfo/projectInfo/' + id,
    method: 'get'
  })
}

// 新增项目维护
export function addProjectInfo(data) {
  return request({
    url: '/baseInfo/projectInfo',
    method: 'post',
    data: data
  })
}

// 修改项目维护
export function updateProjectInfo(data) {
  return request({
    url: '/baseInfo/projectInfo',
    method: 'put',
    data: data
  })
}

// 删除项目维护
export function delProjectInfo(id) {
  return request({
    url: '/baseInfo/projectInfo/' + id,
    method: 'delete'
  })
}

// 导出项目维护
export function exportProjectInfo(query) {
  return request({
    url: '/baseInfo/projectInfo/export',
    method: 'get',
    params: query
  })
}
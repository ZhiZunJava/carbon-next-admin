import request from '@/utils/request'

// 查询违规投诉列表
export function listComplaint(query) {
  return request({
    url: '/bid/complaint/list',
    method: 'get',
    params: query
  })
}

// 查询违规投诉详细
export function getComplaint(id) {
  return request({
    url: '/bid/complaint/' + id,
    method: 'get'
  })
}

// 新增违规投诉
export function addComplaint(data) {
  return request({
    url: '/bid/complaint',
    method: 'post',
    data: data
  })
}

// 修改违规投诉
export function updateComplaint(data) {
  return request({
    url: '/bid/complaint',
    method: 'put',
    data: data
  })
}

// 删除违规投诉
export function delComplaint(id) {
  return request({
    url: '/bid/complaint/' + id,
    method: 'delete'
  })
}

// 导出违规投诉
export function exportComplaint(query) {
  return request({
    url: '/bid/complaint/export',
    method: 'get',
    params: query
  })
}

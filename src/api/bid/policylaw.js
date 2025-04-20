import request from '@/utils/request'

// 查询政策法规列表
export function listPolicylaw(query) {
  return request({
    url: '/bid/policylaw/list',
    method: 'get',
    params: query
  })
}

// 查询政策法规详细
export function getPolicylaw(id) {
  return request({
    url: '/bid/policylaw/' + id,
    method: 'get'
  })
}

// 新增政策法规
export function addPolicylaw(data) {
  return request({
    url: '/bid/policylaw',
    method: 'post',
    data: data
  })
}

// 修改政策法规
export function updatePolicylaw(data) {
  return request({
    url: '/bid/policylaw',
    method: 'put',
    data: data
  })
}

// 删除政策法规
export function delPolicylaw(id) {
  return request({
    url: '/bid/policylaw/' + id,
    method: 'delete'
  })
}

// 导出政策法规
export function exportPolicylaw(query) {
  return request({
    url: '/bid/policylaw/export',
    method: 'get',
    params: query
  })
}

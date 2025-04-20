import request from '@/utils/request'

// 查询企业投标列表
export function listBidding(query) {
  return request({
    url: '/bid/enterprise/bidding/list',
    method: 'get',
    params: query
  })
}

// 查询企业投标详细
export function getBidding(id) {
  return request({
    url: '/bid/enterprise/bidding/' + id,
    method: 'get'
  })
}

// 新增企业投标
export function addBidding(data) {
  return request({
    url: '/bid/enterprise/bidding',
    method: 'post',
    data: data
  })
}

// 修改企业投标
export function updateBidding(data) {
  return request({
    url: '/bid/enterprise/bidding',
    method: 'put',
    data: data
  })
}

// 删除企业投标
export function delBidding(id) {
  return request({
    url: '/bid/enterprise/bidding/' + id,
    method: 'delete'
  })
}

// 导出企业投标
export function exportBidding(query) {
  return request({
    url: '/bid/enterprise/bidding/export',
    method: 'get',
    params: query
  })
}

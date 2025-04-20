import request from '@/utils/request'

// 查询招投标列表
export function listBidding(query) {
  return request({
    url: '/bid/bidding/list',
    method: 'get',
    params: query
  })
}

// 查询招投标详细
export function getBidding(id) {
  return request({
    url: '/bid/bidding/' + id,
    method: 'get'
  })
}

// 新增招投标
export function addBidding(data) {
  return request({
    url: '/bid/bidding',
    method: 'post',
    data: data
  })
}

// 修改招投标
export function updateBidding(data) {
  return request({
    url: '/bid/bidding',
    method: 'put',
    data: data
  })
}

// 删除招投标
export function delBidding(id) {
  return request({
    url: '/bid/bidding/' + id,
    method: 'delete'
  })
}

// 导出招投标
export function exportBidding(query) {
  return request({
    url: '/bid/bidding/export',
    method: 'get',
    params: query
  })
}

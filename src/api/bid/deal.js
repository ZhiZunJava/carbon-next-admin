import request from '@/utils/request'

// 查询积分交易列表
export function listDeal(query) {
  return request({
    url: '/bid/deal/list',
    method: 'get',
    params: query
  })
}

// 查询积分交易详细
export function getDeal(id) {
  return request({
    url: '/bid/deal/' + id,
    method: 'get'
  })
}

// 新增积分交易
export function addDeal(data) {
  return request({
    url: '/bid/deal',
    method: 'post',
    data: data
  })
}

// 修改积分交易
export function updateDeal(data) {
  return request({
    url: '/bid/deal',
    method: 'put',
    data: data
  })
}

// 删除积分交易
export function delDeal(id) {
  return request({
    url: '/bid/deal/' + id,
    method: 'delete'
  })
}

// 导出积分交易
export function exportDeal(query) {
  return request({
    url: '/bid/deal/export',
    method: 'get',
    params: query
  })
}
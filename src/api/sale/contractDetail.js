import request from '@/utils/request'

// 查询合同明细列表
export function listContractDetail(query) {
  return request({
    url: '/sale/contractDetail/list',
    method: 'get',
    params: query
  })
}

// 查询合同明细详细
export function getContractDetail(id) {
  return request({
    url: '/sale/contractDetail/' + id,
    method: 'get'
  })
}

// 新增合同明细
export function addContractDetail(data) {
  return request({
    url: '/sale/contractDetail',
    method: 'post',
    data: data
  })
}

// 修改合同明细
export function updateContractDetail(data) {
  return request({
    url: '/sale/contractDetail',
    method: 'put',
    data: data
  })
}

// 删除合同明细
export function delContractDetail(id) {
  return request({
    url: '/sale/contractDetail/' + id,
    method: 'delete'
  })
}

// 导出合同明细
export function exportContractDetail(query) {
  return request({
    url: '/sale/contractDetail/export',
    method: 'get',
    params: query
  })
}
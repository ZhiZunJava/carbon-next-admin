import request from '@/utils/request'

// 查询BOM单明细列表
export function listNesBomDetail(query) {
  return request({
    url: '/mesPlan/nesBomDetail/list',
    method: 'get',
    params: query
  })
}

// 查询BOM单明细详细
export function getNesBomDetail(id) {
  return request({
    url: '/mesPlan/nesBomDetail/' + id,
    method: 'get'
  })
}

// 新增BOM单明细
export function addNesBomDetail(data) {
  return request({
    url: '/mesPlan/nesBomDetail',
    method: 'post',
    data: data
  })
}

// 修改BOM单明细
export function updateNesBomDetail(data) {
  return request({
    url: '/mesPlan/nesBomDetail',
    method: 'put',
    data: data
  })
}

// 删除BOM单明细
export function delNesBomDetail(id) {
  return request({
    url: '/mesPlan/nesBomDetail/' + id,
    method: 'delete'
  })
}

// 导出BOM单明细
export function exportNesBomDetail(query) {
  return request({
    url: '/mesPlan/nesBomDetail/export',
    method: 'get',
    params: query
  })
}
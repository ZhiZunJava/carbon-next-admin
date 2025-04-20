import request from '@/utils/request'

// 查询防错管理列表
export function listMistakeProof(query) {
  return request({
    url: '/mesCheck/mistakeProof/list',
    method: 'get',
    params: query
  })
}

// 查询防错管理详细
export function getMistakeProof(id) {
  return request({
    url: '/mesCheck/mistakeProof/' + id,
    method: 'get'
  })
}

// 新增防错管理
export function addMistakeProof(data) {
  return request({
    url: '/mesCheck/mistakeProof',
    method: 'post',
    data: data
  })
}

// 修改防错管理
export function updateMistakeProof(data) {
  return request({
    url: '/mesCheck/mistakeProof',
    method: 'put',
    data: data
  })
}

// 删除防错管理
export function delMistakeProof(id) {
  return request({
    url: '/mesCheck/mistakeProof/' + id,
    method: 'delete'
  })
}

// 导出防错管理
export function exportMistakeProof(query) {
  return request({
    url: '/mesCheck/mistakeProof/export',
    method: 'get',
    params: query
  })
}
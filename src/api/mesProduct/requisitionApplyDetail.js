import request from '@/utils/request'

// 查询领料单物料明细列表
export function listRequisitionApplyDetail(query) {
  return request({
    url: '/mesProduct/requisitionApplyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询领料单物料明细详细
export function getRequisitionApplyDetail(id) {
  return request({
    url: '/mesProduct/requisitionApplyDetail/' + id,
    method: 'get'
  })
}

// 新增领料单物料明细
export function addRequisitionApplyDetail(data) {
  return request({
    url: '/mesProduct/requisitionApplyDetail',
    method: 'post',
    data: data
  })
}

// 修改领料单物料明细
export function updateRequisitionApplyDetail(data) {
  return request({
    url: '/mesProduct/requisitionApplyDetail',
    method: 'put',
    data: data
  })
}

// 删除领料单物料明细
export function delRequisitionApplyDetail(id) {
  return request({
    url: '/mesProduct/requisitionApplyDetail/' + id,
    method: 'delete'
  })
}

// 导出领料单物料明细
export function exportRequisitionApplyDetail(query) {
  return request({
    url: '/mesProduct/requisitionApplyDetail/export',
    method: 'get',
    params: query
  })
}
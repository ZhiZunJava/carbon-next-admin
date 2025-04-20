import request from '@/utils/request'

// 查询产品承运申请明细列表
export function listCarrierApplyDetail(query) {
  return request({
    url: '/transportApply/carrierApplyDetail/list',
    method: 'get',
    params: query
  })
}

// 查询产品承运申请明细详细
export function getCarrierApplyDetail(id) {
  return request({
    url: '/transportApply/carrierApplyDetail/' + id,
    method: 'get'
  })
}

// 新增产品承运申请明细
export function addCarrierApplyDetail(data) {
  return request({
    url: '/transportApply/carrierApplyDetail',
    method: 'post',
    data: data
  })
}

// 修改产品承运申请明细
export function updateCarrierApplyDetail(data) {
  return request({
    url: '/transportApply/carrierApplyDetail',
    method: 'put',
    data: data
  })
}

// 删除产品承运申请明细
export function delCarrierApplyDetail(id) {
  return request({
    url: '/transportApply/carrierApplyDetail/' + id,
    method: 'delete'
  })
}

// 导出产品承运申请明细
export function exportCarrierApplyDetail(query) {
  return request({
    url: '/transportApply/carrierApplyDetail/export',
    method: 'get',
    params: query
  })
}
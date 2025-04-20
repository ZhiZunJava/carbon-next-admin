import request from '@/utils/request'

// 查询车辆调度单明细列表
export function listDispatchBillDetail(query) {
  return request({
    url: '/transportApply/dispatchBillDetail/list',
    method: 'get',
    params: query
  })
}

// 查询车辆调度单明细详细
export function getDispatchBillDetail(id) {
  return request({
    url: '/transportApply/dispatchBillDetail/' + id,
    method: 'get'
  })
}

// 新增车辆调度单明细
export function addDispatchBillDetail(data) {
  return request({
    url: '/transportApply/dispatchBillDetail',
    method: 'post',
    data: data
  })
}

// 修改车辆调度单明细
export function updateDispatchBillDetail(data) {
  return request({
    url: '/transportApply/dispatchBillDetail',
    method: 'put',
    data: data
  })
}

// 删除车辆调度单明细
export function delDispatchBillDetail(id) {
  return request({
    url: '/transportApply/dispatchBillDetail/' + id,
    method: 'delete'
  })
}

// 导出车辆调度单明细
export function exportDispatchBillDetail(query) {
  return request({
    url: '/transportApply/dispatchBillDetail/export',
    method: 'get',
    params: query
  })
}
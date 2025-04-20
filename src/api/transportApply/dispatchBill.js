import request from '@/utils/request'

// 查询车辆调度单列表
export function listDispatchBill(query) {
  return request({
    url: '/transportApply/dispatchBill/list',
    method: 'get',
    params: query
  })
}

// 查询车辆调度单详细
export function getDispatchBill(id) {
  return request({
    url: '/transportApply/dispatchBill/' + id,
    method: 'get'
  })
}

// 新增车辆调度单
export function addDispatchBill(data) {
  return request({
    url: '/transportApply/dispatchBill',
    method: 'post',
    data: data
  })
}

// 修改车辆调度单
export function updateDispatchBill(data) {
  return request({
    url: '/transportApply/dispatchBill',
    method: 'put',
    data: data
  })
}

// 删除车辆调度单
export function delDispatchBill(id) {
  return request({
    url: '/transportApply/dispatchBill/' + id,
    method: 'delete'
  })
}

// 导出车辆调度单
export function exportDispatchBill(query) {
  return request({
    url: '/transportApply/dispatchBill/export',
    method: 'get',
    params: query
  })
}
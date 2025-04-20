import request from '@/utils/request'

// 查询移库信息列表
export function listWarehouseMove(query) {
  return request({
    url: '/warehouse/warehouseMove/list',
    method: 'get',
    params: query
  })
}

// 查询移库信息详细
export function getWarehouseMove(id) {
  return request({
    url: '/warehouse/warehouseMove/' + id,
    method: 'get'
  })
}

// 新增移库信息
export function addWarehouseMove(data) {
  return request({
    url: '/warehouse/warehouseMove',
    method: 'post',
    data: data
  })
}

// 执行移库
export function move(data) {
  return request({
    url: '/warehouse/warehouseMove/move',
    method: 'post',
    data: data
  })
}

// 修改移库信息
export function updateWarehouseMove(data) {
  return request({
    url: '/warehouse/warehouseMove',
    method: 'put',
    data: data
  })
}

// 删除移库信息
export function delWarehouseMove(id) {
  return request({
    url: '/warehouse/warehouseMove/' + id,
    method: 'delete'
  })
}

// 导出移库信息
export function exportWarehouseMove(query) {
  return request({
    url: '/warehouse/warehouseMove/export',
    method: 'get',
    params: query
  })
}
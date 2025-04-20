import request from '@/utils/request'

// 查询库位管理列表
export function listWarehouseLocation(query) {
  return request({
    url: '/warehouse/warehouseLocation/list',
    method: 'get',
    params: query
  })
}

// 查询库位管理详细
export function getWarehouseLocation(id) {
  return request({
    url: '/warehouse/warehouseLocation/' + id,
    method: 'get'
  })
}

// 新增库位管理
export function addWarehouseLocation(data) {
  return request({
    url: '/warehouse/warehouseLocation',
    method: 'post',
    data: data
  })
}

// 修改库位管理
export function updateWarehouseLocation(data) {
  return request({
    url: '/warehouse/warehouseLocation',
    method: 'put',
    data: data
  })
}

// 删除库位管理
export function delWarehouseLocation(id) {
  return request({
    url: '/warehouse/warehouseLocation/' + id,
    method: 'delete'
  })
}

// 导出库位管理
export function exportWarehouseLocation(query) {
  return request({
    url: '/warehouse/warehouseLocation/export',
    method: 'get',
    params: query
  })
}
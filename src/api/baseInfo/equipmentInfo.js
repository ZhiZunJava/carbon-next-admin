import request from '@/utils/request'

// 查询设备信息列表
export function listEquipmentInfo(query) {
  return request({
    url: '/baseInfo/equipmentInfo/list',
    method: 'get',
    params: query
  })
}

// 查询设备信息详细
export function getEquipmentInfo(id) {
  return request({
    url: '/baseInfo/equipmentInfo/' + id,
    method: 'get'
  })
}

// 新增设备信息
export function addEquipmentInfo(data) {
  return request({
    url: '/baseInfo/equipmentInfo',
    method: 'post',
    data: data
  })
}

// 修改设备信息
export function updateEquipmentInfo(data) {
  return request({
    url: '/baseInfo/equipmentInfo',
    method: 'put',
    data: data
  })
}

// 删除设备信息
export function delEquipmentInfo(id) {
  return request({
    url: '/baseInfo/equipmentInfo/' + id,
    method: 'delete'
  })
}

// 导出设备信息
export function exportEquipmentInfo(query) {
  return request({
    url: '/baseInfo/equipmentInfo/export',
    method: 'get',
    params: query
  })
}
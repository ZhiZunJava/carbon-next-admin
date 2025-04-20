import request from '@/utils/request'

// 查询设备能耗数据采集报表
export function listEquipmentPowerReport(query) {
  return request({
    url: '/carbonReport/equipmentPowerReport/list',
    method: 'get',
    params: query
  })
}

// 查询设备能耗汇总报表
export function listEquipmentPowerReportByDay(query) {
  return request({
    url: '/carbonReport/equipmentPowerReport/day',
    method: 'get',
    params: query
  })
}

// 查询设备小时能耗报表
export function listEquipmentPowerReportByHour(query) {
  return request({
    url: '/carbonReport/equipmentPowerReport/hour',
    method: 'get',
    params: query
  })
}

// 查询VIEW详细
export function getEquipmentPowerReport(equipmentId) {
  return request({
    url: '/carbonReport/equipmentPowerReport/' + equipmentId,
    method: 'get'
  })
}

// 导出VIEW
export function exportEquipmentPowerReport(query) {
  return request({
    url: '/carbonReport/equipmentPowerReport/export',
    method: 'get',
    params: query
  })
}
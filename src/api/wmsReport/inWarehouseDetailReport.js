import request from '@/utils/request'

// 查询入库明细报表列表
export function listInWarehouseDetailReport(query) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport/list',
    method: 'get',
    params: query
  })
}

// 查询入库明细报表详细
export function getInWarehouseDetailReport(materialId) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport/' + materialId,
    method: 'get'
  })
}

// 新增入库明细报表
export function addInWarehouseDetailReport(data) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport',
    method: 'post',
    data: data
  })
}

// 修改入库明细报表
export function updateInWarehouseDetailReport(data) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport',
    method: 'put',
    data: data
  })
}

// 删除入库明细报表
export function delInWarehouseDetailReport(materialId) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport/' + materialId,
    method: 'delete'
  })
}

// 导出入库明细报表
export function exportInWarehouseDetailReport(query) {
  return request({
    url: '/wmsReport/inWarehouseDetailReport/export',
    method: 'get',
    params: query
  })
}
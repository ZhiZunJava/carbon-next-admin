import request from '@/utils/request'

// 查询工厂建模明细列表
export function listFactoryModelDetail(query) {
  return request({
    url: '/mesModel/factoryModelDetail/list',
    method: 'get',
    params: query
  })
}

// 查询工厂建模明细详细
export function getFactoryModelDetail(id) {
  return request({
    url: '/mesModel/factoryModelDetail/' + id,
    method: 'get'
  })
}

// 新增工厂建模明细
export function addFactoryModelDetail(data) {
  return request({
    url: '/mesModel/factoryModelDetail',
    method: 'post',
    data: data
  })
}

// 修改工厂建模明细
export function updateFactoryModelDetail(data) {
  return request({
    url: '/mesModel/factoryModelDetail',
    method: 'put',
    data: data
  })
}

// 删除工厂建模明细
export function delFactoryModelDetail(id) {
  return request({
    url: '/mesModel/factoryModelDetail/' + id,
    method: 'delete'
  })
}

// 导出工厂建模明细
export function exportFactoryModelDetail(query) {
  return request({
    url: '/mesModel/factoryModelDetail/export',
    method: 'get',
    params: query
  })
}
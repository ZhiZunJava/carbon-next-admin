import request from '@/utils/request'

// 查询工厂建模列表
export function listFactoryModel(query) {
  return request({
    url: '/mesModel/factoryModel/list',
    method: 'get',
    params: query
  })
}

// 查询工厂建模详细
export function getFactoryModel(id) {
  return request({
    url: '/mesModel/factoryModel/' + id,
    method: 'get'
  })
}

// 新增工厂建模
export function addFactoryModel(data) {
  return request({
    url: '/mesModel/factoryModel',
    method: 'post',
    data: data
  })
}

// 修改工厂建模
export function updateFactoryModel(data) {
  return request({
    url: '/mesModel/factoryModel',
    method: 'put',
    data: data
  })
}

// 删除工厂建模
export function delFactoryModel(id) {
  return request({
    url: '/mesModel/factoryModel/' + id,
    method: 'delete'
  })
}

// 导出工厂建模
export function exportFactoryModel(query) {
  return request({
    url: '/mesModel/factoryModel/export',
    method: 'get',
    params: query
  })
}
import request from '@/utils/request'

// 查询客户档案列表
export function listCustomer(query) {
  return request({
    url: '/sale/customer/list',
    method: 'get',
    params: query
  })
}

// 查询客户档案详细
export function getCustomer(id) {
  return request({
    url: '/sale/customer/' + id,
    method: 'get'
  })
}

// 新增客户档案
export function addCustomer(data) {
  return request({
    url: '/sale/customer',
    method: 'post',
    data: data
  })
}

// 修改客户档案
export function updateCustomer(data) {
  return request({
    url: '/sale/customer',
    method: 'put',
    data: data
  })
}

// 删除客户档案
export function delCustomer(id) {
  return request({
    url: '/sale/customer/' + id,
    method: 'delete'
  })
}

// 导出客户档案
export function exportCustomer(query) {
  return request({
    url: '/sale/customer/export',
    method: 'get',
    params: query
  })
}
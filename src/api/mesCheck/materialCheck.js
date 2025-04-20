import request from '@/utils/request'

// 查询物料检验单列表
export function listMaterialCheck(query) {
  return request({
    url: '/mesCheck/materialCheck/list',
    method: 'get',
    params: query
  })
}

// 查询物料检验单详细
export function getMaterialCheck(id) {
  return request({
    url: '/mesCheck/materialCheck/' + id,
    method: 'get'
  })
}

// 新增物料检验单
export function addMaterialCheck(data) {
  return request({
    url: '/mesCheck/materialCheck',
    method: 'post',
    data: data
  })
}

// 修改物料检验单
export function updateMaterialCheck(data) {
  return request({
    url: '/mesCheck/materialCheck',
    method: 'put',
    data: data
  })
}

// 删除物料检验单
export function delMaterialCheck(id) {
  return request({
    url: '/mesCheck/materialCheck/' + id,
    method: 'delete'
  })
}

// 导出物料检验单
export function exportMaterialCheck(query) {
  return request({
    url: '/mesCheck/materialCheck/export',
    method: 'get',
    params: query
  })
}
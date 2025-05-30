import request from '@/utils/request';

// 查询退货明细列表
export function listReturnDetail(query) {
  return request({
    url: '/purchase/returnDetail/list',
    method: 'get',
    params: query,
  });
}

// 查询退货明细详细
export function getReturnDetail(id) {
  return request({
    url: `/purchase/returnDetail/${id}`,
    method: 'get',
  });
}

// 新增退货明细
export function addReturnDetail(data) {
  return request({
    url: '/purchase/returnDetail',
    method: 'post',
    data,
  });
}

// 修改退货明细
export function updateReturnDetail(data) {
  return request({
    url: '/purchase/returnDetail',
    method: 'put',
    data,
  });
}

// 删除退货明细
export function delReturnDetail(id) {
  return request({
    url: `/purchase/returnDetail/${id}`,
    method: 'delete',
  });
}

// 导出退货明细
export function exportReturnDetail(query) {
  return request({
    url: '/purchase/returnDetail/export',
    method: 'get',
    params: query,
  });
}

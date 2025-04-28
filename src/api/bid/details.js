import request from '@/utils/request';

// 查询用户积分详情列表
export function listDetails(query) {
  return request({
    url: '/bid/details/list',
    method: 'get',
    params: query,
  });
}

// 查询用户积分详情详细
export function getDetails(id) {
  return request({
    url: `/bid/details/${id}`,
    method: 'get',
  });
}

// 新增用户积分详情
export function addDetails(data) {
  return request({
    url: '/bid/details',
    method: 'post',
    data,
  });
}

// 修改用户积分详情
export function updateDetails(data) {
  return request({
    url: '/bid/details',
    method: 'put',
    data,
  });
}

// 删除用户积分详情
export function delDetails(id) {
  return request({
    url: `/bid/details/${id}`,
    method: 'delete',
  });
}

// 导出用户积分详情
export function exportDetails(query) {
  return request({
    url: '/bid/details/export',
    method: 'get',
    params: query,
  });
}

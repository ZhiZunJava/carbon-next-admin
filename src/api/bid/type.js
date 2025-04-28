import request from '@/utils/request';

// 查询商品分类列表
export function listType(query) {
  return request({
    url: '/bid/type/list',
    method: 'get',
    params: query,
  });
}

// 查询商品分类详细
export function getType(id) {
  return request({
    url: `/bid/type/${id}`,
    method: 'get',
  });
}

// 新增商品分类
export function addType(data) {
  return request({
    url: '/bid/type',
    method: 'post',
    data,
  });
}

// 修改商品分类
export function updateType(data) {
  return request({
    url: '/bid/type',
    method: 'put',
    data,
  });
}

// 删除商品分类
export function delType(id) {
  return request({
    url: `/bid/type/${id}`,
    method: 'delete',
  });
}

// 导出商品分类
export function exportType(query) {
  return request({
    url: '/bid/type/export',
    method: 'get',
    params: query,
  });
}

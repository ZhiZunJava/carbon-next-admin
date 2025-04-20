import request from '@/utils/request'

// 查询综合能耗图表
export function getEmissionOverall(query) {
    return request({
        url: '/carbonReport/emissionChart/overall',
        method: 'get',
        params: query
    })
}

// 查询今年的能耗占比图表
export function getEmissionPercent(query) {
    return request({
        url: '/carbonReport/emissionChart/percent',
        method: 'get',
        params: query
    })
}

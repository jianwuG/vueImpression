import request from './../util/request'

export function getRouter(roule) {
    return request({
        url: '/user/getRouter',
        method: 'post',
        data: {
            type: roule
        }
    })
}

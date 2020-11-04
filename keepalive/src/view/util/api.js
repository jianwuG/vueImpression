import axios from 'axios'
import '../../mock/mock'
axios.defaults.baseURL = 'http://gw';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


// axios.interceptors.request.use(config => {
//     console.log('request go');
//     return config;
// }, err => {
//     console.log('请求失败')
//     return Promise.reject(err)
// })
// //拦截响应
// axios.interceptors.response.use(config => {
//     return config;
// }, err => {
//     console.log('响应失败')
//     return err.response
// })

const get=function (url, option) {
    return new Promise((resolve, reject) => {
        axios.get(url, option).then((res) => {
            resolve(res);
        }).catch(function (error) {
            console.log(error);
        });
    })

};

const post = function (url, option) {
    return new Promise((resolve, reject) => {
        axios.post(url,
            option
        ).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    })
};



export const Http={
    get,
    post
};

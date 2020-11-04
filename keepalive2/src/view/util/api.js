import axios from 'axios'
import '../../mock/mock'
axios.defaults.baseURL = 'http://gw';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


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

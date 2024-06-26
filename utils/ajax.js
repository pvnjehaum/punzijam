import axios from '../lib/axios.js';

// 设置默认地址
axios.defaults.baseURL = 'http://localhost:9000';
let ajax = axios;

// 判断用户是否登录
async function isLogin() {
  // 获取 id 和 token
  let token = localStorage.getItem('token');
  let id = localStorage.getItem('uid');

  // 如果 status 0 失败，1 成功
  // 如果 id 或者 token 为空
  if (!token || !id) return {status: 0, message: '未登录'};

  // 用 id 和 token 请求用户信息
  let {data: {code, user}} = await ajax.get('/users/info', {params: {id}, headers: {authorization: token}});

  // code == 1 成功，否则是失败
  if (code != 1) return {status: 0, message: '未登录'};

  // 返回成功并携带 token
  return {status: 1, message: '已登录', user, token};
}

// 导出
export {ajax, isLogin};

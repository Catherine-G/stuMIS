import {stringity} from 'qs';
import request from '../utils/request';
import {stringify} from 'querystring';
import { async } from 'q';

export const proxy = `/gt`;
// export const path = `${proxy}/complaint`;
export const path = ``;

// 建议相关的接口
export async function submitComplaintInfo(params) {
    return request(`${path}/complaint`, {
        method: 'POST',
        body: params,
      });
}
export async function putOpinion(params){
    // return request(`${path}/complaint/${params.id}`, {
    return request(`${path}/complaint`,{
      method: 'PUT',
      body: params,
    });
}

export async function getComplaintList(params){
  return request(`${path}/complaint/query`,{
    method: 'POST',
    body: params,
  });
}

export async function getDetail(params){
  return request(`${path}/complaint/${stringify(params.id)}`);

}

//数据字典索引
export async function getDicTypes(params) {
    return request(`${path}/dictionary/queryAllType`);
  }
//数据字典
export async function getDicDetails(params) {
    return request(`${path}/dictionary/query`, {
        method: 'POST',
        body: params,
    });
}

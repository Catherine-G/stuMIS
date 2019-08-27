import { async } from "q";
import { stringify } from 'qs';
import request from '../utils/request';

export const path = ``;

export async function getStuList(params){
    return request(`${path}/student/query`,{
        method: 'POST',
        body: params,
      });
}

export async function getDetail(params){
    return request(`${path}/student/${stringify(params)}`);
    // return request(`${path}/student/${params}`);
}

export async function putStuinfo(params){
    // return request(`${path}/student/edit/${params.id}`,{
    return request(`${path}/student/edit`,{
        method: 'PUT',
        body: params,
    });
}

export async function addStuinfo(params){
    return request(`${path}/student/add`,{
        method: 'POST',
        body: params,
    })
}
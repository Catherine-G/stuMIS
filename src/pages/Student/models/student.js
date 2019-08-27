import {getStuList,getDetail,putStuinfo,addStuinfo} from '@/services/student';
import { message } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

export default {
    namespacce: 'student',
    state: {
        studentList:[],
        totalCount: 0,
        detail: {},
    },
    effects: {
        *getStuList({payload,callback},{call,put}){
            const response = yield call(getStuList, payload);
            if (!response || (Object.prototype.toString.call(response) === '[object Array]' && response.length === 0)) {
                return
            }else{
                if(response.code !== 200){
                    message.error(response.message);
                }
            }
            let result = {};
            result.list = response.data.list;
            for(let i = 0; i < result.list.length; i++){
                // result.list[i].key = i;
                result.list[i].num = payload.startRow+1+i;
            }
            result.totalCount = response.data.count;
            yield put({
                type: 'saveStuList',
                payload: result,
            });
        },
        *getDetail({payload,callback},{call,put}){
            const response = yield call(getDetail,payload);
            if(!response||(Object.prototype.toString.call(response)==='[object Array]'&&response.length===0)){
                return
              }else{
                if(response.code != 200){
                  message.error(response.message);
                  return
                }
              }
              let result={};
              result=response.data;
              yield put({
                type: 'saveDetail',
                payload: result,
              });
        },
        *editStuinfo({payload,callback},{call,put}){
            const response = yield call(putStuinfo,payload);
            if(!response||(Object.prototype.toString.call(response)==='[object Array]'&&response.length===0)){
                return
              }else{
                if(response.code != 200){
                  message.error(response.message);
                  return
                }else{
                    message.success("修改成功");
                }
            }
            if(callback) callback();
        },
        *addStuinfo({payload,callback},{call,put}){
            const response = yield call(addStuinfo,payload);
            if(!response||(Object.prototype.toString.call(response)==='[object Array]'&&response.length===0)){
                return
              }else{
                if(response.code != 200){
                  message.error(response.message);
                  return
                }else{
                    message.success("新增成功");
                }
            }
            if(callback) callback();
        }
    
    },
    reducers:{
        saveStuList(state,action){
            return {
                ...state,
                studentList: action.payload.list,
                totalCount: action.payload.totalCount,
            };
            
        },
        saveDetail(state,action){
            return {
                ...state,
                detail: action.payload,
            }
        }
    }
}
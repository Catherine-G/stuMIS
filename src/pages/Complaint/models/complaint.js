import {submitComplaintInfo,getComplaintList,getDetail,putOpinion} from '@/services/index';
import { message } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';


export default {
    namespace: 'complaint',
    state:{
        complaintList:[],
        totalCount: 0,
        detail: {
            // businessId: '',
            // content: '',
            // createTime: '',
            // id: '',
            // opinion: "",
            // status: '',
            // title: "",
            // updateTime: ''
        },
    },
    effects: {
        *clearHistoryList(_,{put}){
            yield put({
                type: 'saveComplaintList',
                payload: {list:[],totalCount:0},
              });
        },
        *submitComplaintInfo({payload,callback},{call,put}){
            const response = yield call(submitComplaintInfo,payload);
            if (!response || (Object.prototype.toString.call(response) === '[object Array]' && response.length === 0)) {
                return
            }else{
                if(response.code !== 200){
                    message.error(response.message);
                }
                // else{
                //     message.success(formatMessage({id:'complaint.info'}));
                // }
            }
            const code = response.code;
            if(callback) callback(code);
            },
        *getComplaintList({payload,callback},{call,put}){
            const response = yield call(getComplaintList, payload);
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
                result.list[i].key = i;
                result.list[i].num = payload.startRow+1+i;
            }
            result.totalCount = response.data.count;
            yield put({
                type: 'saveComplaintList',
                payload: result,
            });

        },
        *getDetail({ payload, callback}, { call, put }) {
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
        *putOpinion({payload,callback},{call,put}){
            const response = yield call(putOpinion,payload);
            if (!response || (Object.prototype.toString.call(response) === '[object Array]' && response.length === 0)) {
                return
            }else{
                if(response.code !== 200){
                    message.error(response.message);
                }else{
                    message.success(formatMessage({id:'complaint.opinion.okinfo'}));
                }
            }
            if(callback) callback();           
        },
    },

    reducers:{
        saveComplaintList(state,action){
            return {
                ...state,
                complaintList: action.payload.list,
                totalCount: action.payload.totalCount,
            };
        },
        saveDetail(state,action){
            return {
                ...state,
                detail: action.payload,
            }
        },
    }
    
}
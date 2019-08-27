import { getDicTypes, getDicDetails, } from '../services/index';
import { message } from 'antd';

export default {
  namespace: 'dictionary',

  state: {
    typeList: [],

  },

  effects: {
    *getDictionaryTypes({ payload, callback}, { call, put }) {
      const response = yield call(getDicTypes, payload);
      if(!response||(Object.prototype.toString.call(response)==='[object Array]'&&response.length===0)){
        return
      }else{
        if(response.code !== 200){
          message.error(response.message);
          return
        }
      }
      let result = response.data;
      yield put({
        type: 'savegetDictionaryTypes',
        payload: result,
      });
    },
    *getDictionary({ payload, callback}, { call, put }) {
      const response = yield call(getDicDetails, payload);
      if(!response||(Object.prototype.toString.call(response)==='[object Array]'&&response.length===0)){
        return
      }else{
        if(response.code !== 200){
          message.error(response.message);
          return
        }
      }
      let dictionary = payload;
      dictionary.list = response.data.list;
      if (callback) callback(dictionary);
    },
    
  },

  reducers: {
    savegetDictionaryTypes(state, action) {
      return {
        ...state,
        typeList: action.payload,
      };
    },
  },
};

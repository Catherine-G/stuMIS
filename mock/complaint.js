
export function getComplaintList(req,res,u,b){
    const result = {  
        "code": 200,
        "data": {
            "endRow": 0,
            "firstPage": 0,
            "hasNextPage": true,
            "hasPreviousPage": true,
            "isFirstPage": true,
            "isLastPage": true,
            "lastPage": 0,
            "list": [
                {
                    id: 1,
                    title: '测试建议信息',
                    createTime: '1550210338000',
                    content: 'success',
                    telephone: '123',
                    status: 1,
                    traceID: "11bc6429-ab76-4ba2-ae5d-48349062cef0",
                },
                {
                    id: 2,
                    title: '1111wwwssklkxl',
                    createTime: '1550210448000',
                    content: 'success',
                    telephone: '111111',
                    status: 2,
                    traceID: "11bc6429-ab76-4ba2-ae5d-48349062cef1",
                },
                {
                    id: 3,
                    title: 'searchaaaa',
                    createTime: '1550210448000',
                    content: 'success',
                    telephone: '111111',
                    status: 3,
                    traceID: "11bc6429-ab76-4ba2-ae5d-48349062cef1",
                },
            ],
            "navigateFirstPage": 0,
            "navigateLastPage": 0,
            "navigatePages": 0,
            "navigatepageNums": [],
            "nextPage": 0,
            "pageNum": 0,
            "pageSize": 0,
            "pages": 0,
            "prePage": 0,
            "size": 0,
            "startRow": 0,
            "count": 3,
        },
        "message": "Success",
        "successful": true,
        "traceID": "11bc6429-ab76-4ba2-ae5d-48349062cef0"
      
    };
    if (res && res.json) {
        res.json(result);
      } else {
        return result;
      } 
}

export function submitComplaint(req,res,u,b){
    const result = {
        "code": 200,
    }
    if (res && res.json) {
        res.json(result);
      } else {
        return result;
      } 
      
}

export function getComplaintDetail(req,res,u,b){
    const result = {  
        "code": 200,
        "data": {
            id: 1,
            title: '测试建议信息',
            createTime: '1550210338000',
            content: '描述信息描述信息，描述信息描述信息描述信息？？？描述信息。描述信息描述信息描述信息？？？描述信息。描述信息描述信息描述信息？？？描述信息。描述信息描述信息描述信息？？？描述信息。',
            telephone: '13111111111',
            status: 1,
            traceID: "11bc6429-ab76-4ba2-ae5d-48349062cef0",
            opinion: 'buyucaina',
        },
        "message": "Success",
        "successful": true,
        "traceID": "11bc6429-ab76-4ba2-ae5d-48349062cef0"
      
    };
    if (res && res.json) {
      res.json(result);
      } else {
        return result;
      } 
}

let dicList = [
    {
      type: 'complaint_status',
      list: [
        {
          "createTime": 1547436160000,
          "englishName": "not handle",
          "id": 1,
          "name": "未处理",
          "state": 1,
          "type": "complaint_status",
          "typeName": "建议处理状态",
          "updateTime": 1547436160000,
          "value": "1"
        },
        {
          "createTime": 1547436160000,
          "englishName": "handling",
          "id": 2,
          "name": "处理中",
          "state": 1,
          "type": "complaint_status",
          "typeName": "建议处理状态",
          "updateTime": 1547436160000,
          "value": "2"
        },
        {
          "createTime": 1547436160000,
          "englishName": "handled",
          "id": 3,
          "name": "已处理",
          "state": 1,
          "type": "complaint_status",
          "typeName": "建议处理状态",
          "updateTime": 1547436160000,
          "value": "3"
        }
      ],
    },
]

export function getDicDetails(req, res, u, b) {
    const body = (b && b.body) || req.body;
    const result = {
      "successful": true,
      "code": 200,
      "message": "string",
      "data": {
        "count": 3,
        "list": [
          {
            "createTime": 1547436160000,
            "englishName": "not handle",
            "id": 1,
            "name": "未处理",
            "state": 1,
            "type": "complaint_status",
            "typeName": "建议处理状态",
            "updateTime": 1547436160000,
            "value": "1"
          },
          {
            "createTime": 1547436160000,
            "englishName": "handling",
            "id": 2,
            "name": "处理中",
            "state": 1,
            "type": "complaint_status",
            "typeName": "建议处理状态",
            "updateTime": 1547436160000,
            "value": "2"
          },
          {
            "createTime": 1547436160000,
            "englishName": "handled",
            "id": 3,
            "name": "已处理",
            "state": 1,
            "type": "complaint_status",
            "typeName": "建议处理状态",
            "updateTime": 1547436160000,
            "value": "3"
          }
        ],
        "pageCount": 1,
        "pageSize": 3,
        "pageNum": 1
      },
      "traceID": "string"
    };
  
    for (var i = 0; i < dicList.length; i++) {
      if (dicList[i].type == body.type) {
        result.data.list = dicList[i].list;
        break;
      }
    }
    if (res && res.json) {
      res.json(result);
    } else {
      return result;
    }
  }



export default{
    'POST /complaint': submitComplaint,
    'PUT /complaint': submitComplaint,
    'GET /complaint/queryAll': getComplaintList,
    'POST /complaint/query': getComplaintList,
    'GET /complaint': getComplaintDetail,

    'POST /dictionary/query': getDicDetails,
    // 'GET /dictionary/queryAllType': getDicAllType,
    // 'POST /bcasversion/query': getVersionDicDetails,
}
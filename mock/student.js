import {parse} from "url";

let datasource = [
  {
  "key": 1,
  snumber: '1401',
  name: '胡AA',
  sex: '女',
  age: 32,
  professional: '工商管理',
}, {
  key: 2,
  snumber: '1402',
  name: '张三',
  sex: '男',
  age: 18,
  professional: '工商管理',
},
  {
    key: 3,
    snumber: '1403',
    name: '李四',
    sex: '男',
    age: 20,
    professional: '信息管理',
  },
  {
    "key": 4,
    "snumber": "1709054141",
    "name": "杨青旺",
    "sex": "女",
    "age": 18,
    "professional": "工商管理"
  },
  {
    "key": 5,
    "snumber": "1709054125",
    "name": "文彩云",
    "sex": "女",
    "age": 19,
    "professional": "工商管理"
  },
  {
    "key": 6,
    "snumber": "1709074149",
    "name": "梁廷东",
    "sex": "女",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 7,
    "snumber": "1709064232",
    "name": "苟三梅",
    "sex": "女",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 8,
    "snumber": "1609014127",
    "name": "毛三如",
    "sex": "女",
    "age": 22,
    "professional": "经济学"
  },
  {
    "key": 9,
    "snumber": "s1709022",
    "name": "顾东宁",
    "sex": "女",
    "age": 23,
    "professional": "工业工程"
  },
  {
    "key": 10,
    "snumber": "1709024102",
    "name": "安琪",
    "sex": "女",
    "age": 18,
    "professional": "经济统计学"
  },
  {
    "key": 11,
    "snumber": "s1709016",
    "name": "翟禄祥",
    "sex": "男",
    "age": 19,
    "professional": "工业工程"
  },
  {
    "key": 12,
    "snumber": "S1509025",
    "name": "高振豪",
    "sex": "男",
    "age": 20,
    "professional": "工业工程"
  },
  {
    "key": 13,
    "snumber": "S1509018",
    "name": "潘小换",
    "sex": "男",
    "age": 21,
    "professional": "管理科学与工程"
  },
  {
    "key": 14,
    "snumber": "1709044130",
    "name": "周晨曦",
    "sex": "男",
    "age": 22,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 15,
    "snumber": "1709074241",
    "name": "周钧",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 16,
    "snumber": "1709074122",
    "name": "马嘉悦",
    "sex": "男",
    "age": 21,
    "professional": "财务管理"
  },
  {
    "key": 17,
    "snumber": "1709034237",
    "name": "马宏亮",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 18,
    "snumber": "1709034211",
    "name": "张三卓",
    "sex": "女",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 19,
    "snumber": "1709044128",
    "name": "冯三",
    "sex": "女",
    "age": 18,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 20,
    "snumber": "1709034213",
    "name": "刘三",
    "sex": "女",
    "age": 19,
    "professional": "国际经济与贸易"
  },
  {
    "key": 21,
    "snumber": "1709064248",
    "name": "陈秋平",
    "sex": "女",
    "age": 20,
    "professional": "市场营销"
  },
  {
    "key": 22,
    "snumber": "1709024225",
    "name": "李昌敏",
    "sex": "女",
    "age": 21,
    "professional": "国际经济与贸易"
  },
  {
    "key": 23,
    "snumber": "1709034245",
    "name": "李杨",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 24,
    "snumber": "1709034126",
    "name": "敬曦涵",
    "sex": "男",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 25,
    "snumber": "1709074248",
    "name": "李明",
    "sex": "男",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 26,
    "snumber": "1709074134",
    "name": "曾仲英",
    "sex": "男",
    "age": 19,
    "professional": "财务管理"
  },
  {
    "key": 27,
    "snumber": "s1709013",
    "name": "何毅",
    "sex": "男",
    "age": 20,
    "professional": "工业工程"
  },
  {
    "key": 28,
    "snumber": "1709034127",
    "name": "刘钰霜",
    "sex": "男",
    "age": 21,
    "professional": "国际经济与贸易"
  },
  {
    "key": 29,
    "snumber": "1709074235",
    "name": "周致立",
    "sex": "男",
    "age": 22,
    "professional": "财务管理"
  },
  {
    "key": 30,
    "snumber": "1709074236",
    "name": "白三颖",
    "sex": "女",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 31,
    "snumber": "1709074136",
    "name": "李俊娴",
    "sex": "男",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 32,
    "snumber": "1709024136",
    "name": "高代凤",
    "sex": "女",
    "age": 19,
    "professional": "经济统计学"
  },
  {
    "key": 33,
    "snumber": "1709014113",
    "name": "杨思蕊",
    "sex": "女",
    "age": 20,
    "professional": "经济学"
  },
  {
    "key": 34,
    "snumber": "1709034117",
    "name": "王银",
    "sex": "女",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 35,
    "snumber": "1709014114",
    "name": "程三君",
    "sex": "男",
    "age": 18,
    "professional": "经济学"
  },
  {
    "key": 36,
    "snumber": "1709024132",
    "name": "梁美三",
    "sex": "男",
    "age": 19,
    "professional": "经济统计学"
  },
  {
    "key": 37,
    "snumber": "1409074248",
    "name": "覃柱华",
    "sex": "男",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 38,
    "snumber": "1709074148",
    "name": "石谭辉",
    "sex": "男",
    "age": 21,
    "professional": "财务管理"
  },
  {
    "key": 39,
    "snumber": "1709034230",
    "name": "张三",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 40,
    "snumber": "1709044104",
    "name": "智毛毛",
    "sex": "男",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 41,
    "snumber": "1709074205",
    "name": "吴岚",
    "sex": "男",
    "age": 21,
    "professional": "财务管理"
  },
  {
    "key": 42,
    "snumber": "1721094202",
    "name": "白三英",
    "sex": "男",
    "age": 22,
    "professional": "财务管理"
  },
  {
    "key": 43,
    "snumber": "1721094108",
    "name": "邵璐",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 44,
    "snumber": "1709014130",
    "name": "张三峰",
    "sex": "男",
    "age": 18,
    "professional": "经济学"
  },
  {
    "key": 45,
    "snumber": "1709064107",
    "name": "韩康妮",
    "sex": "男",
    "age": 19,
    "professional": "市场营销"
  },
  {
    "key": 46,
    "snumber": "1709074109",
    "name": "宋立琪",
    "sex": "男",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 47,
    "snumber": "1709064207",
    "name": "王文婧",
    "sex": "男",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 48,
    "snumber": "1709024106",
    "name": "郑璐璐",
    "sex": "男",
    "age": 22,
    "professional": "经济统计学"
  },
  {
    "key": 49,
    "snumber": "1709074209",
    "name": "杨钰煊",
    "sex": "女",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 50,
    "snumber": "1709024109",
    "name": "杜三娟",
    "sex": "女",
    "age": 18,
    "professional": "经济统计学"
  },
  {
    "key": 51,
    "snumber": "1709074111",
    "name": "郭佳",
    "sex": "男",
    "age": 19,
    "professional": "财务管理"
  },
  {
    "key": 52,
    "snumber": "1709074210",
    "name": "孔三",
    "sex": "女",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 53,
    "snumber": "1709034204",
    "name": "王凯慧",
    "sex": "男",
    "age": 21,
    "professional": "国际经济与贸易"
  },
  {
    "key": 54,
    "snumber": "1721114213",
    "name": "苏梦南",
    "sex": "女",
    "age": 22,
    "professional": "财务管理"
  },
  {
    "key": 55,
    "snumber": "1709074112",
    "name": "李雨三",
    "sex": "女",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 56,
    "snumber": "1627094247",
    "name": "宋长胜",
    "sex": "男",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 57,
    "snumber": "1527094107",
    "name": "胡文霞",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 58,
    "snumber": "1609064204",
    "name": "车星星",
    "sex": "男",
    "age": 18,
    "professional": "市场营销"
  },
  {
    "key": 59,
    "snumber": "1709074211",
    "name": "杨素三",
    "sex": "男",
    "age": 19,
    "professional": "财务管理"
  },
  {
    "key": 60,
    "snumber": "1709074113",
    "name": "秦雅欣",
    "sex": "男",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 61,
    "snumber": "1709014103",
    "name": "吴少锦",
    "sex": "男",
    "age": 21,
    "professional": "经济学"
  },
  {
    "key": 62,
    "snumber": "1709034105",
    "name": "张宇星",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 63,
    "snumber": "1709074213",
    "name": "申梦娇",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 64,
    "snumber": "1709074114",
    "name": "徐新雨",
    "sex": "男",
    "age": 21,
    "professional": "财务管理"
  },
  {
    "key": 65,
    "snumber": "s1709025",
    "name": "鲍栎月",
    "sex": "男",
    "age": 22,
    "professional": "管理科学与工程"
  },
  {
    "key": 66,
    "snumber": "1709034205",
    "name": "段红宇",
    "sex": "男",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 67,
    "snumber": "1709034234",
    "name": "崔健",
    "sex": "男",
    "age": 18,
    "professional": "国际经济与贸易"
  },
  {
    "key": 68,
    "snumber": "1709034135",
    "name": "柴伟东",
    "sex": "男",
    "age": 19,
    "professional": "国际经济与贸易"
  },
  {
    "key": 69,
    "snumber": "1709034206",
    "name": "宋雨莎",
    "sex": "男",
    "age": 20,
    "professional": "国际经济与贸易"
  },
  {
    "key": 70,
    "snumber": "1709044112",
    "name": "王宁",
    "sex": "男",
    "age": 21,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 71,
    "snumber": "1709064236",
    "name": "李鸣",
    "sex": "女",
    "age": 22,
    "professional": "市场营销"
  },
  {
    "key": 72,
    "snumber": "1709064209",
    "name": "巨鑫",
    "sex": "女",
    "age": 23,
    "professional": "市场营销"
  },
  {
    "key": 73,
    "snumber": "1709074115",
    "name": "张颖",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 74,
    "snumber": "1709064110",
    "name": "翟晓月",
    "sex": "女",
    "age": 19,
    "professional": "市场营销"
  },
  {
    "key": 75,
    "snumber": "1709044113",
    "name": "杨希男",
    "sex": "女",
    "age": 20,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 76,
    "snumber": "1709044114",
    "name": "白锦三",
    "sex": "女",
    "age": 21,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 77,
    "snumber": "1709034107",
    "name": "孟三三",
    "sex": "女",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 78,
    "snumber": "1709024114",
    "name": "梁盈",
    "sex": "女",
    "age": 23,
    "professional": "经济统计学"
  },
  {
    "key": 79,
    "snumber": "1427094119",
    "name": "郭凯卿",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 80,
    "snumber": "s1709028",
    "name": "孙晓南",
    "sex": "女",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 81,
    "snumber": "1709074117",
    "name": "高天春",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 82,
    "snumber": "1709034207",
    "name": "樊晓婷",
    "sex": "男",
    "age": 19,
    "professional": "国际经济与贸易"
  },
  {
    "key": 83,
    "snumber": "1709064112",
    "name": "郭凡",
    "sex": "男",
    "age": 20,
    "professional": "市场营销"
  },
  {
    "key": 84,
    "snumber": "1709024148",
    "name": "刘先科",
    "sex": "男",
    "age": 21,
    "professional": "经济管理学"
  },
  {
    "key": 85,
    "snumber": "1709044117",
    "name": "关欣怡",
    "sex": "男",
    "age": 22,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 86,
    "snumber": "1709034236",
    "name": "薛天培",
    "sex": "男",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 87,
    "snumber": "1709024118",
    "name": "贾雅茹",
    "sex": "男",
    "age": 21,
    "professional": "经济统计学"
  },
  {
    "key": 88,
    "snumber": "1709074219",
    "name": "马梅芬",
    "sex": "男",
    "age": 22,
    "professional": "财务管理"
  },
  {
    "key": 89,
    "snumber": "1709044119",
    "name": "王剑宇",
    "sex": "男",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 90,
    "snumber": "s1509020",
    "name": "赵聪泽",
    "sex": "男",
    "age": 18,
    "professional": "控制工程"
  },
  {
    "key": 91,
    "snumber": "1709074120",
    "name": "杨卓鎏",
    "sex": "男",
    "age": 19,
    "professional": "财物管理"
  },
  {
    "key": 92,
    "snumber": "1709074139",
    "name": "姚旭",
    "sex": "男",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 93,
    "snumber": "1709024149",
    "name": "周哲辉",
    "sex": "男",
    "age": 21,
    "professional": "经济统计学"
  },
  {
    "key": 94,
    "snumber": "1709034209",
    "name": "宁江霞",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 95,
    "snumber": "1709064138",
    "name": "邓博强",
    "sex": "男",
    "age": 23,
    "professional": "市场营销"
  },
  {
    "key": 96,
    "snumber": "1527094147",
    "name": "刘杰",
    "sex": "男",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 97,
    "snumber": "1709044141",
    "name": "卫庚",
    "sex": "男",
    "age": 19,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 98,
    "snumber": "1709044140",
    "name": "王三宝",
    "sex": "女",
    "age": 20,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 99,
    "snumber": "1709064237",
    "name": "苏晓晨",
    "sex": "女",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 100,
    "snumber": "1709064238",
    "name": "张倬荣",
    "sex": "女",
    "age": 22,
    "professional": "市场营销"
  },
  {
    "key": 101,
    "snumber": "1709024147",
    "name": "胡智旋",
    "sex": "女",
    "age": 23,
    "professional": "经济统计学"
  },
  {
    "key": 102,
    "snumber": "1709074140",
    "name": "王晨",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 103,
    "snumber": "1709044120",
    "name": "吴心如",
    "sex": "女",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 104,
    "snumber": "1709014104",
    "name": "王沛",
    "sex": "女",
    "age": 18,
    "professional": "经济学"
  },
  {
    "key": 105,
    "snumber": "1709064211",
    "name": "雷蓉",
    "sex": "女",
    "age": 19,
    "professional": "市场营销"
  },
  {
    "key": 106,
    "snumber": "s1709044",
    "name": "谢刘三",
    "sex": "女",
    "age": 20,
    "professional": "项目管理"
  },
  {
    "key": 107,
    "snumber": "1709064137",
    "name": "姚祺",
    "sex": "女",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 108,
    "snumber": "1709064212",
    "name": "孙三晴",
    "sex": "女",
    "age": 22,
    "professional": "市场营销"
  },
  {
    "key": 109,
    "snumber": "1709064113",
    "name": "吕慧",
    "sex": "女",
    "age": 23,
    "professional": "市场营销"
  },
  {
    "key": 110,
    "snumber": "1709034101",
    "name": "王思娟",
    "sex": "女",
    "age": 21,
    "professional": "国际经济与贸易"
  },
  {
    "key": 111,
    "snumber": "1709074118",
    "name": "王安琦",
    "sex": "女",
    "age": 22,
    "professional": "财务管理专业"
  },
  {
    "key": 112,
    "snumber": "1709044118",
    "name": "原莹冰",
    "sex": "女",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 113,
    "snumber": "1709074119",
    "name": "侯佳鑫",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 114,
    "snumber": "s1609007",
    "name": "侯亚娟",
    "sex": "男",
    "age": 19,
    "professional": "工商管理"
  },
  {
    "key": 115,
    "snumber": "1709014108",
    "name": "史赵圆",
    "sex": "男",
    "age": 20,
    "professional": "经济学"
  },
  {
    "key": 116,
    "snumber": "s1709041",
    "name": "祝佳韬",
    "sex": "男",
    "age": 21,
    "professional": "物流工程"
  },
  {
    "key": 117,
    "snumber": "1709074220",
    "name": "王改便",
    "sex": "男",
    "age": 22,
    "professional": "财务管理"
  },
  {
    "key": 118,
    "snumber": "1709044110",
    "name": "张靖",
    "sex": "男",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 119,
    "snumber": "1709024119",
    "name": "康慧",
    "sex": "男",
    "age": 18,
    "professional": "经济统计学"
  },
  {
    "key": 120,
    "snumber": "1709064116",
    "name": "韩嵘",
    "sex": "男",
    "age": 19,
    "professional": "市场营销"
  },
  {
    "key": 121,
    "snumber": "s1609022",
    "name": "张靖琳",
    "sex": "男",
    "age": 20,
    "professional": "管理科学与工程"
  },
  {
    "key": 122,
    "snumber": "1709064216",
    "name": "马文",
    "sex": "男",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 123,
    "snumber": "1709044121",
    "name": "孙三",
    "sex": "男",
    "age": 22,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 124,
    "snumber": "1709044122",
    "name": "朱江霞",
    "sex": "男",
    "age": 23,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 125,
    "snumber": "1709064218",
    "name": "尹冰倩",
    "sex": "男",
    "age": 18,
    "professional": "市场营销"
  },
  {
    "key": 126,
    "snumber": "1409024124",
    "name": "甘莹莹",
    "sex": "男",
    "age": 23,
    "professional": "经济统计学"
  },
  {
    "key": 127,
    "snumber": "1709024122",
    "name": "温娅婧",
    "sex": "男",
    "age": 18,
    "professional": "经济统计学"
  },
  {
    "key": 128,
    "snumber": "s1709006",
    "name": "尉聪聪",
    "sex": "男",
    "age": 19,
    "professional": "工商管理"
  },
  {
    "key": 129,
    "snumber": "1709034110",
    "name": "霍秭瑛",
    "sex": "男",
    "age": 20,
    "professional": "国际经济与贸易"
  },
  {
    "key": 130,
    "snumber": "15934518049",
    "name": "周三",
    "sex": "女",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 131,
    "snumber": "1709044124",
    "name": "杨慧",
    "sex": "女",
    "age": 22,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 132,
    "snumber": "1509034331",
    "name": "郭红卫",
    "sex": "女",
    "age": 23,
    "professional": "国际经济与贸易"
  },
  {
    "key": 133,
    "snumber": "1709014109",
    "name": "张哲",
    "sex": "女",
    "age": 21,
    "professional": "经济学"
  },
  {
    "key": 134,
    "snumber": "1709054131",
    "name": "张旭辉",
    "sex": "女",
    "age": 22,
    "professional": "工商管理"
  },
  {
    "key": 135,
    "snumber": "1709054113",
    "name": "贺三三",
    "sex": "女",
    "age": 23,
    "professional": "工商管理"
  },
  {
    "key": 136,
    "snumber": "1709074123",
    "name": "薛荣",
    "sex": "女",
    "age": 18,
    "professional": "财务管理"
  },
  {
    "key": 137,
    "snumber": "1709074222",
    "name": "宋荟",
    "sex": "女",
    "age": 19,
    "professional": "财务管理"
  },
  {
    "key": 138,
    "snumber": "1709044123",
    "name": "段海慧",
    "sex": "女",
    "age": 20,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 139,
    "snumber": "1709044145",
    "name": "侯林林",
    "sex": "女",
    "age": 21,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 140,
    "snumber": "1709044125",
    "name": "马倩",
    "sex": "女",
    "age": 22,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 141,
    "snumber": "1709054132",
    "name": "白磊",
    "sex": "女",
    "age": 23,
    "professional": "工商管理"
  },
  {
    "key": 142,
    "snumber": "1709064120",
    "name": "刘晓鑫",
    "sex": "女",
    "age": 18,
    "professional": "市场营销"
  },
  {
    "key": 143,
    "snumber": "1709064219",
    "name": "王凤莲",
    "sex": "女",
    "age": 19,
    "professional": "市场营销"
  },
  {
    "key": 144,
    "snumber": "1709074221",
    "name": "房亚兰",
    "sex": "男",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 145,
    "snumber": "1709064217",
    "name": "李静雯",
    "sex": "男",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 146,
    "snumber": "1709034210",
    "name": "周丰敏",
    "sex": "男",
    "age": 22,
    "professional": "国际经济与贸易"
  },
  {
    "key": 147,
    "snumber": "S1609016",
    "name": "郭瑞三",
    "sex": "男",
    "age": 23,
    "professional": "管理科学与工程"
  },
  {
    "key": 148,
    "snumber": "1709034238",
    "name": "李越",
    "sex": "男",
    "age": 18,
    "professional": "国际经济与贸易"
  },
  {
    "key": 149,
    "snumber": "1709064121",
    "name": "张博",
    "sex": "男",
    "age": 23,
    "professional": "市场营销"
  },
  {
    "key": 150,
    "snumber": "1709044127",
    "name": "赵银燕",
    "sex": "男",
    "age": 18,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 151,
    "snumber": "1709034111",
    "name": "陈超英",
    "sex": "男",
    "age": 19,
    "professional": "国际经济与贸易"
  },
  {
    "key": 152,
    "snumber": "1709024125",
    "name": "温若峰",
    "sex": "男",
    "age": 20,
    "professional": "经济统计学"
  },
  {
    "key": 153,
    "snumber": "1709064122",
    "name": "杨聪慧",
    "sex": "男",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 154,
    "snumber": "1709024151",
    "name": "史瑞兵",
    "sex": "男",
    "age": 22,
    "professional": "经济统计学"
  },
  {
    "key": 155,
    "snumber": "1709024126",
    "name": "郭舒玲",
    "sex": "男",
    "age": 23,
    "professional": "经济统计学"
  },
  {
    "key": 156,
    "snumber": "1709064140",
    "name": "奥迪",
    "sex": "男",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 157,
    "snumber": "1721104233",
    "name": "马蓉",
    "sex": "男",
    "age": 22,
    "professional": "市场营销"
  },
  {
    "key": 158,
    "snumber": "1709074223",
    "name": "李婷",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 159,
    "snumber": "1709024115",
    "name": "刘小飞",
    "sex": "男",
    "age": 18,
    "professional": "经济统计学"
  },
  {
    "key": 160,
    "snumber": "1709054114",
    "name": "任澎湃",
    "sex": "男",
    "age": 19,
    "professional": "工商管理"
  },
  {
    "key": 161,
    "snumber": "1709044146",
    "name": "高云鹏",
    "sex": "男",
    "age": 20,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 162,
    "snumber": "s1709018",
    "name": "程俊珍",
    "sex": "男",
    "age": 21,
    "professional": "工业工程"
  },
  {
    "key": 163,
    "snumber": "1709024127",
    "name": "刘慧三",
    "sex": "男",
    "age": 22,
    "professional": "经济统计学"
  },
  {
    "key": 164,
    "snumber": "1627094141",
    "name": "吴小莉",
    "sex": "男",
    "age": 23,
    "professional": "财务管理"
  },
  {
    "key": 165,
    "snumber": "1709064139",
    "name": "靳于锋",
    "sex": "女",
    "age": 18,
    "professional": "市场营销"
  },
  {
    "key": 166,
    "snumber": "1314011914",
    "name": "张志玲",
    "sex": "女",
    "age": 19,
    "professional": "物流工程"
  },
  {
    "key": 167,
    "snumber": "1709074243",
    "name": "张学禹",
    "sex": "女",
    "age": 20,
    "professional": "财务管理"
  },
  {
    "key": 168,
    "snumber": "1709064220",
    "name": "韩琪",
    "sex": "女",
    "age": 21,
    "professional": "市场营销"
  },
  {
    "key": 169,
    "snumber": "1709024150",
    "name": "韩兴宇",
    "sex": "女",
    "age": 22,
    "professional": "经济统计学"
  },
  {
    "key": 170,
    "snumber": "1709064239",
    "name": "曹虎伟",
    "sex": "女",
    "age": 23,
    "professional": "市场营销"
  },
  {
    "key": 171,
    "snumber": "1721104253",
    "name": "田靖国",
    "sex": "女",
    "age": 18,
    "professional": "市场营销"
  },
  {
    "key": 172,
    "snumber": "1609014120",
    "name": "龙三瑞",
    "sex": "男",
    "age": 20,
    "professional": "经济学"
  },
  {
    "key": 173,
    "snumber": "170944132",
    "name": "周美廷",
    "sex": "男",
    "age": 21,
    "professional": "信息管理与信息系统"
  },
  {
    "key": 174,
    "snumber": "1709034147",
    "name": "熊长源",
    "sex": "男",
    "age": 21,
    "professional": "国际经济与贸易"
  },
  {
    "key": 175,
    "snumber": "1709024128",
    "name": "王瑶",
    "sex": "男",
    "age": 19,
    "professional": "经济统计学"
  },
];

let data = [{
  "key": 1,
  snumber: '1401',
  name: '胡AA',
  sex: '女',
  age: 32,
  professional: '工商管理',
}, {
  key: 2,
  snumber: '1402',
  name: '张三',
  sex: '男',
  age: 18,
  professional: '工商管理',
},
  {
    key: 3,
    snumber: '1403',
    name: '李四',
    sex: '男',
    age: 20,
    professional: '信息管理',
  },
  {
    "key": 4,
    "snumber": "1709054141",
    "name": "杨洋",
    "sex": "女",
    "age": 18,
    "professional": "工商管理"
  },
  {
    "key": 5,
    "snumber": "1709054125",
    "name": "张英",
    "sex": "女",
    "age": 19,
    "professional": "工商管理"
  },];
export const getStudent = (req, res,u) => {
  let url = u;
  if (!url || Array.prototype.toString.call(url) !== '[array String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = [...datasource];
  if (params.snumber) {
    dataSource = dataSource.filter(data => data.snumber.indexOf(params.snumber) > -1);
  }
  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }
  if (params.professional) {
    dataSource = dataSource.filter(data => data.professional.indexOf(params.professional) > -1);
  }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }
  // let dataSource = [...datasource];
  const result = {
    student: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }


   // res.json(datasource);
};
export const postStudent = (req,res,b,u) => {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }
  const body = (b && b.body) || req.body;
  const { method, snumber, name,sex,age,professional } = body;

  switch (method) {
    case 'delete':
      datasource = datasource.filter(item => snumber.indexOf(item.snumber) === -1);
      // datasource = datasource.filter(item => item.snumber !== snumber);
      break;
    case 'post':
      const i = Math.ceil(Math.random() * 10000);
      datasource.unshift({
        key: i,
        snumber,
        name,
        sex,
        age,
        professional,
      });
      break;
    case 'edit':
      const index = datasource.findIndex(item => snumber === item.snumber);
      if(index > -1){
        const ii = Math.ceil(Math.random() * 10000);
        datasource.splice(index,1,{
          key: ii,
          snumber,
          name,
          sex,
          age,
          professional,
        })
      }
      // datasource.push({
      //   name,
      //   sex,
      //   age,
      //   professional,
      // });
      break;
    default:
      break;
  }
 
  const result = {
    student: datasource,
    pagination: {
      total: datasource.length,
    },
  };
  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}

export function getStudentList(req,res, u, b){
  const result = {
    "successful": true,
      "code": 200,
      "message": "success",
      "data": {
        "count": 5,
        "list": data,
        "pageCount": 1,
        "pageSize": 5,
        "pageNum": 1
      },
      "traceID": "string"
  };
  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
  // console.log(result);
}
export function getStudentDetail(req,res, u, b){
  const result = {
    "successful": true,
      "code": 200,
      "message": "success",
      "data": {
        "key": 1,
        snumber: '1401',
        name: '胡AA',
        sex: '女',
        age: 32,
        professional: '工商管理',
      },
      "traceID": "string"
  };
  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export function putStuinfo(req,res, u, b){
  const result = {
    "successful": true,
      "code": 200,
      "message": "success",
      "traceID": "string"
  };
  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
export default {
  'POST /student/query': getStudentList,
  'GET /student': getStudentDetail,
  'PUT /student/edit': putStuinfo,
  'POST /student/add': putStuinfo,
}


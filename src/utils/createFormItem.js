import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import moment from 'moment';
import { Select } from 'antd';

const Option = Select.Option;
// 后台验证码地址
export const verifyCode = '/gt/auth/authentication/verifyCode';
// export const verifyCode = 'http://XXX.XXX.XXX.XXX:8000/authentication/verifyCode';
export const getAllPageSize = 10000;

export function getDesc(jsonArr,val) {
  // const locale = localStorage.getItem('umi_locale');
  for (let item in jsonArr) {
    if( jsonArr[item].value == val){
			return jsonArr[item].name;
      // switch(locale)
      // {
      //   case "zh-CN":
      //     return jsonArr[item].name;
      //     break;
      //   case "en-US":
      //     return jsonArr[item].englishName;
      //     break;
      //   default:
      //     return jsonArr[item].englishName;
      //     break;
      // }
    }
  }
}

export function getOptions(jsonArr) {
	return jsonArr.map((item, key) => (
		<Option value={item.value} key={item.value}>
			{item.name}
		</Option>
	));
    // const locale=localStorage.getItem('umi_locale');
    // switch(locale)
    // {
    //   case "zh-CN":
    //     return jsonArr.map((item, key) => (
    //       <Option value={item.value} key={item.value}>
    //         {item.name}
    //       </Option>
    //     ));
    //     break;
    //   case "en-US":
    //     return jsonArr.map((item, key) => (
    //       <Option value={item.value} key={item.value}>
    //         {item.englishName}
    //       </Option>
    //     ));
    //     break;
    //   default:
    //     return jsonArr.map((item, key) => (
    //       <Option value={item.value} key={item.value}>
    //         {item.englishName}
    //       </Option>
    //     ));
    //     break;
    // }
}

export function getNationDesc(jsonArr,val) {
  const locale = localStorage.getItem('umi_locale');
  for (let item in jsonArr) {
    if( jsonArr[item].value == val){
			return jsonArr[item].name;
      switch(locale)
      {
        case "zh-CN":
          return jsonArr[item].name;
          break;
        case "en-US":
          return jsonArr[item].englishName;
          break;
        default:
          return jsonArr[item].englishName;
          break;
      }
    }
  }
}

export function getNationOptions(jsonArr) {
    const locale=localStorage.getItem('umi_locale');
    switch(locale)
    {
      case "zh-CN":
        return jsonArr.map((item, key) => (
          <Option value={item.value} key={item.value}>
            {item.name}
          </Option>
        ));
        break;
      case "en-US":
        return jsonArr.map((item, key) => (
          <Option value={item.value} key={item.value}>
            {item.englishName}
          </Option>
        ));
        break;
      default:
        return jsonArr.map((item, key) => (
          <Option value={item.value} key={item.value}>
            {item.englishName}
          </Option>
        ));
        break;
    }
}

export const nationList = [
	{
		"value": "AD",
		"englishName": "Andorra",
		"name": "安道尔"
	},
	{
		"value": "AE",
		"englishName": "United Arab Emirates",
		"name": "阿联酋"
	},
	{
		"value": "AF",
		"englishName": "Afghanistan",
		"name": "阿富汗"
	},
	{
		"value": "AG",
		"englishName": "Antigua & Barbuda",
		"name": "安提瓜和巴布达"
	},
	{
		"value": "AI",
		"englishName": "Anguilla",
		"name": "安圭拉"
	},
	{
		"value": "AL",
		"englishName": "Albania",
		"name": "阿尔巴尼亚"
	},
	{
		"value": "AM",
		"englishName": "Armenia",
		"name": "亚美尼亚"
	},
	{
		"value": "AO",
		"englishName": "Angola",
		"name": "安哥拉"
	},
	{
		"value": "AQ",
		"englishName": "Antarctica",
		"name": "南极洲"
	},
	{
		"value": "AR",
		"englishName": "Argentina",
		"name": "阿根廷"
	},
	{
		"value": "AS",
		"englishName": "American Samoa",
		"name": "美属萨摩亚"
	},
	{
		"value": "AT",
		"englishName": "Austria",
		"name": "奥地利"
	},
	{
		"value": "AU",
		"englishName": "Australia",
		"name": "澳大利亚"
	},
	{
		"value": "AW",
		"englishName": "Aruba",
		"name": "阿鲁巴"
	},
	{
		"value": "AX",
		"englishName": "?aland Island",
		"name": "奥兰群岛"
	},
	{
		"value": "AZ",
		"englishName": "Azerbaijan",
		"name": "阿塞拜疆"
	},
	{
		"value": "BA",
		"englishName": "Bosnia & Herzegovina",
		"name": "波黑"
	},
	{
		"value": "BB",
		"englishName": "Barbados",
		"name": "巴巴多斯"
	},
	{
		"value": "BD",
		"englishName": "Bangladesh",
		"name": "孟加拉"
	},
	{
		"value": "BE",
		"englishName": "Belgium",
		"name": "比利时"
	},
	{
		"value": "BF",
		"englishName": "Burkina",
		"name": "布基纳法索"
	},
	{
		"value": "BG",
		"englishName": "Bulgaria",
		"name": "保加利亚"
	},
	{
		"value": "BH",
		"englishName": "Bahrain",
		"name": "巴林"
	},
	{
		"value": "BI",
		"englishName": "Burundi",
		"name": "布隆迪"
	},
	{
		"value": "BJ",
		"englishName": "Benin",
		"name": "贝宁"
	},
	{
		"value": "BL",
		"englishName": "Saint Barthélemy",
		"name": "圣巴泰勒米岛"
	},
	{
		"value": "BM",
		"englishName": "Bermuda",
		"name": "百慕大"
	},
	{
		"value": "BN",
		"englishName": "Brunei",
		"name": "文莱"
	},
	{
		"value": "BO",
		"englishName": "Bolivia",
		"name": "玻利维亚"
	},
	{
		"value": "BQ",
		"englishName": "Caribbean Netherlands",
		"name": "荷兰加勒比区"
	},
	{
		"value": "BR",
		"englishName": "Brazil",
		"name": "巴西"
	},
	{
		"value": "BS",
		"englishName": "The Bahamas",
		"name": "巴哈马"
	},
	{
		"value": "BT",
		"englishName": "Bhutan",
		"name": "不丹"
	},
	{
		"value": "BV",
		"englishName": "Bouvet Island",
		"name": "布韦岛"
	},
	{
		"value": "BW",
		"englishName": "Botswana",
		"name": "博茨瓦纳"
	},
	{
		"value": "BY",
		"englishName": "Belarus",
		"name": "白俄罗斯"
	},
	{
		"value": "BZ",
		"englishName": "Belize",
		"name": "伯利兹"
	},
	{
		"value": "CA",
		"englishName": "Canada",
		"name": "加拿大"
	},
	{
		"value": "CC",
		"englishName": "Cocos (Keeling) Islands",
		"name": "科科斯群岛"
	},
	{
		"value": "CF",
		"englishName": "Central African Republic",
		"name": "中非"
	},
	{
		"value": "CH",
		"englishName": "Switzerland",
		"name": "瑞士"
	},
	{
		"value": "CL",
		"englishName": "Chile",
		"name": "智利"
	},
	{
		"value": "CM",
		"englishName": "Cameroon",
		"name": "喀麦隆"
	},
	{
		"value": "CO",
		"englishName": "Colombia",
		"name": "哥伦比亚"
	},
	{
		"value": "CR",
		"englishName": "Costa Rica",
		"name": "哥斯达黎加"
	},
	{
		"value": "CU",
		"englishName": "Cuba",
		"name": "古巴"
	},
	{
		"value": "CV",
		"englishName": "Cape Verde",
		"name": "佛得角"
	},
	{
		"value": "CX",
		"englishName": "Christmas Island",
		"name": "圣诞岛"
	},
	{
		"value": "CY",
		"englishName": "Cyprus",
		"name": "塞浦路斯"
	},
	{
		"value": "CZ",
		"englishName": "Czech Republic",
		"name": "捷克"
	},
	{
		"value": "DE",
		"englishName": "Germany",
		"name": "德国"
	},
	{
		"value": "DJ",
		"englishName": "Djibouti",
		"name": "吉布提"
	},
	{
		"value": "DK",
		"englishName": "Denmark",
		"name": "丹麦"
	},
	{
		"value": "DM",
		"englishName": "Dominica",
		"name": "多米尼克"
	},
	{
		"value": "DO",
		"englishName": "Dominican Republic",
		"name": "多米尼加"
	},
	{
		"value": "DZ",
		"englishName": "Algeria",
		"name": "阿尔及利亚"
	},
	{
		"value": "EC",
		"englishName": "Ecuador",
		"name": "厄瓜多尔"
	},
	{
		"value": "EE",
		"englishName": "Estonia",
		"name": "爱沙尼亚"
	},
	{
		"value": "EG",
		"englishName": "Egypt",
		"name": "埃及"
	},
	{
		"value": "EH",
		"englishName": "Western Sahara",
		"name": "西撒哈拉"
	},
	{
		"value": "ER",
		"englishName": "Eritrea",
		"name": "厄立特里亚"
	},
	{
		"value": "ES",
		"englishName": "Spain",
		"name": "西班牙"
	},
	{
		"value": "FI",
		"englishName": "Finland",
		"name": "芬兰"
	},
	{
		"value": "FJ",
		"englishName": "Fiji",
		"name": "斐济群岛"
	},
	{
		"value": "FK",
		"englishName": "Falkland Islands",
		"name": "马尔维纳斯群岛（ 福克兰）"
	},
	{
		"value": "FM",
		"englishName": "Federated States of Micronesia",
		"name": "密克罗尼西亚联邦"
	},
	{
		"value": "FO",
		"englishName": "Faroe Islands",
		"name": "法罗群岛"
	},
	{
		"value": "FR",
		"englishName": "France",
		"name": "法国"
	},
	{
		"value": "GA",
		"englishName": "Gabon",
		"name": "加蓬"
	},
	{
		"value": "GD",
		"englishName": "Grenada",
		"name": "格林纳达"
	},
	{
		"value": "GE",
		"englishName": "Georgia",
		"name": "格鲁吉亚"
	},
	{
		"value": "GF",
		"englishName": "French Guiana",
		"name": "法属圭亚那"
	},
	{
		"value": "GH",
		"englishName": "Ghana",
		"name": "加纳"
	},
	{
		"value": "GI",
		"englishName": "Gibraltar",
		"name": "直布罗陀"
	},
	{
		"value": "GL",
		"englishName": "Greenland",
		"name": "格陵兰"
	},
	{
		"value": "GN",
		"englishName": "Guinea",
		"name": "几内亚"
	},
	{
		"value": "GP",
		"englishName": "Guadeloupe",
		"name": "瓜德罗普"
	},
	{
		"value": "GQ",
		"englishName": "Equatorial Guinea",
		"name": "赤道几内亚"
	},
	{
		"value": "GR",
		"englishName": "Greece",
		"name": "希腊"
	},
	{
		"value": "GS",
		"englishName": "South Georgia and the South Sandwich Islands",
		"name": "南乔治亚岛和南桑威奇群岛"
	},
	{
		"value": "GT",
		"englishName": "Guatemala",
		"name": "危地马拉"
	},
	{
		"value": "GU",
		"englishName": "Guam",
		"name": "关岛"
	},
	{
		"value": "GW",
		"englishName": "Guinea-Bissau",
		"name": "几内亚比绍"
	},
	{
		"value": "GY",
		"englishName": "Guyana",
		"name": "圭亚那"
	},
	{
		"value": "HK",
		"englishName": "Hong Kong",
		"name": "中国（香港）"
	},
	{
		"value": "HM",
		"englishName": "Heard Island and McDonald Islands",
		"name": "赫德岛和麦克唐纳群岛"
	},
	{
		"value": "HN",
		"englishName": "Honduras",
		"name": "洪都拉斯"
	},
	{
		"value": "HR",
		"englishName": "Croatia",
		"name": "克罗地亚"
	},
	{
		"value": "HT",
		"englishName": "Haiti",
		"name": "海地"
	},
	{
		"value": "HU",
		"englishName": "Hungary",
		"name": "匈牙利"
	},
	{
		"value": "ID",
		"englishName": "Indonesia",
		"name": "印尼"
	},
	{
		"value": "IE",
		"englishName": "Ireland",
		"name": "爱尔兰"
	},
	{
		"value": "IL",
		"englishName": "Israel",
		"name": "以色列"
	},
	{
		"value": "IM",
		"englishName": "Isle of Man",
		"name": "马恩岛"
	},
	{
		"value": "IN",
		"englishName": "India",
		"name": "印度"
	},
	{
		"value": "IO",
		"englishName": "British Indian Ocean Territory",
		"name": "英属印度洋领地"
	},
	{
		"value": "IQ",
		"englishName": "Iraq",
		"name": "伊拉克"
	},
	{
		"value": "IR",
		"englishName": "Iran",
		"name": "伊朗"
	},
	{
		"value": "IS",
		"englishName": "Iceland",
		"name": "冰岛"
	},
	{
		"value": "IT",
		"englishName": "Italy",
		"name": "意大利"
	},
	{
		"value": "JE",
		"englishName": "Jersey",
		"name": "泽西岛"
	},
	{
		"value": "JM",
		"englishName": "Jamaica",
		"name": "牙买加"
	},
	{
		"value": "JO",
		"englishName": "Jordan",
		"name": "约旦"
	},
	{
		"value": "JP",
		"englishName": "Japan",
		"name": "日本"
	},
	{
		"value": "KH",
		"englishName": "Cambodia",
		"name": "柬埔寨"
	},
	{
		"value": "KI",
		"englishName": "Kiribati",
		"name": "基里巴斯"
	},
	{
		"value": "KM",
		"englishName": "The Comoros",
		"name": "科摩罗"
	},
	{
		"value": "KW",
		"englishName": "Kuwait",
		"name": "科威特"
	},
	{
		"value": "KY",
		"englishName": "Cayman Islands",
		"name": "开曼群岛"
	},
	{
		"value": "LB",
		"englishName": "Lebanon",
		"name": "黎巴嫩"
	},
	{
		"value": "LI",
		"englishName": "Liechtenstein",
		"name": "列支敦士登"
	},
	{
		"value": "LK",
		"englishName": "Sri Lanka",
		"name": "斯里兰卡"
	},
	{
		"value": "LR",
		"englishName": "Liberia",
		"name": "利比里亚"
	},
	{
		"value": "LS",
		"englishName": "Lesotho",
		"name": "莱索托"
	},
	{
		"value": "LT",
		"englishName": "Lithuania",
		"name": "立陶宛"
	},
	{
		"value": "LU",
		"englishName": "Luxembourg",
		"name": "卢森堡"
	},
	{
		"value": "LV",
		"englishName": "Latvia",
		"name": "拉脱维亚"
	},
	{
		"value": "LY",
		"englishName": "Libya",
		"name": "利比亚"
	},
	{
		"value": "MA",
		"englishName": "Morocco",
		"name": "摩洛哥"
	},
	{
		"value": "MC",
		"englishName": "Monaco",
		"name": "摩纳哥"
	},
	{
		"value": "MD",
		"englishName": "Moldova",
		"name": "摩尔多瓦"
	},
	{
		"value": "ME",
		"englishName": "Montenegro",
		"name": "黑山"
	},
	{
		"value": "MF",
		"englishName": "Saint Martin (France)",
		"name": "法属圣马丁"
	},
	{
		"value": "MG",
		"englishName": "Madagascar",
		"name": "马达加斯加"
	},
	{
		"value": "MH",
		"englishName": "Marshall islands",
		"name": "马绍尔群岛"
	},
	{
		"value": "MK",
		"englishName": "Republic of Macedonia (FYROM)",
		"name": "马其顿"
	},
	{
		"value": "ML",
		"englishName": "Mali",
		"name": "马里"
	},
	{
		"value": "MM",
		"englishName": "Myanmar (Burma)",
		"name": "缅甸"
	},
	{
		"value": "MO",
		"englishName": "Macao",
		"name": "中国（澳门）"
	},
	{
		"value": "MQ",
		"englishName": "Martinique",
		"name": "马提尼克"
	},
	{
		"value": "MR",
		"englishName": "Mauritania",
		"name": "毛里塔尼亚"
	},
	{
		"value": "MS",
		"englishName": "Montserrat",
		"name": "蒙塞拉特岛"
	},
	{
		"value": "MT",
		"englishName": "Malta",
		"name": "马耳他"
	},
	{
		"value": "MV",
		"englishName": "Maldives",
		"name": "马尔代夫"
	},
	{
		"value": "MW",
		"englishName": "Malawi",
		"name": "马拉维"
	},
	{
		"value": "MX",
		"englishName": "Mexico",
		"name": "墨西哥"
	},
	{
		"value": "MY",
		"englishName": "Malaysia",
		"name": "马来西亚"
	},
	{
		"value": "NA",
		"englishName": "Namibia",
		"name": "纳米比亚"
	},
	{
		"value": "NE",
		"englishName": "Niger",
		"name": "尼日尔"
	},
	{
		"value": "NF",
		"englishName": "Norfolk Island",
		"name": "诺福克岛"
	},
	{
		"value": "NG",
		"englishName": "Nigeria",
		"name": "尼日利亚"
	},
	{
		"value": "NI",
		"englishName": "Nicaragua",
		"name": "尼加拉瓜"
	},
	{
		"value": "NL",
		"englishName": "Netherlands",
		"name": "荷兰"
	},
	{
		"value": "NO",
		"englishName": "Norway",
		"name": "挪威"
	},
	{
		"value": "NP",
		"englishName": "Nepal",
		"name": "尼泊尔"
	},
	{
		"value": "NR",
		"englishName": "Nauru",
		"name": "瑙鲁"
	},
	{
		"value": "OM",
		"englishName": "Oman",
		"name": "阿曼"
	},
	{
		"value": "PA",
		"englishName": "Panama",
		"name": "巴拿马"
	},
	{
		"value": "PE",
		"englishName": "Peru",
		"name": "秘鲁"
	},
	{
		"value": "PF",
		"englishName": "French polynesia",
		"name": "法属波利尼西亚"
	},
	{
		"value": "PG",
		"englishName": "Papua New Guinea",
		"name": "巴布亚新几内亚"
	},
	{
		"value": "PH",
		"englishName": "The Philippines",
		"name": "菲律宾"
	},
	{
		"value": "PK",
		"englishName": "Pakistan",
		"name": "巴基斯坦"
	},
	{
		"value": "PL",
		"englishName": "Poland",
		"name": "波兰"
	},
	{
		"value": "PN",
		"englishName": "Pitcairn Islands",
		"name": "皮特凯恩群岛"
	},
	{
		"value": "PR",
		"englishName": "Puerto Rico",
		"name": "波多黎各"
	},
	{
		"value": "PS",
		"englishName": "Palestinian territories",
		"name": "巴勒斯坦"
	},
	{
		"value": "PW",
		"englishName": "Palau",
		"name": "帕劳"
	},
	{
		"value": "PY",
		"englishName": "Paraguay",
		"name": "巴拉圭"
	},
	{
		"value": "QA",
		"englishName": "Qatar",
		"name": "卡塔尔"
	},
	{
		"value": "RE",
		"englishName": "Réunion",
		"name": "留尼汪"
	},
	{
		"value": "RO",
		"englishName": "Romania",
		"name": "罗马尼亚"
	},
	{
		"value": "RS",
		"englishName": "Serbia",
		"name": "塞尔维亚"
	},
	{
		"value": "RU",
		"englishName": "Russian Federation",
		"name": "俄罗斯"
	},
	{
		"value": "RW",
		"englishName": "Rwanda",
		"name": "卢旺达"
	},
	{
		"value": "SB",
		"englishName": "Solomon Islands",
		"name": "所罗门群岛"
	},
	{
		"value": "SC",
		"englishName": "Seychelles",
		"name": "塞舌尔"
	},
	{
		"value": "SD",
		"englishName": "Sudan",
		"name": "苏丹"
	},
	{
		"value": "SE",
		"englishName": "Sweden",
		"name": "瑞典"
	},
	{
		"value": "SG",
		"englishName": "Singapore",
		"name": "新加坡"
	},
	{
		"value": "SI",
		"englishName": "Slovenia",
		"name": "斯洛文尼亚"
	},
	{
		"value": "SJ",
		"englishName": "Template:Country data SJM Svalbard",
		"name": "斯瓦尔巴群岛和 扬马延岛"
	},
	{
		"value": "SK",
		"englishName": "Slovakia",
		"name": "斯洛伐克"
	},
	{
		"value": "SL",
		"englishName": "Sierra Leone",
		"name": "塞拉利昂"
	},
	{
		"value": "SM",
		"englishName": "San Marino",
		"name": "圣马力诺"
	},
	{
		"value": "SN",
		"englishName": "Senegal",
		"name": "塞内加尔"
	},
	{
		"value": "SO",
		"englishName": "Somalia",
		"name": "索马里"
	},
	{
		"value": "SR",
		"englishName": "Suriname",
		"name": "苏里南"
	},
	{
		"value": "SS",
		"englishName": "South Sudan",
		"name": "南苏丹"
	},
	{
		"value": "ST",
		"englishName": "Sao Tome & Principe",
		"name": "圣多美和普林西比"
	},
	{
		"value": "SV",
		"englishName": "El Salvador",
		"name": "萨尔瓦多"
	},
	{
		"value": "SY",
		"englishName": "Syria",
		"name": "叙利亚"
	},
	{
		"value": "SZ",
		"englishName": "Swaziland",
		"name": "斯威士兰"
	},
	{
		"value": "TC",
		"englishName": "Turks & Caicos Islands",
		"name": "特克斯和凯科斯群岛"
	},
	{
		"value": "TD",
		"englishName": "Chad",
		"name": "乍得"
	},
	{
		"value": "TG",
		"englishName": "Togo",
		"name": "多哥"
	},
	{
		"value": "TH",
		"englishName": "Thailand",
		"name": "泰国"
	},
	{
		"value": "TK",
		"englishName": "Tokelau",
		"name": "托克劳"
	},
	{
		"value": "TL",
		"englishName": "Timor-Leste (East Timor)",
		"name": "东帝汶"
	},
	{
		"value": "TN",
		"englishName": "Tunisia",
		"name": "突尼斯"
	},
	{
		"value": "TO",
		"englishName": "Tonga",
		"name": "汤加"
	},
	{
		"value": "TR",
		"englishName": "Turkey",
		"name": "土耳其"
	},
	{
		"value": "TV",
		"englishName": "Tuvalu",
		"name": "图瓦卢"
	},
	{
		"value": "TZ",
		"englishName": "Tanzania",
		"name": "坦桑尼亚"
	},
	{
		"value": "UA",
		"englishName": "Ukraine",
		"name": "乌克兰"
	},
	{
		"value": "UG",
		"englishName": "Uganda",
		"name": "乌干达"
	},
	{
		"value": "US",
		"englishName": "United States of America (USA)",
		"name": "美国"
	},
	{
		"value": "UY",
		"englishName": "Uruguay",
		"name": "乌拉圭"
	},
	{
		"value": "VA",
		"englishName": "Vatican City (The Holy See)",
		"name": "梵蒂冈"
	},
	{
		"value": "VE",
		"englishName": "Venezuela",
		"name": "委内瑞拉"
	},
	{
		"value": "VG",
		"englishName": "British Virgin Islands",
		"name": "英属维尔京群岛"
	},
	{
		"value": "VI",
		"englishName": "United States Virgin Islands",
		"name": "美属维尔京群岛"
	},
	{
		"value": "VN",
		"englishName": "Vietnam",
		"name": "越南"
	},
	{
		"value": "WF",
		"englishName": "Wallis and Futuna",
		"name": "瓦利斯和富图纳"
	},
	{
		"value": "WS",
		"englishName": "Samoa",
		"name": "萨摩亚"
	},
	{
		"value": "YE",
		"englishName": "Yemen",
		"name": "也门"
	},
	{
		"value": "YT",
		"englishName": "Mayotte",
		"name": "马约特"
	},
	{
		"value": "ZA",
		"englishName": "South Africa",
		"name": "南非"
	},
	{
		"value": "ZM",
		"englishName": "Zambia",
		"name": "赞比亚"
	},
	{
		"value": "ZW",
		"englishName": "Zimbabwe",
		"name": "津巴布韦"
	},
	{
		"value": "CN",
		"englishName": "China",
		"name": "中国"
	},
	{
		"value": "CG",
		"englishName": "Republic of the Congo",
		"name": "刚果（布）"
	},
	{
		"value": "CD",
		"englishName": "Democratic Republic of the Congo",
		"name": "刚果（金）"
	},
	{
		"value": "MZ",
		"englishName": "Mozambique",
		"name": "莫桑比克"
	},
	{
		"value": "GG",
		"englishName": "Guernsey",
		"name": "根西岛"
	},
	{
		"value": "GM",
		"englishName": "Gambia",
		"name": "冈比亚"
	},
	{
		"value": "MP",
		"englishName": "Northern Mariana Islands",
		"name": "北马里亚纳群岛"
	},
	{
		"value": "ET",
		"englishName": "Ethiopia",
		"name": "埃塞俄比亚"
	},
	{
		"value": "NC",
		"englishName": "New Caledonia",
		"name": "新喀里多尼亚"
	},
	{
		"value": "VU",
		"englishName": "Vanuatu",
		"name": "瓦努阿图"
	},
	{
		"value": "TF",
		"englishName": "French Southern Territories",
		"name": "法属南部领地"
	},
	{
		"value": "NU",
		"englishName": "Niue",
		"name": "纽埃"
	},
	{
		"value": "UM",
		"englishName": "United States Minor Outlying Islands",
		"name": "美国本土外小岛屿"
	},
	{
		"value": "CK",
		"englishName": "Cook Islands",
		"name": "库克群岛"
	},
	{
		"value": "GB",
		"englishName": "Great Britain (United Kingdom; England)",
		"name": "英国"
	},
	{
		"value": "TT",
		"englishName": "Trinidad & Tobago",
		"name": "特立尼达和多巴哥"
	},
	{
		"value": "VC",
		"englishName": "St. Vincent & the Grenadines",
		"name": "圣文森特和格林纳丁斯"
	},
	{
		"value": "TW",
		"englishName": "Taiwan",
		"name": "中国（台湾）"
	},
	{
		"value": "NZ",
		"englishName": "New Zealand",
		"name": "新西兰"
	},
	{
		"value": "SA",
		"englishName": "Saudi Arabia",
		"name": "沙特阿拉伯"
	},
	{
		"value": "LA",
		"englishName": "Laos",
		"name": "老挝"
	},
	{
		"value": "KP",
		"englishName": "North Korea",
		"name": "朝鲜 北朝鲜"
	},
	{
		"value": "KR",
		"englishName": "South Korea",
		"name": "韩国 南朝鲜"
	},
	{
		"value": "PT",
		"englishName": "Portugal",
		"name": "葡萄牙"
	},
	{
		"value": "KG",
		"englishName": "Kyrgyzstan",
		"name": "吉尔吉斯斯坦"
	},
	{
		"value": "KZ",
		"englishName": "Kazakhstan",
		"name": "哈萨克斯坦"
	},
	{
		"value": "TJ",
		"englishName": "Tajikistan",
		"name": "塔吉克斯坦"
	},
	{
		"value": "TM",
		"englishName": "Turkmenistan",
		"name": "土库曼斯坦"
	},
	{
		"value": "UZ",
		"englishName": "Uzbekistan",
		"name": "乌兹别克斯坦"
	},
	{
		"value": "KN",
		"englishName": "St. Kitts & Nevis",
		"name": "圣基茨和尼维斯"
	},
	{
		"value": "PM",
		"englishName": "Saint-Pierre and Miquelon",
		"name": "圣皮埃尔和密克隆"
	},
	{
		"value": "SH",
		"englishName": "St. Helena & Dependencies",
		"name": "圣赫勒拿"
	},
	{
		"value": "LC",
		"englishName": "St. Lucia",
		"name": "圣卢西亚"
	},
	{
		"value": "MU",
		"englishName": "Mauritius",
		"name": "毛里求斯"
	},
	{
		"value": "CI",
		"englishName": "C?te d'Ivoire",
		"name": "科特迪瓦"
	},
	{
		"value": "KE",
		"englishName": "Kenya",
		"name": "肯尼亚"
	},
	{
		"value": "MN",
		"englishName": "Mongolia",
		"name": "蒙古国 蒙古"
	}
];
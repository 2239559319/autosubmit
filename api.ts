export const headers = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57 MicroMessenger/7.0.3(0x17000321) NetType/WIFI Language/zh_CN'
};

export const loginUrl = 'https://wfw.scu.edu.cn/a_scu/api/sso/check';

interface UserMsg {
  username: string;
  password: string;
}

export interface LoginData extends UserMsg {
  redirect: 'https://wfw.scu.edu.cn/site/polymerization/polymerizationInfor';
}

export const submitUrl = 'https://wfw.scu.edu.cn/ncov/wap/default/save';

export interface SubmitData {
  tw: '3',          //体温
  sfcxtz: '0',      //今日是否出现发热、乏力、干咳、呼吸困难等症状？
  sfjcbh: '0',      //今日是否接触疑似/确诊人群
  sfcxzysx: '0',    //是否有任何与疫情相关的， 值得注意的情况
  qksm: '',
  sfyyjc: '0',
  jcjgqr: '0',
  remark: '',
  address: string,
  geo_api_info: string,
  area: string,
  province: string,
  city: string,
  sfzx: '0',          //是否在校
  sfjcwhry: '0',      //今日是否与武汉市或武汉周边的人员有过较为密集的接触？
  sfjchbry: '0',      //今日是否与湖北其他地区（除武汉外）的人员有过较为密集的接触？
  sfcyglq: '0',       //是否处于观察期
  gllx: '',
  glksrq: '',
  jcbhlx: '',
  jcbhrq: '',
  ismoved: '0',
  bztcyy: '',
  sftjhb: '0',        //今日是否到过或者经停湖北其他地区（除武汉）
  sftjwh: '0',        //今日是否到过或者经停武汉
  jcjg: '',
}

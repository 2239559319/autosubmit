import request from 'request';
import fs from 'fs';
import {headers, loginUrl, LoginData, submitUrl, SubmitData} from './api';

class Stu {
  public headers: object;
  constructor(public username: string, public password: string) {
    this.headers = headers;
  }
  
  public async login(): Promise<void> {
    const loginData: LoginData = {
      username: this.username,
      password: this.password,
      redirect: 'https://wfw.scu.edu.cn/site/polymerization/polymerizationInfor',
    };
    return new Promise<void>(resolve => {
      request.post(loginUrl, {
        headers: this.headers,
        body: loginData,
        json: true
      }, (err, res, body) => {
        if(body.m === '操作成功') {
          Object.assign(this.headers, {
            Cookie: res.headers['set-cookie']
          });
          fs.writeFile('cookie.txt', res.headers['set-cookie'], (err) => {
            resolve();
          })
          resolve();
        }
      });
    });
  }

  public async submit(geo_api_info: string): Promise<string> {
    Object.assign(this.headers, {
      Cookie: fs.readFileSync('cookie.txt', {encoding: 'utf8'})
    });
    const locationObject = JSON.parse(geo_api_info);
    const submitData: SubmitData = {
      tw: '3',
      sfcxtz: '0',
      sfjcbh: '0',
      sfcxzysx: '0',
      qksm: '',
      sfyyjc: '0',
      jcjgqr: '0',
      remark: '',
      address: locationObject.formattedAddress,
      geo_api_info,
      area: `${locationObject.addressComponent.province} ${locationObject.addressComponent.city} ${locationObject.addressComponent.district}`,
      province: locationObject.addressComponent.province,
      city: locationObject.addressComponent.city,
      sfzx: '0',
      sfjcwhry: '0',
      sfjchbry: '0',
      sfcyglq: '0',
      gllx: '',
      glksrq: '',
      jcbhlx: '',
      jcbhrq: '',
      ismoved: '0',
      bztcyy: '',
      sftjhb: '0',
      sftjwh: '0',
      jcjg: ''
    };
    
    return new Promise<string>(resolve => {
      request.post(submitUrl, {
        headers: this.headers,
        body: submitData,
        json: true
      }, (err, res ,body) => {
        if(body.m === '操作成功') {
          resolve('提交成功');
        }
      });
    });
  }

  public async run(geo_api_info: string): Promise<void> {
    if(!fs.existsSync('cookie.txt')) {
      await this.login();
    }
    const result = await this.submit(geo_api_info);
    console.log(result);
  }
}

(async(str: string) => {
  const s = new Stu('username', 'password');
  await s.run(str);
})('this arg is geo_api_info')
import * as request from 'request';
import * as fs from 'fs';
import {headers, loginUrl, LoginData, submitUrl, SubmitData} from './api';

export default class Stu {
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

/*  例子
(async(str: string) => {
  const s = new Stu('username', 'password');
  await s.run(str);
})('this arg is geo_api_info')
*/
# api说明

------------

- 登录

```text
url:    https://wfw.scu.edu.cn/a_scu/api/sso/check
```
|param| value|type|
|-----|------|---|
|username|账号|string|
|password|密码|string|
|redirect|https://wfw.scu.edu.cn/a_scu/api/sso/check|string|

- 获取提交的post参数
```text
url:  https://wfw.scu.edu.cn/ncov/wap/default/index
Content-Type: text/html; charset=UTF-8    //这个请求返回html，post的参数列表用正则表达式提取
reglular expression:    (?<=def = ).+(?=;)
正则匹配的第一项为 info字符串，请转换为对象进行处理
```

- 提交
```text
url:  https://wfw.scu.edu.cn/ncov/wap/default/save
```

这里写出主要的参数，具体的参数列表查看，这里用
上一个api的到的info对象进行处理得到其他参数
```typescript
// language typescript
const geo_api_info: string = info.geo_api_info;
const geo_api_info_obj: object = JSON.parse(geo_api_info);

const 
address:string = geo_api_info_obj.formattedAddress,

area: string = `${ geo_api_info_obj.addressComponent.province} ${ geo_api_info_obj.addressComponent.city} ${ geo_api_info_obj.addressComponent.district}`,

city: string = geo_api_info_obj.addressComponent.city,

province: string = info.province,

uid: string = info.uid,

date: string = info.date,

created: number = info.created,

id: number = info.id;
//获取主要参数结束，其他的参数获取从info对象中获取

```


具体的参数列表请看[SubmitData][1]，总共有48个参数，一下列出主要参数，其他参数的获取方式见上面的参数获取方式从info对象里获取
|params|default| comment|
|------|-------|--------|
|tw|3|3表示体温36.6-36.9|
|address|     |地址,获取方式见上面|
|geo_api_info||地址api字符串获取方式见上面|
|area||地区，获取方式见上面
|province||省份，获取方式见上面|
|city||城市，获取方式见上面|
|uid||用户uid，获取方式见上面|
|date||日期，获取方式见上面|
|created||时间戳，获取方式见上面|
|id||用户id,获取方式见上面


[1]: ./api.ts#L18
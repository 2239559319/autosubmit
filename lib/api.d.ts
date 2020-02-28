export declare const headers: {
    'User-Agent': string;
};
export declare const loginUrl = "https://wfw.scu.edu.cn/a_scu/api/sso/check";
interface UserMsg {
    username: string;
    password: string;
}
export interface LoginData extends UserMsg {
    redirect: 'https://wfw.scu.edu.cn/site/polymerization/polymerizationInfor';
}
export declare const submitUrl = "https://wfw.scu.edu.cn/ncov/wap/default/save";
export interface SubmitData {
    tw: '3';
    sfcxtz: '0';
    sfjcbh: '0';
    sfcxzysx: '0';
    qksm: '';
    sfyyjc: '0';
    jcjgqr: '0';
    remark: '';
    address: string;
    geo_api_info: string;
    area: string;
    province: string;
    city: string;
    sfzx: '0';
    sfjcwhry: '0';
    sfjchbry: '0';
    sfcyglq: '0';
    gllx: '';
    glksrq: '';
    jcbhlx: '';
    jcbhrq: '';
    ismoved: '0';
    bztcyy: '';
    sftjhb: '0';
    sftjwh: '0';
    jcjg: '';
}
export {};

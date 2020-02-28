export default class Stu {
    username: string;
    password: string;
    headers: object;
    constructor(username: string, password: string);
    login(): Promise<void>;
    submit(geo_api_info: string): Promise<string>;
    run(geo_api_info: string): Promise<void>;
}

import { rejects } from "assert";
import { IHttpClient, IHttpClientHeaders, IHttpClientResponse } from "./interfaces/IHttpClient";




export type ErrorResponse<T = any> = {
    data: T;
    status: number;
    statusText: string;
    headers: any;
};

export type Params = { [key: string]: unknown };

export type HTTPMethod = "get" | "post" | "put";


export class HttpClientResponse implements IHttpClientResponse {

    public status: number;

    constructor(status: number) {
        debugger
        this.status = status;
    }

    json(): Promise<any> {
        return new Promise<string>(async (resolve, reject) => {
            resolve("this is the reponse");
        });
    }

}

export class HttpClient implements IHttpClient {

    get(requestURL: string, additionalHeaders?: IHttpClientHeaders): Promise<IHttpClientResponse> {
        return this.sendRequest("get", "url", "", additionalHeaders);
    }

    post(requestURL: string, body: string, additionalHeaders?: IHttpClientHeaders): Promise<IHttpClientResponse> {
        throw new Error("Method not implemented.");
    }

    private async sendRequest(httpMethod: HTTPMethod, requestURL: string, data: string, headers?: IHttpClientHeaders): Promise<IHttpClientResponse> {
        debugger
        const response = await this.issueRequest();

        const jsonResponse = response.json();
        const statusCOde = response.status;

        return response;

    }



    private issueRequest(): Promise<IHttpClientResponse> {
        return new Promise<IHttpClientResponse>((resolve, reject) => {
            let callbackForResult = (err: any, res: IHttpClientResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };

            this.requestRawWithCallback(callbackForResult);
        });
    }

    public requestRawWithCallback(onResult: (err: any, res: IHttpClientResponse) => void): void {
        fetch("https://generator.swagger.io/api/swagger.json", { mode: 'cors' }).then((res) => {
            let response: HttpClientResponse = new HttpClientResponse(res.status);
            onResult(null, response);
        });
    }

}


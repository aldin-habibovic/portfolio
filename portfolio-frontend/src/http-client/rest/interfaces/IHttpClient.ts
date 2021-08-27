
export interface IHttpClientHeaders { [key: string]: any };

export interface IHttpClientResponse {
    status: number;
    json(): Promise<any>;
}

export interface IHttpClient {

    get(requestURL: string, additionalHeaders?: IHttpClientHeaders): Promise<IHttpClientResponse>;

    post(requestURL: string, body: string, additionalHeaders?: IHttpClientHeaders): Promise<IHttpClientResponse>;

}
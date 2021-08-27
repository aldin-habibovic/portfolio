import { HttpClient, HttpClientResponse } from "./HttpClient";

export interface IRestResponse<T> {
    statusCode: number,
    result: T | null,
    headers: Object
}


export class RestClient {

    client: HttpClient;


    constructor() {
        this.client = new HttpClient();
    }


    public async get<T>(resource: string): Promise<IRestResponse<T>> {

        let res = await this.client.get("url");

        return this.processResponse<T>(res);
    }

    protected async processResponse<T>(res: HttpClientResponse): Promise<IRestResponse<T>> {
        return new Promise<IRestResponse<T>>(async (resolve, reject) => {
            const statusCode: number = res.status;

            const response: IRestResponse<T> = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };


            let contents: string;

            // get the result from the body
            try {
                contents = await res.json();

                if (contents && contents.length > 0) {
                    response.result = JSON.parse(contents);
                }
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
                const a = 1;
            }
            resolve(response);
        });
    }

}

export default class HttpResponse<T> {
    constructor(
        public status: number,
        public body: {
            message: string;
            data?: T;
        }
    ) { };
}

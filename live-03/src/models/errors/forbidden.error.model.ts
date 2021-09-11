
export default class ForbiddenError extends Error {
    constructor(
        public message: string,
        public error?: any,
    ) {
        super(message);
    }
}

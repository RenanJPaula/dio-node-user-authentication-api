
export type ApplicationErrorConfig<T> = {
    log?: string;
    messagekey?: string;
    data?: T;
};

export const DEFAULT_APPLICATION_ERROR_CONFIG: ApplicationErrorConfig<void> = {
    log: 'Unexpected error',
    messagekey: 'unexpected-error'
};

export class ApplicationError extends Error {

    constructor(
        public config: ApplicationErrorConfig<void> = DEFAULT_APPLICATION_ERROR_CONFIG
    ) {
        super(config.log);
    }

}


export type ApplicationErrorConfig<T> = {
    log?: string;
    messagekey?: string;
    data?: T;
};

export const DEFAULT_APPLICATION_ERROR_CONFIG: ApplicationErrorConfig<void> = {
    log: 'Unexpected error',
    messagekey: 'unexpected-error'
};

export class ApplicationError<T> extends Error {

    constructor(
        public config: ApplicationErrorConfig<T>
    ) {
        super(config.log || DEFAULT_APPLICATION_ERROR_CONFIG.log);
        if (!config.messagekey) {
            config.messagekey = DEFAULT_APPLICATION_ERROR_CONFIG.messagekey;
        }
    }

}

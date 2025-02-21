import FacebookAdsApi from "./api";

export default class Cursor<T = Record<string, unknown>> extends Array<T> {
    sourceObject: Record<string, any>;
    _api: FacebookAdsApi;
    _targetClass: new (...args: any[]) => T;
    _loadPage: (path: string) => Promise<T>;
    _buildObjectsFromResponse: (response: Record<string, any>) => Array<T>;
    paging: {
        cursors?: {
            before?: string;
            after?: string;
        };
        next?: string;
        previous?: string;
    };
    summary: Record<string, any>;
    headers: Record<string, string>;
    clear: () => void;
    next: () => Promise<T>;
    previous: () => Promise<T>;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
    set: (array: Array<T>) => void;

    /**
     * @param  {Object} sourceObject
     * @param  {Object} targetClass
     * @param  {Object} [params]
     * @param  {String} [endpoint]
     */
    constructor(sourceObject: Record<string, unknown>, targetClass: new (...args: any[]) => T, params: Record<string, unknown>, endpoint: string | null | undefined);
}

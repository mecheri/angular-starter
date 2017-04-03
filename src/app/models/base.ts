/**
 * Base Model
 * 
 * @export
 * @class Base
 */
export class Base {

    error: string;
    warn: string;
    info: string;
    success: string;

    /**
     * Creates an instance of Base.
     * 
     * @param {number} [timeStamp]
     * 
     * @memberOf Base
     */
    constructor(public timeStamp?: number) { }
}
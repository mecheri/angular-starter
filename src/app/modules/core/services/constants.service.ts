import { Injectable } from '@angular/core';

/**
 * Application global constants class
 *
 * @export
 * @class Constants
 */
@Injectable()
export class Constants {
    // Application code
    public readonly APP_CODE = 'ANGULARCLISTARTER';

    // Application local storage items
    public readonly APP_USER = 'app_user';
    public readonly ACCESS_TOKEN = 'access_token';
    public readonly ACCESS_TOKEN_DURATION = 'access_token_duration';
}
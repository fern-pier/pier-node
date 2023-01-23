/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

export class ApplicationNotFoundError extends Error {
    readonly body: PierApi.ApplicationNotFound;

    constructor(body: PierApi.ApplicationNotFound) {
        super();
        Object.setPrototypeOf(this, ApplicationNotFoundError.prototype);
        this.body = body;
    }
}
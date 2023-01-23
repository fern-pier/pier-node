/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

export class InvalidInputError extends Error {
    readonly body: PierApi.InvalidInput;

    constructor(body: PierApi.InvalidInput) {
        super();
        Object.setPrototypeOf(this, InvalidInputError.prototype);
        this.body = body;
    }
}

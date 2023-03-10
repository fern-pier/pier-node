/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

export class DuplicateSsnError extends Error {
    readonly body: PierApi.DuplicateSsn;

    constructor(body: PierApi.DuplicateSsn) {
        super();
        Object.setPrototypeOf(this, DuplicateSsnError.prototype);
        this.body = body;
    }
}

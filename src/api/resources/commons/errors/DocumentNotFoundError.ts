/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

export class DocumentNotFoundError extends Error {
    readonly body: PierApi.DocumentNotFound;

    constructor(body: PierApi.DocumentNotFound) {
        super();
        Object.setPrototypeOf(this, DocumentNotFoundError.prototype);
        this.body = body;
    }
}
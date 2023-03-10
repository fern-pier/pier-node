/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PierApi } from "@fern-api/pier";

export class FacilityNotFoundError extends Error {
    readonly body: PierApi.FacilityNotFound;

    constructor(body: PierApi.FacilityNotFound) {
        super();
        Object.setPrototypeOf(this, FacilityNotFoundError.prototype);
        this.body = body;
    }
}

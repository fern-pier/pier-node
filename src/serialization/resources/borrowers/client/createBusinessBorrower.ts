/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.borrowers.createBusinessBorrower.Request.Raw,
    PierApi.BusinessBorrowerRequest
> = core.serialization.lazyObject(async () => (await import("../../..")).BusinessBorrowerRequest);

export declare namespace Request {
    type Raw = serializers.BusinessBorrowerRequest.Raw;
}

export const Response: core.serialization.Schema<
    serializers.borrowers.createBusinessBorrower.Response.Raw,
    PierApi.BusinessBorrower
> = core.serialization.lazyObject(async () => (await import("../../..")).BusinessBorrower);

export declare namespace Response {
    type Raw = serializers.BusinessBorrower.Raw;
}

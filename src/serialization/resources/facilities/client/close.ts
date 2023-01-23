/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.facilities.close.Request.Raw,
    PierApi.CloseFacilityRequest
> = core.serialization.lazyObject(async () => (await import("../../..")).CloseFacilityRequest);

export declare namespace Request {
    type Raw = serializers.CloseFacilityRequest.Raw;
}

export const Response: core.serialization.Schema<serializers.facilities.close.Response.Raw, PierApi.Facility> =
    core.serialization.lazyObject(async () => (await import("../../..")).Facility);

export declare namespace Response {
    type Raw = serializers.Facility.Raw;
}

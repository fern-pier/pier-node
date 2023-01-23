/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const GetApplicationRequest: core.serialization.ObjectSchema<
    serializers.GetApplicationRequest.Raw,
    PierApi.GetApplicationRequest
> = core.serialization.object({
    applicationId: core.serialization.property("application_id", core.serialization.string()),
});

export declare namespace GetApplicationRequest {
    interface Raw {
        application_id: string;
    }
}

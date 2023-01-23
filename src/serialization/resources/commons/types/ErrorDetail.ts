/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const ErrorDetail: core.serialization.ObjectSchema<serializers.ErrorDetail.Raw, PierApi.ErrorDetail> =
    core.serialization.object({
        value: core.serialization.string(),
        msg: core.serialization.string(),
        param: core.serialization.string(),
        location: core.serialization.string(),
    });

export declare namespace ErrorDetail {
    interface Raw {
        value: string;
        msg: string;
        param: string;
        location: string;
    }
}

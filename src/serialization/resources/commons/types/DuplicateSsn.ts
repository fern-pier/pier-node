/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const DuplicateSsn: core.serialization.ObjectSchema<serializers.DuplicateSsn.Raw, PierApi.DuplicateSsn> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BaseErrorBody));

export declare namespace DuplicateSsn {
    interface Raw extends serializers.BaseErrorBody.Raw {}
}
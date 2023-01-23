/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const DocumentCannotBeSignedError: core.serialization.Schema<
    serializers.DocumentCannotBeSignedError.Raw,
    PierApi.DocumentCannotBeSigned
> = core.serialization.lazyObject(async () => (await import("../../..")).DocumentCannotBeSigned);

export declare namespace DocumentCannotBeSignedError {
    type Raw = serializers.DocumentCannotBeSigned.Raw;
}

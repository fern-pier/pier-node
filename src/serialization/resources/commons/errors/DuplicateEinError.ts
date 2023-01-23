/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const DuplicateEinError: core.serialization.Schema<serializers.DuplicateEinError.Raw, PierApi.DuplicateEin> =
    core.serialization.lazyObject(async () => (await import("../../..")).DuplicateEin);

export declare namespace DuplicateEinError {
    type Raw = serializers.DuplicateEin.Raw;
}
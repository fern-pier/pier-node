/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const DuplicateSsnError: core.serialization.Schema<serializers.DuplicateSsnError.Raw, PierApi.DuplicateSsn> =
    core.serialization.lazyObject(async () => (await import("../../..")).DuplicateSsn);

export declare namespace DuplicateSsnError {
    type Raw = serializers.DuplicateSsn.Raw;
}

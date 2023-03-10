/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const ApplicationId: core.serialization.Schema<serializers.ApplicationId.Raw, PierApi.ApplicationId> =
    core.serialization.string();

export declare namespace ApplicationId {
    type Raw = string;
}

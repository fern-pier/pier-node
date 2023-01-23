/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PierApi } from "@fern-api/pier";
import * as core from "../../../../core";

export const BusinessContact: core.serialization.ObjectSchema<
    serializers.BusinessContact.Raw,
    PierApi.BusinessContact
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    phone: core.serialization.string(),
    email: core.serialization.string(),
    title: core.serialization.string(),
});

export declare namespace BusinessContact {
    interface Raw {
        first_name: string;
        last_name: string;
        phone: string;
        email: string;
        title: string;
    }
}

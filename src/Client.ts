/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as BorrowersClient } from "./api/resources/borrowers/client/Client";

export declare namespace PierApiClient {
    interface Options {
        environment?: environments.PierApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class PierApiClient {
    constructor(private readonly options: PierApiClient.Options) {}

    #borrowers: BorrowersClient | undefined;

    public get borrowers(): BorrowersClient {
        return (this.#borrowers ??= new BorrowersClient(this.options));
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { PierApi } from "@fern-api/pier";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.PierApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

/**
 * Pier's coverage endpoints provide our up-to-date state lending coverage and lending thresholds.
 * `min` and `max` amounts are in cents, and `max_apr` is in basis points.
 * States not yet supported are represented as an empty object
 *
 */
export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Retrieve state-by-state commercial coverage
     */
    public async retrieveCommercialCoverage(): Promise<Record<string, PierApi.CommercialCoverage>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PierApiEnvironment.Production,
                "/coverage/commercial"
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.coverage.retrieveCommercialCoverage.Response.parse(
                _response.body as serializers.coverage.retrieveCommercialCoverage.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PierApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PierApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PierApiTimeoutError();
            case "unknown":
                throw new errors.PierApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve state-by-state consumer coverage list
     */
    public async retrieveConsumerCoverage(): Promise<Record<string, PierApi.ConsumerCoverage>> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PierApiEnvironment.Production, "/coverage/consumer"),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.coverage.retrieveConsumerCoverage.Response.parse(
                _response.body as serializers.coverage.retrieveConsumerCoverage.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PierApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PierApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PierApiTimeoutError();
            case "unknown":
                throw new errors.PierApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a list of valid reasons to reject an applicant, along with descriptions for each reason
     */
    public async retrieveRejectionReasons(): Promise<PierApi.RetrieveRejectionReasonsResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PierApiEnvironment.Production, "/rejection_reasons"),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.coverage.retrieveRejectionReasons.Response.parse(
                _response.body as serializers.coverage.retrieveRejectionReasons.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.PierApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PierApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PierApiTimeoutError();
            case "unknown":
                throw new errors.PierApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

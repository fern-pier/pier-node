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
 * A facility represents an active loan or line of credit.
 * It contains references to the borrower, application and executed loan as well as the terms and other state information about the credit facility.
 * Facilities are used by Pier's system for servicing, credit reporting and other down stream functionality.
 *
 */
export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * A facility can be created for a given loan agreement with a status of `signed`
     * @throws {PierApi.FacilityCannotBeCreatedError}
     * @throws {PierApi.FacilityAlreadyExistsError}
     */
    public async create(request: PierApi.CreateFacilityRequest): Promise<PierApi.Facility> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PierApiEnvironment.Production,
                "/facilities/facilities"
            ),
            method: "POST",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.facilities.create.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.facilities.create.Response.parse(
                _response.body as serializers.facilities.create.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new PierApi.FacilityCannotBeCreatedError(
                        await serializers.FacilityCannotBeCreatedError.parse(
                            _response.error.body as serializers.FacilityCannotBeCreatedError.Raw
                        )
                    );
                case 404:
                    throw new PierApi.FacilityAlreadyExistsError(
                        await serializers.FacilityAlreadyExistsError.parse(
                            _response.error.body as serializers.FacilityAlreadyExistsError.Raw
                        )
                    );
                default:
                    throw new errors.PierApiError({
                        statusCode: _response.error.statusCode,
                        responseBody: _response.error.rawBody,
                    });
            }
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
     * Closes an active facility by setting its status to `closed`
     * @throws {PierApi.FacilityNotFoundError}
     * @throws {PierApi.FacilityCannotBeClosedError}
     */
    public async close(
        facilityId: PierApi.FacilityId,
        request: PierApi.CloseFacilityRequest
    ): Promise<PierApi.Facility> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PierApiEnvironment.Production,
                `/facilities/facilities/${facilityId}/close`
            ),
            method: "POST",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            body: await serializers.facilities.close.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.facilities.close.Response.parse(
                _response.body as serializers.facilities.close.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new PierApi.FacilityNotFoundError(
                        await serializers.FacilityNotFoundError.parse(
                            _response.error.body as serializers.FacilityNotFoundError.Raw
                        )
                    );
                case 400:
                    throw new PierApi.FacilityCannotBeClosedError(
                        await serializers.FacilityCannotBeClosedError.parse(
                            _response.error.body as serializers.FacilityCannotBeClosedError.Raw
                        )
                    );
                default:
                    throw new errors.PierApiError({
                        statusCode: _response.error.statusCode,
                        responseBody: _response.error.rawBody,
                    });
            }
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
     * List all facilities on your account
     */
    public async listAll(): Promise<PierApi.Facility[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PierApiEnvironment.Production,
                "/facilities/facilities"
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.facilities.listAll.Response.parse(
                _response.body as serializers.facilities.listAll.Response.Raw
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

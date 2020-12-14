/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualRouterPeeringsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a VirtualRouterPeerings. */
export class VirtualRouterPeerings {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a VirtualRouterPeerings.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified peering from a Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,virtualRouterName,peeringName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualRouterPeeringsGetResponse>
   */
  get(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualRouterPeeringsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualRouterName: string, peeringName: string, callback: msRest.ServiceCallback<Models.VirtualRouterPeering>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, virtualRouterName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualRouterPeering>): void;
  get(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualRouterPeering>, callback?: msRest.ServiceCallback<Models.VirtualRouterPeering>): Promise<Models.VirtualRouterPeeringsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualRouterName,
        peeringName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualRouterPeeringsGetResponse>;
  }

  /**
   * Creates or updates the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualRouterPeeringsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, virtualRouterName: string, peeringName: string, parameters: Models.VirtualRouterPeering, options?: msRest.RequestOptionsBase): Promise<Models.VirtualRouterPeeringsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,virtualRouterName,peeringName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualRouterPeeringsCreateOrUpdateResponse>;
  }

  /**
   * Lists all Virtual Router Peerings in a Virtual Router resource.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualRouterPeeringsListResponse>
   */
  list(resourceGroupName: string, virtualRouterName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualRouterPeeringsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualRouterName: string, callback: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, virtualRouterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): void;
  list(resourceGroupName: string, virtualRouterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>, callback?: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): Promise<Models.VirtualRouterPeeringsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualRouterName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualRouterPeeringsListResponse>;
  }

  /**
   * Deletes the specified peering from a Virtual Router.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualRouterName,
        peeringName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates the specified Virtual Router Peering.
   * @param resourceGroupName The name of the resource group.
   * @param virtualRouterName The name of the Virtual Router.
   * @param peeringName The name of the Virtual Router Peering.
   * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, virtualRouterName: string, peeringName: string, parameters: Models.VirtualRouterPeering, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        virtualRouterName,
        peeringName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Lists all Virtual Router Peerings in a Virtual Router resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualRouterPeeringsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualRouterPeeringsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>, callback?: msRest.ServiceCallback<Models.VirtualRouterPeeringListResult>): Promise<Models.VirtualRouterPeeringsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualRouterPeeringsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualRouterName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualRouterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualRouterName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualRouters/{virtualRouterName}/peerings/{peeringName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualRouterName,
    Parameters.peeringName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualRouterPeering,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    201: {
      bodyMapper: Mappers.VirtualRouterPeering
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualRouterPeeringListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

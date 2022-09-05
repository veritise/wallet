/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

export interface NodeConfig {
    roles: number;
    friendlyName: string;
    url: string;
}

export interface NetworkConfigurationDefaults {
    maxTransactionsPerAggregate: number;
    maxMosaicDuration: number;
    lockedFundsPerAggregate: string;
    maxNamespaceDuration: number;
    maxCosignatoriesPerAccount: number;
    maxMosaicAtomicUnits: number;
    blockGenerationTargetTime: number;
    currencyMosaicId: string;
    namespaceGracePeriodDuration: number;
    harvestingMosaicId: string;
    minNamespaceDuration: number;
    maxCosignedAccountsPerAccount: number;
    maxNamespaceDepth: number;
    defaultDynamicFeeMultiplier: number;
    maxMosaicDivisibility: number;
    maxMessageSize: number;
    epochAdjustment: number;
    totalChainImportance: number;
    generationHash: string;
}

export interface NetworkConfig {
    faucetUrl: string;
    nodes: NodeConfig[];
    defaultNetworkType: number;
    explorerUrl: string;
    networkConfigurationDefaults: NetworkConfigurationDefaults;
}

export const defaultMainnetNetworkConfig: NetworkConfig = {
    explorerUrl: 'https://explorer.veritise.com/',
    faucetUrl: 'https://faucet.veritise.com/',
    defaultNetworkType: 104,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 6,
        namespaceGracePeriodDuration: 2592000,
        lockedFundsPerAggregate: '10000000',
        maxCosignatoriesPerAccount: 1000,
        blockGenerationTargetTime: 15,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 60,
        maxNamespaceDuration: 315360000,
        maxTransactionsPerAggregate: 1000,
        maxCosignedAccountsPerAccount: 1000,
        maxMessageSize: 4096,
        maxMosaicAtomicUnits: 1000000000000000,
        currencyMosaicId: '248D444BD835C98F',
        harvestingMosaicId: '248D444BD835C98F',
        defaultDynamicFeeMultiplier: 10,
        epochAdjustment: 1662366600,
        totalChainImportance: 303251860220000,
        generationHash: 'D12C8B5FA198D053115DDBBF369C1BEBEA89CD3E103494A04248FA4131D50B3E',
    },
    nodes: [
        { friendlyName: 'veritise-dual1', roles: 7, url: 'http://dual1-mainnet.veritise.superhow.net:3000' },
        { friendlyName: 'veritise-dual2', roles: 7, url: 'http://dual2-mainnet.veritise.superhow.net:3000' },
        { friendlyName: 'veritise-dual3', roles: 7, url: 'http://dual3-mainnet.veritise.superhow.net:3000' }
    ],
};

const defaultNetworkConfig: Record<number, NetworkConfig> = {
    104: defaultMainnetNetworkConfig,
};

const resolvedNetworkConfig: NetworkConfig = window['networkConfig'] || defaultNetworkConfig;
console.log('networkConfig resolved!', resolvedNetworkConfig);
export const networkConfig = resolvedNetworkConfig;

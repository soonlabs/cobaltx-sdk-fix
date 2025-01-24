import { PublicKey, Commitment, EpochInfo, Connection, Transaction, Signer, TransactionInstruction, Keypair } from '@solana/web3.js';
import { c5 as TxBuilder, B as ClmmKeys, c4 as MakeTxData, o as ApiV3PoolInfoConcentratedItem, bb as MakeTransaction, bf as ComputeBudgetConfig, c3 as MakeMultiTxData, bk as ReturnTypeFetchMultipleMintInfos, bZ as AddInstructionParam, bI as BigNumberish, y as CpmmKeys, q as ApiV3PoolInfoStandardItemCpmm, bi as GetTransferAmountFee, aS as CreateFarm, aT as CreateFarmExtInfo, aU as UpdateFarmReward, aV as UpdateFarmRewards, aW as FarmDWParam, Z as FormatFarmInfoOut, a0 as OwnerIdoInfo, a1 as IdoKeysData, p as ApiV3PoolInfoStandardItem, cb as Percent, c7 as TokenAmount, w as AmmV4Keys, x as AmmV5Keys, Y as FormatFarmInfoOutV6, D as PoolKeys, i as ApiV3Token, bg as LoadParams, J as JupTokenType, b5 as TokenInfo, ba as SignAllTransactions, a as Api, _ as AvailabilityCheckAPI3, j as ApiV3TokenRes } from './api-04f1aafb.js';
import { API_URL_CONFIG } from './api/url.js';
import { Owner } from './common/owner.js';
import { Cluster } from './solana/type.js';
import { TokenAccount, TokenAccountRaw, GetOrCreateTokenAccountParams, HandleTokenAccountParams } from './cobaltx/account/types.js';
import { Logger } from './common/logger.js';
import { TxVersion } from './common/txTool/txType.js';
import BN__default from 'bn.js';
import Decimal from 'decimal.js';
import { ClmmPositionLayout, PositionInfoLayout, PoolInfoLayout } from './cobaltx/clmm/layout.js';
import { m as CreateConcentratedPool, O as OpenPositionFromBase, p as OpenPositionFromBaseExtInfo, q as OpenPositionFromLiquidity, r as OpenPositionFromLiquidityExtInfo, I as IncreasePositionFromLiquidity, M as ManipulateLiquidityExtInfo, n as IncreasePositionFromBase, D as DecreaseLiquidity, B as ClosePositionExtInfo, L as LockPosition, J as ClmmLockAddress, H as HarvestLockPosition, s as InitRewardParams, E as InitRewardExtInfo, t as InitRewardsParams, u as SetRewardParams, v as SetRewardsParams, w as CollectRewardParams, x as CollectRewardsParams, y as HarvestAllRewardsParams, F as ClmmRpcData, d as ComputeClmmPoolInfo, l as ReturnTypeFetchMultiplePoolTickArrays } from './type-ef51757c.js';
import { CpmmRpcData, CpmmComputeData, CreateCpmmPoolParam, CreateCpmmPoolAddress, AddCpmmLiquidityParams, WithdrawCpmmLiquidityParams, CpmmSwapParams, LockCpmmLpParams, CpmmLockExtInfo, HarvestLockCpmmLpParams, ComputePairAmountParams } from './cobaltx/cpmm/type.js';
import { StableLayout } from './cobaltx/liquidity/stable.js';
import { AddLiquidityParams, RemoveParams, CreatePoolParam, CreatePoolAddress, CreateMarketAndPoolParam, ComputeAmountOutParam, ComputeAmountInParam, SwapParam, AmmRpcData } from './cobaltx/liquidity/type.js';
import { ComputeAmountOutLayout, BasicPoolInfo, ReturnTypeGetAllRoute, ComputeRoutePathType, ComputePoolType, ReturnTypeFetchMultipleInfo } from './cobaltx/tradeV2/type.js';
import { Structure } from './marshmallow/index.js';

interface ModuleBaseProps {
    scope: CobaltX;
    moduleName: string;
}
declare class ModuleBase {
    scope: CobaltX;
    private disabled;
    protected logger: Logger;
    constructor({ scope, moduleName }: ModuleBaseProps);
    protected createTxBuilder(feePayer?: PublicKey): TxBuilder;
    logDebug(...args: (string | number | Record<string, any>)[]): void;
    logInfo(...args: (string | number | Record<string, any>)[]): void;
    logAndCreateError(...args: (string | number | Record<string, any>)[]): void;
    checkDisabled(): void;
}

declare class Clmm extends ModuleBase {
    constructor(params: ModuleBaseProps);
    getClmmPoolKeys(poolId: string): Promise<ClmmKeys>;
    createPool<T extends TxVersion>(props: CreateConcentratedPool<T>): Promise<MakeTxData<T, {
        mockPoolInfo: ApiV3PoolInfoConcentratedItem;
        address: ClmmKeys;
    }>>;
    openPositionFromBase<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, tickLower, tickUpper, base, baseAmount, otherAmountMax, nft2022, associatedOnly, checkCreateATAOwner, withMetadata, getEphemeralSigners, computeBudgetConfig, txVersion, }: OpenPositionFromBase<T>): Promise<MakeTxData<T, OpenPositionFromBaseExtInfo>>;
    openPositionFromLiquidity<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, amountMaxA, amountMaxB, tickLower, tickUpper, liquidity, associatedOnly, checkCreateATAOwner, withMetadata, txVersion, computeBudgetConfig, getEphemeralSigners, nft2022, }: OpenPositionFromLiquidity<T>): Promise<MakeTxData<T, OpenPositionFromLiquidityExtInfo>>;
    increasePositionFromLiquidity<T extends TxVersion>(props: IncreasePositionFromLiquidity<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo>>;
    increasePositionFromBase<T extends TxVersion>(props: IncreasePositionFromBase<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo>>;
    decreaseLiquidity<T extends TxVersion>(props: DecreaseLiquidity<T>): Promise<MakeTxData<T, ManipulateLiquidityExtInfo & Partial<ClosePositionExtInfo>>>;
    lockPosition<T extends TxVersion>(props: LockPosition<T>): Promise<MakeTxData<ClmmLockAddress>>;
    harvestLockPosition<T extends TxVersion>(props: HarvestLockPosition<T>): Promise<MakeTxData<T>>;
    closePosition<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerPosition, txVersion, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        ownerPosition: ClmmPositionLayout;
        txVersion: T;
    }): Promise<MakeTxData<T, ClosePositionExtInfo>>;
    initReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardInfo, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, }: InitRewardParams<T>): Promise<MakeTxData<T, InitRewardExtInfo>>;
    initRewards<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, rewardInfos, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, }: InitRewardsParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    setReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardInfo, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, }: SetRewardParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    setRewards<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, ownerInfo, rewardInfos, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, }: SetRewardsParams<T>): Promise<MakeTxData<T, {
        address: Record<string, PublicKey>;
    }>>;
    collectReward<T extends TxVersion>({ poolInfo, ownerInfo, rewardMint, associatedOnly, checkCreateATAOwner, computeBudgetConfig, txVersion, }: CollectRewardParams<T>): Promise<MakeTxData<{
        address: Record<string, PublicKey>;
    }>>;
    collectRewards({ poolInfo, ownerInfo, rewardMints, associatedOnly, checkCreateATAOwner, }: CollectRewardsParams): Promise<MakeTransaction>;
    swap<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, inputMint, amountIn, amountOutMin, priceLimit, observationId, ownerInfo, remainingAccounts, associatedOnly, checkCreateATAOwner, txVersion, computeBudgetConfig, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        inputMint: string | PublicKey;
        amountIn: BN__default;
        amountOutMin: BN__default;
        priceLimit?: Decimal;
        observationId: PublicKey;
        ownerInfo: {
            useSOLBalance?: boolean;
            feePayer?: PublicKey;
        };
        remainingAccounts: PublicKey[];
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeTxData<T>>;
    swapBaseOut<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, outputMint, amountOut, amountInMax, priceLimit, observationId, ownerInfo, remainingAccounts, associatedOnly, checkCreateATAOwner, txVersion, computeBudgetConfig, }: {
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys?: ClmmKeys;
        outputMint: string | PublicKey;
        amountOut: BN__default;
        amountInMax: BN__default;
        priceLimit?: Decimal;
        observationId: PublicKey;
        ownerInfo: {
            useSOLBalance?: boolean;
            feePayer?: PublicKey;
        };
        remainingAccounts: PublicKey[];
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeTxData<T>>;
    harvestAllRewards<T extends TxVersion = TxVersion.LEGACY>({ allPoolInfo, allPositions, lockInfo, ownerInfo, associatedOnly, checkCreateATAOwner, programId, txVersion, computeBudgetConfig, }: HarvestAllRewardsParams<T>): Promise<MakeMultiTxData<T>>;
    getWhiteListMint({ programId }: {
        programId: PublicKey;
    }): Promise<PublicKey[]>;
    getOwnerPositionInfo({ programId, }: {
        programId: string | PublicKey;
    }): Promise<ReturnType<typeof PositionInfoLayout.decode>[]>;
    getRpcClmmPoolInfo({ poolId }: {
        poolId: string | PublicKey;
    }): Promise<ClmmRpcData>;
    getRpcClmmPoolInfos({ poolIds, config, }: {
        poolIds: (string | PublicKey)[];
        config?: {
            batchRequest?: boolean;
            chunkCount?: number;
        };
    }): Promise<{
        [poolId: string]: ClmmRpcData;
    }>;
    getComputeClmmPoolInfos({ clmmPoolsRpcInfo, mintInfos, }: {
        clmmPoolsRpcInfo: Record<string, ReturnType<typeof PoolInfoLayout.decode> & {
            currentPrice: number;
            programId: PublicKey;
        }>;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
    }): Promise<{
        computeClmmPoolInfo: Record<string, ComputeClmmPoolInfo>;
        computePoolTickData: ReturnTypeFetchMultiplePoolTickArrays;
    }>;
    getPoolInfoFromRpc(poolId: string): Promise<{
        poolInfo: ApiV3PoolInfoConcentratedItem;
        poolKeys: ClmmKeys;
        computePoolInfo: ComputeClmmPoolInfo;
        tickData: ReturnTypeFetchMultiplePoolTickArrays;
    }>;
}

interface TokenAccountDataProp {
    tokenAccounts?: TokenAccount[];
    tokenAccountRawInfos?: TokenAccountRaw[];
    notSubscribeAccountChange?: boolean;
}
declare class Account extends ModuleBase {
    private _tokenAccounts;
    private _tokenAccountRawInfos;
    private _accountChangeListenerId?;
    private _accountListener;
    private _clientOwnedToken;
    private _notSubscribeAccountChange;
    private _accountFetchTime;
    constructor(params: TokenAccountDataProp & ModuleBaseProps);
    get tokenAccounts(): TokenAccount[];
    get tokenAccountRawInfos(): TokenAccountRaw[];
    set notSubscribeAccountChange(subscribe: boolean);
    updateTokenAccount({ tokenAccounts, tokenAccountRawInfos }: TokenAccountDataProp): Account;
    addAccountChangeListener(cbk: (data: TokenAccountDataProp) => void): Account;
    removeAccountChangeListener(cbk: (data: TokenAccountDataProp) => void): Account;
    getAssociatedTokenAccount(mint: PublicKey, programId?: PublicKey): PublicKey;
    resetTokenAccounts(): void;
    fetchWalletTokenAccounts(config?: {
        forceUpdate?: boolean;
        commitment?: Commitment;
    }): Promise<{
        tokenAccounts: TokenAccount[];
        tokenAccountRawInfos: TokenAccountRaw[];
    }>;
    clearAccountChangeCkb(): void;
    getCreatedTokenAccount({ mint, programId, associatedOnly, }: {
        mint: PublicKey;
        programId?: PublicKey;
        associatedOnly?: boolean;
    }): Promise<PublicKey | undefined>;
    getOrCreateTokenAccount(params: GetOrCreateTokenAccountParams): Promise<{
        account?: PublicKey;
        instructionParams?: AddInstructionParam;
    }>;
    checkOrCreateAta({ mint, programId, autoUnwrapWSOLToSOL, }: {
        mint: PublicKey;
        programId?: PublicKey;
        autoUnwrapWSOLToSOL?: boolean;
    }): Promise<{
        pubKey: PublicKey;
        newInstructions: AddInstructionParam;
    }>;
    handleTokenAccount(params: HandleTokenAccountParams): Promise<AddInstructionParam & {
        tokenAccount: PublicKey;
    }>;
    processTokenAccount(props: {
        mint: PublicKey;
        programId?: PublicKey;
        amount?: BigNumberish;
        useSOLBalance?: boolean;
        handleTokenAccount?: boolean;
    }): Promise<Promise<AddInstructionParam & {
        tokenAccount?: PublicKey;
    }>>;
}

declare class CpmmModule extends ModuleBase {
    constructor(params: ModuleBaseProps);
    load(): Promise<void>;
    getCpmmPoolKeys(poolId: string): Promise<CpmmKeys>;
    getRpcPoolInfo(poolId: string, fetchConfigInfo?: boolean): Promise<CpmmRpcData>;
    getRpcPoolInfos(poolIds: string[], fetchConfigInfo?: boolean): Promise<{
        [poolId: string]: CpmmRpcData;
    }>;
    toComputePoolInfos({ pools, mintInfos, }: {
        pools: Record<string, CpmmRpcData>;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
    }): Record<string, CpmmComputeData>;
    getPoolInfoFromRpc(poolId: string): Promise<{
        poolInfo: ApiV3PoolInfoStandardItemCpmm;
        poolKeys: CpmmKeys;
        rpcData: CpmmRpcData;
    }>;
    createPool<T extends TxVersion>({ poolId, programId, poolFeeAccount, startTime, ownerInfo, associatedOnly, checkCreateATAOwner, txVersion, feeConfig, computeBudgetConfig, ...params }: CreateCpmmPoolParam<T>): Promise<MakeTxData<T, {
        address: CreateCpmmPoolAddress;
    }>>;
    addLiquidity<T extends TxVersion>(params: AddCpmmLiquidityParams<T>): Promise<MakeTxData<T>>;
    withdrawLiquidity<T extends TxVersion>(params: WithdrawCpmmLiquidityParams<T>): Promise<MakeTxData<T>>;
    swap<T extends TxVersion>(params: CpmmSwapParams<T>): Promise<MakeTxData<T>>;
    lockLp<T extends TxVersion>(params: LockCpmmLpParams<T>): Promise<MakeTxData<CpmmLockExtInfo>>;
    harvestLockLp<T extends TxVersion>(params: HarvestLockCpmmLpParams<T>): Promise<MakeTxData>;
    computeSwapAmount({ pool, amountIn, outputMint, slippage, }: {
        pool: CpmmComputeData;
        amountIn: BN__default;
        outputMint: string | PublicKey;
        slippage: number;
    }): {
        allTrade: boolean;
        amountIn: BN__default;
        amountOut: BN__default;
        minAmountOut: BN__default;
        fee: BN__default;
        executionPrice: Decimal;
        priceImpact: any;
    };
    computePairAmount({ poolInfo, baseReserve, quoteReserve, amount, slippage, epochInfo, baseIn, }: ComputePairAmountParams): {
        inputAmountFee: GetTransferAmountFee;
        anotherAmount: GetTransferAmountFee;
        maxAnotherAmount: GetTransferAmountFee;
        minAnotherAmount: GetTransferAmountFee;
        liquidity: BN__default;
    };
}

declare class Farm extends ModuleBase {
    private _getUserRewardInfo;
    create<T extends TxVersion>({ poolInfo: propPoolInfo, rewardInfos, payer, programId, txVersion, }: CreateFarm<T>): Promise<MakeTxData<T, CreateFarmExtInfo>>;
    restartReward<T extends TxVersion>({ farmInfo, payer, newRewardInfo, txVersion, }: UpdateFarmReward): Promise<MakeTxData<T>>;
    restartRewards<T extends TxVersion>({ farmInfo, payer, newRewardInfos, txVersion, }: UpdateFarmRewards<T>): Promise<MakeTxData<T>>;
    addNewRewardToken<T extends TxVersion>(params: UpdateFarmReward): Promise<MakeTxData<T>>;
    addNewRewardsToken<T extends TxVersion>(params: UpdateFarmRewards<T>): Promise<MakeTxData<T>>;
    deposit<T extends TxVersion>(params: FarmDWParam<T>): Promise<MakeTxData<T>>;
    withdraw<T extends TxVersion>(params: FarmDWParam<T>): Promise<MakeTxData<T>>;
    withdrawFarmReward<T extends TxVersion>({ farmInfo, withdrawMint, txVersion, computeBudgetConfig, }: {
        farmInfo: FormatFarmInfoOut;
        withdrawMint: PublicKey;
        payer?: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
        txVersion?: T;
    }): Promise<MakeTxData<T>>;
    harvestAllRewards<T extends TxVersion = TxVersion.LEGACY>(params: {
        farmInfoList: Record<string, FormatFarmInfoOut>;
        feePayer?: PublicKey;
        useSOLBalance?: boolean;
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        userAuxiliaryLedgers?: string[];
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeMultiTxData<T>>;
}

declare class MarketV2$1 extends ModuleBase {
    claim<T extends TxVersion>({ ownerInfo, idoKeys, associatedOnly, checkCreateATAOwner, txVersion, }: {
        ownerInfo: OwnerIdoInfo[keyof OwnerIdoInfo] & {
            userIdoInfo: string;
        };
        idoKeys: IdoKeysData;
        associatedOnly?: boolean;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
    }): Promise<MakeTxData>;
}

interface MarketExtInfo {
    address: {
        marketId: PublicKey;
        requestQueue: PublicKey;
        eventQueue: PublicKey;
        bids: PublicKey;
        asks: PublicKey;
        baseVault: PublicKey;
        quoteVault: PublicKey;
        baseMint: PublicKey;
        quoteMin: PublicKey;
    };
}
declare class MarketV2 extends ModuleBase {
    create<T extends TxVersion>({ baseInfo, quoteInfo, lotSize, // 1
    tickSize, // 0.01
    dexProgramId, requestQueueSpace, eventQueueSpace, orderbookQueueSpace, lowestFeeMarket, assignSeed, txVersion, computeBudgetConfig, }: {
        baseInfo: {
            mint: PublicKey;
            decimals: number;
        };
        quoteInfo: {
            mint: PublicKey;
            decimals: number;
        };
        lotSize: number;
        tickSize: number;
        dexProgramId: PublicKey;
        eventQueue?: PublicKey;
        requestQueue?: PublicKey;
        requestQueueSpace?: number;
        eventQueueSpace?: number;
        orderbookQueueSpace?: number;
        lowestFeeMarket?: boolean;
        assignSeed?: string;
        txVersion?: T;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeMultiTxData<T, MarketExtInfo>>;
}

declare class LiquidityModule extends ModuleBase {
    stableLayout: StableLayout;
    constructor(params: ModuleBaseProps);
    initLayout(): Promise<void>;
    load(): Promise<void>;
    computePairAmount({ poolInfo, amount, slippage, baseIn, }: {
        poolInfo: ApiV3PoolInfoStandardItem;
        amount: string | Decimal;
        slippage: Percent;
        baseIn?: boolean;
    }): {
        anotherAmount: TokenAmount;
        maxAnotherAmount: TokenAmount;
        minAnotherAmount: TokenAmount;
        liquidity: BN__default;
    };
    getAmmPoolKeys(poolId: string): Promise<AmmV4Keys | AmmV5Keys>;
    addLiquidity<T extends TxVersion>(params: AddLiquidityParams<T>): Promise<MakeTxData<T>>;
    removeLiquidity<T extends TxVersion>(params: RemoveParams<T>): Promise<Promise<MakeTxData<T>>>;
    removeAllLpAndCreateClmmPosition<T extends TxVersion>({ poolInfo, clmmPoolInfo, removeLpAmount, createPositionInfo, farmInfo, userFarmLpAmount, base, computeBudgetConfig, payer, userAuxiliaryLedgers, tokenProgram, checkCreateATAOwner, getEphemeralSigners, txVersion, }: {
        poolInfo: ApiV3PoolInfoStandardItem;
        clmmPoolInfo: ApiV3PoolInfoConcentratedItem;
        removeLpAmount: BN__default;
        createPositionInfo: {
            tickLower: number;
            tickUpper: number;
            baseAmount: BN__default;
            otherAmountMax: BN__default;
        };
        farmInfo?: FormatFarmInfoOutV6;
        userFarmLpAmount?: BN__default;
        userAuxiliaryLedgers?: PublicKey[];
        base: "MintA" | "MintB";
        payer?: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
        tokenProgram?: PublicKey;
        checkCreateATAOwner?: boolean;
        txVersion?: T;
        getEphemeralSigners?: (k: number) => any;
    }): Promise<MakeMultiTxData<T>>;
    createPoolV4<T extends TxVersion>({ programId, marketInfo, baseMintInfo, quoteMintInfo, baseAmount, quoteAmount, startTime, ownerInfo, associatedOnly, checkCreateATAOwner, tokenProgram, txVersion, feeDestinationId, computeBudgetConfig, }: CreatePoolParam<T>): Promise<MakeTxData<T, {
        address: CreatePoolAddress;
    }>>;
    createMarketAndPoolV4<T extends TxVersion>({ programId, marketProgram, feeDestinationId, tokenProgram, baseMintInfo, quoteMintInfo, baseAmount, quoteAmount, startTime, ownerInfo, lowestFeeMarket, assignSeed, associatedOnly, checkCreateATAOwner, lotSize, tickSize, txVersion, computeBudgetConfig, }: CreateMarketAndPoolParam<T>): Promise<MakeMultiTxData<T, {
        address: CreatePoolAddress & MarketExtInfo["address"];
    }>>;
    getCreatePoolFee({ programId }: {
        programId: PublicKey;
    }): Promise<BN__default>;
    computeAmountOut({ poolInfo, amountIn, mintIn: propMintIn, mintOut: propMintOut, slippage, }: ComputeAmountOutParam): {
        amountOut: BN__default;
        minAmountOut: BN__default;
        currentPrice: Decimal;
        executionPrice: Decimal;
        priceImpact: Decimal;
        fee: BN__default;
    };
    computeAmountIn({ poolInfo, amountOut, mintIn, mintOut, slippage }: ComputeAmountInParam): {
        amountIn: BN__default;
        maxAmountIn: BN__default;
        currentPrice: Decimal;
        executionPrice: Decimal | null;
        priceImpact: Decimal;
    };
    swap<T extends TxVersion>({ poolInfo, poolKeys: propPoolKeys, amountIn, amountOut, inputMint, fixedSide, txVersion, config, computeBudgetConfig, }: SwapParam<T>): Promise<MakeTxData<T>>;
    getRpcPoolInfo(poolId: string): Promise<AmmRpcData>;
    getRpcPoolInfos(poolIds: (string | PublicKey)[], config?: {
        batchRequest?: boolean;
        chunkCount?: number;
    }): Promise<{
        [poolId: string]: AmmRpcData;
    }>;
    getPoolInfoFromRpc({ poolId }: {
        poolId: string;
    }): Promise<{
        poolRpcData: AmmRpcData;
        poolInfo: ComputeAmountOutParam["poolInfo"];
        poolKeys: AmmV4Keys | AmmV5Keys;
    }>;
}

declare class TradeV2 extends ModuleBase {
    constructor(params: ModuleBaseProps);
    private getWSolAccounts;
    unWrapWSol<T extends TxVersion>(props: {
        amount: BigNumberish;
        computeBudgetConfig?: ComputeBudgetConfig;
        tokenProgram?: PublicKey;
        txVersion?: T;
    }): Promise<MakeTxData<T>>;
    wrapWSol<T extends TxVersion>(amount: BigNumberish, tokenProgram?: PublicKey, txVersion?: T): Promise<MakeTxData<T>>;
    swap<T extends TxVersion>({ swapInfo, swapPoolKeys, ownerInfo, computeBudgetConfig, routeProgram, txVersion, }: {
        txVersion: T;
        swapInfo: ComputeAmountOutLayout;
        swapPoolKeys?: PoolKeys[];
        ownerInfo: {
            associatedOnly: boolean;
            checkCreateATAOwner: boolean;
        };
        routeProgram: PublicKey;
        computeBudgetConfig?: ComputeBudgetConfig;
    }): Promise<MakeMultiTxData<T>>;
    fetchRoutePoolBasicInfo(programIds?: {
        amm: PublicKey;
        clmm: PublicKey;
        cpmm: PublicKey;
    }): Promise<{
        ammPools: BasicPoolInfo[];
        clmmPools: BasicPoolInfo[];
        cpmmPools: BasicPoolInfo[];
    }>;
    getAllRoute({ inputMint, outputMint, clmmPools, ammPools, cpmmPools, }: {
        inputMint: PublicKey;
        outputMint: PublicKey;
        clmmPools: BasicPoolInfo[];
        ammPools: BasicPoolInfo[];
        cpmmPools: BasicPoolInfo[];
    }): ReturnTypeGetAllRoute;
    fetchSwapRoutesData({ routes, inputMint, outputMint, }: {
        inputMint: string | PublicKey;
        outputMint: string | PublicKey;
        routes: ReturnTypeGetAllRoute;
    }): Promise<{
        mintInfos: ReturnTypeFetchMultipleMintInfos;
        ammPoolsRpcInfo: Record<string, AmmRpcData>;
        ammSimulateCache: Record<string, ComputeAmountOutParam["poolInfo"]>;
        clmmPoolsRpcInfo: Record<string, ClmmRpcData>;
        computeClmmPoolInfo: Record<string, ComputeClmmPoolInfo>;
        computePoolTickData: ReturnTypeFetchMultiplePoolTickArrays;
        computeCpmmData: Record<string, CpmmComputeData>;
        routePathDict: ComputeRoutePathType;
    }>;
    getAllRouteComputeAmountOut({ inputTokenAmount, outputToken: propOutputToken, directPath, routePathDict, simulateCache, tickCache, slippage, chainTime, epochInfo, feeConfig, }: {
        directPath: ComputePoolType[];
        routePathDict: ComputeRoutePathType;
        simulateCache: ReturnTypeFetchMultipleInfo;
        tickCache: ReturnTypeFetchMultiplePoolTickArrays;
        mintInfos: ReturnTypeFetchMultipleMintInfos;
        inputTokenAmount: TokenAmount;
        outputToken: ApiV3Token;
        slippage: number;
        chainTime: number;
        epochInfo: EpochInfo;
        feeConfig?: {
            feeBps: BN__default;
            feeAccount: PublicKey;
        };
    }): ComputeAmountOutLayout[];
    /** trade related utils */
    private computeAmountOut;
    computePoolToPoolKeys({ pools, clmmRpcData, ammRpcData, }: {
        pools: ComputePoolType[];
        clmmRpcData?: Record<string, ClmmRpcData>;
        ammRpcData?: Record<string, AmmRpcData>;
    }): Promise<PoolKeys[]>;
}

interface SHOW_INFO {
    programId: PublicKey;
    poolId: PublicKey;
    ammId: PublicKey;
    ownerAccountId: PublicKey;
    snapshotLpAmount: BN__default;
    openTime: number;
    endTime: number;
    project: typeof Utils1216.VERSION_PROJECT[number];
    canClaim: boolean;
    canClaimErrorType: canClaimErrorType;
    tokenInfo: {
        mintAddress: PublicKey;
        mintVault: PublicKey;
        mintDecimals: number;
        perLpLoss: BN__default;
        debtAmount: BN__default;
    }[];
}
declare type canClaimErrorType = "outOfOperationalTime" | "alreadyClaimIt" | undefined;
declare class Utils1216 extends ModuleBase {
    static CLAIMED_NUM: number;
    static POOL_LAYOUT: Structure<number | PublicKey | Buffer | BN__default | BN__default[] | {
        mintDecimals: number;
        mintAddress: PublicKey;
        mintVault: PublicKey;
        perLpLoss: BN__default;
        totalClaimedAmount: BN__default;
    }[], "", {
        padding: BN__default[];
        bump: number;
        endTime: BN__default;
        openTime: BN__default;
        status: number;
        ammId: PublicKey;
        tokenInfo: {
            mintDecimals: number;
            mintAddress: PublicKey;
            mintVault: PublicKey;
            perLpLoss: BN__default;
            totalClaimedAmount: BN__default;
        }[];
    }>;
    static OWNER_LAYOUT: Structure<number | PublicKey | Buffer | BN__default | BN__default[] | {
        mintAddress: PublicKey;
        debtAmount: BN__default;
        claimedAmount: BN__default;
    }[], "", {
        padding: BN__default[];
        owner: PublicKey;
        version: number;
        bump: number;
        poolId: PublicKey;
        lpAmount: BN__default;
        tokenInfo: {
            mintAddress: PublicKey;
            debtAmount: BN__default;
            claimedAmount: BN__default;
        }[];
    }>;
    static DEFAULT_POOL_ID: PublicKey[];
    static SEED_CONFIG: {
        pool: {
            id: Buffer;
        };
        owner: {
            id: Buffer;
        };
    };
    static VERSION_PROJECT: readonly [undefined, "Francium", "Tulip", "Larix"];
    static getPdaPoolId(programId: PublicKey, ammId: PublicKey): {
        publicKey: PublicKey;
        nonce: number;
    };
    static getPdaOwnerId(programId: PublicKey, poolId: PublicKey, owner: PublicKey, version: number): {
        publicKey: PublicKey;
        nonce: number;
    };
    static getAllInfo({ connection, programId, poolIds, wallet, chainTime, }: {
        connection: Connection;
        programId: PublicKey;
        poolIds: PublicKey[];
        wallet: PublicKey;
        chainTime: number;
    }): Promise<SHOW_INFO[]>;
    makeClaimTransaction({ poolInfo, ownerInfo, }: {
        connection: Connection;
        poolInfo: SHOW_INFO;
        ownerInfo: {
            wallet?: PublicKey;
            associatedOnly: boolean;
        };
    }): Promise<{
        transaction: Transaction;
        signer: Signer[];
    }[]>;
    makeClaimAllTransaction({ poolInfos, ownerInfo, }: {
        poolInfos: SHOW_INFO[];
        ownerInfo: {
            wallet?: PublicKey;
            associatedOnly: boolean;
        };
    }): Promise<{
        transaction: Transaction;
        signer: Signer[];
    }[]>;
    static makeClaimInstruction({ programId, poolInfo, ownerInfo, }: {
        programId: PublicKey;
        poolInfo: SHOW_INFO;
        ownerInfo: {
            wallet: PublicKey;
            ownerPda: PublicKey;
            claimAddress: PublicKey[];
        };
    }): TransactionInstruction;
}

declare class TokenModule extends ModuleBase {
    private _tokenList;
    private _tokenMap;
    private _blackTokenMap;
    private _mintGroup;
    private _whiteMap;
    private _extraTokenList;
    constructor(params: ModuleBaseProps);
    load(params?: LoadParams & {
        type?: JupTokenType;
    }): Promise<void>;
    get tokenList(): TokenInfo[];
    get tokenMap(): Map<string, TokenInfo>;
    get blackTokenMap(): Map<string, TokenInfo>;
    get mintGroup(): {
        official: Set<string>;
        jup: Set<string>;
    };
    get whiteListMap(): Set<string>;
    /** === util functions === */
    getTokenInfo(mint: string | PublicKey): Promise<ApiV3Token>;
}

interface CobaltXLoadParams extends TokenAccountDataProp, Omit<CobaltXApiBatchRequestParams, "api"> {
    connection: Connection;
    cluster?: Cluster;
    owner?: PublicKey | Keypair;
    apiRequestInterval?: number;
    apiRequestTimeout?: number;
    apiCacheTime?: number;
    signAllTransactions?: SignAllTransactions;
    urlConfigs?: API_URL_CONFIG;
    logRequests?: boolean;
    logCount?: number;
    jupTokenType?: JupTokenType;
    disableFeatureCheck?: boolean;
    disableLoadToken?: boolean;
    blockhashCommitment?: Commitment;
}
interface CobaltXApiBatchRequestParams {
    api: Api;
    defaultChainTimeOffset?: number;
    defaultChainTime?: number;
}
declare type CobaltXConstructorParams = Required<CobaltXLoadParams> & CobaltXApiBatchRequestParams;
interface DataBase<T> {
    fetched: number;
    data: T;
    extInfo?: Record<string, any>;
}
interface ApiData {
    tokens?: DataBase<ApiV3Token[]>;
    tokenList?: DataBase<ApiV3TokenRes>;
    jupTokenList?: DataBase<ApiV3Token[]>;
}
declare class CobaltX {
    cluster: Cluster;
    farm: Farm;
    account: Account;
    liquidity: LiquidityModule;
    clmm: Clmm;
    cpmm: CpmmModule;
    tradeV2: TradeV2;
    utils1216: Utils1216;
    marketV2: MarketV2;
    ido: MarketV2$1;
    token: TokenModule;
    rawBalances: Map<string, string>;
    apiData: ApiData;
    availability: Partial<AvailabilityCheckAPI3>;
    blockhashCommitment: Commitment;
    private _connection;
    private _owner;
    api: Api;
    private _apiCacheTime;
    private _signAllTransactions?;
    private logger;
    private _chainTime?;
    private _epochInfo?;
    constructor(config: CobaltXConstructorParams);
    static load(config: CobaltXLoadParams): Promise<CobaltX>;
    get owner(): Owner | undefined;
    get ownerPubKey(): PublicKey;
    setOwner(owner?: PublicKey | Keypair): CobaltX;
    get connection(): Connection;
    setConnection(connection: Connection): CobaltX;
    get signAllTransactions(): SignAllTransactions | undefined;
    setSignAllTransactions(signAllTransactions?: SignAllTransactions): CobaltX;
    checkOwner(): void;
    private isCacheInvalidate;
    fetchChainTime(): Promise<void>;
    fetchV3TokenList(forceUpdate?: boolean): Promise<ApiV3TokenRes>;
    fetchJupTokenList(forceUpdate?: boolean): Promise<ApiV3Token[]>;
    get chainTimeData(): {
        offset: number;
        chainTime: number;
    } | undefined;
    chainTimeOffset(): Promise<number>;
    currentBlockChainTime(): Promise<number>;
    fetchEpochInfo(): Promise<EpochInfo>;
    fetchAvailabilityStatus(skipCheck?: boolean): Promise<Partial<AvailabilityCheckAPI3>>;
}

export { Account as A, Clmm as C, Farm as F, LiquidityModule as L, MarketExtInfo as M, SHOW_INFO as S, TokenAccountDataProp as T, Utils1216 as U, CobaltXLoadParams as a, CobaltXApiBatchRequestParams as b, CobaltXConstructorParams as c, CobaltX as d, canClaimErrorType as e, MarketV2$1 as f, MarketV2 as g, ModuleBase as h, ModuleBaseProps as i, CpmmModule as j, TradeV2 as k, TokenModule as l };

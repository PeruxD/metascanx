/**
 * TODO: Remove file once api is available
 */

import { TransactionI } from "@api/types";

export enum TransactionStatus {
  Confirmed = "Confirmed",
  Reverted = "Reverted",
}

export enum TransactionType {
  ContractCall = "Contract call",
  Transaction = "Transaction",
}

export interface MockTransactionI {
  transactionType: TransactionType;
  hash: string;
  amount: string;
  symbol: string;
  from: string;
  to: string;
  status: TransactionStatus;
  time: number;
  nonce: number;
  blockHash: string | null;
  blockNumber: string | null;
  transactionIndex: string | null;
  value: number;
  gasPrice: string | null;
  maxFeePerGas: string | null;
  maxPriorityFeePerGas: string | null;
  gas: number;
  input: string | null;
  creates: string | null;
  raw: string | null;
  publicKey: string | null;
  chainId: string | null;
  standardV: number;
  v: number;
  r: number;
  s: number;
  accessList: string | null;
}

export const transactions: TransactionI[] = [
  {
    transactionType: TransactionType.ContractCall,
    type: 0,
    hash: "0xa4a8617cddbd0f9343e9427527601c3f3bffad852ds231f2fc2ef59599ff297",
    amount: "100.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 221,
    timestamp: "2023-04-27T02:28:10.000000Z",
    nonce: 0,
    blockNumber: "8162",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 1,
  },
  {
    transactionType: TransactionType.Transaction,
    type: 2,
    hash: "0xa4a8617cddbd0f9346e9427527601c3f3bffad85325e231f2fc2ef59599ff297",
    amount: "11000230.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Reverted,
    symbol: "DMTCx",
    timeInSec: 1221,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,

    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 1,
  },
  {
    transactionType: TransactionType.Transaction,
    type: 0,
    hash: "0xa4a8617cddbd0f9ds6e9427527601c3f3bffad85325e231f2fc2ef59599ff297",
    amount: "21.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 32323,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 1,
  },
  {
    transactionType: TransactionType.Transaction,
    type: 0,
    hash: "0xa4a8617cddbd0d9ds6e9427527601c3f3bffad85325e231f2fc2ef59599ff297",
    amount: "3.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 32323,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 6,
  },
  {
    transactionType: TransactionType.Transaction,
    type: 0,
    hash: "0xa4a8617cddbsdf9ds6e9427527601c3f3bffad85325e231f2fc2ef59599ff297",
    amount: "434.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Reverted,
    symbol: "DMTCx",
    timeInSec: 32355,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 10,
  },
  {
    transactionType: TransactionType.ContractCall,
    type: 2,
    hash: "0xa4a8617cddbd0f9346e9427527601c3f3bffad852ds231f2fc2ef59599ff297",
    amount: "11.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 32356,
    timestamp: "2023-04-25T01:18:12.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 10,
  },
  {
    transactionType: TransactionType.ContractCall,
    type: 2,
    hash: "0xa4a8617cddbd0f9ds6e9427527601c3f3bffad852ds231f2fc2ef59599ff297",
    amount: "121.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 32390,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 10,
  },
  {
    transactionType: TransactionType.Transaction,
    type: 0,
    hash: "0xa4a8617cddbd0f9346eew27527601c3f3bffad852ds231f2fc2ef59599ff297",
    amount: "11.00000012345",
    from: "0xaab27b150451726ecsds38aa1d0a94505c8729bd1",
    to: "0xaab27b150451726sdsd738aa1d0a94505c8729bd1",
    status: TransactionStatus.Confirmed,
    symbol: "DMTCx",
    timeInSec: 32500,
    timestamp: "2023-04-25T01:18:02.000000Z",
    nonce: 0,
    blockNumber: "67821",
    value: "0",
    fee: "0",
    gasPrice: "0",
    position: 1,
    maxFeePerGas: null,
    maxPriorityFeePerGas: null,
    gasUsed: "0",
    gasLimit: "0",
    rawInput: "0x",
    decodedInput: null,
    revertReason: null,
    method: null,
    confirmations: 10,
  },
];
export const pages = [
  {
    n: 1,
    active: true,
    cursors: [],
  },
  {
    n: 2,
    active: false,
    cursors: ["1"],
  },
  {
    n: 3,
    active: false,
    cursors: ["1", "2"],
  },
];

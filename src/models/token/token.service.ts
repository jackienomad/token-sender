import { Injectable } from '@nestjs/common';
import { walletClientL3, publicClient } from '../../config/sovrunChain';
import { parseEther } from 'viem';

@Injectable()
export class TokenService {
  constructor() {}

  async sendNativeToken(recipientAddress: string) {
    const amountInWei = parseEther('1');

    try {
      const txHash = await walletClientL3.sendTransaction({
        to: recipientAddress as `0x${string}`,
        value: amountInWei,
      });

      const transaction = await publicClient.waitForTransactionReceipt({
        hash: txHash,
      });

      if (transaction.status === 'success') {
        return txHash;
      } else {
        throw new Error('Transaction Reverted');
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

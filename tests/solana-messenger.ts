import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaMessenger } from '../target/types/solana_messenger';

describe('solana-messenger', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaMessenger as Program<SolanaMessenger>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});

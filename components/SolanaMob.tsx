import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

export  const Wallet: FC = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Wallets that implement either of these standards will be available automatically.
             *
             *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
             *     (https://github.com/solana-mobile/mobile-wallet-adapter)
             *   - Solana Wallet Standard
             *     (https://github.com/solana-labs/wallet-standard)
             *
             * If you wish to support a wallet that supports neither of those standards,
             * instantiate its legacy wallet adapter here. Common legacy adapters can be found
             * in the npm package `@solana/wallet-adapter-wallets`.
             */
             new PhantomWalletAdapter(),
            new UnsafeBurnerWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};






// import { ConnectionConfig, clusterApiUrl } from '@solana/web3.js';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

// import type { AppProps } from 'next/app';

// import { ThemeProvider } from '@emotion/react';
// import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

// import { ReactNode, useCallback, useMemo } from 'react';

// const CLUSTER = WalletAdapterNetwork.Devnet;
// const CONNECTION_CONFIG: ConnectionConfig = { commitment: 'processed' };
// const ENDPOINT = /*#__PURE__*/ clusterApiUrl(CLUSTER);



// function dApp({ children }: { children: ReactNode }) {
    
   
//     const adapters = useMemo(
//         () =>
//             typeof window === 'undefined'
//                 ? [] // No wallet adapters when server-side rendering.
//                 : [
//                       /**
//                        * Note that you don't have to include the SolanaMobileWalletAdapter here;
//                        * It will be added automatically when this app is running in a compatible mobile context.
//                        */
//                   ],
//         [],
//     );
//     return (
        
//             <ConnectionProvider config={CONNECTION_CONFIG} endpoint={ENDPOINT}>
//                 <WalletProvider autoConnect={true}  wallets={adapters}>
//                     <WalletModalProvider>{children}</WalletModalProvider>
//                 </WalletProvider>
//             </ConnectionProvider>
        
//     );
// }

// function ExampleMobileDApp({ Component, pageProps }: AppProps) {
//     return (
        
//             <dApp>
//                 <Component {...pageProps} />
//             </dApp>
        
//     );
// }

// export default ExampleMobileDApp;


// import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
// import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';


// import {
//     GlowWalletAdapter,
//     LedgerWalletAdapter,
//     PhantomWalletAdapter,
//     SlopeWalletAdapter,
//     SolflareWalletAdapter,
//     SolletExtensionWalletAdapter,
//     SolletWalletAdapter,
//     TorusWalletAdapter,

// } from '@solana/wallet-adapter-wallets';
// import fs from "fs";

// import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
// import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';

// import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js'; 



// require('@solana/wallet-adapter-react-ui/styles.css');
// let thelamports = 0;
// let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9"
// function getWallet(){

    
// }
// const Dapp: FC = () => {


//     return (
//         <Context>
//             <Content />
//         </Context>
//     );
// };


// export default Dapp;

// const Context: FC<{ children: ReactNode }> = ({ children }) => {
//     // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
//     const network = WalletAdapterNetwork.Mainnet;

//     // You can also provide a custom RPC endpoint.
//     const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//     // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
//     // Only the wallets you configure here will be compiled into your application, and only the dependencies
//     // of wallets that your users connect to will be loaded.
//     const wallets = useMemo(
//         () => [
//             new LedgerWalletAdapter(),
//             new PhantomWalletAdapter(),
//             new GlowWalletAdapter(),
//             new SlopeWalletAdapter(),
//             new SolletExtensionWalletAdapter(), 
//             new SolletWalletAdapter(),
//             new SolflareWalletAdapter({ network }),
//             new TorusWalletAdapter(),
//         ],
//         [network]
//     );

   

//     return (
//         <ConnectionProvider endpoint={endpoint}>
//             <WalletProvider wallets={wallets} autoConnect>
//                 <WalletModalProvider>{children}</WalletModalProvider>
//             </WalletProvider>
//         </ConnectionProvider>
//     );
// };

// const Content: FC = () => {
//     let [lamports, setLamports] = useState(.1);
//     let [wallet, setWallet] = useState("9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9");

  
    

//     // const { connection } = useConnection();
//     const connection = new Connection(clusterApiUrl("devnet"))
//     const { publicKey, sendTransaction } = useWallet();


 

//     const onClick = useCallback( async () => {

//         if (!publicKey) throw new WalletNotConnectedError();
//         connection.getBalance(publicKey).then((bal) => {
//             console.log(bal/LAMPORTS_PER_SOL);

//         });

//         let lamportsI = LAMPORTS_PER_SOL*lamports;
//         console.log(publicKey.toBase58());
//         console.log("lamports sending: {}", thelamports)
//         const transaction = new Transaction().add(
//             SystemProgram.transfer({
//                 fromPubkey: publicKey,
//                 toPubkey: new PublicKey(theWallet),
//                 lamports: lamportsI,
//             })
//         );

//         const signature = await sendTransaction(transaction, connection);

//         await connection.confirmTransaction(signature, 'processed');
//     }, [publicKey, sendTransaction, connection]);

    
// function setTheLamports(e: any)
// {
//     console.log(Number(e.target.value));
//     setLamports(Number(e.target.value));
//     lamports = e.target.value;
//     thelamports = lamports;
// }
// function setTheWallet(e: any){
//     setWallet(e.target.value)
//     theWallet = e.target.value;
// }
//     return (
       

//         <div className="App">
//                 <div className="navbar">
//         <div className="navbar-inner ">
//           <a id="title" className="brand" href="#">Brand</a>
//           <ul className="nav">


//           </ul>
//           <ul className="nav pull-right">
//                       <li><a href="#">White Paper</a></li>
//                       <li className="divider-vertical"></li>
//                       <li><WalletMultiButton /></li>

//                     </ul>
//         </div>
//       </div>
// <input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
//         <br></br>
//       <button className='btn' onClick={onClick}>Send Sol </button>


//         </div>
//     );
// };
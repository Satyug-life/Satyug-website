import {ethers} from 'ethers';
import React, { useContext } from "react";
import WalletContext from "../context/WalletContext";


async function mintAndSend(currentAccount,metadata, userEmail, userName, userNumber){

  const ERC721ABI =[
    {
      "inputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [
  
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
  
      ],
      "name": "mintPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
  
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
  
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
  
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
  
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const infuraProvider1 = "https://goerli.infura.io/v3/0f915b2ce86c461ab0ee341166802b14"

    const provider = new ethers.providers.JsonRpcProvider(infuraProvider1);  
    const pri = "caf7e00fe15f3aafe27f06619588b27908bfa637b71b0ca25288940fabf3ddfb"
    const wallet = new ethers.Wallet(pri,provider)
    const account1 = wallet.getAddress()
    const senderBalanceBefore = await wallet.getBalance()

    console.log(senderBalanceBefore)
    const recieverBalanceBefore =  await provider.getBalance(currentAccount)
  
      console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
      console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

      const contractaddress = '0x65F564D44edcDCCbF7449de9a1219b8D7c442c3f'
      const contract = new ethers.Contract(contractaddress,ERC721ABI, provider)
      const contractwithwalet =  contract.connect(wallet)
      const tx = await contractwithwalet.mint(metadata)
      var tokenId = 0
     await  tx.wait().then((_res) =>{
       console.log("TokenId",_res.events[0].args.tokenId.toString());
       const openSeaLink = `https://testnets.opensea.io/assets/goerli/${contractaddress}/${_res.events[0].args.tokenId.toString()}`
       const openSeaAccountLink = `https://testnets.opensea.io/${currentAccount}`
       tokenId = _res.events[0].args.tokenId.toString()
      
      
       const ethScanLink = `https://goerli.etherscan.io/tx/${tx.hash}`
      //  if(data != null){
         sendEmail(openSeaLink, ethScanLink, openSeaAccountLink);
      //  }
      //
     }
      )
   
      

       const transfer = await contractwithwalet["safeTransferFrom(address,address,uint256)"](account1, currentAccount, tokenId)
       await transfer.wait().then((res) => {
         console.log(res)
         // navigate('/')

       })

       async function sendEmail(
        openSeaLink,
        ethScanLink,
        openSeaAccountLink
      ) {
        // e.preventDefault()
        console.log("Sending");
        const name = userName;
        const email = userEmail;
        const number = userNumber;
        const subject = "Karma-Token";
        const msg = "Your reward for Sharing it.";
        const img = "https://gateway.pinata.cloud/ipfs/QmePyqYcVNfx5rmfFLkvY8oyo2TNg3AnCSynuCyU67yay6";
        let finalData = {
          name,
          email,
          number,
          msg,
          img,
          subject,
          openSeaLink,
          ethScanLink,
          openSeaAccountLink,
        };
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
      };
  
      
   const senderBalanceAfter = await wallet.getBalance()
   const recieverBalanceAfter = await provider.getBalance(currentAccount)

   console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
   console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)

  
}

export default mintAndSend;
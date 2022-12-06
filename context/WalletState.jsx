import React,{useState} from 'react'
import WalletContext from './WalletContext';

const WalletState = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [walletConnected, setWalletConnected] = useState(false);
    const [currentAccount, setcurrentAccount] = useState('');
    const [walletType, setWalletType] = useState('');
    const [minted, setMinted] = useState(false);
  return (
    <WalletContext.Provider value={{userEmail, setUserEmail, userName, setUserName, userNumber, setUserNumber, walletConnected, setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType, minted, setMinted}}> 
        {props.children}
    </WalletContext.Provider> 
     )
}

export default WalletState
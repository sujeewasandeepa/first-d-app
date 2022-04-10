import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";

function App() {

  const [greet, setGreet] = useState('');
  const [balance, setBalance] = useState('');
  const [depositValue, setDepositValue] = useState('');
  const [greetingValue, setGreetingValue] = useState('');


  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ABI = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

// The Contract object
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

  useEffect(() => {
    const connectWallet = async () => {
      await provider.send("eth_requestAccounts", []);
    }
    
    const getBalance = async () => {
      const balance = await provider.getBalance(contractAddress);
      const balanceFormatted = ethers.utils.formatEther(balance);
      setBalance(balanceFormatted);
    }

    connectWallet()
      .catch(console.error);

    getBalance()
      .catch(console.error);
  })

  const handleDepositChange = (e) => {
    setDepositValue(e.target.value);
  }

  const handleGreetingChange = (e) => {
    setGreetingValue(e.target.value);
  }

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    console.log(depositValue);
  }

  const handleGreetingSubmit = (e) => {
    e.preventDefault();
    console.log(greetingValue);
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h3>Greetings!</h3>
            <p>Contract Balance: {balance}</p>
          </div>
          <div className="col">
            <form onSubmit={handleDepositSubmit}>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="0" onChange={handleDepositChange} value={depositValue} />
              </div>
              <button type="submit" className="btn btn-success">Deposit</button>
            </form>
            <form className="mt-5" onSubmit={handleGreetingSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" onChange={handleGreetingChange} value={greetingValue} />
              </div>
              <button type="submit" className="btn btn-dark">Deposit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

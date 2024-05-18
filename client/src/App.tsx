import React, { useEffect, useState } from 'react';
import logo from "./assets/ball_golden.jpeg";
import { useQuery, useMutation, gql } from '@apollo/client';
import { queries } from "./queries"

// Define GraphQL queries and mutations
const GET_WALLET_BALANCE = gql`
  query GetWalletBalance {
    getWalletBalance
  }
`;

const GET_ALLOWANCE = gql`
  query GetAllowance {
    myAllowance
  }
`;

const RENEW_ALLOWANCE = gql`
  mutation RenewAllowance($user: Address!, $allowance: UInt!, $timeLimit: UInt!) {
    renewAllowance(user: $user, allowance: $allowance, timeLimit: $timeLimit) {
      user
      allowance
      validity
    }
  }
`;

const SPEND_COINS = gql`
  mutation SpendCoins($receiver: Address!, $amount: UInt!) {
    spendCoins(receiver: $receiver, amount: $amount)
  }
`;

function App() {
  const [walletBalance, setWalletBalance] = useState(null);
  const [allowance, setAllowance] = useState(null);

  // Define Apollo hooks for queries and mutations
  const { loading: balanceLoading, data: balanceData } = useQuery(GET_WALLET_BALANCE);
  const { loading: allowanceLoading, data: allowanceData } = useQuery(GET_ALLOWANCE);
  const [renewAllowance] = useMutation(RENEW_ALLOWANCE);
  const [spendCoins] = useMutation(SPEND_COINS);

  useEffect(() => {
    if (!balanceLoading && balanceData) {
      setWalletBalance(balanceData.getWalletBalance);
    }
  }, [balanceLoading, balanceData]);

  useEffect(() => {
    if (!allowanceLoading && allowanceData) {
      setAllowance(allowanceData.myAllowance);
    }
  }, [allowanceLoading, allowanceData]);

  const handleRenewAllowance = async () => {
    try {
      await renewAllowance({
        variables: {
          user: "0xYOURADDRESS", // Replace with the user's address
          allowance: 100, // new allowance amount
          timeLimit: 3600 // time limit in seconds
        }
      });
    } catch (error) {
      console.error('Error renewing allowance:', error);
    }
  };

  const handleSpendCoins = async () => {
    try {
      await spendCoins({
        variables: {
          receiver: "0xc9178Cc519Ed5815Fd787e4C27D3fd63c747A0AA", // Receiver's address
          amount: 50 // amount of coins to spend
        }
      });
    } catch (error) {
      console.error('Error spending coins:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client Example</p>
        <fieldset>
          <div>
            <label>Wallet Balance:</label> {walletBalance !== null ? walletBalance : 'Loading...'}
          </div>
          <div>
            <label>Allowance:</label> {allowance !== null ? allowance : 'Loading...'}
          </div>
          <button onClick={handleRenewAllowance}>Renew Allowance</button>
          <button onClick={handleSpendCoins}>Spend Coins</button>
        </fieldset>
      </header>
    </div>
  );
}

export default App;

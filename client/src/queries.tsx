import { gql } from '@apollo/client';

export const GET_WALLETS = gql`
  query GetWallets {
    wallets {
      id
      allowance
      validity
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query GetTransactions {
    transactions {
      id
      receiver
      amount
    }
  }
`;

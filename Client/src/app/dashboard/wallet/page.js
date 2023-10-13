import DashboardWalletCard from '@/components/dashboard/Wallet';
import React from 'react';

export const metadata = {
  title: 'Wallet Dashboard | Vault',
  description: 'Start saving and investing with ease',
};
const DashboardWallet = () => {
  return (
    <>
      <DashboardWalletCard />
    </>
  );
};

export default DashboardWallet;

import DashboardSavings from '@/components/dashboard/Savings';
import React from 'react';

export const metadata = {
  title: 'Savings Dashboard | Vault',
  description: 'Start saving and investing with ease',
};
const SavingsDashboard = () => {
  return (
    <>
      <DashboardSavings />
    </>
  );
};

export default SavingsDashboard;

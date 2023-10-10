import React from 'react';
import DashboardCard from '@/components/dashboard/DashboardCard';

export const metadata = {
  title: 'Dashboard | Vault',
  description: 'Start saving and investing with ease',
};
const DashboardHome = () => {
  return (
    <>
      <DashboardCard />
    </>
  );
};

export default DashboardHome;

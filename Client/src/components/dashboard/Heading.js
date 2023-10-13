import React from 'react';
import DashboardHeading from './DashboardHeading';

const fetchUser = async () => {
  try {
    const response = await fetch(
      'https://vaults.protechhire.com:8443/api/v1/user/me'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const Heading = async () => {
  const user = await fetchUser();
  return (
    <>
      <DashboardHeading name={user?.name} image={user?.image} />
    </>
  );
};

export default Heading;

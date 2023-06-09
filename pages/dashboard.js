import React from 'react';
import Navbar from '@/components/Navbar';
import DashboardHeader from '@/components/DashboardHeader';
import History from '@/components/History';
import FunctionCallChart from '@/components/FunctionCallChart';
import RegisteredFunctions from '@/components/RegisteredFunctions';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#116ECB]">
        <Navbar bgColor="#116ECB" text1Color="#FFFFFF" text2Color="#FFFFFF" />
        <DashboardHeader />
        <History />
        <FunctionCallChart />
      </div>
      <RegisteredFunctions />
    </div>
  );
};

export default Dashboard;

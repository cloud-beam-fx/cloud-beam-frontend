import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DashboardHeader from '@/components/DashboardHeader';
import History from '@/components/History';
import FunctionCallChart from '@/components/FunctionCallChart';
import RegisteredFunctions from '@/components/RegisteredFunctions';
import { useAccount } from 'wagmi';
import ConnectModal from '@/components/modals/ConnectModal';

const Dashboard = () => {
  const { isConnected, address } = useAccount();
  const [openModal, setOpenModal] = useState(true);
  const [mounted, setMounted] = useState(false);
  console.log(isConnected);

  const closeModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        {isConnected && (
          <div className="bg-[#116ECB]">
            <Navbar
              bgColor="#116ECB"
              text1Color="#FFFFFF"
              text2Color="#FFFFFF"
            />
            <DashboardHeader />
            <History />
            <FunctionCallChart />
            <RegisteredFunctions />
          </div>
        )}
        {!isConnected && (
          <div className="bg-primary-black h-screen">
            <ConnectModal openModal={openModal} handleOnClose={closeModal} />
          </div>
        )}
      </>
    )
  );
};

export default Dashboard;

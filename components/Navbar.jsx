import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './ConnectButton.module.css';
import { useAccount } from 'wagmi';
import EmailModal from './modals/EmailModal';

const Navbar = ({ bgColor, text1Color, text2Color, menuColor }) => {
  const { isConnected } = useAccount();
  const [walletConnected, setWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleConnect = async () => {
    if (!isConnected) {
      try {
        await connect();
        setWalletConnected(true);
        closeNavbar();
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  useEffect(() => {
    if (isConnected && !localStorage.getItem('emailProvided')) {
      setShowModal(true);
      closeNavbar();
    }
  }, [isConnected]);

  return (
    <div className={`border-gray-200 border-b-[1px] mb-12 4`}>
      <div className="mx-[40px] flex justify-between align-items py-4">
        <Link href="/dashboard" passHref>
          <div
            className={`cursor-pointer text-${text1Color} font-bold text-lg`}
          >
            <span className={`text-${text2Color}`}>Cloud</span>
            <span className={`text-blue-600`}>beam</span>
          </div>
        </Link>
        <button
          onClick={toggleNavbar}
          className={`navbar-toggle transition-all duration-300 text-${text1Color}`}
        >
          <RxHamburgerMenu
            className={`text-3xl`}
            style={{ color: text1Color }}
          />
        </button>
        {isOpen && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black opacity-90 z-10 transition-opacity duration-300`}
          >
            <div className="text-white border-b-2">
              <h1 className="ml-[30px] mt-[25px] pb-6">Cloudbeam</h1>
            </div>
            <button
              className="absolute top-0 right-4 m-4 text-white border-[1px] p-2 border-gray-500 font-bold"
              onClick={closeNavbar}
            >
              <AiOutlineClose />
            </button>
            <ul className="flex flex-col items-start uppercase text-lg justify-start space-y-4 text-white animate-slide-down mt-20 ml-12 transition-all duration-300">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Edit Functions</a>
              </li>
              <li>
                <a href="#">Functions</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li className="uppercase">
                <a href="#" className="uppercase">
                  <ConnectButton
                    className={styles.customConnectButton}
                    onClick={handleConnect}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <EmailModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default Navbar;

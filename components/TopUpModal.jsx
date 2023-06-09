import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import TopUpStats from './TopUpStats';

const tokens = ['usdt', 'eth', 'dai', 'usdc', 'mat'];

const TopUpModal = ({ openModal, handleOnClose }) => {
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {};

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-[400px] max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900 text-start mt-6"
                  >
                    Top Up for cloud<span className="text-blue-600">beam</span>
                  </Dialog.Title>

                  <div className="mt-4 text-center flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-start">Top Up Amount:</h1>
                      <p>Put in the amount you would like to top up.</p>
                    </div>
                    <form>
                      <div className="mt-10 mb-6 flex items-center  text-center">
                        <input
                          type="text"
                          id="last_name"
                          className="bg-[#388ee41c] border border-gray-300 text-gray-700 text-sm outline-none  focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                          placeholder="Enter topup amount"
                          required
                        />
                        <div className="p-0 ">
                          <select
                            className="focus:outline-none h-[42px]  uppercase text-gray-100 bg-[#388EE4] font-bold"
                            onChange={handleChange}
                          >
                            {tokens
                              ? tokens.map((option, index) => (
                                  <option
                                    key={index}
                                    value={option}
                                    className="p-2 bg-gray-800"
                                  >
                                    {option}
                                  </option>
                                ))
                              : '...'}
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>

                  <TopUpStats />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TopUpModal;

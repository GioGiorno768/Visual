import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Success from "./Success";

export default function Example({ isOpen, onClose }) {
  const address = [
    ["alamat", "Alamat", "Masukkan Alamat"],
    ["kota", "Kota", "Masukkan Kota"],
    ["provinsi", "Provinsi", "Masukkan Provinsi"],
  ];
  const address2 = [
    ["kode-pos", "Kode Pos", "Masukkan Kode pos"],
    ["negara", "Negara", "Masukkan Negara"],
  ];
  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(false)
  }
  function openModal() {
    setModal(true)
  }
  return (
    <div>

    <Dialog className="relative z-10" open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel transition className="w-[900px] overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center flex justify-center">
                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div> */}
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900"
                  >
                    Konfirmasi <span className="text-orange-400">Alamat</span>
                  </DialogTitle>
                  <form action="" className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
                    <div className="w-full">
                      {address.map((e, i) => (
                        <div className="mt-2" key={i}>
                          <label htmlFor={e[0]}>
                            <span className="block mt-7 mb-2 ">{e[1]}</span>
                            <input
                              type="text"
                              name={e[0]}
                              id={e[0]}
                              placeholder={e[2]}
                              className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      {address2.map((e, i) => (
                        <div className="mt-2" key={i}>
                          <label htmlFor={e[0]}>
                            <span className="block mt-7 mb-2 ">{e[1]}</span>
                            <input
                              type="text"
                              name={e[0]}
                              id={e[0]}
                              placeholder={e[2]}
                              className="w-full outline-2 outline-orange-400 border border-gray-500 py-2 px-4 rounded-md"
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 sm:ml-3 sm:w-auto"
                onClick={openModal}
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
                data-autofocus
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    <Success isModal={modal} onModal={closeModal}/>
    </div>
  );
}

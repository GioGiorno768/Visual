import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon, CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Success from "./Success";
import ConfirmPembelian from "./ConfirmPembelian";

export default function Confirm({ isModal, onModal }) {
  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }
  return (
    <div>
      <Dialog className="relative z-10" open={isModal} onClose={onModal}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex items-center flex-col justify-center">
                  <div className="w-20 flex h-20 items-center justify-center my-7 rounded-full bg-blue-100 sm:h-20">
                    <ExclamationCircleIcon
                      className="h-14 w-14 text-Blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Konfirmasi Pembelian!
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Apakah anda yakin untuk membeli barang ini?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex justify-center sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 sm:ml-3 sm:w-auto"
                  onClick={openModal}
                >
                  Konfirmasi
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 sm:ml-3 sm:w-auto"
                  onClick={onModal}
                >
                  Batal
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <ConfirmPembelian isModal={modal} onModal={closeModal} />
    </div>
  );
}

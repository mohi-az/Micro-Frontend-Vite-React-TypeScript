import { Fragment, useEffect, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Modal_Type } from '../Components'

export const Modal = ({ visible = false, title = '', content, message, invisible }: Modal_Type) => {
  const contentref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = contentref.current;
    if (container && content) container.appendChild(content);
    return () => { if (container && content && container.contains(content)) container.removeChild(content); };

  }, [content]);
  return (
    <Transition.Root show={visible} as={Fragment} >
      <Dialog as="div" className="relative z-10" onClose={() => invisible(false)} >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full  justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>

                  <Dialog.Title as="h3" className="text-base text-left font-semibold leading-6 text-gray-900">
                    {title}
                    <hr />
                  </Dialog.Title>
                  <div className="mt-3">
                    {message && <p role="status">{message}</p>}
                    <div ref={contentref}></div>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;

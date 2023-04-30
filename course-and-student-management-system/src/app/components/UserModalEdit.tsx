import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { createUser, getUser, getUserById, updateUser } from '../services/User.service';
import { User } from '../model/User.model';
import { MyContext } from '../hooks/UseReducer';

interface ChildProps {
  openModalEditView: boolean;
  onChange: () => void;
  setOpenModalEditView: (value: boolean) => void;
  viewCourseModal?: number;
}

export default function UserModalEdit({ openModalEditView, onChange, setOpenModalEditView, viewCourseModal }: ChildProps) {
  const { state, dispatch } = useContext(MyContext);
  const [user, setUser] = useState<User[]>([]);
  const [formDataUser, setFormDataUser] = useState({
    id: viewCourseModal!,
    username: '',
    cedula: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    })
    const UserData = getUserById(viewCourseModal!, user);
    setFormDataUser(UserData!);
  }, []);

  const cancelButtonRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDataUser({ ...formDataUser, [name]: value });
  };

  const handleSubmit = () => {
    if (viewCourseModal) {
      updateUser(viewCourseModal!, formDataUser).then((res) => {
        console.log(res);
      });
    } else {
      createUser(formDataUser).then((res) => {
        console.log(res);
      });
    }
    setOpenModalEditView(false);
  };

  return (
    <Transition.Root show={openModalEditView} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenModalEditView}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        User
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-1 text-sm leading-6 text-gray-600">Aqui pudes crear o editar usuarios llena la informacion</p>

                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                              Nombres y Apellidos
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="username"
                                  id="username"
                                  autoComplete="username"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataUser && formDataUser.username}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                              Cedula
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="cedula"
                                  id="cedula"
                                  autoComplete="cedula"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataUser && formDataUser.cedula}
                                  min={new Date().toISOString().split('T')[0]} // Establecer la fecha mínima como la fecha actual
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                              Email
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="email"
                                  id="email"
                                  autoComplete="email"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataUser && formDataUser.email}
                                  min={new Date().toISOString().split('T')[0]} // Establecer la fecha mínima como la fecha actual
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900">
                              Celular
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  autoComplete="phone"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataUser && formDataUser.phone}
                                  min={new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Establecer la fecha mínima como un mes después de la fecha actual
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpenModalEditView(false)}
                  >
                    Salir
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                    ref={cancelButtonRef}
                  >
                    Guardar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

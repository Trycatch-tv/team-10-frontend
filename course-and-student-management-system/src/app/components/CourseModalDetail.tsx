import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { getCourseById } from '../api/services/courses.service';
import { Course } from '@/app/model/Course.model';

interface ChildProps {
  openModalDetailView: boolean;
  onChange: () => void;
  setOpenModalDetailView: (value: boolean) => void;
  viewCourseModal?: number;
}

export default function CourseModalDetail({
  openModalDetailView,
  onChange,
  setOpenModalDetailView,
  viewCourseModal,
}: ChildProps) {
  const [filteredCourses, setFilteredCourses] = useState<Course>();

  useEffect(() => {
    const filtered = getCourseById(viewCourseModal!);
    setFilteredCourses(filtered);
  }, []);

  return (
    <Transition.Root show={openModalDetailView} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setOpenModalDetailView}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={onChange}
                      >
                        <span className="sr-only"></span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Detalle del curso
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-medium mb-2">
                          {filteredCourses?.title}
                        </h2>
                      </div>
                      <div className="py-1 border-t border-gray-300"></div>
                      <p className="text-gray-600 mb-2">
                        {filteredCourses?.description}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        Fecha de inicio: {filteredCourses?.fechaInicio}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        Fecha de finalización:{' '}
                        {filteredCourses?.fechaFinalizacion}
                      </p>
                      <p className="text-sm text-gray-500">
                        Profesor: {filteredCourses?.professor}
                      </p>
                      <p className="text-sm text-gray-500 mb-6">
                        Numero de estudiantes:{' '}
                        {filteredCourses?.number_of_students.length}
                      </p>
                      <div className="py-1 border-t border-gray-300"></div>
                      <p className="font-semibold text-gray-900 m-4">
                        Estudiantes
                      </p>
                      <div className="py-1 border-t border-gray-300"></div>
                      {filteredCourses?.number_of_students.length !== 0 && (
                        <>
                          {filteredCourses?.number_of_students.map(
                            (student) => (
                              <div key={student.cedula}>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                  <img
                                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="h-10 w-10 rounded-full bg-gray-50"
                                  />
                                  <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                      {student.name}
                                    </p>
                                    <p className="text-gray-600">
                                      {student.cedula}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      Email: {student.email}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-2">
                                      Teléfono: {student.phone}
                                    </p>
                                    <div className="py-1 border-t border-gray-300"></div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

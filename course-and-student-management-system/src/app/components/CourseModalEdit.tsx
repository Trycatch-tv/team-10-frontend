import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { createCourse, getCourse, getCourseById, updateCourse } from '../services/courses.service';
import { User } from '../model/User.model';
import { Cagories } from '../model/Categories.model';
import { getCategory } from '../services/Categoriy.service';
import { MyContext } from '../hooks/UseReducer';
import { Course } from '../model/Course.model';

interface ChildProps {
  openModalEditView: boolean;
  onChange: () => void;
  setOpenModalEditView: (value: boolean) => void;
  viewCourseModal?: number;
}

export default function CourseModalEdit({ openModalEditView, onChange, setOpenModalEditView, viewCourseModal }: ChildProps) {
  const { state, dispatch, GetCourses } = useContext(MyContext);
  const [selectedCategory, setSelectedCategory] = useState([1]);
  const [category, setcategory] = useState<Cagories[]>([]);
  const [formDataCourse, setFormDataCourse] = useState<Course>({
    id: viewCourseModal!,
    nombre: '',
    descripcion: '',
    fechaInicio: '',
    fechaFinalizacion: '',
    profesor: '',
    categoria: [],
    number_of_students: [] as User[],
  });

  useEffect(() => {
    const courseData = getCourseById(viewCourseModal!, state.courses);
    setFormDataCourse(courseData!);

    getCategory().then((res) => {
      // console.log(res);
      setcategory(res.data);
    });
  }, []);

  const cancelButtonRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormDataCourse({ ...formDataCourse, [name]: value });
    // console.log(formDataCourse, formDataCourse.id);
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value;
    const numberValue: number = parseInt(selectedValue, 10);
    setSelectedCategory([numberValue]);
    setFormDataCourse({ ...formDataCourse, categoria: [...selectedCategory] });
    console.log(formDataCourse);
  };

  const handleSubmit = () => {
    if (viewCourseModal) {
      updateCourse(viewCourseModal!, formDataCourse).then((res) => {
        console.log(res);
        let actualCourses = state.courses.filter((c) => c.id !== res.data.id!);
        dispatch({ type: 'UPDATE_COURSE', payload: [...actualCourses, res.data] });
      });
    } else {
      createCourse(formDataCourse).then((res) => {
        console.log(res);
        dispatch({ type: 'ADD_COURSE', payload: res.data });
      });
    }
    setOpenModalEditView(false);
    GetCourses();
    getCourse().then((res) => {
      dispatch({
        type: 'SAVE_COURSES',
        payload: res.data,
      });
    });
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
                        Editar Curso
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="mt-1 text-sm leading-6 text-gray-600">Aqui pudes crear nuevos cursos llena la informacion</p>

                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                              Nombre del curso
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="nombre"
                                  id="nombre"
                                  autoComplete="nombre"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataCourse && formDataCourse.nombre}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                              Descripcion
                            </label>
                            <div className="mt-2">
                              <textarea
                                id="descripcion"
                                name="descripcion"
                                rows={3}
                                className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                value={formDataCourse && formDataCourse.descripcion}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-span-full">
                            <label htmlFor="categoria" className="block text-sm font-medium leading-6 text-gray-700">
                              categoria
                            </label>
                            <div className="mt-1 relative">
                              <select
                                id="categoria"
                                name="categoria"
                                className="block appearance-none w-full bg-white border text-neutral-950 border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                                value={selectedCategory[0] && selectedCategory[0]}
                                onChange={handleChangeCategory}
                              >
                                <option value="" defaultValue={1} disabled>
                                  Seleccione una categoria
                                </option>
                                {category.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.nombre}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="sm:col-span-4">
                            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                              Fecha inicio
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="date"
                                  name="fechaInicio"
                                  id="fechaInicio"
                                  autoComplete="fechaInicio"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataCourse && formDataCourse.fechaInicio}
                                  min={new Date().toISOString().split('T')[0]} // Establecer la fecha mínima como la fecha actual
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900">
                              Fecha finalización
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="date"
                                  name="fechaFinalizacion"
                                  id="fechaFinalizacion"
                                  autoComplete="fechaFinalizacion"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataCourse && formDataCourse.fechaFinalizacion}
                                  min={new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Establecer la fecha mínima como un mes después de la fecha actual
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                              Profesor
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                  type="text"
                                  name="profesor"
                                  id="profesor"
                                  autoComplete="profesor"
                                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  value={formDataCourse && formDataCourse.profesor}
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

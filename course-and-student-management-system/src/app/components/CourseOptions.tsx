import React, { useEffect, useState } from 'react';
import CourseModalDetail from './CourseModalDetail';
import CourseModalEdit from './CourseModalEdit';
import CourseModalDelete from './CourseModalDelete';

interface DropdownMenuProps {
  onClose?: () => void;
  viewCourseModal?: number;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onClose, viewCourseModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModalDetailView, setOpenModalDetailView] = useState(false);
  const [openModalEditView, setOpenModalEditView] = useState(false);
  const [openModalDeleteView, setOpenModalDeleteView] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeModalDetailView = () => {
    setOpenModalDetailView(!openModalDetailView);
  };

  const handleChangeModalEditView = () => {
    setOpenModalEditView(!openModalEditView);
  };

  const handleChangeModalDeleteView = () => {
    setOpenModalDeleteView(!openModalDeleteView);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement; // Conversión de tipo a HTMLElement
    if (isOpen && !target.closest('.relative.inline-block.text-left')) {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <button onClick={handleChangeModalDetailView} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
                Ver
              </button>
              <button onClick={handleChangeModalEditView} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">
                Editar
              </button>
            </div>
            <div className="py-1" role="none">
              <button onClick={handleChangeModalDeleteView} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
      <CourseModalDetail openModalDetailView={openModalDetailView} onChange={handleChangeModalDetailView} setOpenModalDetailView={setOpenModalDetailView} viewCourseModal={viewCourseModal} />
      <CourseModalEdit openModalEditView={openModalEditView} onChange={handleChangeModalEditView} setOpenModalEditView={setOpenModalEditView} viewCourseModal={viewCourseModal}></CourseModalEdit>
      <CourseModalDelete openModalEditView={openModalDeleteView} onChange={handleChangeModalDeleteView} setOpenModalEditView={setOpenModalDeleteView} viewCourseModal={viewCourseModal}></CourseModalDelete>
    </>
  );
};

export default DropdownMenu;

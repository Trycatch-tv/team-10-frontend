'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

import { UserContext } from '@/app/hooks/UserContex';
import { User } from '@/app/model/User.model';

import { getUser } from '@/app/services/User.service';

const Courses: React.FC = () => {
  const router = useRouter();
  const [students, setStudents] = useState<User[]>([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.isAuthenticated) {
      router.push('/auth/login');
    }
    setStudents(getUser());
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <h2>Estudiantes</h2>
      <h3 className="text-xl font-bold mb-4 gap-4 flex justify-center items-center">Total de estudiantes {students ? students.length : 0}</h3>
      <div className="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-fixed w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">#</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Cedula</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Phone</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Role</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {students.map((user, index) => (
                  <tr key={user.id}>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{index + 1}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.name}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.cedula}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.email}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.phone}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.role || 'N/A'}</td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      <div className="flex justify-around">
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 hover:text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 hover:text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20h-7l-4 2H8a2 2 0 01-2-2v-1M8 16V8a2 2 0 012-2h4a2 2 0 012 2v1" />
                          </svg>
                        </button>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

import { useReducer } from 'react';
import { MyContext, UseReducer, initialState } from './UseReducer';
import { getCourse } from '../services/courses.service';

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(UseReducer, initialState);
  const GetCourses = async () => {
    getCourse().then((res) => {
      console.log(res.data);
      dispatch({ type: 'SAVE_COURSES', payload: res.data });
    });
  };

  return <MyContext.Provider value={{ state, dispatch, GetCourses }}>{children}</MyContext.Provider>;
};

import React, { createContext } from 'react';
import { Course } from '../model/Course.model';
import { Cagories } from '../model/Categories.model';

type AppState = {
    courses: Course[];
    categories?: Cagories[];
};

export type AppAction =
    | { type: 'SAVE_COURSES'; payload: Course[] }
    | { type: 'ADD_COURSE'; payload: Course }
    | { type: 'REMOVE_COURSE'; payload: number }
    | { type: 'SABE_CATEGORIES'; payload: Cagories[] };
    
export const initialState: AppState = {
    courses: [],
    categories: [],
};

export const MyContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
}>({
    state: initialState,
    dispatch: () => { },
});

export const UseReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'SAVE_COURSES':
            return { courses: action.payload };
        case 'ADD_COURSE':
            return { ...state, courses: [...state.courses, action.payload] };
        case 'REMOVE_COURSE':
            return {
                ...state,
                courses: state.courses.filter((course) => course.id !== action.payload),
            };
        default:
            return state;
    }
};
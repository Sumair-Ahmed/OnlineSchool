import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_DATA } from "./Data";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: INITIAL_DATA,
    selectedCourse: null, // Add this line to store the selected course
  },
  reducers: {
    filterCourse: (state, action) => {
      state.selectedCourse = state.courses.find(
        (item) => item.id === action.payload.id
      );
    },
    resetSelectedCourse: (state) => {
      state.selectedCourse = null;
    },
  },
});

export const { filterCourse, resetSelectedCourse } = coursesSlice.actions;
export default coursesSlice.reducer;

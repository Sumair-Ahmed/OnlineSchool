import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice";
import AchivementsReducer from "./AchivementsSlice";
import goalsReducer from "./goalsSlice";
import TestimonialReducer from "./TestimonialSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    achivements: AchivementsReducer,
    goals: goalsReducer,
    testimonial: TestimonialReducer,
  },
});

export default store;

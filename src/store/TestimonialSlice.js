import { createSlice } from "@reduxjs/toolkit";
import { TestimonialsList } from "./Data";

const TestimonialSlice = createSlice({
  name: "testimonial",
  initialState: TestimonialsList,
  reducers: {},
});

export default TestimonialSlice.reducer;

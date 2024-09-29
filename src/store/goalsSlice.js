import { createSlice } from "@reduxjs/toolkit";
import { GoalList } from "./Data";

const goalsSlice = createSlice({
  name: "goals",
  initialState: GoalList,
  reducers: {},
});

export default goalsSlice.reducer;

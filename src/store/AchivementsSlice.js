import { createSlice } from "@reduxjs/toolkit";
import { AchievementList } from "./Data";

const achievementSlice = createSlice({
  name: "achievement",
  initialState: AchievementList,
  reducers: {},
});

export default achievementSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import dataFormation from "../../data/formation.json";
import dataExperience from "../../data/experiences.json";
import dataProject from "../../data/project.json";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        experiences: dataExperience.experiences,
        formations: dataFormation.formations,
        projects: dataProject.projects
    },
    /*
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },*/
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer
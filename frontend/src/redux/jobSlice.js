import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null, 
        searchJobByText:"",
        allAppliedJobs:[],
        searchedQuery:"",
        savedJobs: [],
    },
    reducers:{
        // actions
        setAllJobs:(state,action) => {
            state.allJobs = action.payload;
        },
        setSavedJobs: (state, action) => {
            state.savedJobs = action.payload;
        },
        toggleSaveJob: (state, action) => {
            if (!action.payload || !action.payload._id) return;
            
            const jobId = action.payload._id;
            if (!Array.isArray(state.savedJobs)) {
                state.savedJobs = [];
            }
            
            const jobIndex = state.savedJobs.findIndex(job => job?._id === jobId);
            
            if (jobIndex === -1) {
                state.savedJobs.push(action.payload);
            } else {
                state.savedJobs.splice(jobIndex, 1);
            }
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs:(state,action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery:(state,action) => {
            state.searchedQuery = action.payload;
        }
    }
});
export const {
    setAllJobs, 
    setSingleJob, 
    setAllAdminJobs,
    setSearchJobByText, 
    setAllAppliedJobs,
    setSearchedQuery,
    toggleSaveJob,
    setSavedJobs
} = jobSlice.actions;
export default jobSlice.reducer;
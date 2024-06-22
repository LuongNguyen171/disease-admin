import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../api/UserApi';
import {
    userState
} from '../module';


export const getAllUserDisease = createAsyncThunk(
    'getAllUserDisease',
    async (args, { rejectWithValue }) => {
        try {
            return (await userApi.getAllUserDisease());
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const getTopLocations = createAsyncThunk(
    'getTopLocations',
    async (args: { locationQuantity: number }, { rejectWithValue }) => {
        const { locationQuantity } = args
        try {
            return (await userApi.getTopLocations(locationQuantity));
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


export const login = createAsyncThunk(
    'login',
    async (args: { phone: string, password: string }, { rejectWithValue }) => {
        const { phone, password } = args
        try {
            return (await userApi.login(phone, password));
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);


const initialState: userState = {

    loadingGetAllUserDisease: false,
    errGetAllUserDisease: null,
    successGetAllUserDisease: false,
    allUserDisease: null,

    loadingGetTopLocations: false,
    errGetTopLocations: null,
    successGetTopLocations: false,
    topLocations: null,

    loadingLogin: false,
    errLogin: null,
    successLogin: false,
}

// Define the slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add other synchronous actions here
    },
    extraReducers: (builder) => {

        builder.addCase(getAllUserDisease.pending, (state) => {
            state.loadingGetAllUserDisease = true;
            state.successGetAllUserDisease = false;
            state.allUserDisease = null;
            state.errGetAllUserDisease = null;
        });

        builder.addCase(getAllUserDisease.fulfilled, (state, action) => {
            state.loadingGetAllUserDisease = false;
            state.successGetAllUserDisease = true;
            state.allUserDisease = action.payload;
            state.errGetAllUserDisease = null;
        });

        builder.addCase(getAllUserDisease.rejected, (state, action) => {
            state.loadingGetAllUserDisease = false;
            state.successGetAllUserDisease = false;
            state.allUserDisease = null;
            state.errGetAllUserDisease =
                action.payload !== undefined ? action.payload : null;
        });

        //top location

        builder.addCase(getTopLocations.pending, (state) => {
            state.loadingGetTopLocations = true;
            state.successGetTopLocations = false;
            state.topLocations = null;
            state.errGetTopLocations = null;
        });

        builder.addCase(getTopLocations.fulfilled, (state, action) => {
            state.loadingGetTopLocations = false;
            state.successGetTopLocations = true;
            state.topLocations = action.payload;
            state.errGetTopLocations = null;
        });

        builder.addCase(getTopLocations.rejected, (state, action) => {
            state.loadingGetTopLocations = false;
            state.successGetTopLocations = false;
            state.topLocations = null;
            state.errGetTopLocations =
                action.payload !== undefined ? action.payload : null;
        });



        //     //login 

        builder.addCase(login.pending, (state) => {
            state.loadingLogin = true;
            state.successLogin = false;
            state.errLogin = null;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.loadingLogin = false;
            state.successLogin = true;
            state.errLogin = null;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.loadingLogin = false;
            state.successLogin = false;
            state.errLogin =
                action.payload !== undefined ? action.payload : null;
        });


    },
});



// Export actions
export const { /* Add synchronous action creators here */ } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;

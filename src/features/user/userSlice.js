import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    usersArr: [
        { id: 101, name: 'sanjay', gender: 'male' },
        { id: 104, name: 'geeta', gender: 'female' },
        { id: 103, name: 'sameer', gender: 'male' },
        { id: 102, name: 'sita', gender: 'female' },
        { id: 105, name: 'deepak', gender: 'male' },
    ]
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(state, action)
            state.usersArr.push(action.payload)
        },
        deleteUser: (state, action) => {
            console.log(state, action)
            state.usersArr = state.usersArr.filter((todo) => todo.id !== action.payload.id);
        }
    },
});
export const { addUser, deleteUser } = userSlice.actions;
console.log(userSlice.actions)
export const selectUsers = (state) => state.users.usersArr;
export default userSlice.reducer;
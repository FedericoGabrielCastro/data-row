import { localStorageTypes, PersonInterface } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: PersonInterface[] = [] 

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: getLocalStorage(localStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorites: (state, action) => {
            setLocalStorage(localStorageTypes.FAVORITES, state)
            return action.payload
        }
        
    }
})

export const { addFavorites } = favoritesSlice.actions
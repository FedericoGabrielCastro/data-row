import { PersonInterface } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice, peopleSlice } from "./states";

export interface AppStore {
    people: PersonInterface[],
    favorites: PersonInterface[]
} 

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer,
    }
}) 
import create from "zustand";

export const useFavoriteStore = create((set) => ({
  favorites: [],
  setFavorites: (newFavorites) => set({ favorites: newFavorites }),
}));

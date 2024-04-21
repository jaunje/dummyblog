import { useFavoriteStore } from "../zustand/favoriteStore";

function useFavorites() {
  const { favorites, setFavorites } = useFavoriteStore();

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}

export default useFavorites;

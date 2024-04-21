import create from "zustand";

const usePostsStore = create((set) => ({
  posts: null,
  fetchPosts: async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("La respuesta no fue correcta :S");
      }
      const data = await response.json();
      set({ posts: data.posts });
      console.log(data);
    } catch (error) {
      console.error("Error capturando datos:", error);
    }
  },
}));

export default usePostsStore;

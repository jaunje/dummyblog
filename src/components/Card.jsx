// eslint-disable-next-line no-unused-vars
import React from "react";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useFavorites from "../Hooks/useFavorites";

export default function Card({ postItem }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (isFavorite(postItem.id)) {
      removeFavorite(postItem.id);
    } else {
      addFavorite(postItem.id);
    }
  };

  return (
    <>
      <div className="max-w-sm rounded shadow-lg relative">
        <button
          className="absolute block right-2 top-2"
          onClick={handleToggleFavorite}
        >
          {isFavorite(postItem.id) ? (
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          )}
        </button>

        <img
          className="w-full"
          src={`https://dummyjson.com/image/200x130/008080/ffffff?text=${postItem.title}&fontFamily=poppins&fontSize=9`}
          alt={postItem.title}
        />

        <div className="px-6 py-4">
          <Link to={`/post/${postItem.id}`}>
            <div className="font-bold text-xl mb-2">{postItem.title}</div>
          </Link>
          <p className="text-gray-700 text-base">{postItem.body}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {postItem.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

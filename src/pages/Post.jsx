import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFavorites from "../Hooks/useFavorites";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();

      setPost(data);
      console.log("DATA: ", data);
      console.log("POST: ", post);
    }

    getPost();
  }, []);
  const navegate = useNavigate();

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (isFavorite(post.id)) {
      removeFavorite(post.id);
    } else {
      addFavorite(post.id);
    }
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Post {post?.id}
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {post?.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  {post?.body}
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className=" max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 w-auto"
              src="https://picsum.photos/500/500/"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  tags:
                  {post?.tags.map((item) => {
                    {
                      //   return `${item}, `;
                      return (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          {item}
                        </span>
                      );
                    }
                  })}
                </p>

                <button className="mt-16" onClick={handleToggleFavorite}>
                  {isFavorite(post?.id)
                    ? "Quitar de favoritos"
                    : "Añadir a favoritos"}
                </button>

                <p>
                  <a onClick={() => navegate(-1)}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 mt-16 mb-16"
                    >
                      Volver
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

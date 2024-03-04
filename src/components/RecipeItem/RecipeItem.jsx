import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <>
      <main className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
        <article className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
          <img
            src={item?.image_url}
            alt="recipe item"
            className="block w-full"
          />
        </article>
        <article>
          <span className="text-sm text-cyan-700 font-medium">
            {item.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black">
            {item.title}
          </h3>
          <Link
            to={`/recipe-item/${item?.id}`}
            className="text-sm p-3 px-5 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          >
            Recipe Detail
          </Link>
        </article>
      </main>
    </>
  );
};

export default RecipeItem;

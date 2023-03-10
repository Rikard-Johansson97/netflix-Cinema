import MovieWrapper from "@/components/MovieWrapper/MovieWrapper";
import Navbar from "@/components/Navbar/Navbar";
import { FilterContext } from "@/context/filterContext";
import React, { useContext } from "react";

const Movies = () => {
  const { type, sort, order, limit, genre, search } = useContext(FilterContext);
  return (
    <div className='bg-lightBackground min-h-screen w-full'>
      <Navbar />
      <MovieWrapper
        type={"movie"}
        sort={sort}
        order={order}
        limit={limit}
        genre={genre}
        search={search}
      />
    </div>
  );
};

export default Movies;

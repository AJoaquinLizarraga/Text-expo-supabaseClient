/** @format */

import { useEffect, useState } from "react";
import fetchSupabasePosts from "../db/supabaseFetch";

const useFetchingPosts = (setPosts) => {
  useEffect(() => {
    const fetching = async () => {
      const data = await fetchSupabasePosts();
      setPosts(data);
    };
    fetching();
  }, []);
};
export { useFetchingPosts };

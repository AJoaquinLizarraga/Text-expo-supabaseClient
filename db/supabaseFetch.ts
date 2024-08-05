/** @format */

import { Post } from "../models/types";
import { supabase } from "../utils/supabase";

async function fetchSupabasePosts() {
  const { data, error } = await supabase.from("Posts").select("*");
  if (error) {
    console.log(error);
  } else {
    return data;
  }
}

export default fetchSupabasePosts;

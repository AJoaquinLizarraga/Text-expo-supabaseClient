/** @format */

import { StatusBar } from "expo-status-bar";
import { FlatList, Image, Text, View } from "react-native";
import { useState } from "react";
import { Post } from "./models/types";
import { useFetchingPosts } from "./hooks/useFetchingPosts";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useFetchingPosts(setPosts);
  return (
    <View className="flex-1 justify-center items-center pt-20 bg-white ">
      <FlatList
        className=""
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mb-6  overflow-hidden shadow-xl bg-slate-100">
            <Image className="w-full h-64 " source={{ uri: item.Image }} />
            <Text className="-mt-8 font-bold text-right mr-1 text-2xl">
              {item.Title.slice(0, 19)}
            </Text>
            <Text className="mt-4 text-lg px-2 text-content tracking-tight">
              {item.Content}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

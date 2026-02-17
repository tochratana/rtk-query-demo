"use client";
import { useGetUsersQuery } from "@/service/UserApi";

export default function Home() {
  const { data, error, isLoading } = useGetUsersQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}

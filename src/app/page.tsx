'use client'
import { useGetUsersQuery } from "@/service/UserApi";
import Image from "next/image";

export default function Home() {
  const { data, error, isLoading } = useGetUsersQuery();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"></div>
  );
}

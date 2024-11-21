"use client";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/services/api/user";
import ProfilePage from "@/components/ProfilePage";

export default function Profile() {

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => User.profile(),
  });

  if (!data) return;

  return <ProfilePage data={data}/>;
}

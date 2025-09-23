import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation';
import { HomeView } from "@/module/Home/ui/home-view"

import { headers } from "next/headers";

const Page=async ()=>{

  
  const session=await auth.api.getSession({
    headers:await headers(),
  });
  if(!session){
    redirect("/auth/sign-in");
  }
  return<HomeView/>
};
export default Page;
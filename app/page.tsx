
import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/use-button";
import { redirect } from "next/navigation";



export default async function Home() {  
 const user =  await getCurrent();
 if(!user) redirect('/sign-in');
 console.log(user);
  return (
    <div className="flex gap-4" >
  <UserButton/>
    </div>
  );
}

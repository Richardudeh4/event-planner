import Link from "next/link";
import Image  from "next/image";
import logo from "@/public/logo.jpg";
import { UserButton } from "@/features/auth/components/use-button";
interface StandaloneProps{
    children: React.ReactNode;
}
export default  function StandaloneLayout({children}: StandaloneProps) {
    return(
    <main className="bg-neutral-100 min-h-screen">
    <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
            <Link href="/">
            <Image src={logo} alt="logo" width={152} height={56}/>
            </Link>
            <UserButton/>
        </nav>
    <div className="flex flex-col items-center justify-center py-4">
    {children}
    </div>
    </div>
    </main>
    )
}
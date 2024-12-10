import Link from "next/link"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

const Navbar = () => {

    const user = false

    return <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
                <Link href="/" className="flex z-40 font-semibold">Podagreo</Link>
                <div className="flex h-full items-center space-x-4">
                    {user ? (
                        <>
                            <SignOutButton>
                                <Button>Sign out</Button>
                            </SignOutButton>

                            <Link href="/dashboard" className={buttonVariants({
                                size: "sm",
                                className: "flex items-center gap-1",
                                variant: "ghost", 
                            })}>
                                Dashboard <ArrowRight className="ml-1.5 size-4" />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/dashboard" className={buttonVariants({
                                size: "sm",
                                className: "flex items-center gap-1",
                                variant: "ghost", 
                            })}>
                                Pricing
                            </Link>
                            <Link href="/sign-in" className={buttonVariants({
                                size: "sm",
                                // className: "flex items-center gap-1",
                                variant: "ghost", 
                            })}>
                                Sign In
                            </Link>

                            <div className="h-6 w-px bg-gray-200" />
                            
                            <Link href="/sign-up" className={buttonVariants({
                                size: "sm",
                                className: "flex items-center gap-1.5",
                            })}>
                                Sign Up <ArrowRight className="ml-1.5 size-4" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  
}

export default Navbar
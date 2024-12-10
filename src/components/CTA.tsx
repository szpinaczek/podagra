import { cn } from "@/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface CTAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
    
}

const CTA = ({className, href, children, ...props}: CTAProps) => {
  return <Link href={href ?? "#"} className={cn("group relative inline-flex items-center justify-center rounded-full border border-transparent bg-brand-700 px-5 py-3 text-base font-medium text-white hover:bg-brand-800 md:px-6 md:py-4", className)} {...props}>
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <ArrowRight className="transition duration-300 ease-in-out group-hover:translate-x-1"></ArrowRight>
    </span>
  </Link>
}

export default CTA
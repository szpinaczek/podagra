import CTA from "@/components/CTA"
import Heading from "@/components/Heading"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
// import { Check } from "lucide-react"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="mx-auto relative text-center flex flex-col items-center gap-10">
            <Heading>
              <span>Podagreo</span><br/> 
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">Your Personal Way</span><br/> 
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">to Fight The Gout</span>
              {/* <Check className="size-5 shrink-0 text-brand-700"/> */}
            </Heading> 
            <div className="w-full max-w-80">
              <CTA>Get Started</CTA>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
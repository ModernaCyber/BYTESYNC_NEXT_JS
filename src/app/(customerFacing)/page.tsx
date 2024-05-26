import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import About from "./about/page";
import Services from "./services/page";
import { OurStack } from "@/components/ourStack";
import Partners from "@/components/Partners";

export default function HomePage() {
  return (
    <main className="space-y-12 ">
      <div className="mx-auto w-full  h-auto  ">
        <div id="home"></div>
        <div className="mt-4 w-full h-auto">
          <Header />
        </div>
        <div className="w-full h-auto md:container mx-auto">
          <About />
        </div>
        <div className=" w-full border-t border-gray-300 my-4 md:container mx-auto"></div>
        <div className="md:container mx-auto ">
          <Services />
        </div>
        <div className=" w-full border-t border-gray-300 my-4"></div>
        <div className="w-full hidden md:block ">
          <OurStack />
        </div>
        <div className=" w-full border-t border-gray-300 my-4"></div>
        <div className="w-full h-auto">
          <Partners />
        </div>
      </div>
    </main>
  );
}

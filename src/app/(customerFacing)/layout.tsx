"use client";
import CustomerNav from "@/components/customer_nav";
import Footer from "@/components/footer";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log("----------------"+latest)
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  // useEffect(()=>{
  //  const unsubscribe = scrollY.on("change",()=>{

  //   })
  //   return ()=>unsubscribe()
  // },[scrollY])
  return (
    <>
      <motion.div
        variants={{
          hidden: { y: "-100%" },
          visible: { y: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="h-16 w-full fixed top-0 left-0 z-20 "
      >
        <CustomerNav />
      </motion.div>

      <div className=" my-6 mt-16">{children}</div>
      <Footer />
    </>
  );
}

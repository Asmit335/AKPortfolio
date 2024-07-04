"use client";
import { BsArrowDownRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet doloremque ex!",
    href: "#",
  },
  {
    num: "02",
    title: "AI/ML",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet doloremque ex!",
    href: "#",
  },
  {
    num: "03",
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet doloremque ex!",
    href: "#",
  },
  {
    num: "04",
    title: "SEO ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae amet doloremque ex!",
    href: "#",
  },
];

export default function Page() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex  justify-between items-center">
                    <div className="text-3xl font-extrabold text-transparent   bg-clip-text bg-gradient-to-r from-green-400  to-blue-500 hover:text-green-500 ">
                      {item.num}
                    </div>
                    <Link href={item.href}>
                      <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-gray-200 hover:bg-green-500 transform transition-transform hover:rotate-45">
                        <BsArrowDownRightCircleFill className=" hover:text-green-500 text-3xl text-gray-700" />
                      </div>
                    </Link>
                  </div>
                  <h2 className="text-3xl font-bold hover:text-green-500 transition-all duration-500">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                  <hr />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}

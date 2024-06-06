import Photo from "../components/Photo";
import Social from "../components/Social";
import Stats from "../components/Stats";
export default function Home() {
  return (
    <>
      <section className=" h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center   justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br />
                <span className="  text-green-500">Asmit Khanal</span>
              </h1>
              <p className=" max-w-[500px] mb-9 text-white/80">
                I excel at software develping the industirial product
              </p>
              <div className="flex  gap-8 ">
                <div>
                  <button
                    type="button"
                    className={`rounded bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black 
                 
                `}
                  >
                    Download CV
                  </button>
                </div>
                <div className="mb-8 xl:mb-8">
                  <Social />
                </div>
              </div>
            </div>
            {/* //pic */}
            <div className=" order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>

        {/* stats */}
        <Stats />
      </section>
    </>
  );
}

import Link from "next/link";
import React from "react";

export default function Document() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-slate-500 h-full">
        <div>
          <ul>
            <li className="ml-5">Teaching Application: </li>
          </ul>

          <main>
            <Link
              href="/Asmitcoverletterteaching.pdf"
              download="asmitDocument"
              target="_blank"
            >
              <button
                type="button"
                className={`rounded bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black 
                 
                `}
              >
                Download Document
              </button>
            </Link>
          </main>
        </div>

        <div>
          <ul>
            <li className="ml-5">Pashupati Certificate : </li>
          </ul>
          <main>
            <Link
              href="/certificate pashupati 2.0.doc"
              download="pashupatiCertificate"
              target="_blank"
            >
              <button
                type="button"
                className={`rounded bg-black  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black 
                 
                `}
              >
                Download Document
              </button>
            </Link>
          </main>
        </div>
      </section>
    </>
  );
}

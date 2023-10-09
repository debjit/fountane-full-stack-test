import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  const imgSrc = [
    // {
    //   name: "logo 1",
    //   src: "/company/14.png",
    // },
    {
      name: "logo 2",
      src: "/company/17.png",
    },
    {
      name: "logo 2",
      src: "/company/18.png",
    },
    {
      name: "logo 3",
      src: "/company/19.png",
    },
    {
      name: "logo 4",
      src: "/company/21.png",
    },
    {
      name: "logo 4",
      src: "/company/22.png",
    },
    {
      name: "logo 4",
      src: "/company/23.png",
    },
    {
      name: "logo 4",
      src: "/company/24.png",
    },
    {
      name: "logo 4",
      src: "/company/25.png",
    },
    {
      name: "logo 4",
      src: "/company/26.png",
    },
    {
      name: "logo 4",
      src: "/company/27.png",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center max-w-7xl mx-auto">
      <nav className="flex justify-between items-center mt-6 h-20 px-10 py-3 border border-slate-600 antialiased  w-full rounded-full">
        <div className="w-1/3 flex justify-start items-center space-x-4">
          <a className="flex items-center" href="#">
            <Image src="/logo.png" width={120} height={24} alt="Website logo" />
            <span className="sr-only">Website Logo</span>
          </a>
        </div>
        <div className="w-1/3 flex justify-center gap-10">
          <a className="text-md font-medium lowercase" href="#">
            Products
          </a>
          <a className="text-md font-medium lowercase" href="#">
            dao
          </a>
          <a className="text-md font-medium lowercase" href="#">
            Build
          </a>
          <a className="text-md font-medium lowercase" href="#">
            Docs
          </a>
        </div>
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <Link
            className="home-launch-app-button py-2 px-5 text-black text-base text-center lowercase"
            href="/login"
          >
            Launch App
          </Link>
        </div>
      </nav>
      <section className="text-center mx-auto relative isolate max-w-2xl">
        {/* <img className="h-8 w-auto" src="/gradient.png" alt=""></img> */}
        {/* style="background-image: url('/gradient.png')" */}
        {/* <div style={{ backgroundImage: `url('/gradient.png')` }}> */}
        {/* Hero Section */}
        <div>
          <Image
            src="/gradient.png"
            width={800}
            height={800}
            alt="site gradient"
          />
          <div className="-mt-48">
            <div className="text-sm text-[#54C0A0]">JET PROTOCOL</div>
            <h1 className="text-5xl sm:text-6xl font-semibold line pb-5 leading-loose font-poppins">
              the next generation of{" "}
              <span className={playfairDisplay.className}>defi governance</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400 text-center">
              experience open source, transparent and efficient borrowing and
              lending on solana.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 pt-10">
          <button
            type="button"
            className="home-launch-app-button lowercase px-5 py-2 text-black"
          >
            Read Docs
          </button>
          <button
            type="button"
            className="home-launch-app-button-blank lowercase px-5 py-2"
          >
            How it works
          </button>
        </div>
        {/* Footer Section  */}
        <div className="flex gap-6 h-12 w-full my-32 justify-center">
          {imgSrc.map((image, index) => (
            <img
              key={index}
              height={48}
              width={150}
              src={image.src}
              alt={image.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

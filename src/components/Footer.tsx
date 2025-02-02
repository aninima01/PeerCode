import { Zap } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center  pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[#0A0A1C] bg-opacity-50 backdrop-blur-lg">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Zap />
          </div>
          <p className="mt-4 text-sm text-start">
            Code, Collaborate, Create: Run, Share, and Innovate Across the Globe
          </p>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Product</h3>
              <ul className="mt-4 text-sm">
                <li className="mt-2">
                  <Link href="" className=" transition-all duration-300">
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className=" transition-all duration-300">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Social</h3>
              <ul className="mt-4 text-sm ">
                <li className="mt-2">
                  <Link
                    href="https://x.com/aninima01"
                    className="transition-all duration-300"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://www.linkedin.com/in/aninima01/"
                    className="transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm ">
                <li className="mt-2">
                  <Link href="" className="transition-all duration-300">
                    Blogs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="transition-all duration-300">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm ">
                <li className="mt-2">
                  <Link href="" className="transition-all duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="transition-all duration-300">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm  mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} PeerCode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

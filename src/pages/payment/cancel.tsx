import Link from "next/link";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const CancelPage = () => {
  return (
    <div className="h-screen ">
      <div className="mx-auto bg-white  p-6">
        <div className="flex items-center justify-center text-6xl text-red-500">
          <RxCrossCircled />
        </div>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Oops! Payment was cancelled!
          </h3>
          <p className="my-2 text-gray-600">Please try again.</p>

          <div className="py-10 text-center">
            <Link
              href="/"
              className="bg-slate-700 px-12 py-3 font-semibold text-white hover:bg-slate-500"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-4 rounded-lg bg-white shadow ">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              Prashant
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-slate-700 sm:mb-0">
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="me-4 hover:underline md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
        <span className="flex gap-1 text-sm text-slate-700 sm:text-center">
          © {new Date().getFullYear()}
          <a href="https://flowbite.com/" className="hover:underline">
            Prashant™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

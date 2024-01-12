/* eslint-disable @typescript-eslint/no-misused-promises */
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, type FormEvent, useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function Login() {
  const router = useRouter();
  const userData = useSession();
  const [signInUi, setSignInUi] = useState(true);
  useEffect(() => {
    if (userData.status === "authenticated") {
      void router.push("/");
    }
  }, [userData, router]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await signIn("google", {
      callbackUrl: "/",
    });
  }
  return (
    <>
      <Navbar />
      {signInUi ? (
        <div className="h-full w-full">
          <div className="my-5 flex w-full items-start justify-center">
            <div className="  bg-white p-10">
              <div className="flex h-[300px] w-[500px] flex-col items-center justify-center rounded-md bg-white px-12 py-10">
                <p className="mb-7 mt-5 text-lg"> Login to continue</p>
                <div className="flex w-full items-center justify-center ">
                  <button
                    onClick={handleSubmit}
                    className="focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground mb-5 inline-flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                    type="button"
                  >
                    <svg
                      className="mr-2 h-6 w-6"
                      width="800px"
                      height="800px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            ></path>
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Google
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-black">
                    Don’t have an account yet?
                    <button
                      onClick={() => setSignInUi(false)}
                      className="text-pink-2 ml-1 font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full">
          <div className=" relative flex w-full items-start justify-center">
            <div className="  bg-white   p-10">
              <div className="flex h-[500px] w-[500px] flex-col items-center justify-center rounded-md bg-white px-12 py-10">
                <p className="mb-7 mt-5 text-lg"> Sign up to continue</p>
                <div className="flex w-full items-center justify-center ">
                  <button
                    onClick={handleSubmit}
                    className="focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground mb-5 inline-flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                    type="button"
                  >
                    <svg
                      className="mr-2 h-6 w-6"
                      width="800px"
                      height="800px"
                      viewBox="-0.5 0 48 48"
                      version="1.1"
                    >
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            ></path>
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    Google
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-black">
                    Already have an account ?
                    <button
                      onClick={() => setSignInUi(true)}
                      className="text-pink-2 ml-1 font-medium hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

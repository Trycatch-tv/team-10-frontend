import Layout from './cursos/layout';
import RootLayout from './layout';
import Courses from './pages/Courses';
import NextLink from 'next/link';
import Image from 'next/image';
export default function MyApp() {
  return (
    <>
      <RootLayout>
        <Layout>
          <div className=" bg-neutral-200 grid justify-items-center ">
            <div className="bg-yellow-500 bg-[url(/background.png)] bg-center w-[90%] h-extra-high my-10 rounded-lg flex flex-col items-center justify-between px-10 md:flex-row ">
              <div>
                <h1 className="text-4xl font-semibold text-neutral-100">
                  Aprende desde <br />
                  la comodidad de tu casa.
                </h1>
                <NextLink
                  href="/cursos"
                  className="mt-10 bg-gray-950 rounded-xl p-3 flex w-fit gap-5"
                >
                  Ver cursos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </NextLink>
              </div>
              <img
                src="/student.png"
                className="aspect-auto w-96 bg-orange-600 p-1 rounded-full"
              />
            </div>
          </div>
        </Layout>
      </RootLayout>
    </>
  );
}

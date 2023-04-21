import Layout from "./pages/layout";
import RootLayout from "./layout";
import Courses from "./pages/Courses/page";

export default function MyApp() {

  return (
    <>
      <RootLayout>
        <Layout>
          <Courses></Courses>
        </Layout>
      </RootLayout>
    </>
  );
}

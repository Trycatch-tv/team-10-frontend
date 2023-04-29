import { Metadata } from 'next';
import Home from './pages/Home/page';
import Layout from './pages/layout';
// export const metadata: Metadata = {
//   title: 'Home',
// };
export default function MyApp() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

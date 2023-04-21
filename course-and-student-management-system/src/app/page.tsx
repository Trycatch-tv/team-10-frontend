import { Provider } from 'react-redux';
import store from './utils/redux/store';

import Home from './pages/Home/page';
import Layout from './pages/layout';

export default function MyApp() {
  return (
    <Provider store={store}>
      <Layout>
        <Home></Home>
      </Layout>
    </Provider>
  );
}

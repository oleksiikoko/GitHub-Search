import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import initStore from "store";

import "styles/index.scss";

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(() => initStore)(MyApp);

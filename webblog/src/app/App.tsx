import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';

import { AppRoutes } from './routes';
import { store } from './store/rootReducer';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;

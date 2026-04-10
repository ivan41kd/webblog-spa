import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';

import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;


import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routing/Routing';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <App></App>
      </RouterProvider>
    </div>
  );
}

export default App;

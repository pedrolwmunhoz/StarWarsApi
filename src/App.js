import { BrowserRouter } from 'react-router-dom'
import SearchComponent from './components/SearchComponent';
import Header from './components/Header';
import AppRoutes from './routes';


function App() {
  return (
    <BrowserRouter>
      <div className="flex relative">
        <div className="flex-2 w-full">
          <SearchComponent />
          <div className="p-5">
            <Header />
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

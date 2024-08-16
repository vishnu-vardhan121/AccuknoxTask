import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { MyProvider } from './components/context';

function App() {
  return (
    <>
    <MyProvider>
    <Home/>
    </MyProvider>
    </>
  );
}

export default App;

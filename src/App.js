import { Route, Routes } from 'react-router-dom';
import './App.css';
import Store from './component/Store';

function App() {
  return (
    <div key="app" className="App">
      <Routes>
        <Route path='/store/*' element={<Store />} />
      </Routes>

    </div>
  );
}

export default App;

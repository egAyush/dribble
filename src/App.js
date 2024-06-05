import { useState } from 'react';
import Home from './pages/Home';
import NavBar from './components/Navbar';
// import { BrowserRouter } from 'react-router-dom';

function App() {
  // const [activeKey, setActiveKey] = useState(null);
  const [activeTab, setActiveTab] = useState('null');
  return (
    <>
      <NavBar active={activeTab} onSelect={setActiveTab} appereance="subtle" />
      <Home />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
// import Left from './Component/Left_Component/Left'
import Content from './Component/Content/Content';
import ContentBody from './Component/ContentBody/ContentBody';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Content/>
    </div>
  );
}

export default App;

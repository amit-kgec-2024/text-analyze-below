import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
    <Navbar title="IndMart" about="About" contact="Contact"/>
    <div className="container">
      <TextArea heading="Ener The text to analyze below"/>
    </div>
    </>
  );
}

export default App;

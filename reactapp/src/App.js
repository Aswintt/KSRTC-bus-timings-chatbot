import './App.css';
import Navbar from './layout/Navbar/Navbar';
import Landing from './layout/Landing';
import Main from './layout/mainsections/Main';
import Footer from 'layout/Footer';
import Chatbot from 'layout/chatbot/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <main id="main">
        <Main />
      </main>
      <Chatbot />

      <Footer />
    </div>
  );
}

export default App;

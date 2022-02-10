import './reset.css'
import Item from './components/Item';
import Button from './components/Button';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import Container from './container/Container';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Container />
      <Footer />
    </div>
    
  );
}

export default App;

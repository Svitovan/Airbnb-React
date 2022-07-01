import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';


function App() {
  

  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Card 
        img="swim.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with K."
        price={100}
      />
      <Card />
      
    </div>
  );
}

export default App;

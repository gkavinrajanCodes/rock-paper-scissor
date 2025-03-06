import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
  const features = [
    {id: 'Reusability', desc: 'React components can be reused throughout your application, saving development time and ensuring consistency.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
    {id: 'Virtual DOM', desc: 'React creates a lightweight representation of the real DOM in memory, which reduces direct manipulation and improves performance.'},
    {id: 'AJAX', desc: 'React works smoothly with AJAX requests, allowing dynamic data fetching without page refreshes.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
    {id: 'Speed', desc: 'React\'s optimized rendering engine and virtual DOM make applications fast and responsive.'},
  ];
  
  return (
    <div className="App">
      <Header />
      <div className="features-container">
        <h2>Key Benefits of React JS</h2>
        <div className="features-grid">
          {features.map(feature => (
            <Note key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
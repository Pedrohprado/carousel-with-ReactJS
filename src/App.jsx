import './App.css';
import Slides from './components/Slides';

function App() {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];
  return (
    <div className='container'>
      <Slides slides={slides} />
    </div>
  );
}

export default App;

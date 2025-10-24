import AboutWidget from './components/AboutWidget';
import GalleryWidget from './components/GalleryWidget';
import './style.css';

function App() {
  return (
    <div className="main-container">
      <div className="left-half"></div>
      <div className="right-half">
        <AboutWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;

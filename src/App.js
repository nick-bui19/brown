import './App.css';
import TimeZoneDisplay from './components/TimeZoneDisplay';
import WordOfTheDay from './components/WordOfTheDay';
import PhotoGallery from './components/PhotoGallery';
import CountdownTimer from './components/CountdownTimer';
import TimeSlider from './components/TimeSlider';
// import MovieSync from './components/MovieSync'; // later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hey Tina and Brown!! 💌</h1>
      </header>
      <main>
        <CountdownTimer />
        <TimeSlider />
        <TimeZoneDisplay />
        <WordOfTheDay />
        <PhotoGallery />
        {/* <MovieSync /> */}
      </main>
    </div>
  );
}

export default App;
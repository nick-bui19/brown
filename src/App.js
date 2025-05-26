import './App.css';
import TimeZoneDisplay from './components/TimeZoneDisplay';
import WordOfTheDay from './components/WordOfTheDay';
import PhotoGallery from './components/PhotoGallery';
import CountdownTimer from './components/CountdownTimer';
import TimeSlider from './components/TimeSlider';
import LiveTime from './components/LiveTime';
// import MovieSync from './components/MovieSync'; // later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hey Tina and Brown!! 💌</h1>
      </header>
      <main>
        <CountdownTimer />
        <LiveTime />
        <div className="feature-row">
          <WordOfTheDay />
          <TimeSlider />
          {/* MessageInbox goes here later */}
        </div>
        <TimeZoneDisplay />
        <PhotoGallery />
        {/* <MovieSync /> */}
      </main>
    </div>
  );
}

export default App;
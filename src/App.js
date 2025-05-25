import './App.css';
import TimeZoneDisplay from './components/TimeZoneDisplay';
import WordOfTheDay from './components/WordOfTheDay';
import PhotoGallery from './components/PhotoGallery';
import CountdownTimer from './components/CountdownTimer';
// import MovieSync from './components/MovieSync'; // later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Our Long Distance Hub 💌</h1>
      </header>
      <main>
        <TimeZoneDisplay />
        <WordOfTheDay />
        <PhotoGallery />
        <CountdownTimer />
        {/* <MovieSync /> */}
      </main>
    </div>
  );
}

export default App;
import './App.css';
import TimeZoneDisplay from './components/TimeZoneDisplay';
import WordOfTheDay from './components/WordOfTheDay';
import PhotoGallery from './components/PhotoGallery';
import CountdownTimer from './components/CountdownTimer';
import TimeSlider from './components/TimeSlider';
import LiveTime from './components/LiveTime';
import MessageInbox from './components/MessageInbox';
// import MovieSync from './components/MovieSync'; // later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hey Tina and Brown!! 💌</h1>
      </header>
      <main>
        <MessageInbox />
        <CountdownTimer />
        <LiveTime />
        <div className="feature-row">
          <TimeSlider />
          <WordOfTheDay />

        </div>
        <TimeZoneDisplay />
        <PhotoGallery />
        {/* <MovieSync /> */}
      </main>
    </div>
  );
}

export default App;
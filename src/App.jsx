import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlashcardsPage from './pages/FlashcardsPage';

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">🌍 Learn English</h1>
        <nav className="mb-4">
          <Link className="mr-4 text-blue-500" to="/">Flashcards</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FlashcardsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

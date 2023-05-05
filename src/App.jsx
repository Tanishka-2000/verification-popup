
import { useState } from 'react'
import './app.css';
import { VerificationPopUp } from './components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <button 
        className="openPopup"
        onClick={() => setIsModalOpen(true)}
        >
        Verify Phone Number
      </button>
      { isModalOpen && <VerificationPopUp setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default App

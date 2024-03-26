import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  const [paragraphContent, setParagraphContent] = useState('');

  return (
    <div className="App">
      <Navbar setParagraphContent={setParagraphContent} />
      
      {paragraphContent && (
        <div className="additional-paragraph">
          <p>{paragraphContent}</p>
        </div>
      )}
    </div>
  );
}

export default App;

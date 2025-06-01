import React from 'react';

function WordOfTheDay() {
  const word = 'Trời ơi!'; 
  const translation = '天啊‼️。';
  const notes = '"Trời" means "天“, "ơi" in "anh ơi!" - an endearing way to call someone! -> Literally exclaiming to heaven hahahah!!'

  return (
    <div className="feature-box">
      <h2>📚 Word of the Day</h2>
      <p><strong>{word}</strong></p>
      <p>{translation}</p>
      <p>{notes}</p>
    </div>
  );
}

export default WordOfTheDay;
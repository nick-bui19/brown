import React from 'react';

function WordOfTheDay() {
  const word = 'trời ơi!'; 
  const explanation = '天啊‼️。"trời" means "天“, "ơi" in "anh ơi!" - an endearing way to call someone!';

  return (
    <div className="feature-box">
      <h2>📚 Word of the Day</h2>
      <p><strong>{word}</strong> (verb)</p>
      <p>{explanation}</p>
    </div>
  );
}

export default WordOfTheDay;
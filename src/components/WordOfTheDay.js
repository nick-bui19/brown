import React from 'react';

function WordOfTheDay() {
  const word = 'trời ơi!'; 
  const explanation = '天啊‼️。';
  const explanation2 = '"trời" means "天“, "ơi" in "anh ơi!" -> an endearing way to call someone!. Literally calling heaven woahhh!!'

  return (
    <div className="feature-box">
      <h2>📚 Word of the Day</h2>
      <p><strong>{word}</strong> (verb)</p>
      <p>{explanation}</p>
      <p>{explanation2}</p>
    </div>
  );
}

export default WordOfTheDay;
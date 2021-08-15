import React from 'react';

export default function Input(props) {
  return (
    <div className="flex flex-wrap overflow-hidden w-full justify-center content-center pb-3 ">
      <input
        className="w-3/5 font-sans text-sm cursor-default outline-none border rounded p-3"
        placeholder="Search your lyrics or find new rhyme words..."
        style={{ cursor: 'text' }}
      />

      <button className="ml-1 p-3 bg-blue-600 text-center  self-center rounded text-white font-sans">
        Lyrics
      </button>
      <button className="ml-1 p-3 bg-blue-600 rounded text-white justify-center font-sans  text-center  self-center">
        Words
      </button>
    </div>
  );
}

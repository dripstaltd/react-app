import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faStar } from '@fortawesome/free-solid-svg-icons';

export default function SlangWordPairs() {
  return (
    <div className="w-full flex overflow-hidden ml-1 p-0 ">
      <div className="my-px px-px w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <Link className="block" to="/slang-dictionary">
          <button className="flex w-full overflow-hidden p-3 bg-blue-600 rounded text-white justify-center font-sans text-center  self-center">
            <FontAwesomeIcon
              style={{ color: 'white', fontSize: '1.4rem', marginRight: '.4rem' }}
              icon={faBookOpen}
            />
            Slang Dictionary
          </button>
        </Link>
      </div>
      <div className="my-px px-px w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
        <Link className="block" to="/word-pairs">
          <button className=" flex w-full overflow-hidden p-3 bg-blue-600 rounded text-white justify-center font-sans text-center  self-center">
            <FontAwesomeIcon
              style={{ color: 'white', fontSize: '1.4rem', marginRight: '.4rem' }}
              icon={faStar}
            />
            Word Pairs
          </button>
        </Link>
      </div>
    </div>
  );
}

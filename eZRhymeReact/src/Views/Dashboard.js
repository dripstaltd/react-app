import React from 'react';
// Components -----------
import RhymeChallenge from '../Components/Cards/RhymeChallenge';
import RecentLyrics from '../Components/Cards/RecentLyrics';
import InviteFriends from '../Components/Cards/InviteFriends';
import SlangWordPairs from '../Components/Cards/SlangWordPairs';
import RateApp from '../Components/Cards/RateApp';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex w-full flex-wrap overflow-hidden lg:-mx-1 xl:-mx-1 w-full h-5/6">
          <div className=" overflow-hidden sm:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <RhymeChallenge visible={true} />
            <RateApp visible={true} />
          </div>
          <div className="w-full overflow-hidden sm:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <RecentLyrics />
            <InviteFriends visible={true} />
          </div>
          <SlangWordPairs />
        </div>
      </div>
    );
  }
}

import React from 'react';
import Loader from '../Components/Loader';
import UseAxiosGet from '../Hooks/HttpRequests.js';
// import LyricCard from '../Components/LyricCard';
import Dashboard from '../Components/Dashboard';

function Home() {
  let content = null;
  const url = `https://script.google.com/macros/s/AKfycbzQTK-bSfECvaX0SKLSkTjWqVsWshXO5c7OJ_a1fege43FV3neh_CSJWLAQxNYvCq_v/`;

  const liveDataRhyme = async () => {
    try {
      let res = await UseAxiosGet(url);

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  liveDataRhyme();
  return (
    <div className="flex justify-center">
      <Dashboard data={''} />
    </div>
  );
}

export default Home;

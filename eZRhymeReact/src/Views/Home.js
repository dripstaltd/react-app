import React from 'react';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests.js';
// import LyricCard from '../Components/LyricCard';
import Dashboard from '../Components/Dashboard';

function Home() {
  let content = null;
  const url = `https://script.googleusercontent.com/macros/echo?user_content_key=-CD81J-2rs9l9JdZXJWYeqdlQtj3mj4rSpJw_qmFSI9ivZ-d72bFQvvVp50g1mruQa0gI--MFKYq4astm5kTlj-QZ06ntQ2Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPg6VUGCJzDpgfE6lEhX4TEjQmSLeNBQN4z95fYgZaKv92Xvp84Y8TrZsnzeEX2G2_CV4TprH0qZM5lof7eJ9iz1lj4yy0-3Mdz9Jw9Md8uu&lib=MV7AG8eAwX8D6BLFlC8xNBPU2Oqj8G3ei`;

  const res = useAxiosGet(url);

  if (res.data) {
    console.log(res.data);
  }

  if (res.error) {
    content = <p>There was an error loading the products</p>;
  }

  if (res.loading) {
    content = <Loader></Loader>;
  }
  return (
    <div className="flex justify-center">
      <Dashboard data="" />
    </div>
  );
}

export default Home;

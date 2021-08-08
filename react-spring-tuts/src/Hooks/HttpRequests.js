import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxiosGet(url) {
  //State
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
        });
      })
      .catch(() => {
        setRequest({
          loading: true,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}

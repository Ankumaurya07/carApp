import { useEffect, useState } from 'react';
import API from '../api/api';

const useCars = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get('/cars')
      .then(res => setCars(res.data))
      .catch(err => setError(err.message));
  }, []);

  return { cars, error };
};

export default useCars;

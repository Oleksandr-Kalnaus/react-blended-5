import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'reduxState/operation';
import { setBaseCurrency } from 'reduxState/currencySlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

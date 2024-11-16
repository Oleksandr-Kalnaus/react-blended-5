import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currencySlice';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setBaseCurrency(event.value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        isSearchable
        options={symbols}
        onChange={handleChange}
      />
    </div>
  );
};

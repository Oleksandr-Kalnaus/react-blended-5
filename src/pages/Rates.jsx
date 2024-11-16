import { Wave } from 'react-animated-text';

import { Container, Heading, Loader, RatesList, Section } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestRates } from 'reduxState/operation';
import {
  selectBaseCurrency,
  selectError,
  selectFilteredRates,
  selectLoading,
} from 'reduxState/selectors';

const Rates = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filteredRates = useSelector(selectFilteredRates);

  const dispatch = useDispatch();

  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
        {isLoading && <Loader />}

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;

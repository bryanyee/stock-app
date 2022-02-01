import PropTypes from 'prop-types';

const dayPrice = PropTypes.shape({
  date: PropTypes.string.isRequired,
  open: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  close: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
});

const stock = PropTypes.shape({
  id: PropTypes.number.isRequired,
  ticker: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  historicalPrices: PropTypes.arrayOf(dayPrice).isRequired,
});

const AppPropTypes = Object.freeze({
  dayPrice,
  stock,
});

export default AppPropTypes;

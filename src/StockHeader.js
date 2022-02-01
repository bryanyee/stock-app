import AppPropTypes from './AppPropTypes';

function StockHeader({ stock: { name, currentPrice, ticker } }) {
  return (
    <header>
      <h2>{`${name} (${ticker})`}</h2>
      <h1>${currentPrice}</h1>
    </header>
  );
}

StockHeader.propTypes = {
  stock: AppPropTypes.stock.isRequired,
};

export default StockHeader;

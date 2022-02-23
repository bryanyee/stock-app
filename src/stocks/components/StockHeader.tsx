interface StockHeaderProps {
  stock: Stock;
}

function StockHeader({ stock: { name, currentPrice, ticker } }: StockHeaderProps) {
  return (
    <header>
      <h2>{`${name} (${ticker})`}</h2>
      <h1>${currentPrice}</h1>
    </header>
  );
}

export default StockHeader;

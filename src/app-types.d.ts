// Application Types

interface DayPrice {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface Stock {
  id: number;
  ticker: string;
  name: string;
  currentPrice: number;
  historicalPrices: DayPrice[];
}

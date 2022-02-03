Business Requirements:
- x Build a "Stock App" with at least 5 symbols' Open, High, Low, Close and Volume (OHLCV) data of 10 days. JSON data can be mocked using JSON server (https://www.npmjs.com/package/json-server)
- x The app should have a login page with username and password fields. The login page is meant to just redirect the user to the "home page" when the user enters his/her username and password (it is not meant to be a real authentication mechanism).  
- x The home page should display the list of stocks (list view) with symbol and company name in a tabular format.
- x When clicking on one of the stocks on the list, the user should be taken to a detailed page (detail view) to display the clicked stock's last 10 days of OHLCV. The last 10 days of OHLCV can be static data for all the stocks including the newly added ones.  
- x Add a back button in the "detail view" so users can return to "list view" of the stocks.
- x The detail view should have a header component to display the symbol and the company name.
- Group the list and detail view components in a custom "stocks" module.
- x Allow users to add new symbols in the list view. Throw validation when an existing symbol is added.
- x Allow users to remove symbols after confirming "Yes" on a confirmation window.

Minimum Technical Requirements:
- x Add at least three components - list view, detail view and header component that gets displayed in the detail view
- x Add a service to handle API access

Extra Credit Ideas:
- o Make the app look good using material design or bootstrap
- Lazy load stocks module
- o Add unit tests 
- o Use Redux
- o Toast notification when a stock is added or removed


## Plan
- x Setup app & dependencies
- x Create mock data
  - https://finance.yahoo.com/quote/AAPL/history?period1=1642118400&period2=1643500800&interval=1d&filter=history&frequency=1d&includeAdjustedClose=true
- x Create skeleton structure of app w/ react-router
- x Use css-modules
- x Create login page
- x Render stock list and details views w/ stubbed data
- x Remove extra homepage
- x Connect frontend to API w/ react-query
- x Feature: Add new symbols
- x Feature: Remove symbols
- Organize components into a stocks module & reorganize other files (hooks, components, shared)
- Lazy load stocks module


## Learnings
- Using json-server for simple API
  - Add custom behavior (create stub data) using middlewhere
- react-router v6 (new APIs for nested routes)
- react-query mutations and client cache updates
- Lazy-loading modules

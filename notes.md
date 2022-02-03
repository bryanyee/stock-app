## Instructions

### Business Requirements:
- :white_check_mark: Build a "Stock App" with at least 5 symbols' Open, High, Low, Close and Volume (OHLCV) data of 10 days. JSON data can be mocked using JSON server (https://www.npmjs.com/package/json-server)
- :white_check_mark: The app should have a login page with username and password fields. The login page is meant to just redirect the user to the "home page" when the user enters his/her username and password (it is not meant to be a real authentication mechanism).  
- :white_check_mark: The home page should display the list of stocks (list view) with symbol and company name in a tabular format.
- :white_check_mark: When clicking on one of the stocks on the list, the user should be taken to a detailed page (detail view) to display the clicked stock's last 10 days of OHLCV. The last 10 days of OHLCV can be static data for all the stocks including the newly added ones.  
- :white_check_mark: Add a back button in the "detail view" so users can return to "list view" of the stocks.
- :white_check_mark: The detail view should have a header component to display the symbol and the company name.
- :white_check_mark: Group the list and detail view components in a custom "stocks" module.
- :white_check_mark: Allow users to add new symbols in the list view. Throw validation when an existing symbol is added.
- :white_check_mark: Allow users to remove symbols after confirming "Yes" on a confirmation window.

### Minimum Technical Requirements:
- :white_check_mark: Add at least three components - list view, detail view and header component that gets displayed in the detail view
- :white_check_mark: Add a service to handle API access

### Extra Credit Ideas:
- Make the app look good using material design or bootstrap
- :white_check_mark: Lazy load stocks module
- Add unit tests 
- Use Redux
- Toast notification when a stock is added or removed


## Plan
- :white_check_mark: Setup app & dependencies
- :white_check_mark: Create mock data
  - https://finance.yahoo.com/quote/AAPL/history?period1=1642118400&period2=1643500800&interval=1d&filter=history&frequency=1d&includeAdjustedClose=true
- :white_check_mark: Create skeleton structure of app w/ react-router
- :white_check_mark: Use css-modules
- :white_check_mark: Create login page
- :white_check_mark: Render stock list and details views w/ stubbed client-side data
- :white_check_mark: Remove extra homepage
- :white_check_mark: Connect frontend to API w/ react-query
- :white_check_mark: Feature: Add new symbols
- :white_check_mark: Feature: Remove symbols
- :white_check_mark: Organize components into a stocks module & reorganize other files (hooks, components, shared)
- :white_check_mark: Lazy load stocks module


## Learnings
- json-server: simple API w/ stubbed data
- json-server: add custom behavior (create stub data & validate ticker uniqueness) using middlewhere
- react-router v6: new APIs for nested routes
- react-query: mutations and client cache updates
- Lazy-loading modules w/ code-splitting

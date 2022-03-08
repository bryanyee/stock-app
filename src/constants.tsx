// Index signatures
// https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
// https://stackoverflow.com/a/61486795 
const DOMAINS: { [key: string]: string } = Object.freeze({
  development: 'http://localhost:3004',
  test: 'http://localhost:3004',
})

const env = process.env.NODE_ENV || 'development';
const domain = DOMAINS[env];

const URLS = Object.freeze({
  stocks: `${domain}/stocks`,
});

export {
  URLS,
};

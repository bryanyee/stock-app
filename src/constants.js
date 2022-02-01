const DOMAINS = Object.freeze({
  development: 'http://localhost:3004',
})

const env = process.env.NODE_ENV;
const domain = DOMAINS[env];

const URLS = Object.freeze({
  stocks: `${domain}/stocks`,
});

export {
  URLS,
};

// Global type definitions

// typescript-plugin-css-modules
// https://www.npmjs.com/package/typescript-plugin-css-modules#custom-definitions
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

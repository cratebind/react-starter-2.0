export const isProduction = process
  ? process.env.NODE_ENV === 'production'
  : !window.location.href.includes('localhost');

export function ApiError() {
  const isDevEnvironment = process.env.NODE_ENV === 'development';
  const message = isDevEnvironment ? 'API Error. Either API is down or API returned error' : 'Sorry, something went wrong'
  return <div>{message}</div>;
}

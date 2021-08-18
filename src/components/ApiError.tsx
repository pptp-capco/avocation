import {isDevEnvironment} from "../utils";

export const ApiError = () => {
  const message = isDevEnvironment() ? 'API Error. Either API is down or API returned error' : 'Sorry, something went wrong'
  return <div>{message}</div>;
};

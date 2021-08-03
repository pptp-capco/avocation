import {useFetch} from "../hooks/useFetch";
import {ApiError} from "./ApiError";
import {LoadingIndicator} from "./LoadingIndicator";
import {UserData} from "./UserData";

export const UserList = () => {

  const api = process.env.REACT_APP_API_SERVER;
  const url = `${api}/users`
  const {
    data,
    error,
    status
  } = useFetch(url)

  if (error) {
    return <ApiError />
  }
  if (status === 'fetching') {
    return <LoadingIndicator />
  }

  if (data) {
    return <UserData data={data} />
  }

  return null;

};

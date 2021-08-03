import {v4 as uuidv4} from "uuid";

type User = {
  id: string;
  name: string;
  hobbies: string[];
}

export function UserData(props: { data: any }) {
  return props.data.map(({id, name, hobbies}: User) => <div key={id}>
    <li>{name}</li>
    <ul>
      {hobbies.map(hobby => <li key={uuidv4()}>{hobby}</li>)}
    </ul>
  </div>)
}

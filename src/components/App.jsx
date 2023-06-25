import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import{BodyPage} from'./App-style'
import User from '../data/user.json';
import Data from '../data/data.json'

const { username, tag, location, avatar, stats } = User;


export const App = () => {
  return (
    <BodyPage>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    <Statistics title="Upload stats" stats={Data} />
    </BodyPage>
  );
};




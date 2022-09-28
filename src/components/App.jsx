import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendListItem } from "./FriendListItem/FriendListItem";

import user from "../user.json";
import stats from "../data.json";
import friends from "../friends.json";

export const App = () => {
  return (
    <div>
      {<Profile profile={user} />}
      {<Statistics title="Upload stats" stats={stats} />}
      {<FriendListItem props={ friends[0]} />}
    </div>
  );
};

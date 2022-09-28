import { Profile } from "./Profile/Profile";
import user from "../user.json"
import { Statistics } from "./Statistics/Statistics";
import stats from "../data.json"

export const App = () => {
  return (
    <div>
      {<Profile profile={user} />}
      {<Statistics stats={stats} />}
    </div>
  );
};

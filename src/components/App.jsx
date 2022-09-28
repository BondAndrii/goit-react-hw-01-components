import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// import { TransactionItem } from "./TransactionItem/TransactionItem";
import user from "../user.json";
import stats from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json"

export const App = () => {
  return (
    <div>
      {<Profile profile={user} />};
      {<Statistics title="Upload stats" stats={stats} />};      
      {<FriendList friends={friends} />}
      {/* {<TransactionItem props={ transactions[0]} />} */}
      {<TransactionHistory props={transactions} />}
    </div>
  );
};

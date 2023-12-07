import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./users.scss";

const Users = () => {
  return (
    <div className="users">
      <Single {...singleUser} />
    </div>
  );
};

export default Users;

import { topDealUsers } from "../../data";
import "./topbox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="유저 이미지" width={40} height={40} />
              <div className="userTexts">
                <span className="userName">{user.username}</span>
                <span className="userEmail">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;

import React from "react";
import "./A_FriendsCard.css";

const friends = [
  {
    name: "Tenz",
    status: "Online",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LhPlO2FRn-0b4BVO1LoU2W_0VP6qU9xhXA&s", // ✅ Local image
  },
  {
    name: "Shrek",
    status: "In Game",
    avatar: "https://i.pravatar.cc/100?img=22", // ✅ URL for Shrek
  },
];

const A_FriendsCard = () => {
  return (
    <div className="ariola_friends-card">
      <h4 className="ariola_friends-title">👥 Friends</h4>
      {friends.map((friend, index) => (
        <div key={index} className="ariola_friend">
          <img
            src={friend.avatar}
            alt={friend.name}
            className="ariola_friend-avatar"
          />
          <span className="ariola_friend-name">{friend.name}</span>
          <span
            className={`ariola_status ${
              friend.status === "Online" ? "online" : "ingame"
            }`}
          >
            ● {friend.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default A_FriendsCard;

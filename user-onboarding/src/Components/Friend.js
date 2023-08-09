import "./Friend.css";

const Friend = (props) => {
  const { user } = props;

  return (
    
      <div className="user-container">
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
      </div>
    
  );
};

export default Friend;

import "../../styles/signin.css";
const DeleteUser = () => {
  return (
    <div className="mainHeader">
      <h1>Remove User</h1>
      <div className="adminforms">
        <input
          placeholder="Enter Username"
          className="adminField"
          type="text"
        />
      </div>
    </div>
  );
};
export default DeleteUser;

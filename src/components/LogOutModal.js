import { useSignOut } from "react-auth-kit";

const LogoutModal = ({ setShowLogoutModal }) => {
  const signOut = useSignOut();

  return (
    <>
      <div className="overlay"></div>
      <div className="logout_modal_container">
        <p>Want to Logout?</p>
        <p className="logout_modal_btns">
          <button className="logout_in_Modal_btn" onClick={() => signOut()}>
            Yes, log out
          </button>
          <button className="cancel_btn" onClick={() => setShowLogoutModal(false)}>Cancel</button>
        </p>
      </div>
    </>
  );
};

export default LogoutModal;

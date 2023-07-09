import { useContext, useEffect } from "react";
import AuthenticationContext from "../contexts/AuthenticationContext";

const Profile = () => {
  const { user, setUser, csrf, userProfile } = useContext(
    AuthenticationContext
  );

  useEffect(() => {
    userProfile();
  }, []);
  return (
    <article>
      Profile page
      <p>User details: {JSON.stringify(user)}</p>
    </article>
  );
};

export default Profile;

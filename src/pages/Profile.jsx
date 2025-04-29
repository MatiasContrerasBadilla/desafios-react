import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const Profile = () => {
  const { email, fetchProfile } = useUserContext();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default Profile;

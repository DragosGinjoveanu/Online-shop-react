import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { doPasswordReset, doUpdateUsername } from "../../firebase/auth";
import AuthContext from "../../contexts/authContext";
import CustomInput from "../../ui/Input";
import CustomButton from "../../ui/Button";

export default function UserProfile() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  const handleUpdateUsername = async () => {
    if (newUsername.trim() === "") {
      toast.error("Name cannot be empty", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    try {
      await doUpdateUsername(newUsername);
      setNewUsername("");
      toast.success("Profile username updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handlePasswordReset = async () => {
    try {
      await doPasswordReset(currentUser.email);
      toast.success("Password reset email sent!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p>
        <strong>Email:</strong> {currentUser?.email}
      </p>
      <p>
        <strong>Username:</strong> {currentUser?.displayName || "Not set"}
      </p>

      <div className="mt-4">
        <CustomInput
          type="text"
          id="new-username"
          name="new-username"
          label="Change your username:"
          placeholder="Enter your new username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <CustomButton onClick={handleUpdateUsername} position="mt-2">
          Update Username
        </CustomButton>
      </div>

      <div className="mt-6">
        <CustomButton
          onClick={handlePasswordReset}
          color="bg-red-500"
          hoverColor="bg-red-700"
        >
          Reset Password
        </CustomButton>
      </div>
    </div>
  );
}

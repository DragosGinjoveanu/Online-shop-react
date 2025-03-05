import { useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

import CustomButton from "../../ui/Button";
import AuthContext from "../../contexts/authContext";
import CustomInput from "../../ui/Input";

import { doPasswordReset } from "../../firebase/auth";

export default function ResetPassword() {
  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const handlePasswordReset = async () => {
    try {
      await doPasswordReset(email);
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

  if (currentUser) {
    return (
      <CustomButton
        onClick={handlePasswordReset}
        color="bg-red-500"
        hoverColor="bg-red-700"
      >
        Reset Password via email
      </CustomButton>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="mb-6">
          <CustomInput
            label="Email"
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <CustomButton
          onClick={handlePasswordReset}
          color="bg-red-500"
          hoverColor="bg-red-700"
        >
          Reset Password via email
        </CustomButton>
      </div>
    </div>
  );
}

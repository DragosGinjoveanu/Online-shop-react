import { useContext } from "react";
import { toast } from "react-toastify";

import { doSendEmailVerification } from "../../firebase/auth";
import AuthContext from "../../contexts/authContext";
import CustomButton from "../../ui/Button";

export default function VerifyEmail() {
  const { currentUser } = useContext(AuthContext);

  async function handleEmailVerification() {
    try {
      await doSendEmailVerification();
      toast.success("The verification email has been sent", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  if (!currentUser.emailVerified) {
    return (
      <CustomButton
        onClick={handleEmailVerification}
        position="mt-2 mb-2"
        color="bg-red-500"
        hoverColor="bg-red-700"
      >
        Verify your email
      </CustomButton>
    );
  }

  return <p className="text-green-700">Verified account</p>;
}

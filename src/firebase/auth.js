import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

export async function doCreateUserWithEmailAndPassword(
  email,
  password,
  username
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: username,
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doSignInWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doSignInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doSignOut() {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doUpdateUsername(newName) {
  try {
    await updateProfile(auth.currentUser, { displayName: newName });
    auth.currentUser.reload();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function doSendEmailVerification() {
  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}`,
    });
    auth.currentUser.reload();
  } catch (error) {
    throw new Error(error.message);
  }
}

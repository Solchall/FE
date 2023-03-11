import { Button } from "@mui/material";
import { WithFirebaseApiProps, withFirebaseApi } from "../Firebase";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Auth = ({ firebaseApi }: WithFirebaseApiProps) => {
  const currentUserId = useAppSelector((state: RootState) => state.user.userId);
  const loginWithGoogleBtn = (
    <Button onClick={firebaseApi.signInWithGoogleRedirect}>
      Login with Google
    </Button>
  );
  const logoutBtn = <Button onClick={firebaseApi.signOut}>Login out</Button>;

  const AuthButton = currentUserId == null ? loginWithGoogleBtn : logoutBtn;

  return <div>{AuthButton};</div>;
};

export default withFirebaseApi(Auth);

import { Button, CircularProgress } from "@mui/material";
import { WithFirebaseApiProps, withFirebaseApi } from "../Firebase";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const Auth = ({ firebaseApi }: WithFirebaseApiProps) => {
  // 로그인된 유저 uuid
  const currentUserId = useAppSelector((state: RootState) => state.user.userId);

  // 구글 로그인 버튼
  const loginWithGoogleBtn = (
    <Button onClick={firebaseApi.signInWithGoogleRedirect}>
      Login with Google
    </Button>
  );

  // 로그아웃 버튼
  const logoutBtn = <Button onClick={firebaseApi.signOut}>Login out</Button>;

  // 유저 Auth 상황에 따라 보여줄 버튼
  const AuthButton = currentUserId == null ? loginWithGoogleBtn : logoutBtn;

  return <>{AuthButton}</>;
};

export default withFirebaseApi(Auth);

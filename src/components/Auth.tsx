import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { WithFirebaseApiProps, withFirebaseApi } from "../Firebase";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const HeaderBase = (props: WithFirebaseApiProps) => {
  // 로그인된 유저 uuid
  const currentUserId = useAppSelector((state: RootState) => state.user.userId);

  // 구글 로그인 버튼
  const loginWithGoogleButton = (
    <Button
      color="inherit"
      onClick={props.firebaseApi.signInWithGoogleRedirect}
    >
      Login with Google
    </Button>
  );

  // 로그아웃 버튼
  const logoutButton = (
    <Button color="inherit" onClick={props.firebaseApi.signOut}>
      Log out
    </Button>
  );

  // 유저 Auth 상황에 따라 보여줄 버튼
  const button = currentUserId == null ? loginWithGoogleButton : logoutButton;

  return <>{button}</>;
};

export default withFirebaseApi(HeaderBase);

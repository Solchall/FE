import { useEffect } from "react";
import { WithFirebaseApiProps, withFirebaseApi } from "./Firebase";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { setUserId } from "./redux/userSlice";
import AuthButton from "./components/Auth";
import { CircularProgress } from "@mui/material";

const isLoadingState = (state: RootState): boolean => {
  return state.user.userId === undefined;
};

const App = ({ firebaseApi }: WithFirebaseApiProps) => {
  const isLoading = useAppSelector(isLoadingState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return firebaseApi.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUserId(user.uid));
      } else {
        dispatch(setUserId(null));
      }
    });
  }, []);

  if (isLoading) {
    return <CircularProgress sx={{ margin: "auto" }} />;
  }

  return <AuthButton />;
};

export default withFirebaseApi(App);

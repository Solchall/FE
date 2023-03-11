import { useEffect } from "react";
import { WithFirebaseApiProps, withFirebaseApi } from "./Firebase";
import { useAppDispatch } from "./redux/hooks";
import { setUserId } from "./redux/userSlice";
import AuthButton from "./components/Auth";

const App = ({ firebaseApi }: WithFirebaseApiProps) => {
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

  return <AuthButton />;
};

export default withFirebaseApi(App);

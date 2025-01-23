import Profile from "./page";
import PrivateRoute from "./PrivateRoute";

export default async function ProfileLayout() {
  return (
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  );
}

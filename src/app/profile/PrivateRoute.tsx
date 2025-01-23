import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default async function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return <div>{children}</div>;
}

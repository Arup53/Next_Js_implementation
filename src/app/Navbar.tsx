import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white overflow-hidden">
      <div className="text-xl font-bold">
        <Link href="/">Home</Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link href={"/profile"}>Profile</Link>

        {!user ? (
          <LoginLink>Sign in</LoginLink>
        ) : (
          <div>
            <LogoutLink>Log out</LogoutLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

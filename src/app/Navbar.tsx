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
      <div>
        {/* <Link href="/signin" className="mr-4 hover:text-blue-400">
          Sign In
        </Link> */}

        {!user ? (
          <LoginLink>Sign in</LoginLink>
        ) : (
          <div className="flex justify-center gap-2">
            <Link href={"/profile"}>Profile</Link>
            <LogoutLink>Log out</LogoutLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

"use client";

import Link from "next/link";
import {
  Button,
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui";
import { UserAccountNav } from "./UserAccountNav";
import UserAvatar from "./UserAvatar";
import { HomeSvg } from "../icon";
import { useGlobalContext } from "@/app/context/globalContext";
import SearchBar from "../SearchBar";

export const Navbar = () => {
  const { isLogin, loading, userInfo } = useGlobalContext();

  return (
    <div className="fixed top-0 inset-x-0 h-fit border-b py-4 z-10">
      <div className="container max-w-8xl h-full mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center">
          {/* logo */}
          <Link href="/" className="flex gap-2 items-center">
            <HomeSvg width="40" height="40" />
            <p className="hidden text-zinc-400  text-xl font-medium md:block ml-3">
              Goodday, Minji
            </p>
          </Link>

          <NavigationMenu className="ml-5">
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenu>
        </div>

        {/* isLogin & loading상태에 따른 navbar 구현 */}
        {/* search bar */}
        <div className="flex items-center">
          <SearchBar />

          {/* loading에 따른 navbar 구현 */}
          {loading ? (
            <UserAvatar className="h-8 w-8 ml-5" user={userInfo} />
          ) : isLogin ? (
            <UserAccountNav user={userInfo} />
          ) : (
            <>
              <Link className="mr-3" href="/login">
                <Button className="">Login</Button>
              </Link>
              <Link className="mr-3" href="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

import Link from "next/link";
import { ModeToggle } from "./themetoggle";
import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./usernav";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser()
  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-2xl md:text-3xl">Silva<span className="text-primary">.Saas</span></h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-5">
          <ModeToggle />
          {(await isAuthenticated()) ? (
            <UserNav email={user?.email as string} image={user?.picture as string} name={user?.given_name as string} />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant={"secondary"}>Sign Up</Button>
              </RegisterLink>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-x-2 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {(await isAuthenticated()) ? (
                <DropdownMenuItem asChild>
                  <UserNav email={user?.email as string} image={user?.picture as string} name={user?.given_name as string} />
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <LoginLink className="w-full">
                      <Button className="w-full">
                        Sign In
                      </Button>
                    </LoginLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <RegisterLink className="w-full">
                      <Button className="w-full" variant="secondary">
                        Sign Up
                      </Button>
                    </RegisterLink>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

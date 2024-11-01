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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export async function Navbar() {
  const { isAuthenticated, getUser} = getKindeServerSession();
  const user = await getUser()
  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl">Silva<span className="text-primary">.Saas</span></h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          {(await isAuthenticated()) ? (
              <UserNav email={user?.email as string} image={user?.picture as string} name={user?.given_name as string} />
          ) : (
            <>
              {/* Desktop view */}
              <div className="hidden md:flex items-center gap-x-5">
                <LoginLink>
                  <Button variant="default">Sign In</Button>
                </LoginLink>
                <RegisterLink>
                  <Button variant="secondary">Sign Up</Button>
                </RegisterLink>
              </div>
              
              {/* Mobile view */}
              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <LoginLink className="w-full">
                        <Button variant="default" className="w-full">Sign In</Button>
                      </LoginLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <RegisterLink className="w-full">
                        <Button variant="secondary" className="w-full">Sign Up</Button>
                      </RegisterLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

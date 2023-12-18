import { getAuthSession } from "@/components/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LogoutButton from "@/features/auth/LogoutButton";
import Link from "next/link";
import React from "react";

export default async function AccountPage() {
  const session = await getAuthSession();

  if (!session) {
    throw new Error("No session found");
  }

  return (
    <Card className="m-auto mt-4 max-w-lg">
      <CardHeader className="flex flex-row gap-4 space-y-0">
        <Avatar>
          <AvatarFallback>{session.user.email?.[0]}</AvatarFallback>
          {session.user.image && (
            <AvatarImage src={session.user.image} alt="user image" />
          )}
        </Avatar>
        <div className="flex flex-col gap-1">
          <CardTitle>{session.user.email}</CardTitle>
          <CardTitle>{session.user.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Link
          className={buttonVariants({ variant: "outline", size:"lg" })}
          href="/account/settings"
        >
          Settings
        </Link>
        <Link
          className={buttonVariants({ variant: "outline", size:"lg" })}
          href="/admin"
        >
          Admin
        </Link>
      </CardContent>
      <CardFooter className="flex flex-row-reverse">
        <LogoutButton />
      </CardFooter>
    </Card>
  );
}

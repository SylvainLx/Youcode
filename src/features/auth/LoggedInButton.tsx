"use client";

import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {} from "@radix-ui/react-alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { Loader, LogOut } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";

export type LoggedInButtonProps = {
  user: Session["user"];
};

export default function LoggedInButton(props: LoggedInButtonProps) {
  const mutation = useMutation({
    mutationFn: async () => {
      signOut();
    },
  });

  return (
    <DropdownMenu>
      <AlertDialog>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Avatar className="mr-2 h-6 w-6">
              <AvatarFallback>{props.user?.name?.[0]}</AvatarFallback>
              {props.user?.image && (
                <AvatarImage
                  src={props.user.image}
                  alt={props.user.name ?? "userPicture"}
                />
              )}
            </Avatar>
            {props.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem>
              <LogOut className="mr-2" size={12} />
              Logout
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to logout ?{" "}
            </AlertDialogTitle>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="secondary" size="sm">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button
                variant="destructive"
                size="sm"
                disabled={mutation.isPending}
                onClick={() => {
                  mutation.mutate();
                }}
              >
                {mutation.isPending ? (
                  <Loader className="mr-2" size={12} />
                ) : (
                  <LogOut className="mr-2" size={12} />
                )}
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
}

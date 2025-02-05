"use client";

import { Check, Globe, LogOut, Moon, Settings2, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { UserAvatar } from "../ui/user-avatar";
import { useTheme } from "next-themes";
import { useChangeLocale } from "@/hooks/useChangeLocale";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface Props {
  profileImage?: string | null;
  username: string;
  email: string;
}

export const User = ({ profileImage, username, email }: Props) => {
  const { theme, setTheme } = useTheme();
  const { onSelectChange } = useChangeLocale();
  const lang = useLocale();
  const t = useTranslations("COMMON");

  const logOutHandler = () => {
    signOut({
      callbackUrl: `${window.location.origin}/${lang}`,
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background ml-2">
        <UserAvatar className="w-10 h-10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-56 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg"
      >
        <div className="flex flex-col p-2">
          <div className="text-lg font-semibold">{username}</div>
          <div className="text-sm text-gray-500">{email}</div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/profile" className="flex items-center space-x-2">
              <Settings2 className="w-4 h-4" />
              <span>{t("settings")}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              className="flex items-center space-x-2"
              onClick={logOutHandler}
            >
              <LogOut className="w-4 h-4" />
              <span>{t("logOut")}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>{t("language")}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-40">
            <DropdownMenuItem onClick={() => onSelectChange("en")}>
              <div className="flex items-center space-x-2">
                <Check
                  className={`w-4 h-4 ${
                    lang === "en" ? "text-blue-500" : "text-gray-500"
                  }`}
                />
                <span>English</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSelectChange("en")}>
              <div className="flex items-center space-x-2">
                <Check
                  className={`w-4 h-4 ${
                    lang === "es" ? "text-blue-500" : "text-gray-500"
                  }`}
                />
                <span>Español</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="flex items-center space-x-2">
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span>{theme === "dark" ? t("lightMode") : t("darkMode")}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

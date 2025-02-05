"use client";
import { useTranslations } from "next-intl";
import { ThemeSwitcher } from "../../components/switchers/ThemeSwitcher";
import { LocaleSwitcher } from "../../components/switchers/LocaleSwitcher";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../../components/ui/button";

const Home = () => {
  const t = useTranslations("Index");
  const { data: session } = useSession();

  const logOutHandler = async () => {
    signOut({ callbackUrl: `${window.location.origin}/sign-in` });
  };
  return (
    <>
      <Button onClick={logOutHandler}>Log Out</Button>
      <LocaleSwitcher />
      <ThemeSwitcher />
    </>
  );
};

export default Home;

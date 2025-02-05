"use client";

import { AppleLogo } from "../svg/AppleLogo";
import { GitHubLogo } from "../svg/GitHubLogo";
import { GoogleLogo } from "../svg/GoogleLogo";
import { ProviderSignInBtn } from "./ProviderSignInBtn";
import { useTranslations } from "next-intl";

export const ProviderSignInBtns = ({
  signInCard,
  disabled,
  onLoading,
}: {
  signInCard?: boolean;
  disabled?: boolean;
  onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const t = useTranslations("AUTH");
  return (
    <div className="flex flex-col gap-2">
      <ProviderSignInBtn
        disabled={disabled}
        onLoading={onLoading}
        providerName="google"
        className="w-full rounded-[1.9rem] border text-sm h-12 sm:h-10 sm:text-base"
      >
        <GoogleLogo className="mr-2" width={20} height={20} />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GOOGLE")
          : t("SIGN_UP.PROVIDERS.GOOGLE")}
      </ProviderSignInBtn>
      {/* <ProviderSignInBtn
        disabled={disabled}
        className="w-full bg-black/90 text-white dark:bg-black/70 hover:bg-black/80 dark:hover:bg-black/50  rounded-[1.9rem] border text-sm h-12 sm:h-10 sm:text-base"
      >
        <AppleLogo className="fill-white mr-2" width={20} height={20} />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.APPLE")
          : t("SIGN_UP.PROVIDERS.APPLE")}
      </ProviderSignInBtn> */}
      <ProviderSignInBtn
        disabled={disabled}
        onLoading={onLoading}
        providerName="github"
        className="w-full rounded-[1.9rem] border text-sm h-12 sm:h-10 sm:text-base"
      >
        <GitHubLogo className="fill-foreground mr-2" width={20} height={20} />
        {signInCard
          ? t("SIGN_IN.PROVIDERS.GITHUB")
          : t("SIGN_UP.PROVIDERS.GITHUB")}
      </ProviderSignInBtn>
    </div>
  );
};

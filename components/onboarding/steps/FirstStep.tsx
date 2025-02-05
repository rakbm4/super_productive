import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useOnboardingForm } from "@/context/OnboardingForm";
import {
  additionalUserInfoFirstPart,
  AdditionalUserInfoFirstPart,
} from "@/schema/additionalUserInfoFirstPart";
import { ActionType } from "@/types/onBoardingContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, User } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AddUserImage } from "@/components/common/AddUserImage";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

interface Props {
  profileImage?: string | null;
}

export const FirstStep = ({ profileImage }: Props) => {
  const session = useSession();
  const { currentStep, name, surname, dispatch } = useOnboardingForm();
  const form = useForm<AdditionalUserInfoFirstPart>({
    resolver: zodResolver(additionalUserInfoFirstPart),
    defaultValues: {
      name: name ? name : "",
      surname: surname ? surname : "",
    },
  });
  const t = useTranslations("ONBOARDING_FORM");

  useEffect(() => {
    dispatch({
      type: ActionType.PROFILEIMAGE,
      payload: profileImage as string | null | undefined,
    });
  }, [profileImage, dispatch]);

  const onSubmit = (data: AdditionalUserInfoFirstPart) => {
    dispatch({ type: ActionType.NAME, payload: data.name! });
    dispatch({ type: ActionType.SURNAME, payload: data.surname! });
    dispatch({ type: ActionType.CHANGE_SITE, payload: currentStep + 1 });
  };

  return (
    <>
      <h2 className="font-bold text-4xl md:text-5xl flex flex-col items-center my-10">
        <span>{t("FIRST_STEP.TITLE.FIRST")}</span>
        <span>{t("FIRST_STEP.TITLE.SECOND")}</span>
      </h2>
      <div className="max-w-md w-full space-y-8">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <p>{t("FIRST_STEP.PHOTO")}</p>
          <AddUserImage profileImage={profileImage} />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-1.8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      {t("FIRST_STEP.INPUTS.NAME")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted"
                        placeholder={t("FIRST_STEP.PLACEHOLDER.NAME")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      {t("FIRST_STEP.INPUTS.SURNAME")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted"
                        placeholder={t("FIRST_STEP.PLACEHOLDER.SURNAME")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full max-w-md dark:text-white font-semibold">
              {t("NEXT_BTN")}
              <ArrowRight className="" width={18} height={18} />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

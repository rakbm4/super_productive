// import { AddTaskShortcut } from "@/components/addTaskShortCut/AddTaskShortcut";
// import { DashboardHeader } from "@/components/header/DashboardHeader";
// import { Theme } from "@/components/settings/theme/Theme";
import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";

const ThemeSettings = async () => {
  const session = await checkIfUserCompletedOnboarding("/dashboard/settings");

  return (
    <>
      ThemeSettings
      {/* <DashboardHeader>
        <AddTaskShortcut userId={session.user.id} />
      </DashboardHeader>
      <Theme /> */}
    </>
  );
};

export default ThemeSettings;

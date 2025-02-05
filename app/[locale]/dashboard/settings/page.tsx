import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";

const Settings = async () => {
  const session = await checkIfUserCompletedOnboarding("/dashboard");
  return <div>Settings</div>;
};

export default Settings;

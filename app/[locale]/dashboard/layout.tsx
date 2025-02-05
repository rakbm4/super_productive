import { DashboardHeader } from "@/components/header/DashboardHeader";
import { Sidebar } from "@/components/sidebar/Sidebar";
// import { ToggleSidebarProvider } from "@/context/ToggleSidebar";
// import { UserActivityStatusProvider } from "@/context/UserActivityStatus";
// import { UserEditableWorkspacesProvider } from "@/context/UserEditableWorkspaces";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-0 min-h-screen w-full">
      <Sidebar />
      <div className="relative p-4 md:p-6 flex-grow flex-col overflow-y-auto">
        <DashboardHeader />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;

import { ShorcutSidebar } from "./shortcutSidebar/ShorcutSidebar";
import { OptionsSidebar } from "./optionsSidebar/OptionsSidebar";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 md:static h-full flex overflow-hidden">
      <ShorcutSidebar />
      <OptionsSidebar />
    </aside>
  );
};

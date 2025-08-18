import DashboardPage from "@/app/cobo-demo/[name]/blocks/dashboard-page";
import ShellLayout from "@/app/cobo-demo/[name]/blocks/shell-layout";

export const dashboard = {
  name: "dashboard",
  components: {
    Default: (
      <ShellLayout>
        <DashboardPage />
      </ShellLayout>
    ),
  },
};

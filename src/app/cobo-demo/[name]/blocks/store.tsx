import MinimalLayout from "@/app/cobo-demo/[name]/blocks/minimal-layout";
import StorePage from "@/app/cobo-demo/[name]/blocks/store-page";

export const store = {
  name: "store",
  components: {
    Default: (
      <MinimalLayout>
        <StorePage />
      </MinimalLayout>
    ),
  },
};

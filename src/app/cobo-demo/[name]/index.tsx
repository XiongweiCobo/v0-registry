import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/cobo-demo/[name]/blocks/blank";
import { dashboard } from "@/app/cobo-demo/[name]/blocks/dashboard";
import { store } from "@/app/cobo-demo/[name]/blocks/store";

// components
import { brandHeader } from "@/app/cobo-demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/cobo-demo/[name]/components/brand-sidebar";
import { hero } from "@/app/cobo-demo/[name]/components/hero";
import { login } from "@/app/cobo-demo/[name]/components/login";
import { logo } from "@/app/cobo-demo/[name]/components/logo";
import { productGrid } from "@/app/cobo-demo/[name]/components/product-grid";
import { promo } from "@/app/cobo-demo/[name]/components/promo";

// ui
import { accordion } from "@/app/cobo-demo/[name]/ui/accordion";
import { alert } from "@/app/cobo-demo/[name]/ui/alert";
import { avatar } from "@/app/cobo-demo/[name]/ui/avatar";
import { badge } from "@/app/cobo-demo/[name]/ui/badge";
import { breadcrumb } from "@/app/cobo-demo/[name]/ui/breadcrumb";
import { button } from "@/app/cobo-demo/[name]/ui/button";
import { calendar } from "@/app/cobo-demo/[name]/ui/calendar";
import { card } from "@/app/cobo-demo/[name]/ui/card";
import { chart } from "@/app/cobo-demo/[name]/ui/chart";
import { checkbox } from "@/app/cobo-demo/[name]/ui/checkbox";
import { dataTable } from "@/app/cobo-demo/[name]/ui/data-table";
import { datePicker } from "@/app/cobo-demo/[name]/ui/date-picker";
import { dialog } from "@/app/cobo-demo/[name]/ui/dialog";
import { dropdownMenu } from "@/app/cobo-demo/[name]/ui/dropdown-menu";
import { input } from "@/app/cobo-demo/[name]/ui/input";
import { menuBar } from "@/app/cobo-demo/[name]/ui/menu-bar";
import { select } from "@/app/cobo-demo/[name]/ui/select";
import { separator } from "@/app/cobo-demo/[name]/ui/separator";
import { skeleton } from "@/app/cobo-demo/[name]/ui/skeleton";
import { slider } from "@/app/cobo-demo/[name]/ui/slider";
import { sonner } from "@/app/cobo-demo/[name]/ui/sonner";
import { switchComponent } from "@/app/cobo-demo/[name]/ui/switch";
import { table } from "@/app/cobo-demo/[name]/ui/table";
import { tabs } from "@/app/cobo-demo/[name]/ui/tabs";
import { toggleGroup } from "@/app/cobo-demo/[name]/ui/toggle-group";
import { tooltip } from "@/app/cobo-demo/[name]/ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  chart,
  checkbox,
  dialog,
  "date-picker": datePicker,
  "data-table": dataTable,
  "dropdown-menu": dropdownMenu,
  input,
  "menu-bar": menuBar,
  select,
  separator,
  skeleton,
  slider,
  switch: switchComponent,
  sonner,
  table,
  tabs,
  "toggle-group": toggleGroup,
  tooltip,
};

import { TRoutes } from "./routes";

export type SidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  handleClose: () => void;
  side?: "left" | "right";
  showLoginButton?: boolean;
  routes: TRoutes[];
};

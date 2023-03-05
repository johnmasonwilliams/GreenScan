import { ReactNode } from "react";
import { Box } from "@mui/material";
import BottomNavBar from "@/components/nav/BottomNavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box>{children}</Box>

      <BottomNavBar />
    </>
  );
};

export default Layout;

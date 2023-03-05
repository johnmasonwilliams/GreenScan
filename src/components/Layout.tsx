import { ReactNode } from "react";
import { Box, Divider } from "@mui/material";
import BottomNavBar from "@/components/nav/BottomNavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box minHeight={"calc(100vh - 80px)"}>{children}</Box>

      <Divider />

      <BottomNavBar />
    </>
  );
};

export default Layout;

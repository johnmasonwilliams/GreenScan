import { ReactNode } from "react";
import { Box } from "@mui/material";
import BottomNavBar from "@/components/nav/BottomNavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box
        height={
          'Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + "px"'
        }
      >
        {children}
      </Box>

      <BottomNavBar />
    </>
  );
};

export default Layout;

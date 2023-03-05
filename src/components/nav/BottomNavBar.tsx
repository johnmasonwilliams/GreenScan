import * as React from "react";
import { useEffect } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { useRouter } from "next/router";

const BottomNavBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.asPath);

  useEffect(() => {
    setValue(router.asPath);
  }, [router, router.asPath]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Divider />

      <BottomNavigation
        showLabels
        value={value}
        onChange={async (event, newValue) => {
          await router.push(newValue);
          setValue(newValue);
        }}
      >
        <BottomNavigationAction value={"/profile"} icon={<FoodBankIcon />} />
        <BottomNavigationAction value={"/"} icon={<CameraAltIcon />} />
        <BottomNavigationAction value={"/help"} icon={<HelpIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavBar;

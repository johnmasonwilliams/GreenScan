import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { useRouter } from "next/router";

const BottomNavBar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ height: 80 }}>
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

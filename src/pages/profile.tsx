import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

const ProfilePage = () => {
  return (
    <>
      <Box
        display="flex"
        height={"175px"}
        sx={{
          background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        }}
      >
        <Box m="auto">
          <Avatar
            src={"/steak.png"}
            sx={{
              top: 50,
              width: 175,
              height: 175,
              backgroundColor: "black",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: 7 }}>
        <Typography variant={"h4"} align={"center"}>
          Old Neighborhood
        </Typography>
        <Typography align={"center"}>
          A family tradition for over 100 years
        </Typography>
      </Box>
    </>
  );
};

export default ProfilePage;

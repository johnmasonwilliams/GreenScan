import Box from "@mui/material/Box";
import { Avatar, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ProfilePage = () => {
  const theme = useTheme();

  return (
    <>
      <Box height={"245px"} bgcolor={theme.palette.primary.main}>
        <Typography
          variant={"h4"}
          align={"center"}
          paddingTop={"60px"}
          color={theme.palette.secondary.main}
        >
          Profile
        </Typography>
      </Box>

      <Box display="flex">
        <Box m="auto">
          <Avatar
            src={"/steak.png"}
            sx={{
              width: 175,
              height: 175,
              backgroundColor: "black",
            }}
          />
        </Box>
      </Box>

      <Container>
        <Typography variant={"h4"} align={"center"} paddingTop={6}>
          Old Neighborhood
        </Typography>
        <Typography align={"center"}>
          A family tradition for over 100 years
        </Typography>
      </Container>
    </>
  );
};

export default ProfilePage;

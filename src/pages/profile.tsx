import Box from "@mui/material/Box";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ListItem from "@/components/ListItem";

const dummyInfo = [
  {
    text: "Local",
    isTrue: true,
  },
  {
    text: "Organic",
    isTrue: false,
  },
  {
    text: "Cage-free",
    isTrue: false,
  },
  {
    text: "Hormone-free",
    isTrue: true,
  },
  {
    text: "Antibiotic-free",
    isTrue: true,
  },
];

const ProfilePage = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        display="flex"
        height={"175px"}
        sx={{
          background: "linear-gradient(to right bottom, #26bd8d, #82ffa1)",
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

      <Box marginTop={7}>
        <Typography variant={"h4"} align={"center"}>
          Old Neighborhood
        </Typography>
        <Typography align={"center"}>
          A family tradition for over 100 years
        </Typography>
      </Box>

      <Divider sx={{ marginY: 2 }} />

      <Typography></Typography>

      <Box width={"100%"}>
        <Grid>
          {dummyInfo.map((item) => (
            <Grid item key={item.text}>
              <ListItem text={item.text} isTrue={item.isTrue} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProfilePage;

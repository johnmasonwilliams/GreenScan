import Box from "@mui/material/Box";
import { Avatar, Divider, Typography } from "@mui/material";
import Meta from "@/components/Meta";
import ProfileTabs from "@/components/ProfileTabs";

const ProfilePage = () => {
  return (
    <>
      <Meta
        title={
          "GreenScan - Sustainable Product Identifier App | Check if a Product is Eco-Friendly"
        }
        description={`GreenScan is the ultimate app to help you make environmentally conscious decisions while shopping. Simply scan a product's barcode, and GreenScan will instantly tell you if it is sustainable or not. Our app analyzes the product's ingredients, packaging, and manufacturing process to give you a clear understanding of its environmental impact. Download GreenScan today and start making informed choices for a more sustainable future!`}
      />

      <Box
        display="flex"
        height={"175px"}
        sx={{
          background: "linear-gradient(to right bottom, #26bd8d, #82ffa1)",
        }}
      >
        <Box m="auto">
          <Avatar
            src={"/profileLogo.png"}
            sx={{
              paddingY: 3,
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

      <ProfileTabs />
    </>
  );
};

export default ProfilePage;

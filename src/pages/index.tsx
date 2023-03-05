import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Meta
        title={
          "GreenScan - Sustainable Product Identifier App | Check if a Product is Eco-Friendly"
        }
        description={`GreenScan is the ultimate app to help you make environmentally conscious decisions while shopping. Simply scan a product's barcode, and GreenScan will instantly tell you if it is sustainable or not. Our app analyzes the product's ingredients, packaging, and manufacturing process to give you a clear understanding of its environmental impact. Download GreenScan today and start making informed choices for a more sustainable future!`}
      />

      <Box
        height={"80px"}
        sx={{
          background: "linear-gradient(to right bottom, #26bd8d, #82ffa1)",
        }}
        display={"flex"}
      >
        <Box m="auto">
          <Image width={320} height={7} src={"/logoDark.png"} alt={"Logo"} />
        </Box>
      </Box>

      <Box borderRadius={4}>
        <Box marginTop={"50px"} display="flex">
          <Box height={"400px"} m="auto" bgcolor={"lightgrey"} borderRadius={4}>
            <Image
              style={{ marginTop: 75 }}
              width={300}
              height={300}
              src={"/steak.png"}
              alt={"Steak"}
            />
          </Box>
        </Box>

        <Box marginTop={"50px"} display="flex">
          <Box m="auto">
            <Stack>
              <Button
                variant={"outlined"}
                sx={{
                  width: 74,
                  height: 74,
                  borderRadius: 10,
                }}
                disabled={true}
              />
              <Button
                variant={"outlined"}
                onClick={async () => await router.push("/profile")}
                sx={{
                  top: -70,
                  left: 4,
                  width: 66,
                  height: 66,
                  borderRadius: 10,
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

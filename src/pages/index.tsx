import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      <Box height={"127px"} bgcolor={theme.palette.primary.main}>
        <Typography
          variant={"h4"}
          align={"center"}
          paddingTop={"60px"}
          color={theme.palette.secondary.main}
        >
          GreenScan
        </Typography>
      </Box>

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

      <Box marginTop={"20px"} display="flex">
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
  );
}

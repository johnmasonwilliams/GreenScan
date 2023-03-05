import * as React from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import ListItem from "@/components/ListItem";
import Box from "@mui/material/Box";

const dummyUSDAInfo = [
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
const dummySustainabilityInfo = [
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

export default function ProfileTabs() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Tabs
        variant={"fullWidth"}
        value={tabValue}
        onChange={handleChange}
        aria-label="Auth tabs"
      >
        <Tab label="USDA Certifications" />
        <Tab label="Sustainability" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Box width={"100%"}>
          <Grid>
            {dummyUSDAInfo.map((item) => (
              <Grid item key={item.text}>
                <ListItem text={item.text} isTrue={item.isTrue} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Box width={"100%"}>
          <Grid>
            {dummyUSDAInfo.map((item) => (
              <Grid item key={item.text}>
                <ListItem text={item.text} isTrue={item.isTrue} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
    </>
  );
}

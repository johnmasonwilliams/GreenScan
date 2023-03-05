import * as React from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import ListItem from "@/components/ListItem";

const dummyFoodGradeInfo = [
  {
    text: "Hormone Free",
    isTrue: true,
  },
  {
    text: "Cage Free",
    isTrue: false,
  },
  {
    text: "Antibiotic Free",
    isTrue: true,
  },
  {
    text: "Pesticide Free",
    isTrue: false,
  },
  {
    text: "Organic",
    isTrue: true,
  },
  {
    text: "Local",
    isTrue: false,
  },
];

const dummySustainabilityInfo = [
  {
    text: "Renewable Energy",
    isTrue: true,
  },
  {
    text: "Energy Efficient",
    isTrue: false,
  },
  {
    text: "Water Resilient",
    isTrue: false,
  },
  {
    text: "Emission Reduction",
    isTrue: true,
  },
  {
    text: "Recycling Efforts",
    isTrue: true,
  },
  {
    text: "Waste Reduction",
    isTrue: false,
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
        aria-label="Tabs"
      >
        <Tab label="Food Grade" />
        <Tab label="Sustainability" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Grid padding={0}>
          {dummyFoodGradeInfo.map((item) => (
            <Grid item key={item.text}>
              <ListItem text={item.text} isTrue={item.isTrue} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Grid>
          {dummySustainabilityInfo.map((item) => (
            <Grid item key={item.text}>
              <ListItem text={item.text} isTrue={item.isTrue} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </>
  );
}

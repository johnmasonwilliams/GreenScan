import * as React from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import ListItem from "@/components/ListItem";

const dummyFoodGradeInfo = [
  {
    text: "Hormone Free",
    anchor: "hormone-free",
    isTrue: true,
  },
  {
    text: "Cage Free",
    anchor: "cage-free",
    isTrue: true,
  },
  {
    text: "Antibiotic Free",
    anchor: "antibiotic-free",
    isTrue: true,
  },
  {
    text: "Pesticide Free",
    anchor: "pesticide-free",
    isTrue: false,
  },
  {
    text: "Organic",
    anchor: "organic",
    isTrue: true,
  },
  {
    text: "Local",
    anchor: "local",
    isTrue: true,
  },
];

const dummySustainabilityInfo = [
  {
    text: "Renewable Energy",
    anchor: `renewable-energy-sources`,
    isTrue: true,
  },
  {
    text: "Energy Efficient",
    anchor: `energy-efficiency`,
    isTrue: true,
  },
  {
    text: "Water Resilient",
    anchor: `water-resiliency`,
    isTrue: false,
  },
  {
    text: "Emission Reduction",
    anchor: `emissions`,
    isTrue: true,
  },
  {
    text: "Recycling Efforts",
    anchor: `recycling`,
    isTrue: false,
  },
  {
    text: "Waste Reduction",
    anchor: `waste-reduction`,
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
              <ListItem
                text={item.text}
                anchor={item.anchor}
                isTrue={item.isTrue}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Grid>
          {dummySustainabilityInfo.map((item) => (
            <Grid item key={item.text}>
              <ListItem
                text={item.text}
                anchor={item.anchor}
                isTrue={item.isTrue}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </>
  );
}

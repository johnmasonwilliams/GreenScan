import { Box, Button, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkIcon from "@mui/icons-material/Link";
import * as React from "react";

const foodGradeTerms = [
  {
    title: `Hormone Free`,
    anchor: `hormone-free`,
    description: `According to the FDA, steroid hormones are those used to “increase the animals’ growth rate and the efficiency by which they convert the feed they eat into meat”. The FDA regulates hormone levels in livestock intended for human consumption. There are naturally occurring hormones and synthetic hormones. 
How do we measure whether a product is pesticide free or not?
If not explicitly stated on the food packaging label or on the company website, GreenScan uses the Code of Federal Regulations, Title 21, Chapter 1 to identify hormones as defined by the FDA and cross-checks them with the product’s ingredients.`,
  },
  {
    title: `Cage Free`,
    anchor: `cage-free`,
    description: `According to the USDA Agricultural Marketing Service, cage-free products are identified by annual observations conducted by the Quality Assessment Division. Processing facilities must “demonstrate their ability to segregate cage-free from non-cage free” products. The USDA ensures cage-free products are packaged with a USDA Certified Cage Free shield.
How do we measure whether a product is cage-free or not?
If food packaging contains the USDA Certified Cage Free shield, GreenScan uses the USDA AMS database to ensure that the company meets the requirements to classify as cage-free.`,
  },
  {
    title: `Antibiotic Free`,
    anchor: `antibiotic-free`,
    description: `According to the USDA Agricultural Marketing Service, antibiotics used in livestock “are identical or closely related to drugs used in human medicine”. The Antibiotic Resistance Action Center of the Milken Institute of the George Washington University is responsible for certifying antibiotic use, and only allows it to be used to treat and control disease.
Additionally, according to the FDA, antibiotics can be administered through feedstock.
How do we measure whether a product is antibiotic free or not?
If not explicitly stated on the food packaging label or on the company website, GreenScan uses the Certified Responsible Antibiotic Use official list of certified companies to ensure that the company is not listed. Additionally, Green Scan uses the Code of Federal Regulations, Title 21, Chapter 1, Subchapter E to identify antibiotics and antimicrobials used in animal feed and cross-checks them with the product’s ingredients.`,
  },
  {
    title: `Pesticide Free`,
    anchor: `pesticide-free`,
    description: `According to the Ohio Department of Agriculture, pesticides include “all herbicides, insecticides, rodenticides, fungicides, disinfectants, and insect repellents,” among others. The FDA and EPA regulate the use of pesticides and require use records for up to two (2) years. 
A product is considered pesticide-free if, upon testing of a product, there are no pesticide residues present.
How do we measure whether a product is pesticide free or not?
If not explicitly stated on the food packaging label or on the company website, GreenScan uses the FDA Pesticide Residue Monitoring Reports to identify products with no pesticide residues present, as well as searches through product ingredients for active ingredients in pesticides.`,
  },
  {
    title: `Organic`,
    anchor: `organic`,
    description: `According to the USDA Agricultural Marketing Service, organic is defined as products that are “produced using agricultural production practices that foster resource cycling, promote ecological balance, maintain and improve soil and water quality, minimize the use of synthetic materials, and conserve biodiversity.”
\tThere are four different organic labels companies can use, as regulated by the USDA:\t
\t\t100% Organic
\t\t\tAll ingredients must be organic 
Identified by USDA Organic seal, 100% organic claim, ingredient identifying marks
\t\tOrganic
\t\t\tAt least 95% of ingredients must be organic
Identified by USDA Organic seal, organic claim, ingredient identifying marks
\t\tMade with Organic ______
\t\t\tAt least 70% of ingredients must be organic
\t\t\t\tCannot include the USDA Organic seal, organic claim
Identified by ‘made with organic [specific ingredients]’, ingredient identifying marks
\t\tSpecific Organic Ingredient Listings
\t\t\tLess than 70% of ingredients are organic
\t\t\t\tCannot include USDA Organic seal, organic claim
\t\t\t\tIdentified in ingredient list as organic
\tHow do we measure whether a product is organic or not?
By using the definition of organic provided by the USDA, GreenScan looks through each product's ingredient and nutritional facts included on their packaging. Further, we look at the company’s statements on organic ingredients to ensure they comply with USDA regulations.
`,
  },
  {
    title: `Local`,
    anchor: `local`,
    description: `Local is defined as that which is sourced from nearby farms.
\tHow do we measure whether a product is local or not?
If not explicitly stated on the food packaging label, GreenScan looks through information on the company website on their food sources.`,
  },
];

const sustainabilityTerms = [
  {
    title: `Renewable Energy Sources`,
    anchor: `renewable-energy-sources`,
    description: `Renewable energy is defined by the EPA as that which is sourced from sources such as “wind and solar power, geothermal, hydropower, and various forms of biomass.” 
It is measured in terms of renewable energy certificates, which are directly equivalent to megawatt hours. Non-renewable energy is measured in terms of kilowatt hours; 1 mWh is equal to 1000 kWh.
How do we measure renewable energy?
GreenScan looks at the company's sustainability statements to identify their use of renewable energy, looking for mentions of ‘solar’, ‘hydro’, and ‘wind’ energy.`,
  },
  {
    title: `Energy Efficiency`,
    anchor: `energy-efficiency`,
    description: `Energy efficiency is defined by the EPA as “products or systems using less energy to do the same or better job than conventional products or systems.” It is also referred to as ‘energy reduction’ and ‘energy optimization’. The national identification symbol of energy efficiency is ENERGY STAR®.
How do we measure energy efficiency?
GreenScan looks at the company’s sustainability statements to identify statements regarding their refrigeration systems, lighting and electricity usage, reuse of heat output, and HVAC systems.`,
  },
  {
    title: `Water Resiliency`,
    anchor: `water-resiliency`,
    description: `Water resiliency, also referred to as water conservation, is defined by the EPA as “any beneficial reduction in water losses, waste, or use.” Water reduction is measured as companies off-putting as much water as they pull-in; this is equivalent to ‘net-zero emission’. A step above that is net positive, wherein companies off-put more water than they pull in. The most efficient design is water reuse, wherein companies filter and reuse their water runoff, thus reducing both their off-put and pull-in.
How do we measure water resiliency?
GreenScan looks at the company’s sustainability statements to identify statements regarding water conservation, water reduction, water efficiency, and water recycling and reuse.`,
  },
  {
    title: `Emissions`,
    anchor: `emissions`,
    description: `Emissions are defined by the EPA as “pollution released or discharged into the air from natural or man-made sources”. Natural resources include fossil fuels, biomass, oil, and coal. Man-made resources include nuclear energy and diesel fuel.
Emissions from these resources include dioxins such as carbon monoxide (CO), carbon dioxide (CO2), sulfur dioxide (SO2), and nitrogen oxides (NOx), as well as lethal chemicals such as methane (CH4), arsenic (As), and mercury (Hg).
\tHow do we measure emissions reduction?
GreenScan looks at the company’s sustainability statement to identify efforts to reduce emissions, such as using manure for fertilization and using alternative fuels/lower emitting vehicles for transportation, as well as statements regarding reducing carbon emissions and footprints.
`,
  },
  {
    title: `Recycling`,
    anchor: `recycling`,
    description: `Recycling is defined by the EPA as “the process of converting waste into a reusable material or return a material to a previous state in a cyclic process.” This includes materials from start to finish, including wooden pallets, batteries, glass, plastic, and office supplies.
How do we measure recycling efforts?
GreenScan looks at the company’s sustainability statement to identify mentions of ‘recycling’, ‘reusing’, ‘converting’, and using recycled materials.`,
  },
  {
    title: `Waste Reduction`,
    anchor: `waste-reduction`,
    description: `Waste reduction is defined by the EPA as “using source reduction, recycling, or composting to prevent or reduce waste generation.” This includes reusing waste, runoff, and byproducts throughout the process.
How do we measure waste reduction efforts?
GreenScan looks at the company’s sustainability statement to identify statements regarding composting, donating, turning waste into energy, and turning waste into profit (i.e., selling byproducts).`,
  },
];

const TermsList = () => {
  const theme = useTheme();

  return (
    <>
      <Box display={"flex"}>
        <Box m={"auto"}>
          <Button href={`/help#food-grade-terms`}>
            <LinkIcon width={5} sx={{ color: theme.palette.primary.main }} />
            <Typography
              id={"food-grade-terms"}
              fontWeight={"bold"}
              variant={"h3"}
              color={theme.palette.primary.main}
              align={"center"}
            >
              Food Grade Terms
            </Typography>
          </Button>
        </Box>
      </Box>

      {foodGradeTerms.map((term) => (
        <React.Fragment key={term.anchor}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              paddingY: 2,
              marginBottom: 1,
            }}
            id={term.anchor}
          >
            <Button href={`/help#${term.anchor}`}>
              <LinkIcon width={5} sx={{ color: "white" }} />
              <Typography variant={"h5"} fontWeight={"bold"} color={"white"}>
                {term.title}
              </Typography>
            </Button>
          </Box>
          <Typography sx={{ marginX: 4, marginY: 2 }}>
            {term.description}
          </Typography>

          <Divider sx={{ marginTop: 3 }} />
        </React.Fragment>
      ))}

      <Divider />

      <Box display={"flex"}>
        <Box m={"auto"}>
          <Button href={`/help#sustainability-terms`}>
            <LinkIcon width={5} sx={{ color: theme.palette.primary.main }} />
            <Typography
              id={"sustainability-terms"}
              fontWeight={"bold"}
              variant={"h3"}
              color={theme.palette.primary.main}
              align={"center"}
            >
              Sustainability Terms
            </Typography>
          </Button>
        </Box>
      </Box>

      {sustainabilityTerms.map((term) => (
        <React.Fragment key={term.anchor}>
          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              paddingY: 2,
              marginBottom: 1,
            }}
            id={term.anchor}
          >
            <Button href={`/help#${term.anchor}`}>
              <LinkIcon width={5} sx={{ color: "white" }} />
              <Typography variant={"h5"} fontWeight={"bold"} color={"white"}>
                {term.title}
              </Typography>
            </Button>
          </Box>
          <Typography sx={{ marginX: 4, marginY: 2 }}>
            {term.description}
          </Typography>

          <Divider sx={{ marginTop: 3 }} />
        </React.Fragment>
      ))}
    </>
  );
};

export default TermsList;

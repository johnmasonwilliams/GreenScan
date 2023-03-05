import { Box, Button, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkIcon from "@mui/icons-material/Link";
import * as React from "react";

const terms = [
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

const TermsList = () => {
  const theme = useTheme();
  return (
    <>
      {terms.map((term) => (
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

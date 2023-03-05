import { Typography } from "@mui/material";

const TermHelp = (props: { title: string; description: string }) => {
  const { title, description } = props;

  return (
    <>
      <Typography fontWeight={"bold"}>{title}</Typography>
      <Typography>{description}</Typography>
    </>
  );
};

export default TermHelp;

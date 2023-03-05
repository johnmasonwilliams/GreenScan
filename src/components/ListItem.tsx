import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";

const ListItem = (props: { text: string; anchor: string; isTrue: boolean }) => {
  const { text, anchor, isTrue } = props;
  const theme = useTheme();

  return (
    <>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          marginX: 5,
          mainWidth: "100%",
          justifyContent: "space-between",
        }}
        href={`/help#${anchor}`}
      >
        <Typography variant={"h5"}>{text}</Typography>
        {isTrue ? (
          <CheckCircleIcon
            sx={{
              width: 35,
              color: theme.palette.success.main,
              float: "right",
            }}
          />
        ) : (
          <CancelIcon
            sx={{
              width: 35,
              color: theme.palette.error.main,
              float: "right",
            }}
          />
        )}
      </Button>

      <Divider />
    </>
  );
};

export default ListItem;

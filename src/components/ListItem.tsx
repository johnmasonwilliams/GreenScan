import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";

const ListItem = (props: { text: string; isTrue: boolean }) => {
  const { text, isTrue } = props;
  const theme = useTheme();

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          marginX: 10,
          maxWidth: "100%",
          justifyContent: "space-between",
        }}
        variant={"h5"}
      >
        {text}
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
      </Typography>
      <Divider />
    </>
  );
};

export default ListItem;

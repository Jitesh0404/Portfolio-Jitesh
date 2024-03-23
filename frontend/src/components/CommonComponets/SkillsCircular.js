import * as React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
// import Button from '@mui/material/Button';
export default function CircularProgressCountUp({ skillPercentage,btnText }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState(btnText);

  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: skillPercentage,
    onComplete: () => {
      setIsLoading(false);
      setButtonLabel("Reset");
    },
  });

  const handleButtonClick = () => {
    if (isLoading) {
      setIsLoading(false);
      setButtonLabel(btnText);
      resetValue1();
    } else if (buttonLabel === "Reset") {
      setButtonLabel(btnText);
      resetValue1();
    } else {
      setIsLoading(true);
      setButtonLabel("Reset");
    }
  };

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={8}>
      <Stack spacing={2}>
        <div className="flex flex-col justify-center items-center gap-4">
          <CircularProgress size="lg" sx={{ '--CircularProgress-size': '150px',color:'green' }} determinate value={value1}>
            <Typography level="h1" color="#000">{value1}%</Typography>
          </CircularProgress>
          <Button
            size="sm"
            variant="outlined"
            color="neutral"
            onClick={handleButtonClick}
            sx={{color:'#FFFFFF',":hover":{
              color:'#000'
            }}}
          >
            {buttonLabel}
          </Button>
        </div>
      </Stack>
    </Stack>
  );
}

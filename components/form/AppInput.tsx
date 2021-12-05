import { TextField } from "@mui/material";

export default function AppInput({ className, ...props }: any) {
  return (
    <TextField className={className} variant="outlined" fullWidth {...props} />
  );
}

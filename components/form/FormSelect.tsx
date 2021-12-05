import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useField } from "formik";

export default function FormSelect({
  label,
  children,
  options,
  ...props
}: any) {
  const [field, meta] = useField(props);
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
        <Select
          {...field}
          {...props}
          labelId={`select-label-${label}`}
          id={`select-${label}`}
        >
          {options.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

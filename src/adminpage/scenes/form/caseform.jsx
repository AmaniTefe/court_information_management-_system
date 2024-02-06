import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../../theme"; // Ensure this import is correct
import { useTheme } from "@mui/material";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import AddIcon from "@mui/icons-material/Add";

// Define your initialValues and validation schema
const initialValues = {
  respondentDetails: [{ name: "", advocate: "" }],
};

const checkoutSchema = yup.object().shape({
  respondentDetails: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Respondent Name is required"),
      advocate: yup.string().required("Respondent Advocate is required"),
    })
  ),
});

const Client = [
  {
    value: "Amanuel",
    label: "Amanuel",
  },
  {
    value: "Henok",
    label: "Henok",
  },
  {
    value: "Sisay",
    label: "Sisay",
  },
  {
    value: "Hendrikson",
    label: "Hendrikson",
  },
];

const Caseform = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (values) => {
    console.log(values);
    // Perform form submission logic here
  };

  return (
    <Box padding="20px" backgroundColor={colors.blueAccent[900]}>
      <Header title="Add Case" subtitle="" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box display="grid" gridRow="span 10" gap="2px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h4">
                  Client Detail
                </Typography>
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  options={Client}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search and Select"
                      variant="outlined"
                    />
                  )}
                  openOnFocus
                  autoHighlight
                  sx={{ mt: "10px" }}
                />
                <RadioGroup name="role" display="flex" row>
                  <FormControlLabel
                    value="Petitioner"
                    control={<Radio color="default" />}
                    label="Petitioner"
                  />
                  <FormControlLabel
                    value="Respondent"
                    control={<Radio color="default" />}
                    label="Respondent"
                  />
                </RadioGroup>
              </Box>
              <Box>
                {values.respondentDetails.map((_, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <TextField
                      name={`respondentDetails.${index}.name`}
                      label="Respondent Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      name={`respondentDetails.${index}.advocate`}
                      label="Respondent Advocate"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      sx={{ ml: "20px" }}
                    />
                  </div>
                ))}
              </Box>
              <Box>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  sx={{ mt: "10px" }}
                  startIcon={<AddIcon fontSize="small" sx={{ mr: "0px" }} />}
                >
                  Add More
                </Button>
              </Box>
              <Box sx={{ mt: "30px" }}>
                <Typography color={colors.greenAccent[500]} variant="h4">
                  Case Detail
                </Typography>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Caseform;

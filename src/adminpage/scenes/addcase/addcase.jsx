import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../../theme"; // Ensure this import is correct
import { useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define your initialValues and validation schema
const initialValues = {
  // Add your initial form field values here
};

const checkoutSchema = yup.object().shape({
  // Add your form field validation schema here
});

const AddCase = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFormSubmit = (values) => {
    console.log(values);
    // Perform form submission logic here
  };
  const handleClick = () => {
    // Navigate to another page (e.g., '/other-page')
    navigate("/registrar/caseform");
  };

  return (
    <Box padding="20px" backgroundColor={colors.blueAccent[900]}>
      <Header title="Case Management" subtitle="" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Add Case
        </Button>
      </Box>
      <Box>
        <Typography color={colors.greenAccent[500]} variant="h2">
          Search Case
        </Typography>
      </Box>
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box display="flex" mt={"20px"}>
              <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                label="Search by Case Number"
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{
                  ml: "20px",
                  width: "350px",
                }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
              <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                label="Search by Litigant Name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                sx={{
                  ml: "60px",
                  width: "350px",
                }}
              />
              <IconButton
                type="submit"
                aria-label="search"
                sx={{ fontSize: "1.5rem" }}
              >
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddCase;

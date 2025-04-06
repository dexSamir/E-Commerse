import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import {
  useLazyGet400ErorrQuery,
  useLazyGet401ErorrQuery,
  useLazyGet404ErorrQuery,
  useLazyGet500ErorrQuery,
  useLazyGetValidationErorrQuery,
} from "./errorApi";
import { useState } from "react";

export default function AboutPage() {
const [validationErrors, setValidationErrors] = useState<string[]>([]);


  const [trigger400Error] = useLazyGet400ErorrQuery();
  const [trigger401Error] = useLazyGet401ErorrQuery();
  const [trigger404Error] = useLazyGet404ErorrQuery();
  const [trigger500Error] = useLazyGet500ErorrQuery();
  const [triggerValidationError] = useLazyGetValidationErorrQuery();

  const getValidationError = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof (error as { message: unknown }).message === "string"
      ) {
        const errorArray = (error as { message: string }).message.split(", ");
        console.log(errorArray);
        setValidationErrors(errorArray); 
      }
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => trigger400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger401Error().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger404Error().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={() => trigger500Error().catch((err) => console.log(err))}
        >
          Test 500 Error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
            <AlertTitle >Validation Errors</AlertTitle>
            <List>
                {validationErrors.map(err => (
                    <ListItem key={err}>{err}</ListItem>
                ))}
            </List>
        </Alert>
      )}
    </Container>
  );
}

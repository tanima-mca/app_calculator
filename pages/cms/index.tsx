import { Container, Typography } from "@mui/material";
import MatrixCalculator from "./matrixtable";


export default function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Matrix Calculator
      </Typography>
      <MatrixCalculator />
    </Container>
  );
}

import { useState } from "react";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Card,
  CardContent,
  Box,
  Stack,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const MatrixCalculator = () => {
  const [rows, setRows] = useState<string>("");
  const [cols, setCols] = useState<string>("");
  const [matrixSet, setMatrixSet] = useState<{
    sum: number[][];
    product: number[][];
  } | null>(null);
  const [addedMatrix, setAddedMatrix] = useState<number[][] | null>(null);

  const generateMatrices = () => {
    const rowCount = Number(rows);
    const colCount = Number(cols);

    if (rowCount > 0 && colCount > 0) {
      const newSumMatrix = Array.from({ length: rowCount }, (_, r) =>
        Array.from({ length: colCount }, (_, c) => r + c)
      );
      const newProductMatrix = Array.from({ length: rowCount }, (_, r) =>
        Array.from({ length: colCount }, (_, c) => r * c)
      );

      setMatrixSet({ sum: newSumMatrix, product: newProductMatrix });
      setAddedMatrix(null);
    }
  };

  const refreshMatrices = () => {
    setRows("");
    setCols("");
    setMatrixSet(null);
    setAddedMatrix(null);
  };

  const addMatrices = () => {
    if (!matrixSet) return;
    const { sum, product } = matrixSet;

    const resultMatrix = sum.map((row, rIndex) =>
      row.map((cell, cIndex) => cell + product[rIndex][cIndex])
    );

    setAddedMatrix(resultMatrix);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mt: 4,
      }}
    >
      {/* Input Section */}
      <Card
        elevation={4}
        sx={{ p: 4, width: 400, borderRadius: 3, textAlign: "center" }}
      >
        <Typography variant="h5" gutterBottom>
          Matrix Calculator
        </Typography>
        <Stack spacing={2} alignItems="center">
          <TextField
            label="Rows"
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            label="Columns"
            type="number"
            value={cols}
            onChange={(e) => setCols(e.target.value)}
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={generateMatrices}
              disabled={!rows || !cols}
            >
              Generate
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={refreshMatrices}
              startIcon={<RefreshIcon />}
            >
              Refresh
            </Button>
          </Stack>
        </Stack>
      </Card>

      {/* Matrices Section */}
      {matrixSet && (
        <Card
          elevation={4}
          sx={{ p: 3, width: "90%", borderRadius: 3, textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Generated Matrices
          </Typography>

          <Stack
            spacing={3}
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            {[
              { title: "Sum Matrix", data: matrixSet.sum },
              { title: "Product Matrix", data: matrixSet.product },
            ].map((matrix, i) => (
              <Card key={i} elevation={3} sx={{ borderRadius: 3, flex: 1 }}>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    gutterBottom
                  >
                    {matrix.title}
                  </Typography>
                  <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                    <Table>
                      <TableBody>
                        {matrix.data.map((row, rIndex) => (
                          <TableRow key={rIndex}>
                            {row.map((cell, cIndex) => (
                              <TableCell
                                key={cIndex}
                                sx={{ textAlign: "center" }}
                              >
                                {cell}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Box mt={3}>
            <Button variant="contained" color="primary" onClick={addMatrices}>
              Add Matrices
            </Button>
          </Box>
        </Card>
      )}

      {/* Added Matrix Section */}
      {addedMatrix && (
        <Card
          elevation={4}
          sx={{ p: 3, width: "90%", borderRadius: 3, textAlign: "center" }}
        >
          <Typography variant="h6" gutterBottom>
            Added Matrix
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
            <Table>
              <TableBody>
                {addedMatrix.map((row, rIndex) => (
                  <TableRow key={rIndex}>
                    {row.map((cell, cIndex) => (
                      <TableCell
                        key={cIndex}
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </Box>
  );
};

export default MatrixCalculator;

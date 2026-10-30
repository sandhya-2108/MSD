import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F5F5" }}>
      
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            Student Registration
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ mt: 4 }}>

        <Card>
          <CardContent>
            <Typography
              variant="h4"
              color="primary"
              gutterBottom
            >
              Welcome!
            </Typography>

            <Typography variant="body1">
              Register your details to create a student account.
            </Typography>
          </CardContent>
        </Card>

        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Registration Form
        </Typography>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the terms and conditions"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>

      </Container>
    </Box>
  );
}

export default App;
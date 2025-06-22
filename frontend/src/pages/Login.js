import React, { useState, useContext } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(values);
    history.push("/dashboard");
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 40 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default Login;

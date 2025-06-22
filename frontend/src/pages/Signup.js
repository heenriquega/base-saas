import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@material-ui/core";
import { openApi } from "../services/api";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await openApi.post("/signup", values);
    history.push("/login");
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: 40 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Cadastro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Nome"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
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
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default Signup;

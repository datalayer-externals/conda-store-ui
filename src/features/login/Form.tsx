import React, { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface IFormProps {
  /**
   * @param onSubmitForm handler that will run when submit the form
   */
  onSubmitForm: (user: any) => void;
}

export const LoginForm = ({ onSubmitForm }: IFormProps) => {
  const { palette } = useTheme();
  const [username] = useState("juanjo");
  const [password] = useState("password");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmitForm({
          username,
          password
        });
      }}
    >
      <TextField
        variant="outlined"
        label="Username"
        defaultValue={username}
        fullWidth
        style={{
          marginBottom: "20px"
        }}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        defaultValue={password}
        fullWidth
        style={{
          marginBottom: "20px"
        }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        style={{
          backgroundColor: palette.primary.main
        }}
      >
        Sign In
      </Button>
    </form>
  );
};

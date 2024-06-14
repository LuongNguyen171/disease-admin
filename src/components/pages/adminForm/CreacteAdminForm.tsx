import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

const CreacteAdminForm = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: 4,
        boxSizing: 'border-box'
      }}
    >

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Province"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="District"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Ward"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street"
            variant="outlined"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" sx={buttonStyles}>
            CREATE NEW ADMIN
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
};

const buttonStyles = {
  backgroundColor: '#4cceac',
  '&:hover': {
    backgroundColor: 'rgb(53, 144, 120)',
  },
};

export default CreacteAdminForm;

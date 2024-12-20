import { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Container, Paper, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import useWeather from "../CustonHook/useWeather";

const Weathercomponent = () => {

  const [city, setCity] = useState('');
  const { weatherData, error, fetchWeather, handleDeleteRow } = useWeather();

  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 90,
      headerAlign: 'center',
      align: 'center',
    },
    { 
      field: 'name', 
      headerName: 'City', 
      width: 150, 
      editable: false,
      headerAlign: 'center',
      align: 'center',
    },
    { 
      field: 'temperature', 
      headerName: 'Temperature (°C)', 
      width: 150, 
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <span>{params.value}° C</span>
      ),
    },
    { 
      field: 'weather', 
      headerName: 'Weather', 
      width: 200, 
      editable: false,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <span style={{ textTransform: 'capitalize' }}>{params.value}</span>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => handleDeleteRow(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="bg-custom-radial w-full h-screen px-5 py-5">

    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper 
        elevation={3} 
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          background: 'radial-gradient(circle, #264609, #21370a, #1c2809, #151a06, #070902)',
          '& .MuiDataGrid-root': {
            border: 'none',
            borderRadius: 2,
            boxShadow: 1,
            background: 'transparent',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #f0f0f0',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'primary.light',
            color: 'white',
            borderRadius: '8px 8px 0 0',
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: '#fafafa',
            borderRadius: '0 0 8px 8px',
          }
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            mb: 2,
            color: '#fff',
            fontWeight: 'bold'
          }}
        >
          Weather Dashboard
        </Typography>

        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 500,
            display: 'flex',
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search city"
            value={city}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <Button 
            type="submit"
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              borderRadius: 2,
              px: 4,
              whiteSpace: 'nowrap',
              backgroundColor: '#baf562',
              color: "#030a03"
            }}
          >
            Search
          </Button>
        </Box>

        <Box 
        sx={{ 
            height: 400, 
            width: '100%',
            background: 'radial-gradient(circle, #264609, #21370a, #1c2809, #151a06, #070902)',
            '& .MuiDataGrid-root': {
              border: 'none',
              borderRadius: 2,
              boxShadow: 1,
              background: 'transparent',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #f0f0f0',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'primary.light',
              color: 'white',
              borderRadius: '8px 8px 0 0',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: 'none',
              backgroundColor: '#fafafa',
              borderRadius: '0 0 8px 8px',
            }
        }}>
          <DataGrid
            rows={weatherData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{
              '& .MuiDataGrid-row:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          />
        </Box>
      </Paper>
    </Container>
    </div>
  );
};

export default Weathercomponent;

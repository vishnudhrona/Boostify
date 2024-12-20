import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
    } else {
      setError('');
      localStorage.setItem('username', username);
      navigate('/landingpage');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('username');
    if (token) {
      navigate('/landingpage');
    }
  }, []);

  return (
    <motion.div
      className='bg-custom-radial w-full h-screen px-5 py-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="xs" sx={{ mt: 25 }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', background: "rgba(19, 2, 2, 0.2)" }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold', color: '#fff' }}>
                Login
              </Typography>
            </motion.div>
            
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </motion.div>
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                  </Typography>
                </motion.div>
              )}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{
                      backgroundColor: '#baf562',
                      color: "#030a03",
                      '&:hover': {
                        backgroundColor: '#96c944',
                      },
                      padding: '12px',
                    }}
                  >
                    Log In
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default LoginPage;


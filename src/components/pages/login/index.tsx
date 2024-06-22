import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Link } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/Store';
import { login } from '../../../redux/reducer/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { loadingLogin, successLogin, errLogin } = useSelector((state: RootState) => state.User);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(login({ phone, password }));
    };

    useEffect(() => {
        if (successLogin) {
            toast.success('Login successful!');
            navigate('/dashboard')

        }
        if (errLogin) {
            toast.error('Login failed: ' + errLogin);
        }
    }, [successLogin, errLogin]);

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* Left side */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'white',
                    padding: 4,
                }}
            >
                <img src="logo_url_here" alt="Logo" style={{ marginBottom: 16 }} />
                <Typography variant="h4" sx={{ marginBottom: 1 }}>
                    Welcome To Admin!
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 3 }}>
                    Please enter your details
                </Typography>
                <TextField
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Link href="#" variant="body2">
                        Forgot Password?
                    </Link>
                </Box>
                <Button
                    variant="contained"
                    onClick={handleLogin}
                    sx={{ marginTop: 2, width: '100%', bgcolor: '#141b2d' }}
                    disabled={loadingLogin}
                >
                    {loadingLogin ? 'Logging in...' : 'Login'}
                </Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                    By creating an account, you agree to our{' '}
                    <Link href="#" variant="body2">
                        Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" variant="body2">
                        Privacy Policy
                    </Link>
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>
                    Don't have an account?{' '}
                    <Link href="#" variant="body2">
                        Sign Up
                    </Link>
                </Typography>
            </Box>
            {/* Right side */}
            <Box
                sx={{
                    flex: 1,
                    bgcolor: '#141b2d',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                }}
            >
                <Box
                    sx={{
                        width: '80%',
                        maxWidth: 400,
                        textAlign: 'center',
                    }}
                >
                    <img src="https://www.umassmed.edu/globalassets/center-for-integrated-primary-care/images/webinar-images/mandala-no-labels.png" alt="Illustration" style={{ width: '100%', marginBottom: 16 }} />
                    <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        Admin Panel
                    </Typography>
                    <Typography variant="body1">
                        Giám sát dịch bệnh, đưa ra giải pháp – Cho một cuộc sống an toàn hơn.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;

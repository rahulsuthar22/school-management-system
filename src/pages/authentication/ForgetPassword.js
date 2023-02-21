import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './AuthWrapper';
import AuthForgetPassword from './auth-forms/AuthForgetPassword';

// ================================|| REGISTER ||================================ //

const Register = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Recover Your Password</Typography>
                    <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Go to Login
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthForgetPassword />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Register;

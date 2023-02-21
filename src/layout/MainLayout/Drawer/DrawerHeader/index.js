import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open} sx={{ justifyContent: 'center', borderBottom: '2px solid #faad14' }}>
            {/* <Stack direction="row" spacing={1} alignItems="center" justifyContent="center"> */}
            <Logo />
            {/* <h1
                    // label={process.env.REACT_APP_VERSION}
                    
                    size="small"
                    sx={{ height: 16 }}
                    component="a"
                    href="https://github.com/codedthemes/mantis-free-react-admin-template"
                    target="_blank"
                >
                    SHOOLAR
                </h1> */}
            {/* </Stack> */}
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;

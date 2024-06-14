import * as React from 'react';
import Box from '@mui/material/Box';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './Styles'
import { IconButton } from '@mui/material';


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '20px', width: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <Search sx={{ width: '300px', color: 'white' }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Box sx={{ color: "white" }}>
                <IconButton sx={{ color: "white" }}
                    aria-label="view details"
                >
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}
                    aria-label="view details"
                >
                    <SettingsIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}
                    aria-label="view details"

                >
                    <PersonIcon />
                </IconButton>
            </Box>

        </Box>
    );
}

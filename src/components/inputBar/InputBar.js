import * as React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function InputBar({ userData, addUser }) {
    return (
        <Autocomplete
            disablePortal
            noOptionsText="No user found"
            id="combo-box-demo"
            options={userData}
            getOptionLabel={(option) => option.name}
            sx={{ marginTop: '13px' }}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2 } }} {...props}>
                    <Avatar sx={{ width: 'auto', height: '72px' }} src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='ram' />

                    <Box sx={{ ml: 1, flex: 1 }}>
                        <Typography variant="subtitle1">{option.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{option.description}</Typography>
                    </Box>
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Add Project Members.."
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '15px' // Adjust this value to your preference
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value && !userData.some(user => user.name === e.target.value)) {
                            addUser(e.target.value);
                            e.preventDefault();  // to prevent the default 'Enter' behavior
                        }
                    }}
                />
            )}
        />
    );
}

export default InputBar;




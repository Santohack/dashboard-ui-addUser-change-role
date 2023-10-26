import { Box, Container, Typography } from '@mui/material';

import Cards from '../../components/card';
import InputBar from '../../components/inputBar/InputBar';
import { useState } from 'react';
import { userData } from '../../utill/helper';

const HomeScreen = () => {
    const [users, setUsers] = useState(userData);

    const addUser = (name) => {
        const newUser = {
            name: name,
            description: 'New member',
            role: 'can View'
        };
        setUsers(prevUsers => [...prevUsers, newUser]);
    };

    const updateRole = (userName, newRole) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.name === userName ? { ...user, role: newRole } : user
            )
        );
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Share Project</Typography>
                <Typography variant='subtitle1'>share project with team member</Typography>
            </Box>
            <Typography variant='h5' sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Add Members</Typography>
            <InputBar userData={users} addUser={addUser} />
            <Typography variant='h5' sx={{ marginTop: '40px', marginBottom: '15px' }} >
                {users.length} Members
            </Typography>

            {users.map((item, key) => (
                <Cards key={key} name={item.name} des={item.description} role={item.role} updateRole={updateRole} />
            ))}
        </Container>
    );
};

export default HomeScreen;

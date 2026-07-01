import React, { useState } from 'react'
import usePhoneBookStore from '../stores/usePhonebookStore'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import { Alert, Box, Button, Divider, IconButton, InputBase, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const ContactList = () => {
    const { phoneBook, openForm, deleteContact } = usePhoneBookStore();
    const [keyword, setKeyword] = useState("");
    
    // 검색어에 따라 연락처 필터링
    const filteredContacts = phoneBook.filter((contact) => 
        contact.name.toLowerCase().includes(keyword.toLowerCase()) || 
        contact.phoneNumber.includes(keyword)
    );

    // 검색어 입력 처리
    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this contact?")) {
            deleteContact(id);
        }
    }

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Paper component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Contacts"
                    inputProps={{ 'aria-label': 'Search Contacts' }}
                    value={keyword}
                    onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="secondary" sx={{ p: '10px', mr: 1 }} aria-label="add contact" onClick={openForm}>
                    <PersonAddIcon />
                </IconButton>
            </Paper>
            <Box sx={{ width: '100%' }}>
                {filteredContacts.length > 0 ? (
                    <List>
                        {filteredContacts.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem sx={{ px:3 }}
                                    secondaryAction={
                                        <IconButton sx={{ pr:3 }} edge="end" aria-label="delete" onClick={()=>handleDelete(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    }>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body1" fontWeight="medium" color="text.primary">
                                                {item.name}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" color="text.secondary">
                                                {item.phoneNumber}
                                            </Typography>
                                        }
                                    ></ListItemText>
                                </ListItem>
                            </React.Fragment>
                            ))}
                    </List>
                ) : (
                    <Box sx={{ width: '100%', mt: 2, }}>
                                <Alert 
                                    severity="secondary"
                                    sx={{ 
                                        borderRadius: '10px',
                                        py: 2, 
                                    }}
                                    action={
                                        <Button 
                                            variant="contained" 
                                            color="secondary"
                                            size="small"
                                            sx={{ 
                                                borderRadius: '50px', 
                                                color: '#fff',
                                            }}
                                            onClick={openForm}
                                        >
                                            Add contacts
                                        </Button>
                                    }>
                                    No contacts found
                                </Alert>
                            </Box>
                    )}
            </Box>
        </Box>
    )
}

export default ContactList

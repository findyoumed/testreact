import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import usePhoneBookStore from '../stores/usePhonebookStore';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const {addContact, showForm, closeForm} = usePhoneBookStore();

    const handleAddContact = () => {
        if(!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
        handleCancel();
    }
    const handleCancel = () => {
        setName("");
        setPhoneNumber("");
        closeForm();
    }
    const handleEnter = (event) => {
        if(event.key === "Enter") handleAddContact();
    }

    return (
        <Box sx={{ width: { xs:'90%', sm: '60%', md:'40%'}, }} 
            className={`contact-form ${showForm? '' : 'disabled'}`} 
            display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h6" component="h4" color="text.primary" sx={{ mb: 2 }}>
                Add New Contact
            </Typography>
            <TextField 
                fullWidth
                required
                id="name" 
                label="Name" 
                variant="outlined" 
                color="secondary"
                value={name} 
                onChange={(event) => setName(event.target.value)} />
            <TextField 
                fullWidth
                required
                type="tel"
                id="phone-number" 
                label="Phone Number" 
                variant="outlined"
                color="secondary" 
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)} 
                onKeyUp={(event) => handleEnter(event)}
                />
            <Box sx={{ my:1 }} display="flex" justifyContent="center" gap={2}>
                <Button size="medium" variant="outlined" color="secondary" onClick={handleCancel}>CANCEL</Button>
                <Button size="medium" variant="contained" color="secondary" onClick={handleAddContact}>SAVE</Button>
            </Box>
        </Box>
    )
}

export default ContactForm

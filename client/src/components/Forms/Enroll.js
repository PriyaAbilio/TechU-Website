import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, InputLabel, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { grey, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';


const Enroll = () => {

    const [course, setCourse] = React.useState('');
    const [mode, setMode] = React.useState('');

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    const ModehandleChange = (event) => {
        setMode(event.target.value);
    };

    const formtheme = createTheme({
        palette: {
            primary: {
                main: pink[200],
            },
            secondary: {
                main: grey[500],
            },
        },
    });
    return (
        <>
            <div className='preview-form  p-3 w-25 pb-5'>
                <form className=''>
                    <ThemeProvider theme={formtheme}>
                        <TextField id="outlined-basic" className='fields mt-3 w-100' type='text' label="Full Name" variant="outlined" />
                    </ThemeProvider>
                    <TextField id="outlined-basic" className='fields mt-3 w-100 ' label="Email" type='email' variant="outlined" />
                    <TextField id="outlined-basic" className='fields mt-3 w-100 ' type='number' label="Moblie" variant="outlined" />
                    <Box sx={{ minWidth: 120, marginTop: "12px" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">course</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={course}
                                label="course"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>MERN STACK</MenuItem>
                                <MenuItem value={20}>MEAN STACK</MenuItem>
                                <MenuItem value={30}>DATA SCIENCE</MenuItem>
                                <MenuItem value={40}>DEVEOPS</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120, marginTop: "12px" }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">mode</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={mode}
                                label="mode"
                                onChange={ModehandleChange}
                            >
                                <MenuItem value={10}>online</MenuItem>
                                <MenuItem value={20}>offline</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <div className='d-flex justify-content-center mt-4 '>
                        <button className='preview-btn px-5 py-2'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Enroll
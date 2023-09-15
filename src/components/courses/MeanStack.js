import TextField from '@mui/material/TextField';
import '../../css/preview.css'
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import { Check2Circle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

export const MeanStack = () => {

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
    const handleChange = (event) => {

        setCourse(event.target.value);

    };

 

    const [course, setCourse] = React.useState('');

    return (
        <div className=''>
           <Navbar/>
            <div className='preview-head row gx-0 m-5'>
                <div className='head-text col-lg-5 col-md-6 col-sm-12 w-50'>
                    <h2 className='preview-heading '> Mean StackTraining</h2>
                    <p className='head-content pe-5 pt-3'>Angular JS was built on the concept of efficiency of performance and fast responses, and it has been very useful in single-page application development, because it is easy to use and completely free, making it accessible to programmers across the world. AngularJS certification courses are in high demand for their prominence in front-end web development and our courses  offer a comprehensive understanding of the concepts of AngularJS by using a thorough and extensive curriculum.</p>
                    <div className='d-flex justify-content-start   pt-5'>
                        <div className='preview-btn px-5 py-3 '>
                            <button className='preview-btn '>Apply Now</button>
                        </div>
                        <div className='review d-flex justify-content-end ps-5'>
                            <div className='review-rating pe-3'>
                                4.0
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star n-star " style={{ color: 'grey ' }}></i>
                            </div>
                            <div className='views ps-3 d-flex justify-content-start'>
                                <p className='reviews-p pt-3'>120 reviews</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='head-img w-50 d-flex justify-content-end col-lg-7 col-md-6 col-sm-12'>
                    <img className="" src="../images/previewimg.png" width={900} height={400} />
                </div>
            </div>
            <div className='preview-text row m-5'>
                <div className='Benefits-curiculum   col-lg-8 col-md-6 col-sm-12 pe-5'>
                    <div className='Benefits p-3 '>
                        <h2 className='Benefits-head'>Benefits of Angular JS Training</h2><hr />
                        <div className='row'>
                            <div className=' benefits-1 col-lg-6 pt-2'>
                                <p> <Check2Circle className='chech2circle' />Comfortable learning environment with interactive skilled professionals</p>
                                <p><Check2Circle className='chech2circle' /> Understanding of the latest updated version of AngularJS</p>
                                <p><Check2Circle className='chech2circle' /> As more and more industries usingAngular JS now, the demand for Angular JS
                                    professionals is increasing because of themore job opportunities</p>
                            </div>
                            <div className='benefits-2 col-lg-6 pt-2'>
                                <p><Check2Circle className='chech2circle' /> Flexible schedule and extensive learning materials for theoretical understanding</p>
                                <p><Check2Circle className='chech2circle' /> First- hand experience in application development</p>
                            </div>
                        </div>
                    </div>
                    <div className='curiculum p-3  mt-4 pb-2 '>
                        <h3 className='curriculum-name ps-2 '>Curriculum</h3><hr />
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item m-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <p className='faq'>Interdiction/Setup</p>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item m-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <p className='faq'>Angular Js Training</p>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-lg-4 col-md-6 col-sm-12   '>

                    <div className='preview-form  p-3 w-100 pb-5'>
                        <h6 className='form-h6'>Request for more details</h6>
                        <form className=''>

                            <ThemeProvider theme={formtheme}>
                                <TextField id="outlined-basic" className='fields mt-3 w-100' label="Full Name" variant="outlined" />

                            </ThemeProvider>

                            <TextField id="outlined-basic" className='fields mt-3 w-100  ' label="Email" variant="outlined" />
                            <TextField id="outlined-basic" className='fields mt-3 w-100  ' label="Moblie" variant="outlined" />
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

                            <TextField id="outlined-basic" className='fields mt-3 w-100' label="Message" variant="outlined" />
                            <div className='d-flex justify-content-center mt-4 '>
                                <button className='preview-btn px-5 py-2'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className='preview-features  p-3 m-5 '>
                <h2 className='key'>Key Features</h2>
                <p className='features-text mt-4' style={{ color: "black" }}>There are a few key features that our Angular training courses offer which make using the  angularJS framework easy to use. They offer a</p>
                <div className='row  pt-4'>
                    <div className='features-1 col-lg-4 p-2'>
                        <ul className='feature-li '>
                            <li className='list pb-4'>Quick, easy to use the structure for understanding the framework</li>
                            <li className='list pt-3'>Useful in understanding concepts for creating multiple views for single-page applications</li>
                        </ul>

                    </div>
                    <div className='features-2 col-lg-4  p-2'>
                        <ul className='feature-li'>
                            <li className='list pb-5'>Structured and organized interface</li>
                            <li className='list pt-3'>Offer in-depth experience in dealing with binding of different components and models</li>
                        </ul>

                    </div>
                    <div className='features-3  col-lg-4  p-2'>
                        <ul className='feature-li'>
                            <li className='list'>Helpful in creating large scale applications</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center p-5'>
                <button className='preview-btn p-3 px-5 py-3 '>Apply Now</button>
            </div>
        </div>
    )
}


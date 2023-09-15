import React from 'react'
import Header from './Header'
import Courses from './Courses'
import Aboutus from './Aboutus'
import Testimonials from './Testimonials'
import Client from './Client'
import Information from './Information'
import { Footer } from './Footer'

const All = () => {
    return (
        <div>
            <Header />
            <Courses />
            <Aboutus />
            <Testimonials />
            <Client />
            <Information />
            <Footer />
        </div>
    )
}

export default All
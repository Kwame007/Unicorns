import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components'


const Contact = () => {

    return (
        <>
            <Layout>
                <div className="w-full h-96 flex flex-col justify-center items-center"> 
                    <h1 className="text-xl font-medium"> You can contact us for more informaiton.</h1> 
                    <a href="mailto:me@bawuahboakye.com" className="text-md font-black">talk-to@unicorns.edx</a>
                    <p className="max-w-5xl pt-10 text-4xl font-light"> This website is meant to give senior high school graduates an idea of which university or college they should consider. Reviews are from old students of the universities or colleges listed on this website!</p>
                </div>
                <div className="max-w-5xl mx-auto flex justify-around">
                    <Link to="" className="text-2xl font-black text-purple-900 underline">Write Review!</Link>
                    <Link to="" className="text-2xl font-black text-purple-900 underline">View Universities</Link>
                </div>
            </Layout>
        </>
        )
}

export default Contact

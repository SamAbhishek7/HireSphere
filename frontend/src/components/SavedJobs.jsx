import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const SavedJobs = () => {
    const { savedJobs } = useSelector(store => store.job)

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <h1 className='text-2xl font-bold mb-4'>Saved Jobs</h1>
                {savedJobs.length <= 0 ? (
                    <div className='text-center mt-10'>
                        <h2 className='text-xl text-gray-600'>No saved jobs yet</h2>
                        <p className='text-gray-500'>Jobs you save will appear here</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-3 gap-4'>
                        {savedJobs.map((job) => (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                key={job?._id}>
                                <Job job={job} />
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SavedJobs

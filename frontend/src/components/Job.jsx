import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSaveJob } from '@/redux/jobSlice'

const Job = ({job}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { savedJobs = [] } = useSelector(store => store.job);
    const isSaved = savedJobs?.some(savedJob => savedJob?._id === job?._id) || false;

    const handleSaveToggle = () => {
        if (!job || !job._id) return;
        dispatch(toggleSaveJob(job));
    };


    const getDaysLeft = (lastDate) => {
        const today = new Date();
        const deadline = new Date(lastDate);
        const timeDifference = deadline - today;
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysLeft;
    }
    
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-end'>
                <Button 
                    variant="outline" 
                    className={`rounded-full ${isSaved ? 'bg-purple-50' : ''}`} 
                    size="icon"
                    onClick={handleSaveToggle}>
                    <Bookmark className={isSaved ? 'fill-[#6A38C2] text-[#6A38C2]' : ''} />
                </Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
                {job?.lastDate && (
                    <Badge className={`font-bold ${getDaysLeft(job.lastDate) <= 3 ? 'text-red-500' : 'text-green-600'}`} variant="ghost">
                        {getDaysLeft(job.lastDate)} days left
                    </Badge>
                )}
            </div>

            <div className='flex items-center justify-between mt-4'>
                <p className='text-sm text-gray-500'>Last Date: {new Date(job?.lastDate).toLocaleDateString()}</p>
                <div className='flex items-center gap-4'>
                    <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                    <Button 
                        className={`${isSaved ? 'bg-[#6A38C2]' : 'bg-[#6A38C2]'}`}
                        onClick={handleSaveToggle}>
                        {isSaved ? 'Saved' : 'Save For Later'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Job
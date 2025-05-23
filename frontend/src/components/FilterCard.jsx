import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
    {
        filterType: "Location",
        array: ["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai"]
    },
    {
        filterType: "Industry",
        array: ["Software Development", "Data Science", "DevOps", "UI/UX Design", "Product Management"]
    },
    {
        filterType: "Salary",
        array: ["3-6 LPA", "6-10 LPA", "10-15 LPA", "15-25 LPA", "25-50 LPA"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    
    const changeHandler = (value, filterType) => {
        if (value === selectedValue) {
            // If clicking the same value, clear the filter
            setSelectedValue('');
            dispatch(setSearchedQuery(''));
        } else {
            setSelectedValue(value);
            // For salary filter, extract just the numbers for the query
            if (filterType === 'Salary') {
                const range = value.replace(' LPA', '');
                dispatch(setSearchedQuery(range + ' LPA'));
            } else {
                dispatch(setSearchedQuery(value));
            }
        }
    }

    return (
        <div className='w-full bg-white p-4 rounded-lg shadow-sm'>
            <h1 className='font-bold text-lg text-gray-800 mb-3'>Filter Jobs</h1>
            <hr className='mb-4 border-gray-200' />
            <div className="space-y-3">
                {
                    filterData.map((data, index) => (
                        <div key={`filter-${index}`} className="mb-2 last:mb-0">
                            <h2 className='font-semibold text-sm text-gray-600 mb-2'>{data.filterType}</h2>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `id${index}-${idx}`
                                    return (
                                        <div 
                                            key={itemId}
                                            className={`flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-200 ${selectedValue === item ? 'bg-blue-50 text-[#2563EB]' : 'hover:bg-gray-50 text-gray-700'}`}
                                            onClick={() => changeHandler(item, data.filterType)}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded-full border transition-colors duration-200 ${selectedValue === item ? 'bg-[#2563EB] border-[#2563EB]' : 'border-gray-400'}`} />
                                            <span className="ml-2 text-sm">{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterCard
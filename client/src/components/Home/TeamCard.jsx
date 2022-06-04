import React from 'react';

// assets
import person1 from "../../Assets/person1.svg"

const TeamCard = (props) => {
    return (
        <>
            <div className='bg-grey-50 w-56 h-56 rounded-2xl shadow-2xl'>
                <div className='flex justify-between items-center mt-7 gap-4'>
                    <div className='w-1/2 h-40'>
                        <img
                            src={props.image}
                            alt="person"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='items-center'>
                        <h1 className='text-sm text-red-400 mr-4'>{props.name}</h1>
                        <ul className='mt-2 list-disc'>
                            <li className='text-base'>{props.position}</li>
                            <li className='text-base'>{props.skill}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamCard;
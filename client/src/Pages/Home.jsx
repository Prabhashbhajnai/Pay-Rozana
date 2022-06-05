import React, { useState } from 'react';

// Assets
import person from "../Assets/Person.svg";
import person1 from "../Assets/person1.svg";
import person2 from "../Assets/person2.svg";
import person3 from "../Assets/person3.svg";

// components
import TeamCard from '../components/Home/TeamCard';

const Home = () => {

    const [teamList, setTeamList] = useState([
        {
            image: person1,
            name: "Prabhash Bhajani",
            position: "COO (PayRozana)",
            skill: "Full-stack Developer"
        },
        {
            image: person2,
            name: "Harsh Raoka",
            position: "COO (PayRozana)",
            skill: "Full-stack Developer"
        },
        {
            image: person3,
            name: "Anurag Gupta",
            position: "CFO (PayRozana)",
            skill: "UI/UX Designer"
        },
    ]);

    return (
        <div className='overflow-x-hidden w-full'>
            <div className='flex flex-col mx-16 items-center mt-5'>
                <div className='flex w-full justify-evenly md:items-center'>
                    <div className='container w-full sm:w-1/3 align-left '>
                        <h1 className='font-bold text-4xl hidden sm:block'>Make your loan EMIs get simplified by paying on daily basis</h1>
                        <h1 className='font-bold text-4xl block sm:hidden mt-5 mb-20'>Get your <br /> EMIs done <br /> easily</h1>
                    </div>
                    <div className='w-1/6 h-96 items-start hidden sm:block'>
                        <img
                            src={person}
                            alt="person"
                            className='w-full h-full'
                        />
                    </div>

                </div>
                <div>
                    <h1 className='font-bold text-3xl'>Register Now</h1>
                    <div className='flex flex-col gap-5 mt-6 items-center'>
                        <button className='text-white bg-black w-32 h-10 text-xl'>Login</button>
                        <button className='text-white bg-black w-32 h-10 text-xl'>Sign up</button>
                    </div>
                </div>
                <div className='flex flex-col mt-16 font-bold text-2xl w-full items-center'>
                    <h1 className='items-center'>Our Team</h1>
                    <div className='w-full h-fit p-5 flex items-center justify-center bg-grey-50 mt-7'>
                        <div className='flex w-full content-center gap-16 justify-evenly hidden sm:flex'>
                            {
                                teamList.map((sources) => (
                                    <TeamCard {...sources} />
                                ))
                            }
                        </div>
                        <div className='block content-center gap-16 sm:hidden'>
                            
                            {
                                teamList.map((sources) => (
                                    <TeamCard {...sources} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full mt-5'>
                    <h1 className='text-2xl font-bold'>About Us</h1>
                    <div className='flex bg-grey-50 mt-10 w-full rounded-lg justify-center'>
                        <div className='flex mx-5 mt-12 text-2xl text-aboutGreen-50 md:w-2/4 font-bold mb-5'>
                            <p className=''>We are just a bunch of college students who are trying to solve the problem of small businesses who take loans from the banks. <br />We are bringing the idea of repayment of EMIs on daily basis so that there will be no burden of payment of EMI at the end of the month.</p>
                        </div>
                    </div>
                </div>

              

            </div>
        </div>
    );
};

export default Home;
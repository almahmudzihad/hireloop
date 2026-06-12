import { getUserSession } from '@/lib/api/core/session'
import { getJobById } from '@/lib/api/jobs';
import { redirect } from 'next/navigation';
import React from 'react'
import JobApply from './JobApply';

const ApplyPage = async ({params}) => {
    const {id} = await params;
    const user = await getUserSession();
    if(!user){
        redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
    }
    if(user.role !== "seeker"){
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">You must be a job seeker to apply for a job.</p>
            </div>
        );
    }
    const job = await getJobById(id);
  return (
    <div>
        <h1>Apply to {job.jobTitle}</h1>
        <div className="animate-in fade-in-50 duration-300">
            <JobApply applicant={user} job={job} />
        </div>
    </div>
  )
}

export default ApplyPage
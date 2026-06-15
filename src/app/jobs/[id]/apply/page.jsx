import { getUserSession } from '@/lib/api/core/session'
import { getJobById } from '@/lib/api/jobs';
import { redirect } from 'next/navigation';
import React from 'react'
import JobApply from './JobApply';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { Linden_Hill } from 'next/font/google';
import Link from 'next/link';
import { getPlanById } from '@/lib/api/plans';

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
    const application = await getApplicationsByApplicant(user.id);

    const plan = await getPlanById(user?.plan);
    
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Apply to {job.jobTitle}</h1>
        <h2 className="text-zinc-400 mb-2">You have applied to {application.length} jobs out of {plan.maxApplicationsPerMonth} allowed per month</h2>
        <h3 className="text-zinc-400 mb-2">Purchease a plan to increase your application limit</h3>
        <Link href="/plans" className="text-zinc-400 hover:text-zinc-300">Pricing</Link>
        <div className="animate-in fade-in-50 duration-300">
            {application.length < plan.maxApplicationsPerMonth && <JobApply applicant={user} job={job} />}
        </div>
    </div>
  )
}

export default ApplyPage
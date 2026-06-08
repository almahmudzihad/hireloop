"use client"
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client'
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

const RecruiterPage = () => {
    const {data: session, isPending} = useSession();
    console.log("Session data in RecruiterPage:", session);
    if(isPending){
        return <div>Loading...</div>
    }
    const user = session?.user;
    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];
  return (
    <div>
        <h2 className="text-4xl">Welcome back, {user?.name}</h2>
        <DashboardStats statsData={recruiterStats} />
    </div>
  )
}

export default RecruiterPage
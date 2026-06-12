import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/api/core/session';
import { getRecruiterCompanies } from '@/lib/api/companies';

const CompanyPage = async () => {
    const user = await getUserSession();
    const company = await getRecruiterCompanies(user?.id);
   

    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;
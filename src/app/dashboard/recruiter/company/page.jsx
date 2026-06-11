import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/api/core/session';

const CompanyPage = async () => {
    const user = await getUserSession();
    console.log("User data in CompanyPage:", user);
    // const user = await getUserSession();
    // const company = await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile ></CompanyProfile>
        </div>
    );
};

export default CompanyPage;
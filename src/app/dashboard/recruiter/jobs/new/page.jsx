import React from 'react'
import PostJobForm from './PostJobForm'
import { getUserSession } from '@/lib/api/core/session';
import { getRecruiterCompanies } from '@/lib/api/companies';

const PostJobsPage = async () => {
    const user = await getUserSession();
     const company = await getRecruiterCompanies(user?.id);
  return (
    <div>
        <PostJobForm company={company} />
    </div>
  )
}

export default PostJobsPage
import { getCompanyJobs } from '@/lib/api/jobs'
import React from 'react'

const RecruiterJobsPage = async () => {
  const companyId = 'company_123'
  const jobs = await getCompanyJobs(companyId)

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        My Posted Jobs
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Salary</th>
              <th className="px-6 py-4">Remote</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Deadline</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {jobs?.map((job) => (
              <tr
                key={job._id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {job.jobTitle}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {job.jobCategory}
                </td>

                <td className="px-6 py-4 capitalize text-gray-600">
                  {job.jobType}
                </td>

                <td className="px-6 py-4 text-gray-600">
                  ${job.minSalary} - ${job.maxSalary}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.isRemote
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {job.isRemote ? 'Remote' : 'Onsite'}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === 'active'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {job.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecruiterJobsPage
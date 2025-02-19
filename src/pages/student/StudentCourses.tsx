import React from 'react';
import { CourseCard } from '../../components/CourseCard';
import { useCourses } from '../../hooks/useCourses';
import { GraduationCap, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

// Mock data - in a real app this would come from an API
const semesterApproval = {
  advisorApproval: true,
  hallApproval: false,
};

const courses = [
  {
    id: 1,
    code: 'CSE101',
    name: 'Introduction to Computer Science',
    credits: 3,
    instructor: 'Dr. Smith',
    schedule: 'Mon/Wed 10:00 AM',
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Advanced Calculus',
    credits: 4,
    instructor: 'Dr. Johnson',
    schedule: 'Tue/Thu 2:00 PM',
  },
  {
    id: 3,
    code: 'PHY301',
    name: 'Classical Physics',
    credits: 4,
    instructor: 'Dr. Brown',
    schedule: 'Wed/Fri 11:00 AM',
  },
];

const creditSummary = {
  totalRequired: 120,
  completed: 85,
  current: 11,
  remaining: 24,
};

function ApprovalStatus({ approved }: { approved: boolean }) {
  return approved ? (
    <div className="flex items-center text-green-600">
      <CheckCircle2 className="w-5 h-5 mr-2" />
      <span className="font-medium">Approved</span>
    </div>
  ) : (
    <div className="flex items-center text-amber-600">
      <AlertCircle className="w-5 h-5 mr-2" />
      <span className="font-medium">Pending Approval</span>
    </div>
  );
}

export function StudentCourses() {
  const handleCreatePayment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const paymentInfo = {
        name, email,
        number,
    }
    axios.post('https://cuet-examflow-server.vercel.app/create-payment', paymentInfo)
        .then(res => {
            window.location.replace(res.data.url)
        })
    form.reset()
}
  return (
    <div className="space-y-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div> */}
      <div className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">My Courses</h2>
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Upcoming Semester Courses</h1>
          </div>

          {/* Semester Approval Status */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Semester Approval Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Advisor Approval</div>
                  <ApprovalStatus approved={semesterApproval.advisorApproval} />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Hall Approval</div>
                  <ApprovalStatus approved={semesterApproval.hallApproval} />
                </div>
              </div>
            </div>
          </div>

          {/* Credit Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Credits Required', value: creditSummary.totalRequired },
              { label: 'Credits Completed', value: creditSummary.completed },
              { label: 'Current Semester Credits', value: creditSummary.current },
              { label: 'Remaining Credits', value: creditSummary.remaining },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg shadow p-6">
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Course List */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Schedule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Credits
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{course.code}</div>
                          <div className="text-sm text-gray-500">{course.name}</div>
                          <div className="text-sm text-gray-500">{course.instructor}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {course.schedule}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {course.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
        <button className='btn btn-primary my-4' onClick={() => document.getElementById('my_modal_1').showModal()}>Pay Semester Fee</button>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Please confirm your details.</p>
            {/* <div className="modal-action">
                            
                        </div> */}
            <div>
              <form onSubmit={handleCreatePayment} className='w-full rounded-lg border-gray-300 border-2 p-5'>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" placeholder="Your Full Name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input type="text" placeholder="Your Email Address" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input type="text" placeholder="Phone Number" name='number' className="input input-bordered" required />
                </div>
                <div className='flex justify-center'>
                  <button className="btn btn-primary mt-2">Submit</button>
                </div>
              </form>
            </div>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mt-4">Close</button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}
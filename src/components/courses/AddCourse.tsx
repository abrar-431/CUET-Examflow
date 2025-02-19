import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export function AddCourse() {
    const handleAddCourse = (e) => {
        e.preventDefault()
        const form = e.target;
        const code = form.code.value;
        const name = form.name.value;
        const semester = form.semester.value;
        const newCourse = { code, name, semester };
        console.log('Course: ', newCourse)
        axios.post('https://cuet-examflow-server.vercel.app/courses', newCourse)
          .then(res => {
            if (res.data.insertedId) {
              toast('Your course was added successfully');
            }
          })
          form.reset()
      }
    return (
        <div className="px-10 py-5">
            <form onSubmit={handleAddCourse} className='w-full rounded-lg border-gray-300 border-2 p-5'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Code</span>
                    </label>
                    <input type="text" placeholder="Code" name='code' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Semester</span>
                    </label>
                    <input type="text" placeholder="Semester" name='semester' className="input input-bordered" required />
                </div>
                <div className='flex justify-center'>
                    <button className="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}
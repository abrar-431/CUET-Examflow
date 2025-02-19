import { Link } from "react-router-dom";

export function PaymentSuccess() {

    return (
        <div>
            <h1 className="text-lg font-bold text-center">Payment Successful</h1>
            <div className="flex justify-center">
                <Link to='/'>
                    <button className='btn btn-success mt-4'>Go to Home</button></Link>
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
import swal from "sweetalert";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Poof! Your Coffee has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = coffees.filter(cof => cof._id !== _id);
                                setCoffees(remaining);
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className=" w-full flex justify-between pr-4">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">view</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn">edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
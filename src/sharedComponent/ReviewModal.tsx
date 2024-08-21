import { useForm } from 'react-hook-form';
import { useCreateReviewMutation } from '../redux/features/review/reviewApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ReviewModal = ({ setModal, name, email, id,image }:any) => {
    const [createFunction] = useCreateReviewMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
             data.productId=id
             data.rating=Number(data?.rating)
             data.image=image
            const result = await createFunction( data ).unwrap();

            if(result?.statusCode===201){
                toast.success("Review submitted successfully!");
                setTimeout(() => {
                    setModal(false)
                }, 1000);
            }
            
           
        } catch (error) {
            toast.error("Failed to submit review.");
            console.error(error);
            setTimeout(() => {
                setModal(false)
            }, 1000);
        }
    };

    const getErrorMessage = (error: any) => {
        if (!error) return null;
        return typeof error.message === 'string' ? error.message : 'Invalid input';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
            <div className="relative w-full max-w-2xl p-4">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                        <button
                            onClick={() => setModal(false)}
                            type="button"
                            className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg ms-auto hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="static-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="grid gap-6 mb-6 md:grid-cols-2 my-10 px-10 overflow-scroll">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        defaultValue={name}
                                        {...register("name", { required: "Name is required" })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{getErrorMessage(errors.name)}</p>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        defaultValue={email}
                                        {...register("email", { required: "Email is required" })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{getErrorMessage(errors.email)}</p>}
                                </div>
                                <div>
                                    <label
                                        htmlFor="rating"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Rating
                                    </label>
                                    <input
                                        type="number"
                                        id="rating"
                                        {...register("rating", { required: "Rating is required", min: 1, max: 5 })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your rating (1-5)"
                                        min={1}
                                        max={5}
                                    />
                                    {errors.rating && <p className="text-red-500 text-sm">{getErrorMessage(errors.rating)}</p>}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="review"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Review
                                </label>
                                <textarea
                                    id="review"
                                    maxLength={250}
                                    {...register("review", { required: "Review is required" })}
                                    className="bg-gray-50 border border-gray-300 h-[200px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write your review"
                                />
                                {errors.review && <p className="text-red-500 text-sm">{getErrorMessage(errors.review)}</p>}
                            </div>
                        </section>
                        <div className="flex items-center gap-5 justify-center p-4 border-t border-gray-200 rounded-b md:p-5 dark:border-gray-600">
                            <button
                                type="submit"
                                className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] text-[15px] from-blue-500/90 via-black to-blue-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
                            >
                                Submit Review
                            </button>
                            <button
                                onClick={() => setModal(false)}
                                type="button"
                                className="text-white bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] text-[15px] from-red-500/90 via-black to-red-500/90 btn-outline py-1 px-3 rounded-lg font-semibold focus:none cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ReviewModal;

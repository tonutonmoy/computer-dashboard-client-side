import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const ReviewSlider = ({ data = [] }: any) => {
 
  
  // Ensure data is an array
  if (!Array.isArray(data) || data.length === 0) {
    return <div className=' text-red-500 text-xl text-center'>No reviews available</div>;
  }

  return (
    <div className="relative w-full ">
    
      <div className="carousel w-full">
        {data.map((review: any, index: number) => (
          <div
            key={review?._id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <figure className="relative w-full rounded-2xl p-6 shadow-xl shadow-slate-900/10 bg-gradient-to-b from-gray-700 to-gray-500 bg-gradient-to-r">
              <blockquote className="relative h-[150px] md:h-[100px]">
                <p className="text-lg tracking-tight text-slate-100 break-words">
                  {review?.review.length > 250
                    ? `${review?.review.substring(0, 250)}...`
                    : review?.review}
                </p>
              </blockquote>
              <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                <div className=' space-y-2'>
                  <div className="font-display text-base text-slate-300 font-semibold ">
                    {review?.name}
                  </div>
                  <div className="font-display  text-slate-100 text-sm  ">
                    {review?.email}
                  </div>
                  <div className="font-display text-base text-slate-100">
                    <Rating style={{ maxWidth:100 }} value={review?.rating}  readOnly />
                  </div>
                </div>
                <div className="overflow-hidden rounded-full bg-slate-50 ms-2 md:ms-0">
                  <img
                    alt={review?.name}
                    className="h-10 md:h-14 w-10 md:w-14 object-cover"
                    src={review?.image}
                  />
                </div>
              </figcaption>
            </figure>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${index === 0 ? data?.length : index}`}
                className="btn btn-circle opacity-50 hover:opacity-100  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90"
              >
                ❮
              </a>
              <a
                href={`#slide${index + 2 > data?.length ? 1 : index + 2}`}
                className="btn btn-circle opacity-50 hover:opacity-100  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-red-500/90 via-black to-red-500/90"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;

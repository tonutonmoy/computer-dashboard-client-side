import ReviewSlider from "../../sharedComponent/ReviewSlider";

const Review = ({data}:any) => {
  return (
    <div>
      <ReviewSlider data={data}/>
    </div>
  );
};

export default Review;
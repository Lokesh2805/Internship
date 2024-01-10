const FeedbackCard = ({ content, name }) => (
  <div className="flex justify-between  flex-col  px-10 py-12 rounded-[20px]  max-w-[570px]  mx-auto my-0 ">
    <p className="text-[#FFF] font-[Poppins] text-[24px] not-italic font-medium leading-[40px]">
      {content}
    </p>
    <br></br>

    <div className="flex flex-row">
      <div className="flex justify-center items-center ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="2"
          viewBox="0 0 46 2"
          fill="none"
        >
          <path d="M0.291504 1H45.6542" stroke="white" className="" />
        </svg>
        <p className="text-[#FFF] font-[Poppins] text-[24px] not-italic font-light leading-[32px]">
          {name}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;

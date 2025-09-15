import React from "react";

const Earning = () => {
  return (
    <div className=" flex flex-col w-full  my-3  items-center justify-center">
      {/* upper */}

      <div className=" flex items-center w-[358px]  h-[81px] rounded-[16px] border-[2px] py-[16px] px-[12px] border-[#F2F2F2] gap-[4px]   ">
        <div className="w-[208px] h-[49px] gap-[8px] flex flex-col">
          <h2 className=" font-medium text-[14px] font-weight-[500] text-[#999999]">
            Total Earnings
          </h2>
          <h2 className=" font-semibold text-[20px] font-weight-[600] text-[#8134AF]">
            $1,25,000
          </h2>
        </div>
      </div>

      {/* bottom two */}
      <div className="flex gap-[4px] my-2">
        <div className=" flex items-center w-[172px]  h-[81px] rounded-[16px] border-[2px] py-[16px] px-[12px] border-[#F2F2F2] gap-[4px]   ">
          <div className="w-[208px] h-[49px] gap-[8px] flex flex-col">
            <h2 className=" font-medium text-[14px] font-weight-[500] text-[#999999]">
              Payment Awaited
            </h2>
            <h2 className=" font-semibold text-[16px] font-weight-[600] text-[#8134AF]">
              $25,000
            </h2>
          </div>
        </div>

        <div className=" flex items-center w-[172px]  h-[81px] rounded-[16px] border-[2px] py-[16px] px-[12px] border-[#F2F2F2] gap-[4px]   ">
          <div className="w-[208px] h-[49px] gap-[8px] flex flex-col">
            <h2 className=" font-medium text-[14px] font-weight-[500] text-[#999999]">
              Total Earnings
            </h2>
            <h2 className=" font-semibold text-[16px] font-weight-[600] text-[#8134AF]">
              $25,000
            </h2>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Earning;

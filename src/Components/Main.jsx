import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { PiCrown } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import Earning from "./Earning";
import Charts from "./Charts";
import { BiSolidDownArrow } from "react-icons/bi";
import Invoices from "./Invoices";
import Footer from "./Footer";
const Main = () => {
  return (
    <div className="bg-white rounded-t-lg h-full w-full flex flex-col items-center ">
      {/* // grey box div */}
      <div className="w-[358px] h-[160px] bg-[#F2F2F2] rounded-[32px] p-[16px] px-[12px] flex flex-col items-center gap-[14px]  mt-[16px]">
        <div className="w-[50.67px] h-[50.67px] flex justify-center items-center">
          <CiCirclePlus
            className="w-full h-full "
            style={{
              fill: "url(#gradient)",
            }}
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#DD2A7B" />
                <stop offset="50%" stopColor="#9747FF" />
                <stop offset="100%" stopColor="#334CCA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="font-semibold text-[24px] bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent">
          Create New Invoice
        </h2>

        <p className="text-[#999999] text-[12px] weight-[400] text-center">
          Start by creating and sending new invoice
        </p>
      </div>

      {/*  */}
      <div className="h-[44px] w-[358px]  flex items-center justify-center pt-[12px] pb-[12px]">
        <div className="text-[12px] gap-[24px] text-[#8134AF]">
          Or Upload an existing invoice and set payment reminder
        </div>
      </div>

      {/*  */}

      {/* Time Period Div */}
      <div className="  h-[122px] w-[358px] rounded-[16px] border-[2px] py-[16px] px-[12px] border-[#F2F2F2]">
        <div className=" h-[90px]  w-[334px] ">
          <div className=" text-[#999999] w-[333px] h-[18px] gap-[4px] flex justify-between ">
            <h2 className="text-[14px]">Time Period</h2>
            <p className="text-[12px]">dd:mm:yyyy - dd:mm:yyyy</p>
          </div>

          <div className="flex mt-2  flex-wrap gap-4">
            <div className="w-[73px] h-[28px]">
              <div className="gap-[2px] flex items-center justify-center w-[73px] h-[28px] rounded-[16px] border-[1px] py-[4px] px-[12px] border-[#F2F2F2]">
                <div className="w-[49px] h-[20px] font-weight-[400] text-[14px] text-[#999999]">
                  1Month
                </div>
              </div>
            </div>
            <div className="  w-[73px] h-[28px]">
              <div className="bg-pink-50 gap-[2px] flex items-center justify-center w-[73px] h-[28px] rounded-[16px] border-[1px] py-[4px] px-[12px] border-[#F2F2F2]">
                <div className="w-[49px] h-[20px] text-[14px] bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent font-normal">
                  3Month
                </div>
              </div>
            </div>

            <div className="w-[73px] h-[28px]">
              <div className="gap-[2px] flex items-center justify-center w-[73px] h-[28px] rounded-[16px] border-[1px] py-[4px] px-[12px] border-[#F2F2F2]">
                <div className="gap-[4px] flex  items-center justify-centerw-[49px] h-[20px] font-weight-[400] text-[14px] text-[#999999]">
                  1Year{" "}
                  <PiCrown
                    style={{
                      fill: "url(#gradient)",
                    }}
                    className="w-[18px] h-[20px]"
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#DD2A7B" />
                        <stop offset="50%" stopColor="#9747FF" />
                        <stop offset="100%" stopColor="#334CCA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center w-[97px]  h-[28px]">
              <div className="gap-[2px] flex items-center justify-center  w-[90px] h-[28px] rounded-[16px] border-[1px] py-[4px] px-[12px] border-[#F2F2F2]">
                <div className="flex items-center justify-center  h-[20px] gap-[4px] font-weight-[400] text-[14px] text-[#999999]">
                  <SlCalender />
                  Custom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* total earnings , payment awaited , or overdue */}
      <Earning />

      {/* graph div */}
      <Charts></Charts>

      {/* last one */}
      <div className=" flex flex-col  w-[377px] h-full p-[10px] gap-[10px] mt-5">
        <div className=" flex justify-between items-center   w-[357px] h-24px]">
          <div className=" text-[16px] font-weight-[600] text-[#999999]">
            Your Invoices
          </div>
          <BiSolidDownArrow className="w-[10 px] h-[15 px] " />
        </div>

        {/* data of invoices */}
        <Invoices />

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default Main;



import { FaRegBell } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";

// Data with colors + icons
const InvoiceList = [
  {
    id: 1,
    clientName: "Client Name",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Update Status",
    color: "bg-[#8134AF] text-white",
    icon: "",
  },
  {
    id: 2,
    clientName: "Client Name",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Unpaid",
    color: "bg-[#F2F2F2] text-[#999999]",

    icon: "",
  },
  {
    id: 3,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Disputed",
    color: "bg-[#FFB1B1] text-[#FF2D55]",

    icon: "",
  },
  {
    id: 4,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Paid",
    color: "bg-[#9CEFB8] text-[#34C759]",
    icon: "",
  },
  {
    id: 5,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Paid",
    color: "bg-[#9CEFB8] text-[#34C759]",
    icon: "",
  },
  {
    id: 6,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Partially Paid",
    color: "bg-[#FFFAE5] text-[#FFCC00]",
    icon: "",
  },
  {
    id: 7,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Paid",
    color: "bg-[#9CEFB8] text-[#34C759]",
    icon: "",
  },
  {
    id: 8,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Overdue",
    color: "bg-[#FFB1B1] text-[#FF2D55]",
    icon: <FaRegBell />,
  },
  {
    id: 9,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Awaited",
    color: "bg-[#FFFAE5] text-[#FFCC00]",
    icon: <FaRegBell />,
  },
  {
    id: 10,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Draft",
    color: "bg-green-400 text-white",
    icon: <LuPencil />,
  },
  {
    id: 11,
    clientName: "Income Trend",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Paid",
    color: "bg-[#F2F2F2] text-[#999999]",
    icon: "",
  },
];

// Card Component
const InvoiceCard = ({ clientName, amount, dueDate, status, color, icon }) => {
  return (
    <div className=" mb-4 gap-[4px]  w-[357px]  h-[68px]  rounded-[16px] border-[2px] px-[12px] py-[16px] border-[#F2F2F2] ">
      <div className="flex    justify-between   h-[36px] w-[335.27px]">
        <div className="w-[213px] h-[36px]">
          <h3 className="font-medium text-[14px] text-[#6B7280]">
            {clientName}
          </h3>
          <p className=" text-[#999999] text-[12px]">
            {amount}, Due: {dueDate}
          </p>
        </div>
        <div
          className={` w-[122.31px] h-[32px] flex items-center justify-end  `}
        >
          <div
            className={`flex  justify-between rounded-[24px] px-[15px] py-[9px] ${color}`}
          >
            <div className="text-[12px] font-semibold ">{status}</div>
          </div>

          {icon && (
            <div className="h-[24px] w-[24px] py-[2px] px-[5px]">{icon}</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Parent Component
const Invoices = () => {
  return (
    <div className=" ">
      {InvoiceList.map((invoice) => (
        <InvoiceCard key={invoice.id} {...invoice} />
      ))}
    </div>
  );
};

export default Invoices;

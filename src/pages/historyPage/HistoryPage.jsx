import React, { useEffect, useState } from "react";
import { useBoqContext } from "./../../context/BoqContext";
import formateDate from "../../utility/getFormattedDate";
import {
  MdAutorenew,
  MdDeleteForever,
  MdOutlineDateRange,
  MdOutlineEditNote,
} from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import removeUnderScore from "../../utility/removeUderScore";
import { useHistoryContext } from "../../context/HistoryContext.jsx";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { AiOutlineDelete } from "react-icons/ai";

const HistoryPage = () => {
  const { boqDisable } = useBoqContext();
  const [startDate, setStartDate] = useState(new Date());
  const {
    allBoq,
    fetchBoq,
    singleBoqFieldUpdate,
    postThisData,
    handleDeleteBoq,
  } = useHistoryContext();

  useEffect(() => {
    fetchBoq();
    boqDisable();
  }, []);

  return (
    <div className="w-full overflow-x-auto  mt-20">
      <table className="text-xs w-[2400px] !table-fixed">
        <thead className="">
          <tr className="text-left border-[1px] bg-teal-600">
            <th className="p-3  border-[1px] border-gray-800 text-center w-16">
              SL
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-32 bg-yellow-400 ">
              {removeUnderScore("AEXP_BOQ_Creator")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center bg-yellow-400 w-40">
              {removeUnderScore("Project_name")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-36 bg-yellow-400">
              BOQ ID
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40">
              PO Number
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40">
              PO Value
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40">
              PO Receiving Date
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40">
              PO Delivery Date
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-36 bg-yellow-400">
              GP User Name
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-32 bg-yellow-400">
              GP USER <br /> Contact Number
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40 bg-yellow-400">
              GP USER Email
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-48">
              {removeUnderScore("Requisition_amount")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-48">
              {removeUnderScore("Received_amount")}
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-44">
              {removeUnderScore("Work_status")}
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-56">
              {removeUnderScore("Acknowledgement")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-52">
              {removeUnderScore("Receiving_status")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-44">
              {removeUnderScore("OTC")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-60">
              {removeUnderScore("Internal_bill_settlement")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-56">
              {removeUnderScore("3rd_party_office_pay")}
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              Created At
            </th>
            <th className="p-3  border-[1px] border-gray-800  text-center w-52">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allBoq?.length > 0 ? (
            allBoq.map((item, index) => (
              <tr
                key={item.id}
                className="border-[1px] border-opacity-20 border-gray-700 "
              >
                {/* {console.log(item)} */}
                {/* {console.log(item)} */}
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{index + 1}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.AEXP_BOQ_Creator}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.Project_name}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.BOQ_ID}</p>
                </td>
                <td className="!p-0  border-b-[1px] border-gray-800 text-center">
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "PO_number")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <input
                      autoComplete="off"
                      type="number"
                      name="PO_number"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={item.PO_number === null ? "" : item.PO_number}
                      id="PO_number"
                      className="w-full !p-0 !pl-2 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                      placeholder="Type PO Number..."
                    />
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() => postThisData(item.id, index, "PO_value")}
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <input
                      autoComplete="off"
                      type="number"
                      name="PO_value"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={item.PO_value === null ? "" : item.PO_value}
                      id="PO_value"
                      className="w-full !p-0 !pl-2 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                      placeholder="Type PO value..."
                    />
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "PO_receiving_date")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>

                    <input
                      autoComplete="off"
                      type="date"
                      name="PO_receiving_date"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.PO_receiving_date === null
                          ? ""
                          : item.PO_receiving_date
                      }
                      id="PO_receiving_date"
                      className={`${
                        item.PO_receiving_date === null ? "" : "!text-black"
                      } w-[80%] mr-auto !p-0 !pl-2 !border-none !outline-none !focus:outline-none !ring-0 !focus:ring-0 placeholder:text-sm text-sm`}
                      // placeholder="Type  Number..."
                    />
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "PO_delivary_date")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>

                    <input
                      autoComplete="off"
                      type="date"
                      name="PO_delivary_date"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.PO_delivary_date === null
                          ? ""
                          : item.PO_delivary_date
                      }
                      id="PO_delivary_date"
                      className={`${
                        item.PO_delivary_date === null ? "" : "!text-black"
                      } w-[80%] mr-auto !p-0 !pl-2 !border-none !outline-none !focus:outline-none !ring-0 !focus:ring-0 placeholder:text-sm text-sm`}
                      // placeholder="Type  Number..."
                    />
                  </div>
                </td>

                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.GP_user_name}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.GP_user_contact_number}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item.GP_user_mail_id}</p>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "Requisition_amount")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <input
                      autoComplete="off"
                      type="number"
                      name="Requisition_amount"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.Requisition_amount === null
                          ? ""
                          : item.Requisition_amount
                      }
                      id="Requisition_amount"
                      className="w-full !p-0 !pl-2 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                      placeholder="Type requisition amount..."
                    />
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "Received_amount")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <input
                      autoComplete="off"
                      type="number"
                      name="Received_amount"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.Received_amount === null
                          ? ""
                          : item.Received_amount
                      }
                      id="Received_amount"
                      className="w-full !p-0 !pl-2 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                      placeholder="Type Received amount..."
                    />
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "Work_status")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="Work_status"
                      name="Work_status"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={item.Work_status === null ? "" : item.Work_status}
                      className="w-[88%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select Work Status
                      </option>
                      <option className="!px-2" value="Up coming">
                        Up coming
                      </option>
                      <option className="!px-2" value="On-going">
                        On-going
                      </option>
                      <option className="!px-2" value="Postpond">
                        Postpond
                      </option>
                      <option className="!px-2" value="Pirtially Done">
                        Pirtially Done
                      </option>
                      <option className="!px-2" value="Full Done">
                        Full Done
                      </option>
                    </select>
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "Acknowledgement")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="Acknowledgement"
                      name="Acknowledgement"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.Acknowledgement === null
                          ? ""
                          : item.Acknowledgement
                      }
                      className="w-[89%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select Acknowledgement
                      </option>
                      <option className="!px-2" value="Not send Yet">
                        Not send Yet
                      </option>
                      <option
                        className="!px-2"
                        value="Sent & Waiting for approval"
                      >
                        Sent & Waiting for approval
                      </option>
                      <option className="!px-2" value="Pirtially Done">
                        Pirtially Done
                      </option>
                      <option className="!px-2" value="Approved">
                        Approved
                      </option>
                    </select>
                  </div>
                </td>

                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "Receiving_status")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="Receiving_status"
                      name="Receiving_status"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.Receiving_status === null
                          ? ""
                          : item.Receiving_status
                      }
                      className="w-[89%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select Receiving status
                      </option>
                      <option className="!px-2" value="True">
                        True
                      </option>
                      <option className="!px-2" value="False">
                        False
                      </option>
                    </select>
                  </div>
                </td>

                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() => postThisData(item.id, index, "OTC")}
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="OTC"
                      name="OTC"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={item.OTC === null ? "" : item.OTC}
                      className="w-[89%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select OTC
                      </option>
                      <option className="!px-2" value="Yes">
                        Yes
                      </option>
                      <option className="!px-2" value="No">
                        No
                      </option>
                    </select>
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(
                            item.id,
                            index,
                            "Internal_bill_settlement"
                          )
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="Internal_bill_settlement"
                      name="Internal_bill_settlement"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item.Internal_bill_settlement === null
                          ? ""
                          : item.Internal_bill_settlement
                      }
                      className="w-[92%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select Internal_bill_settlement
                      </option>
                      <option className="!px-2" value="Yes">
                        Yes
                      </option>
                      <option className="!px-2" value="No">
                        No
                      </option>
                      <option className="!px-2" value="Pirtially Done">
                        Pirtially Done
                      </option>
                    </select>
                  </div>
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <div className="relative flex justify-start pl-2">
                    <span className="absolute inset-y-0 right-0 flex items-center px-2">
                      <button
                        onClick={() =>
                          postThisData(item.id, index, "3rd_party_office_pay")
                        }
                        type="button"
                        title="search"
                        className="p-1 focus:outline-none bg-green-500 rounded-md"
                      >
                        <MdAutorenew />
                      </button>
                    </span>
                    <select
                      autoComplete="off"
                      id="3rd_party_office_pay"
                      name="3rd_party_office_pay"
                      onChange={(e) =>
                        singleBoqFieldUpdate(
                          e.target.value,
                          e.target.name,
                          index
                        )
                      }
                      value={
                        item["3rd_party_office_pay"] === null
                          ? ""
                          : item["3rd_party_office_pay"]
                      }
                      className="w-[89%] !p-0 remove_arrow border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder:text-sm text-sm"
                    >
                      <option className="!px-2 !text-gray-600" defaultValue="">
                        Select 3rd party office pay
                      </option>
                      <option className="!px-2" value="Yes">
                        Yes
                      </option>
                      <option className="!px-2" value="No">
                        No
                      </option>
                      <option className="!px-2" value="Pirtially Done">
                        Pirtially Done
                      </option>
                    </select>
                  </div>
                </td>

                <td className="  border-[1px] border-gray-800 text-center">
                  {/* <p>{formateDate(item.created_at).split("UTC")[0]}</p> */}
                  <p class="text-sm font-semibold text-gray-800 bg-white shadow-md rounded-md">
                    <span class="text-blue-500">
                      {
                        formateDate(item.created_at)
                          .split("UTC")[0]
                          .split(",")[0]
                      }
                    </span>
                    <span class="text-red-500 text-sm">
                      {
                        formateDate(item.created_at)
                          .split("UTC")[0]
                          .split(",")[1]
                      }
                    </span>
                  </p>
                </td>

                <td className="    border-b-[1px] border-gray-800  text-center h-full">
                  <div className="flex  justify-center items-center gap-4">
                    <span
                      // onClick={() => handleOpenUpdateClient(item)}
                      className="px-4 py-1 font-semibold rounded-md bg-violet-400 text-gray-900"
                    >
                      <MdOutlineEditNote className="text-white text-xl" />
                    </span>
                    <span
                      onClick={() => handleDeleteBoq(item.id)}
                      className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-500 text-gray-900"
                    >
                      <AiOutlineDelete className="text-white text-base" />
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3  border-[1px]   text-center ">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;

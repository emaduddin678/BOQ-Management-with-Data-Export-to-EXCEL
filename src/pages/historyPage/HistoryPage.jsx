import React, { useEffect } from "react";
import { useBoqContext } from "./../../context/BoqContext";
import formateDate from "../../utility/getFormattedDate";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import removeUnderScore from "../../utility/removeUderScore";

const HistoryPage = () => {
  const { allBoq, boqDisable } = useBoqContext();
  useEffect(() => {
    boqDisable();
  }, []);
  return (
    <div className="w-full overflow-x-auto  mt-20">
      <table className="text-xs w-[2400px] !table-fixed">
        <thead className="">
          <tr className="text-left border-[1px] bg-[#23c087]">
            <th className="p-3  border-[1px] border-gray-800 text-center w-16">
              SL
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-32 bg-yellow-400 ">
              {removeUnderScore("AEXP_BOQ_Creator")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center bg-yellow-400 w-40">
              {removeUnderScore("Project_name")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28 bg-yellow-400">
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
            <th className="p-3  border-[1px] border-gray-800 text-center w-28 bg-yellow-400">
              GP User Name
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-32 bg-yellow-400">
              GP USER <br /> Contact Number
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-40 bg-yellow-400">
              GP USER Email
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("Requisition_amount")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("Received_amount")}
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("Work_status")}
            </th>

            <th className="p-3  border-[1px] border-gray-800 text-center w-36">
              {removeUnderScore("Acknowledgement")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("Receiving_status")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("OTC")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
              {removeUnderScore("Internal_bill_settlement")}
            </th>
            <th className="p-3  border-[1px] border-gray-800 text-center w-28">
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
          {allBoq.length > 0 ? (
            allBoq.map((item, index) => (
              <tr
                key={item.id}
                className="border-[1px] border-opacity-20 border-gray-700 "
              >
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
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
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
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>
                <td className="!p-0  border-[1px] border-gray-800 text-center">
                  <input type="text" className="w-full !p-0 border-none" />
                </td>

                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{item["3rd_party_office_pay"]}</p>
                </td>
                <td className="  border-[1px] border-gray-800 text-center">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>

                <td className="    border-b-[1px] border-gray-800  text-center h-full">
                  <div className="flex  justify-center items-center gap-4">
                    <span
                      // onClick={() => handleOpenUpdateClient(item)}
                      className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900"
                    >
                      <GrDocumentUpdate />
                    </span>
                    <span
                      // onClick={() => handleDelete(item.id)}
                      className="cursor-pointer px-3 py-1 font-semibold rounded-md bg-red-500 text-gray-900"
                    >
                      <MdDeleteForever />
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="p-3  border-[1px]   text-center bg-gray-700"
              >
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

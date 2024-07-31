import React from "react";
import { useBoqContext } from "./../../context/BoqContext";
import formateDate from "../../utility/getFormattedDate";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import removeUnderScore from "../../utility/removeUderScore";

const HistoryPage = () => {
  const { allBoq } = useBoqContext();

  return (
    <div className="w-full overflow-x-auto  mt-20">
      <table className="text-xs w-full">
        <thead className="">
          <tr className="text-left border-[1px] bg-[#23c087]">
            <th className="p-3  border-[1px] border-gray-800 w-20" >Id</th>
            <th className="p-3  border-[1px] border-gray-800 !w-32" width="200">
              Project Name
            </th>
            <th className="p-3  border-[1px] border-gray-800">Creator Name</th>
            <th className="p-3  border-[1px] border-gray-800">BOQ Id</th>
            <th className="p-3  border-[1px] border-gray-800">GP User Contact Number</th>
            {/* <th className="p-3  border-[1px] border-gray-800">GP User Email</th>
            <th className="p-3  border-[1px] border-gray-800">GP User Name</th>

            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("3rd_party_office_pay")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("Acknowledgement")}</th>
            <th className="p-3  border-[1px] border-gray-800">
              {removeUnderScore("Internal_bill_settlement")}
            </th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("OTC")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("PO_delivary_date")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("PO_number")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("PO_receiving_date")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("PO_value")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("Received_amount")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("Receiving_status")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("Requisition_amount")}</th>
            <th className="p-3  border-[1px] border-gray-800">{removeUnderScore("Work_status")}</th>

            <th className="p-3  border-[1px] border-gray-800">Created At</th>
            <th className="p-3  border-[1px] border-gray-800 text-center">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {allBoq.length > 0 ? (
            allBoq.map((item) => (
              <tr
                key={item.id}
                className="border-[1px] border-opacity-20 border-gray-700 "
              >
                {/* {console.log(item)} */}
                <td className="p-3  border-[1px] border-gray-800 w-20">
                  <p>{item.id}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.Project_name}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.AEXP_BOQ_Creator}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.BOQ_ID}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.GP_user_contact_number}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.GP_user_mail_id}</p>
                </td>
                {/* <td className="p-3  border-[1px] border-gray-800">
                  <p>{item.GP_user_name}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{item["3rd_party_office_pay"]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  border-[1px] border-gray-800">
                  <p>{formateDate(item.created_at).split("UTC")[0]}</p>
                </td>
                <td className="p-3  flex justify-center gap-3  border-[1px] border-gray-800">
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
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-3  border-[1px] border-gray-800 text-center bg-gray-700">
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

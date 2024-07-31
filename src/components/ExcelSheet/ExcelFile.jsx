import isEqual from "lodash.isequal";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";

const Test = ({ data }) => {
  const tableRef = useRef(null);

  const [sumOfTotal, setSumOfTotal] = useState(0);
  const [sumOfAgencyCommission, setSumOfAgencyCommission] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);
  const [agencyCommisionRow, setAgencyCommisionRow] = useState([]);
  // let agencyCommisionRow;
  // console.log(data)

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: `${"he"}`,
    sheet: "BOQSheet",
  });

  
  function findAllElements(arr) {
    const elementGroups = {};
    const result = [];

    // Group elements by ASF value
    arr.forEach((item) => {
      if (elementGroups[item.ASF]) {
        elementGroups[item.ASF].push(item);
      } else {
        elementGroups[item.ASF] = [item];
      }
    });

    // Push all grouped elements into the result array
    for (let key in elementGroups) {
      result.push(elementGroups[key]);
    }

    // console.log(result);
    setAgencyCommisionRow(result);
  }
  useEffect(() => {
    setSumOfTotal(0);
    setSumOfAgencyCommission(0);
    data.forEach((dt) => {
      // console.log(dt.totalAmount);
      setSumOfTotal((prev) => prev + Number(dt.totalAmount));
      setSumOfAgencyCommission((prev) => prev + Number(dt.ASF_amount));
    });

  }, [data]);
  
  const prevDataRef = useRef();

  const memoizedData = useMemo(() => data, [data]);

  useEffect(() => {
    if (!isEqual(prevDataRef.current, memoizedData)) {
      findAllElements(memoizedData);
      prevDataRef.current = memoizedData; // Update previous data
    }
  }, [memoizedData]);

  const removeZero = (v) => {
    let num = v;
    // console.log(num)
    num = num.toString();

    // Remove leading zero if present
    if (num.charAt(0) === "0") {
      num = num.slice(1);
    }
    // console.log(num)
    return num;
  };

  // console.log("🚀 ~ agencycommisio:", agencyCommisionRow);

  return (
    <div className="flex justify-center flex-col items-center gap-4 mt-10">
      <button
        type="button"
        onClick={onDownload}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        {" "}
        Export excel{" "}
      </button>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapsea",
                backgroundColor: "#a6a6a6",
              }}
              colSpan={9}
            >
              {" "}
              BOQ for Leaders As Changemakers 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              style={{
                width: "40px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              SL
            </th>
            <th
              style={{
                width: "100px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Item Code
            </th>
            <th
              style={{
                width: "300px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Items
            </th>
            <th
              style={{
                width: "90px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              QTY
            </th>
            <th
              style={{
                width: "75px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Unit Rate
            </th>
            <th
              style={{
                width: "100px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Amount
            </th>
            <th
              style={{
                width: "50px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              AC%
            </th>
            <th
              style={{
                width: "80px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              AC
            </th>
            <th
              style={{
                width: "140px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Remarks
            </th>
          </tr>

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.code}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.item}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.unit_price_with_tax}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.quantity * item.unit_price_with_tax}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.ASF}
                </td>
                <th
                  style={{
                    textAlign: "center",
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.ASF_amount}
                </th>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.remark}
                </td>
              </tr>
            );
          })}
          {/* calculation start here  */}
          <tr>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
              colSpan={5}
            >
              Total
            </th>

            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {/* {console.log(sumOfTotal)} */}
              {removeZero(sumOfTotal)}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
          </tr>

          {agencyCommisionRow &&
            agencyCommisionRow.map((row, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  ></td>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  >
                    40016081
                  </th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  >
                    Agency Commission{" "}
                  </th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  >
                    {/* {console.log(row)} */}
                    {removeZero(
                      row.reduce(
                        (accumulator, currentValue) =>
                          accumulator + Number(currentValue.totalAmount),
                        0
                      )
                    )}
                  </th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  >
                    {/* {console.log(row[0].ASF)} */}
                    {row[0].ASF}
                  </th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  >
                    {/* {console.log(row[0].ASF.split("%")[0] / 100)} */}
                    {(
                      row.reduce(
                        (accumulator, currentValue) =>
                          accumulator + Number(currentValue.totalAmount),
                        0
                      ) *
                      (row[0].ASF.split("%")[0] / 100)
                    ).toFixed(2)}
                  </th>
                  {/* {console.log(
                    (
                      (row.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.totalAmount,
                        0
                      ) *
                        row[0].ASF.split("%")[0]) /
                      100
                    ).toFixed(2)
                  )}
                  {console.log(row[0].ASF.split("%")[0])}
                  {console.log(
                    row.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue.totalAmount,
                      0
                    )
                  )} */}
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  ></th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  ></th>
                  <th
                    style={{
                      border: "1pt solid black",
                      borderCollapse: "collapsea",
                    }}
                  ></th>
                </tr>
              );
            })}

          <tr>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
              colSpan={5}
            >
              Grand Total
            </th>

            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {Number(sumOfAgencyCommission) + Number(sumOfTotal)}
              {/* {sumOfAgencyCommission + sumOfTotal} */}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;

import React from "react";

const tablecodestored = () => {
  return (
    <div>
      {" "}
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
                width: "75px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Item Code
            </th>
            <th
              style={{
                width: "225px",
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
                width: "100px",
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
          {/* <tr>
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
                width: "75px",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              Item Code
            </th>
            <th
              style={{
                width: "225px",
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
                width: "100px",
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
          <tr>
            <td
              style={{
                textAlign: "center",
                border: "1pt solid black",
                borderCollapse: "collapsea",
              }}
            >
              1
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016069
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              VENUE / ACCOMMODATION RENT/ PERMISSION COST _AT ACTUAL BASIS
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.64652381
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              84000.00
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              558,308.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              27,915.40{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Hall rent, Accommodation,Venue,Logistics &amp; Others
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              2
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40129526
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Premium Food meal
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              680
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              1000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              680,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              34,000.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Food
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              3
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014791
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              CUTOUT_8 MM_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              150
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              180
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              27,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              1,755.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Hand props
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014811
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              BACKDROP FRAME WITH PVC PRINT_WOODEN FRAME WITH BOARD_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              446
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              85
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              37,910.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              2,464.15{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016076
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              NON LISTED ITEMS_OFFICE STATIONARY ITEMS (RANDOM GIFT)
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              1
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              15000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              15,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5.00%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              750.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Stationart items
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014930
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              LIGHTING FOR VENUE/STAGE IN SMALL SCALE_ANYWHERE _EVENT_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              2
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              18000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              36,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              2,340.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              All light 2 days
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              7
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016075
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              _LED SCREEN_12X8 _RENT/ EVENT_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              2
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              80,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              5,200.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Two days rent
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              8
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40015000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              LED TV_56INCH_RENT/DAY_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              16,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              1,040.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Per day 2 LED TV two days
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              9
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014780
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              CARPET
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              192
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              33
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              6,336.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              411.84{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Carpet for stage
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              11
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014864
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              SOUND SYSTEM FOR EVENT
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              12000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              48,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              3,120.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Per day Two pair Sound TV two days
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              12
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016073
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              NON LISTED ITEMS_VARIOUS PROMOTIONAL / GIFT ITEM TOILETRIES, FMCG,
              OFFICE STATIONERIES, FOOD PRODUCTS AND OTHERS
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              147
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              150
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              22,050.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              1,433.25{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Certificate &amp; Certificate Folder
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              14
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014797
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              STANDEE_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              192
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              65
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              12,480.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              811.20{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              15
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014940
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              _PORTABLE PODIUM_EACH_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              1
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4200
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              4,200.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              273.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              16
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014942
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              STAGE MAKING COST FOR INDOOR EVENT_SFT_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              248
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              89
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              22,072.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              1,434.68{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              17
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014749
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              USHAR (MALE &amp; FEMALE)_DHAKA_EVENT BASED
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              9
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              1600
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              14,400.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              936.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              18
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014988
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              MICROBUS_RENT/DAY_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              3
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              3300
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              9,900.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              643.50{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              19
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014989
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              PICKUP _RENT/DAY_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              3700
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              14,800.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              962.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014742
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              DRIVER_DHAKA_DAILY
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              400
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              2,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              130.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40015099
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              DESIGN / CREATIVE SUOPPRT _ONE GO FEE _DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              1
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              5,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              325.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              20
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014995
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              TRANSPORT FUEL_PER KM_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              400
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              25
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              10,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              650.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              21
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014820
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              X BANNER
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              550
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              3,300.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              214.50{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              22
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014852
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              CREST -3_11 TO 50_DHAKA
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              2
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              4800
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              9,600.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              624.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              24
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40014748
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              PHOTOGRAPHER_DHAKA_ LARGE CORPORATE EVENT
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              2
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              5000
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              10,000.00{" "}
            </td>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              6.50%
            </td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              650.00{" "}
            </th>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
          </tr> */}

          {data.map((item, index) => {
            return (
              <tr key={item.item_code}>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.item_code}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.item_name}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.quantity}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.price}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.totalAmount}
                </td>
                <td
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.acP}%
                </td>
                <th
                  style={{
                    border: "1pt solid black",
                    borderCollapse: "collapsea",
                  }}
                >
                  {item.ac}
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
              {" "}
              1,644,356.00{" "}
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
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016081
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Agency Commission{" "}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              1,253,308.00{" "}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              0.05{" "}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              62,665.40{" "}
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
          <tr>
            <td
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            ></td>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              40016081
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              Agency Commission{" "}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              391,048.00{" "}
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              0.065
            </th>
            <th
              style={{ border: "1pt solid black", borderCollapse: "collapsea" }}
            >
              {" "}
              25,418.12{" "}
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
              {" "}
              1,732,439.52{" "}
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

export default tablecodestored;

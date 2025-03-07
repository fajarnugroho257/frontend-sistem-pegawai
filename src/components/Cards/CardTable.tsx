import React from "react";

// components
export default function CardTable({ color="" }) {
  return (
    <>
      <div className="bg-gray-100 shadow-lg rounded-md py-3 px-2">
        <div>
          <div className="">Header</div>
          <div>
            <table className="border border-gray-400 w-full">
              <th>
                <td width={50}>No</td>
                <td width={50}>Nama</td>
              </th>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
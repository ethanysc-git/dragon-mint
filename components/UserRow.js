import React from "react";

export const UserRow = ({
  profile,
  index,
  setSelectedProfile,
  isRowSelected,
}) => {
  return (
    // <div
    //   className={`hover:bg-blue-200 hover:cursor-pointer ${
    //     isRowSelected ? "bg-blue-200" : ""
    //   }`}
    //   onClick={() => setSelectedProfile(profile)}
    // >
    //   <div
    //     className={`px-4 py-2 border-b border-slate-500 bg-inherit ${
    //       index === 0 ? "border-t" : ""
    //     } ${isRowSelected ? "border-l-8 border-l-blue-700 opacity-90" : ""}`}
    //   >
    <div>
      <div>
        <h4 className="text-gray-900">
          {profile.name}
          <strong className="ml-1">{profile.symbol}</strong>
        </h4>
        <p className="text-gray-600">{`Token ID : ${profile.token_id}`}</p>
        <code
          className={"text-xs text-gray-600"}
        >{`Contract Type : ${profile.contract_type}`}</code>
      </div>
    </div>
  );
};

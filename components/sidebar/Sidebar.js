import React, { useEffect } from "react";
import { UserRow } from "../UserRow";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Sidebar = ({ selectedProfile, setSelectedProfile, profiles }) => {
  useEffect(() => {
    // if we've just added the first profile, select it
    if (profiles.length === 1) {
      setSelectedProfile(profiles[0]);
    }
  });

  return (
    <div className={"w-1/2 max-w-md max-h-[calc(100vh-4rem)] overflow-auto"}>
      <div className="bg-splashedwater text-black py-2 px-2 ">
        <div className="flex place-items-center">
          <h2 className="flex-1 text-3xl text-gray-900 font-bold">
            UnitNft Collection
          </h2>
          <span
            className="hover:cursor-pointer"
            onClick={() => alert("openCreateModal")}
          >
            <PlusCircleIcon className="h-10 w-10 text-blue-400 hover:text-blue-700 hover:drop-shadow-md" />
          </span>
        </div>
        <div className="mt-4">
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              onChange={() => alert("handleSearchFieldChange")}
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      {profiles.map((profile, idx) => {
        return (
          <UserRow
            profile={profile}
            index={idx}
            key={idx}
            setSelectedProfile={setSelectedProfile}
            isRowSelected={profile.token_hash === selectedProfile?.token_hash}
          />
        );
      })}
    </div>
  );
};

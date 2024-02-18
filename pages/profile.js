import { useState, useEffect } from "react";
import { ContentPanel } from "../components/content-panel/ContentPanel";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function Profile() {
  const [selectedProfile, setSelectedProfile] = useState(undefined);
  const [userProfiles, setUserProfiles] = useState([]);

  const data = [
    {
      firstName: "UnitNft (UNFT#0)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#0)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D8",
    },
    {
      firstName: "UnitNft (UNFT#1)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#1)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D801",
    },
    {
      firstName: "UnitNft (UNFT#2)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#2)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D802",
    },
    {
      firstName: "UnitNft (UNFT#3)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#3)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D803",
    },
    {
      firstName: "UnitNft (UNFT#4)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#4)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D804",
    },
    {
      firstName: "UnitNft (UNFT#5)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#5)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D805",
    },
    {
      firstName: "UnitNft (UNFT#6)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#6)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D806",
    },
    {
      firstName: "UnitNft (UNFT#7)",
      lastName: "UNFT",
      email: "UnitNft (UNFT#7)",
      pid: "0x2Bb634109eee5dc71602066f874DA5ABC27be9D807",
    },
  ];

  useEffect(() => {
    if (userProfiles.length === 0) {
      setUserProfiles(data);
      setSelectedProfile(data[0]);
    }
  });

  return (
    <>
      <main className="w-full min-h-screen m-auto bg-heroImage bg-cover flex flex-col justify-center">
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar
            className="float-left"
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            profiles={userProfiles}
          />
          <ContentPanel
            firstName="firstName"
            lastName="lastName"
            email="email"
            pid="pid"
          />
        </div>
      </main>
    </>
  );
}

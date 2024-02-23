import { useState, useEffect, useRef } from "react";
import { ContentPanel } from "../components/content-panel/ContentPanel";
import { Sidebar } from "../components/sidebar/Sidebar";

export default function Profile() {
  const [selectedProfile, setSelectedProfile] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);

  let data = {
    data: {
      itemActives: [],
    },
  };

  const originProfiles = useRef();
  originProfiles.current = data;

  useEffect(() => {
    console.log("execute function in useEffect");
    const fetchData = async () => {
      const formData = new FormData();
      const res = await fetch("/api/moralis/useEvmWalletNFTs", {
        method: "POST",
        body: formData,
      });
      data = await res.json();
      data = data.result;
      data = data.filter(
        (d) => d.token_address == "0x2bb634109eee5dc71602066f874da5abc27be9d8"
      );

      setUserProfiles(data);
      setSelectedProfile(data[0]);
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="w-full min-h-screen m-auto bg-[url('~/public/splashedwater.png'),_url('~/public/bg.png')] bg-cover flex flex-col justify-center">
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar
            className="float-left"
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            profiles={userProfiles}
          />
          <ContentPanel
            firstName="Just_"
            lastName="Demo Data"
            listedNfts={userProfiles}
          />
        </div>
      </main>
    </>
  );
}

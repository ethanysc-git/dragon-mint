import { useState, useEffect } from "react";
import Image from "next/image";

export default function NFTBox({ cid }) {
  const [imageURI, setImageURI] = useState("");

  async function updateUI() {
    console.log(`The TokenURI is ipfs://${cid}`);
    if (cid) {
      const requestURL = "https://ipfs.io/ipfs/" + cid;
      const tokenURIResponse = await (await fetch(requestURL)).json();
      const imageURI = tokenURIResponse.image;
      const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
      setImageURI(imageURIURL);
    }
  }

  useEffect(() => {
    updateUI();
  });

  return (
    <div>
      {imageURI ? (
        <div className="flex-none gap-4 items-center">
          <Image
            className="float-left"
            loader={() => imageURI}
            unoptimized={true}
            src={imageURI}
            height={60}
            width={60}
            alt="Upload File"
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

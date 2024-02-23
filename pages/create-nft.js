import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState, useRef } from "react";
import NFTBox from "@/components/NFTBox";
import CreateNFTForm from "@/components/CreateNFTForm";

export default function CreateNFT() {
  const [file, setFile] = useState("");
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const [collectionNameInput, setCollectionNameInput] = useState("");
  const [collectionSymbolInput, setCollectionSymbolInput] = useState("");
  const [collectionDescriptionInput, setCollectionDescriptionInput] =
    useState("");
  const [collectionTotalSupplyInput, setCollectionTotalSupplyInput] =
    useState("");
  const [contractAddress, serContractAddress] = useState("");
  const inputFile = useRef(null);

  const uploadFile = async (fileToUpload) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", fileToUpload, { filename: fileToUpload.name });
      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });
      const ipfsHash = await res.text();
      setCid(ipfsHash);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  const loadRecent = async () => {
    try {
      const res = await fetch("/api/files");
      const json = await res.json();
      setCid(json.ipfs_pin_hash);
    } catch (e) {
      console.log(e);
      alert("trouble loading files");
    }
  };

  function validateName(value) {
    let error;
    if (value) {
      error = `${value}`;
    }

    return error;
  }

  return (
    <>
      <main className="w-full min-h-screen m-auto bg-[url('~/public/splashedwater.png'),_url('~/public/bg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-telegraf font-bold text-3xl">
          Generate your own NFT Collection
        </h2>
        <div className="h-full w-full max-w-screen-xl min-h-full my-8 mx-auto flex justify-center items-center gap-1">
          <div className="text-center rounded-lg w-full flex flex-col justify-center items-center p-2 gap-4 h-full">
            <div></div>
            <div className="h-full  max-w-screen-xl  ">
              <Formik
                initialValues={{
                  collectionName: "",
                  collectionSymbol: "",
                  collectionDescription: "",
                  collectionTotalSupply: "",
                }}
                onSubmit={(values, actions) => {
                  // setTimeout(() => {
                  //   //   alert(JSON.stringify(values, null, 2));
                  //   //   actions.setSubmitting(false);
                  //   // alert(
                  //   //   `
                  //   // collectionNameInput : ${collectionNameInput}
                  //   // collectionSymbolInput : ${collectionSymbolInput}
                  //   // collectionDescriptionInput : ${collectionDescriptionInput}
                  //   // collectionTotalSupplyInput : ${collectionTotalSupplyInput}
                  //   // Upload File Cid :
                  //   // ${cid}
                  //   // `
                  //   // );
                  // }, 1000);
                }}
              >
                {(props) => (
                  <Form>
                    <Field
                      name="collectionName"
                      validate={(value) => {
                        setCollectionNameInput(value);
                      }}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.collectionName &&
                            form.touched.collectionName
                          }
                        >
                          <FormLabel>Collection Name</FormLabel>
                          <Input
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            {...field}
                          />
                          <FormErrorMessage>
                            {form.errors.collectionName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field
                      name="collectionSymbol"
                      validate={(value) => {
                        setCollectionSymbolInput(value);
                      }}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.collectionSymbol &&
                            form.touched.collectionSymbol
                          }
                        >
                          <FormLabel>Collection Symbol</FormLabel>
                          <Input
                            {...field}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                          />
                          <FormErrorMessage>
                            {form.errors.collectionSymbol}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field
                      name="collectionDescription"
                      validate={(value) => {
                        setCollectionDescriptionInput(value);
                      }}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.collectionDescription &&
                            form.touched.collectionDescription
                          }
                        >
                          <FormLabel>Collection Description</FormLabel>
                          <Input
                            {...field}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                          />
                          <FormErrorMessage>
                            {form.errors.collectionDescription}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field
                      name="collectionTotalSupply"
                      validate={(value) => {
                        setCollectionTotalSupplyInput(value);
                      }}
                    >
                      {({ field, form }) => (
                        <FormControl
                          isRequired
                          isInvalid={
                            form.errors.collectionTotalSupply &&
                            form.touched.collectionTotalSupply
                          }
                        >
                          <FormLabel>Collection Size(Total Supply)</FormLabel>
                          <Input
                            {...field}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            type="number"
                          />

                          <FormErrorMessage>
                            {form.errors.collectionTotalSupply}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    {collectionNameInput &&
                      collectionSymbolInput &&
                      collectionDescriptionInput &&
                      collectionTotalSupplyInput && (
                        <Field name="collectionArtwork">
                          {({ field, form }) => (
                            <FormControl
                              isInvalid={
                                form.errors.collectionArtwork &&
                                form.touched.collectionArtwork
                              }
                            >
                              <FormLabel>
                                Upload your Collection Artwork(optional)
                              </FormLabel>
                              <Input
                                type="file"
                                id="file"
                                ref={inputFile}
                                onChange={handleChange}
                                style={{ display: "none" }}
                              />
                              <div>
                                {cid && <NFTBox cid={cid} />}
                                <button
                                  disabled={uploading}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    inputFile.current.click();
                                  }}
                                  className="w-[120px] bg-secondary text-black rounded-2xl py-2 px-3 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
                                >
                                  {uploading ? "Uploading..." : "Upload"}
                                </button>
                              </div>

                              <FormErrorMessage>
                                {form.errors.collectionArtwork}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                      )}
                    {/* 
                    {collectionNameInput &&
                      collectionSymbolInput &&
                      collectionDescriptionInput &&
                      collectionTotalSupplyInput &&
                      cid && (
                        <Button
                          className="w-[150px] bg-heroImage text-black rounded-3xl py-2 px-4 hover:bg-accent hover: text-black transition-all duration-300 ease-in-out"
                          colorScheme="teal"
                          type="submit"
                        >
                          Submit
                        </Button>
                      )} */}
                    {collectionNameInput &&
                      collectionSymbolInput &&
                      collectionDescriptionInput &&
                      collectionTotalSupplyInput && (
                        <CreateNFTForm
                          contractAddress="0x34Eb633C2f2346979eB89385A2b5fbBa8C9740f4"
                          collectionNameInput={collectionNameInput}
                          collectionSymbolInput={collectionSymbolInput}
                          collectionDescriptionInput={
                            collectionDescriptionInput
                          }
                          collectionTotalSupplyInput={
                            collectionTotalSupplyInput
                          }
                        />
                      )}
                  </Form>
                )}
              </Formik>

              {/* {contractAddress && (
                <MintNFTForm cid={cid} contractAddress={contractAddress} />
              )} */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

const page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const handleGenerate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast(result.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex flex-col gap-2 items-center text-white">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
        <h1 className="text-2xl">Generate shortened Urls</h1>
        <input
          className="bg-[gray] pl-5 pr-20 rounded-full py-1 text-white"
          type="text"
          placeholder="Enter Url"
          name=""
          value={url}
          onChange={(e) => {
            seturl(e.target.value.trim());
          }}
        />
        <input
          className="bg-[gray] pl-5 pr-20 rounded-full py-1 text-white"
          type="text"
          placeholder="Enter prefferred short Url text"
          name=""
          value={shorturl}
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 button rounded-xl"
          onClick={() => handleGenerate()}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md hover:font-bold text-white">
            Generate
          </span>
        </button>
      </div>
      <div>
        {generated && (
          <div className="w-fit mx-auto bg-[gray] rounded-xl px-4 py-3 text-white flex flex-col gap-2">
            <span> Your Link</span>
            <Link className="hover:underline" target="_blank" href={generated}>
              {generated}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;

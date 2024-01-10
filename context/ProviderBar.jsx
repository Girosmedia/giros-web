"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProviderBar = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#db2777"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProviderBar;

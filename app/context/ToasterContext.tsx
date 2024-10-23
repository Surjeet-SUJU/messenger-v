'use client';

import { Toaster } from "react-hot-toast";

const ToasterContext = () => {
  return (
    <Toaster
      reverseOrder={false}
      gutter={8}
    />
  );
};

export default ToasterContext;
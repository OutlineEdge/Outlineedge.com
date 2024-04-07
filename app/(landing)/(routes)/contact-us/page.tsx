import ContactSection from "@/components/Global-Components/ContactUspage/ContactSection";
import ContactUsHeader from "@/components/Global-Components/ContactUspage/ContactUsHeader";
import GoogleMap from "@/components/Global-Components/ContactUspage/GoogleMap";

import React from "react";

const ContactUs = () => {
  return (
    <div className="overflow-hidden ">
      <div className="fixed w-full h-full pattern-dots pattern-gray-400 pattern-bg-white pattern-size-4 pattern-opacity-20 -z-5"></div>
      <ContactUsHeader />
      <ContactSection />
      <GoogleMap />
    </div>
  );
};

export default ContactUs;

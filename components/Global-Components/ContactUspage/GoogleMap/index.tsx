'use client'

import { useState, useEffect } from "react";

const GoogleMap = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative w-full lg:h-[30rem] h-72">
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=26%20Broadway%20934%20934,%20New%20York,%20NY%2010004,%20USA+(Xfosoft)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </section>
  );
};

export default GoogleMap;

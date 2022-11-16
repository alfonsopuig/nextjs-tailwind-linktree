import Image from "next/image";

import SEOHead from "../components/SEOHead";
import Heading from "../components/Heading";
import Button from "../components/Button";

import { info, buttons } from "../src/data";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-2xl grid-flow-row place-items-center px-3 py-10">

      <SEOHead
          title={info.title}
          description={info.tagline}
          canonicalUrl={info.siteUrl}
          ogTwitterImage={info.siteLogoSquare}
          ogType={"website"}
      />

      <Image
          className="mx-auto rounded-full border-4 border-white"
          src={info.image}
          alt={`${info.name} - ${info.tagline}`}
          width="96"
          height="96"
      />

      <Heading 
          title={info.title}
          tagline={info.tagline}
      />
      
      {buttons.map((button) => {
          return (
            <>
              <Button               
                  name={button.name}
                  url={button.url} 
              />          
            </>
          );
      })}

    </div>
  );
}

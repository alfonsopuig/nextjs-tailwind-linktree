import Head from "next/head";
import { info } from "../src/data";

const SEOHead = ({
  title,
  tagline,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  children,
}) => {
  return (
    <Head>
      + <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={info.tagline} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={info.twitterHandle} />
      <meta name="twitter:title" content={info.title} />
      <meta name="twitter:description" content={info.tagline} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={info.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={info.title} />
      <meta property="og:description" content={info.tagline} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
};

export default SEOHead;

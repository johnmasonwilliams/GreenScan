import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  cardImage?: string;
};

const Meta = ({ title, description, cardImage }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://greenscan.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={cardImage} />
      </Head>
    </>
  );
};

export default Meta;

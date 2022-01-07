import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageCT } from "../queries/queries";
import Table from "../components/table";

export default function Home() {
  const {
    status,
    data: records,
    error,
    isFetching,
    isSuccess,
  } = useQuery("record", async () => await getHomepageCT());

  console.log(records);
  return (
    <div className="flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Table records={records} isSuccess={isSuccess} />
    </div>
  );
}

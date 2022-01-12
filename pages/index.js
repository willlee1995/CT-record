import Head from "next/head";
import { useQuery } from "react-query";
import { getHomepageCT, getHomepageProtocol } from "../queries/queries";
import Table from "../components/Table";
import Dropdown from "../components/Dropdown";
import { useState } from "react";

export default function Home() {
  const [selectedProtocols, setSelectedProtocols] = useState([]);
  const { data: records, isSuccess } = useQuery(
    "record",
    async () => await getHomepageCT()
  );
  const { data: protocols, isSuccess: protocolSuccess, error } = useQuery(
    "protocols",
    async () => await getHomepageProtocol()
  );
  const getSelectedProtocols = (protocol) => {
    setSelectedProtocols(protocol);
    console.log(selectedProtocols);
  };
  return (
    <div className="flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CT record</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Dropdown
        protocols={protocols}
        isSuccess={protocolSuccess}
        getSelectedProtocols={getSelectedProtocols}
        selectedProtocols={selectedProtocols}
      />
      <Table records={records} isSuccess={isSuccess} />
    </div>
  );
}

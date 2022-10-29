import { useState } from "react";
import useSWR from "swr";

import useToast from "@/lib/hooks/use-toast";

import { Button } from "@/components/buttons";

import CreditCard from "./CreditCard";
import CreditCardLoader from "./CreditCardLoader";
import CreditCardPlaceholder from "./CreditCardPlaceholder";

export type CreditCardT = {
  id: number;
  uid: string;
  credit_card_number: string;
  credit_card_expiry_date: string;
  credit_card_type: string;
};

const ApiDataFetchingExample = () => {
  const { addToast } = useToast();

  const fetcher = (apiUrl: string) =>
    fetch(apiUrl)
      .then((response) => response.json())
      .catch(() => addToast("error", "Something went wrong. Try again."));

  const [fetchData, setFetchData] = useState(false);
  const { data, error } = useSWR<CreditCardT>(
    fetchData ? "https://random-data-api.com/api/v2/credit_cards" : null,
    fetcher
  );

  const isLoading = !data && !error;

  return (
    <div className="px-6">
      <h2 className="text-7xl">API Data Fetching example</h2>
      <div className="flex gap-5 py-4 font-medium">
        <p>API: https://random-data-api.com/api/v2/credit_cards</p>
      </div>
      <div className="flex gap-5 py-4 font-medium">
        <Button
          type="button"
          isLoading={fetchData && isLoading}
          disabled={fetchData && !!data}
          onClick={() => setFetchData(true)}
        >
          {fetchData && data ? "Success!" : "Fetch Data"}
        </Button>
      </div>

      <div className="from-primary-800 to-primary-300 flex h-96 w-full flex-col items-center justify-center rounded bg-gradient-to-tr">
        {!fetchData && <CreditCardPlaceholder />}
        {fetchData && isLoading && <CreditCardLoader />}
        {fetchData && data && (
          <CreditCard key={data.id} creditCardData={data} />
        )}
      </div>
    </div>
  );
};

export default ApiDataFetchingExample;

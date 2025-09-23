import { AgentsView, AgentsViewLoading } from "@/module/agents/ui/views/agents-views"; 
// Update the import path to the correct location of TRPCReactProvider
import { TRPCReactProvider } from "../../trpc/client";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

  return (
      <Suspense fallback={<AgentsViewLoading />}>
        <TRPCReactProvider>
        <AgentsView/>
        </TRPCReactProvider>
      </Suspense>
  );
};

export default Page;

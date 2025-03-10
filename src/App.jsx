import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { getData } from "./api/api";

const queryClient = new QueryClient();

const App = () => {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["matches"],
    queryFn: getData,
    retry: 0,
    onError: (error) => console.error(error),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header
          isLoading={isFetching}
          error={error}
          handleClickRefresh={refetch}
        />
        <Content list={data?.data?.matches || []} />
      </div>
    </QueryClientProvider>
  );
};

export default App;


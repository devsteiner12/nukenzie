import { TransactionsProvider } from "./contexts/TransactionsContext";
import { RoutesMain } from "./routes/routes";
import { StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <StyledGlobal />

      <TransactionsProvider>
        <RoutesMain />
      </TransactionsProvider>
    </>
  );
};

export default App;

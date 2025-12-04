import { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketGenerator from "./components/TicketGenerator";
import Header from "./components/Header";

const App = () => {
  const [ticket, setTicket] = useState({
    name: "",
    username: "",
    avatar: "",
    email: "",
  });

  return (
    <main className="relative w-screen h-dvh overflow-x-hidden bg-Neutral-900">
      <Header />
      <TicketForm ticket={ticket} setTicket={setTicket} />
      <TicketGenerator ticket={ticket} />
    </main>
  );
};

export default App;

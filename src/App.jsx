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
  const [isGenerate, setIsGenerate] = useState(false);

  return (
    <main className="min-h-screen relative overflow-y-scroll hide-scrollbar">
      <img
        className="w-full h-screen object-cover absolute inset-0 z-0"
        src="background-desktop.png"
        alt=""
      />
      <img
        className="w-full top-0 absolute z-10"
        src="pattern-lines.svg"
        alt=""
      />
      <img
        className="w-full max-w-xl bottom-0 absolute z-10"
        src="pattern-squiggly-line-bottom-desktop.svg"
        alt=""
      />
      <img
        className="w-full max-w-sm top-10 right-0 absolute z-10"
        src="pattern-squiggly-line-top.svg"
        alt=""
      />

      <div className="px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-30">
        <Header
          isGenerate={isGenerate}
          name={ticket.name}
          email={ticket.email}
        />

        {isGenerate ? (
          <TicketGenerator {...ticket} />
        ) : (
          <TicketForm
            ticket={ticket}
            setTicket={setTicket}
            setIsGenerate={setIsGenerate}
          />
        )}
      </div>
    </main>
  );
};

export default App;

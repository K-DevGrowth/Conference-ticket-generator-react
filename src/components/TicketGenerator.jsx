const TicketGenerator = ({ name, username, avatar, randomID }) => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="mx-auto relative w-full max-w-sm mt-10 text-Neutral-0">
      <img src="pattern-ticket.svg" alt="" />

      <div className="flex absolute inset-0 p-4 items-center justify-between">
        <div>
          <img src="logo-full.svg" alt="" />
          <p className="text-Neutral-500">
            {date.toLocaleDateString(undefined, options)} / Austin, TX
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <img
              className="w-14 h-14 rounded-xl"
              src={avatar.replace("C:\\fakepath\\", "")}
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl">{name}</span>
              <span className="flex space-x-2">
                <img src="icon-github.svg" alt="" />
                <span className="text-Neutral-300">{username}</span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-Neutral-500 text-2xl rotate-90 -mr-4">#{randomID}</p>
      </div>
    </div>
  );
};

export default TicketGenerator;

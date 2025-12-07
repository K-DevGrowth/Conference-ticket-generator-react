const TicketGenerator = ({ name, username, avatar, randomID }) => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="mx-auto relative w-full max-w-md mt-10 text-Neutral-0">
      <img src="pattern-ticket.svg" alt="" />

      <div className="absolute inset-0 p-4 sm:pl-6 w-full grid grid-cols-[4fr_auto_1fr]">
        <div className="grid grid-rows-[auto_1fr]">
          <img className="sm:w-full" src="logo-full.svg" alt="" />
          <p className="text-Neutral-500">
            {date.toLocaleDateString(undefined, options)} / Austin, TX
          </p>

          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 object-cover rounded-xl"
              src={avatar.name}
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl">{name}</span>
              <span className="flex space-x-1">
                <img src="icon-github.svg" alt="" />
                <span className="text-Neutral-300">{username}</span>
              </span>
            </div>
          </div>
        </div>

        <p className="text-Neutral-500 sm:text-2xl rotate-90 -mr-4">
          #{randomID}
        </p>
      </div>
    </div>
  );
};

export default TicketGenerator;

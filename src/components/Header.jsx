const Header = ({ isGenerate, name, email }) => {
  return (
    <header>
      <img className="mx-auto" src="logo-full.svg" alt="" />
      <h1 className="text-4xl mx-auto pt-6 pb-2 max-w-lg font-bold text-center text-Neutral-0">
        {isGenerate ? (
          <span>
            Congrats,{" "}
            <span className="bg-linear-to-r from-Orange-500 to-Neutral-300 bg-clip-text text-transparent">
              {name}
            </span>
            ! Your ticket is ready.
          </span>
        ) : (
          <span>Your Journey to Coding Conf 2025 Starts Here!</span>
        )}
      </h1>
      <div
        className={`text-Neutral-300 mx-auto text-center ${
          isGenerate && "max-w-[340px]"
        }`}
      >
        {isGenerate ? (
          <span>
            We've emailed your ticket to{" "}
            <span className="text-Orange-500">{email}</span> and will send
            updates in the run up to the event.
          </span>
        ) : (
          <span>
            Secure your spot at next year's biggest coding conference.
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;

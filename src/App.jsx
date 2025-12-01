const App = () => {
  const formData = [
    {
      id: 1,
      label: "Upload Avatar",
      type: "file",
      placeholder: "Drag and drop or click to upload",
      required: true,
    },
    {
      id: 2,
      label: "Full Name",
      type: "text",
      placeholder: "",
      required: true,
    },
    {
      id: 3,
      label: "Email Address",
      type: "email",
      placeholder: "example@email.com",
      required: true,
    },
    {
      id: 4,
      label: "GitHub Username",
      type: "text",
      placeholder: "@yourusername",
      required: true,
    },
  ];

  return (
    <main className="relative w-screen h-dvh overflow-x-hidden bg-Neutral-900">
      <div className="flex flex-col justify-center items-center">
        <img className="mt-6" src="logo-full.svg" alt="" />

        <h1 className="text-4xl pt-8 pb-2 max-w-lg font-semibold text-center text-Neutral-0">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="text-Neutral-300">
          Secure your spot at next year's biggest coding conference.
        </p>

        <form>
          {formData.map((field) => (
            <div key={field.id} className="py-2">
              <label
                className="text-Neutral-0 font-medium"
                htmlFor={field.label}
              >
                {field.label}
              </label>
              <input
                className="border border-Neutral-500 block w-full px-3 py-2 rounded-md text-Neutral-300"
                id={field.label}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
              <span></span>
            </div>
          ))}

          <button
            className="bg-Orange-500 cursor-pointer font-semibold w-full mt-2 px-3 py-2 rounded-md"
            type="submit"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;

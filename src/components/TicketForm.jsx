import { useRef, useState } from "react";

const TicketForm = ({ ticket, setTicket, setIsGenerate }) => {
  const [isUpload, setIsUpload] = useState(false);
  const uploadRef = useRef(null);

  const formData = [
    {
      id: 2,
      label: "Full Name",
      key: "name",
      type: "text",
      placeholder: "",
      required: true,
      value: ticket.name,
    },
    {
      id: 3,
      label: "Email Address",
      key: "email",
      type: "email",
      placeholder: "example@email.com",
      required: true,
      value: ticket.email,
    },
    {
      id: 4,
      label: "GitHub Username",
      key: "username",
      type: "text",
      placeholder: "@yourusername",
      required: true,
      value: ticket.username,
    },
  ];

  const handleUploadFile = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
    setIsUpload(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTicket({
      ...ticket,
      randomID: Math.random().toString().substr(2, 5),
    });
    setIsGenerate(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full mt-4">
      <div className="text-Neutral-300">
        <label className="text-Neutral-0 font-medium" htmlFor="file">
          Upload File
        </label>

        <div className="p-4 text-center border border-dashed border-Neutral-500 rounded-md text-Neutral-300">
          <button
            onClick={handleUploadFile}
            type="button"
            className="block mx-auto border rounded-md p-1 cursor-pointer"
          >
            {isUpload ? (
              <>
                <img
                  className="w-8 h-8"
                  src={
                    (ticket.avatar &&
                      ticket.avatar.replace("C:\\fakepath\\", "")) ||
                    "icon-upload.svg"
                  }
                  alt=""
                />
              </>
            ) : (
              <img className="w-8 h-8" src="icon-upload.svg" alt="" />
            )}
          </button>

          <input
            ref={uploadRef}
            type="file"
            id="file"
            required
            className="hidden"
            value={ticket.avatar || ""}
            onChange={(e) =>
              setTicket({
                ...ticket,
                avatar: e.target.value,
              })
            }
          />

          {isUpload ? (
            <div className="text-sm mt-2 flex items-center justify-center space-x-4 *:underline text-Neutral-300 *:bg-Neutral-700/40 *:rounded-md *:p-1">
              <button
                type="button"
                onClick={() =>
                  setTicket({
                    ...ticket,
                    avatar: null,
                  })
                }
              >
                Remove image
              </button>
              <button type="button" onClick={handleUploadFile}>
                Change image
              </button>
            </div>
          ) : (
            <span>Drag and drop or click to upload</span>
          )}
        </div>
        <div className="flex items-center">
          <img src="icon-info.svg" alt="" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </div>
      </div>
      {formData.map((field) => (
        <div key={field.id} className="py-2">
          <label className="text-Neutral-0 font-medium" htmlFor={field.label}>
            {field.label}
          </label>
          <input
            className="border border-Neutral-500 block w-full px-3 py-2 rounded-md text-Neutral-300"
            id={field.label}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={field.value}
            onChange={(e) =>
              setTicket({ ...ticket, [field.key]: e.target.value })
            }
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
  );
};

export default TicketForm;

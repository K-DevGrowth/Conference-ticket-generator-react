import FormInput from "./FormInput";
import useTicketForm from "./useTicketForm";

const TicketForm = ({ ticket, setTicket, setIsGenerate }) => {
  const {
    errors,
    previewUrl,
    uploadRef,
    isDragging,
    handleDragEvents,
    handleSubmit,
    handleBlur,
    handleChange,
    handleFileChange,
    removeImage,
  } = useTicketForm(ticket, setTicket, setIsGenerate);

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto w-full mt-4">
      {/* File Upload Section */}
      <div className="text-Neutral-300">
        <label className="text-Neutral-0 font-medium" htmlFor="file">
          Upload File
        </label>

        <div
          tabIndex={0}
          className={`p-4 text-center outline-none focus:ring-1 ring-offset-2 ring-offset-Neutral-900 ring-Neutral-300 hover:bg-Neutral-500/50 bg-Neutral-700/20 border border-dashed rounded-md text-Neutral-300 ${
            errors.avatar ? "border-Orange-500" : "border-Neutral-500"
          } ${isDragging ? "bg-Neutral-700" : "border-Neutral-500"}`}
          {...handleDragEvents}
        >
          <button
            type="button"
            tabIndex={-1}
            onClick={() => uploadRef.current?.click()}
            className="block mx-auto border rounded-md p-1 cursor-pointer"
          >
            <img
              className="w-8 h-8"
              src={previewUrl || "icon-upload.svg"}
              alt="Avatar preview"
            />
          </button>

          {/* Hidden File Input */}
          <input
            ref={uploadRef}
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="mt-2 test-sm text-Neutral-300">
            {previewUrl ? (
              <div className="space-x-4 *:underline">
                <button type="button" onClick={removeImage}>
                  Remove image
                </button>
                <button
                  type="button"
                  onClick={() => uploadRef.current?.click()}
                >
                  Change image
                </button>
              </div>
            ) : (
              "Drag and drop or click to upload"
            )}
          </div>
        </div>
        <div
          className={`flex items-center text-sm ${
            errors.avatar ? "text-Orange-500" : ""
          }`}
        >
          <img src="icon-info.svg" alt="" />
          <span>Upload your photo (JPG or PNG, max size: 500KB).</span>
        </div>
      </div>

      {/* Reusable Input Fields */}
      {[
        { id: "name", label: "Full Name", placeholder: "" },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          placeholder: "example@email.com",
        },
        {
          id: "username",
          label: "GitHub Username",
          placeholder: "@yourusername",
        },
      ].map((field) => (
        <FormInput
          key={field.id}
          label={field.label}
          id={field.id}
          name={field.id}
          type={field.type || "text"}
          placeholder={field.placeholder}
          value={ticket[field.id]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors[field.id]}
        />
      ))}

      <button
        className="bg-Orange-500 hover:bg-Orange-700 hover:border-b-2 border-Orange-500 cursor-pointer font-semibold w-full mt-2 px-3 py-2 rounded-md"
        type="submit"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketForm;

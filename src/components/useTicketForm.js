import { useEffect, useRef, useState } from "react";

const MAX_FILE_SIZE = 500 * 1024;

const useTicketForm = (ticket, setTicket, setIsGenerate) => {
  const [errors, setErrors] = useState({});
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const uploadRef = useRef(null);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const validate = (name, value) => {
    if (!value) return "This field is required.";
    if (name === "email" && !/\S+@\S+\.\S+/.test(value))
      return "Please enter a valid email address.";
    return "";
  };

  const processFile = (file) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        avatar: "File too large. Please upload a photo under 500KB.",
      }));
      return;
    }

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.avatar;
      return newErrors;
    });

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setTicket((prev) => ({ ...prev, avatar: file }));
  };

  const handleFileChange = (e) => processFile(e.target.files[0]);

  const handleDragEvents = {
    onDragOver: (e) => {
      e.preventDefault();
      setIsDragging(true);
    },
    onDragLeave: (e) => {
      e.preventDefault();
      setIsDragging(false);
    },
    onDrop: (e) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files?.[0]) processFile(e.dataTransfer.files[0]);
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const removeImage = () => {
    setPreviewUrl(null);
    setTicket((prev) => ({ ...prev, avatar: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    ["name", "email", "username"].forEach((key) => {
      const error = validate(key, ticket[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    if (!ticket.avatar) {
      alert("Please upload an avatar");
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    setTicket((prev) => ({
      ...prev,
      randomID: Math.random().toString().substr(2, 5),
    }));
    setIsGenerate(true);
  };
  return {
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
  };
};

export default useTicketForm;

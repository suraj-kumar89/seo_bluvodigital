import React, { useEffect, useState, useCallback } from "react";

// Fallback values for running the component outside of a specific environment
// Replace these with your actual HubSpot Portal and Form IDs if needed,
// or ensure they are provided by your environment setup.
const FALLBACK_PORTAL_ID = "244309693";
const FALLBACK_FORM_ID = "e87c08a4-06c2-491c-8e42-c11516e147b1"; // Example form ID

// --- Component Definitions ---

/**
 * Custom hook to read and extract standard UTM parameters from the URL.
 */
const useUtmTracker = () => {
  const [utmData, setUtmData] = useState({});

  useEffect(() => {
    // Access search parameters directly from the browser's URL
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];

    utmKeys.forEach((key) => {
      const value = params.get(key);
      if (value) {
        // Store the extracted UTM parameter
        utms[key] = value;
      }
    });
    setUtmData(utms);
  }, []);

  return utmData;
};

type FieldProps = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function Field({ name, label, type = "text", value, onChange }: FieldProps) {
  return (
    <label className="flex items-start gap-2 py-4 border-b border-white/50 focus-within:border-white transition-colors duration-200">
      <span className="sr-only">{label}</span>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={label}
          rows={3}
          required
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none resize-none text-base"
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={label}
          required
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none text-base"
        />
      )}
    </label>
  );
}

// Mocking the router dependency for a self-contained environment
const mockNavigate = (path: string) => {
  console.log(`Navigating to: ${path}`);
  // In a real environment, you would use navigate(path)
  // For this self-contained file, we simulate a redirect.
  // window.location.href = path;
};

// --- Main Component ---

type HeroFormProps = {
  onSubmit?: (payload: Record<string, string>) => void;
  className?: string;
  thankYouPath?: string;
};

const App = ({
  onSubmit,
  className,
  thankYouPath = "/thank-you",
}: HeroFormProps) => {
  // Use the mock navigation function
  const navigate = mockNavigate;

  const utmData = useUtmTracker();

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.currentTarget;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    // Get IDs, using fallbacks if environment variables are unavailable
    const portalId = FALLBACK_PORTAL_ID; // In a real app: import.meta.env.VITE_PORTAL_ID;
    const formId = FALLBACK_FORM_ID; // In a real app: import.meta.env.VITE_FORM_ID;

    if (!portalId || !formId) {
      console.error("Missing VITE_PORTAL_ID or VITE_FORM_ID");
      setError("Form configuration is missing. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    // Optional: notify parent (for analytics, etc.)
    onSubmit?.({
        ...formData,
        ...utmData // Include UTMs in the external payload notification
    });

    const standardFields = [
      { name: "firstname", value: formData.fullName },
      { name: "email", value: formData.workEmail },
      { name: "phone", value: formData.phone },
      { name: "website", value: formData.website },
      { name: "message", value: formData.message },
      { name: "hs_whatsapp_phone_number", value: formData.phone },
    ];
    const utmFields = Object.entries(utmData).map(([name, value]) => ({
        name: name,
        value: value,
    }));

    const body = {
      fields: [...standardFields, ...utmFields],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        // Successful submission
        setFormData({ fullName: "", workEmail: "", phone: "", website: "", message: "" });
        navigate(thankYouPath);
      } else {
        const errorText = await response.text();
        console.error("HubSpot error:", errorText);
        setError("Error submitting form. Please check the console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Network error submitting form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Optional: external HubSpot script loader (kept with the form component)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/244309693.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`${className}`}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .form-container input:focus, .form-container textarea:focus {
            box-shadow: none;
            outline: none;
        }
        .form-container input:focus::placeholder, .form-container textarea:focus::placeholder {
            color: transparent;
        }
        .form-container input, .form-container textarea {
            transition: all 0.2s ease-in-out;
        }
        `}
      </style>
<div className="relative w-full flex flex-col items-center mt-10">
  <h3 className="text-white text-center font-semibold text-3xl tracking-tight">
    Want a Free SEO Audit?
  </h3>
  <div
    className="absolute"
    style={{
      top: "92%",      
      right: "2%",     
      transform: "rotate(-8deg)", // tilt like screenshot
    }}
  >
    <div className="flex items-center">

      <svg
        width="50"
        height="30"
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(6deg)" }}
      >
        <path
          d="M5 20C18 34 55 34 75 12"
          stroke="#4D9EFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M75 12L69 10"
          stroke="#4D9EFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M75 12L72 18"
          stroke="#4D9EFF"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>

      <span
        style={{
          fontFamily: "'Nanum Pen Script', cursive",
          fontSize: "20px",
          color: "#4D9EFF",
          marginLeft: "4px",
        }}
      >
        Fill this form
      </span>
    </div>
  </div>
</div>






      <div className="text-sm text-center text-white/50 mb-4">
          {Object.keys(utmData).length > 0 && (
              <p className="p-2 border border-white/20 rounded-lg bg-black/30 mb-4">
                Tracking UTMs: {Object.keys(utmData).join(', ')}
              </p>
          )}
      </div>

      <form onSubmit={handleSubmitForm} className="mt-4 flex flex-col items-stretch gap-2 form-container">
        <Field
          name="fullName"
          label="Full Name"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
        />
        <Field
          name="workEmail"
          label="Work Email"
          type="email"
          value={formData.workEmail}
          onChange={handleChange}
        />
        <Field
          name="phone"
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <Field
          name="website"
          label="Website URL"
          type="url"
          value={formData.website}
          onChange={handleChange}
        />
        <Field
          name="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
        />

        {error && (
            <div className="p-3 bg-red-600/20 text-red-300 rounded-lg text-sm font-medium">
                Submission Error: {error}
            </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full rounded-xl px-10 py-3 bg-[#0A84FF] hover:bg-[#0066CC] transition-colors duration-200 text-white font-semibold text-lg shadow-lg shadow-[#0A84FF]/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Auditing...' : 'Audit My Shopify Store'}
        </button>

        <p className="text-center text-xs text-white/60 mt-4">
          No Spam. Just Insights To Grow Your Store.
        </p>
      </form>
    </div>
  );
}

// Export App as default as required for single React file
export default App;
// src/sections/getintouch/GetinTouch.tsx
import React from "react";
import { useGetinTouch } from "./useGetinTouch";
// import { BsArrowRight } from "react-icons/bs";
// import { HiChevronDown } from "react-icons/hi";
import HeroForm from "../hero/HeroForm";
import type { ContactInfo, SelectOption, SocialLink } from "./useGetinTouch";
type Props = {
  titlePrimary?: string;
  titleSecondary?: string;
  blurb?: string;
  contactOverride?: Partial<ContactInfo>;
  servicesOverride?: SelectOption[];
  budgetsOverride?: SelectOption[];
  socialsOverride?: SocialLink[];
  onSubmit?: (payload: Record<string, string>) => void;
  className?: string;
};

// const underlineRow = "flex items-start gap-2 py-4 border-b border-white";
// const baseInput =
//   "w-full bg-transparent text-white placeholder-white/50 focus:outline-none";

// const LineInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
//   <label className={underlineRow}>
//     <span className="sr-only">{props.placeholder}</span>
//     <input {...props} className={`${baseInput} ${props.className ?? ""}`} />
//   </label>
// );

// const LineTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
//   <label className={underlineRow}>
//     <span className="sr-only">{props.placeholder}</span>
//     <textarea
//       {...props}
//       rows={3}
//       className={`${baseInput} resize-none ${props.className ?? ""}`}
//     />
//   </label>
// );
// type LineSelectProps = Omit<
//   React.SelectHTMLAttributes<HTMLSelectElement>,
//   "children"
// > & {
//   options: SelectOption[];
//   placeholder?: string;
// };

// const LineSelect: React.FC<LineSelectProps> = ({
//   options,
//   placeholder = "Select…",
//   className,
//   value,
//   ...rest
// }) => {
//   const isEmpty = value === undefined || value === "";

//   return (
//     <label className="relative flex items-start gap-2 py-4 border-b border-white">
//       {/* Hidden label for accessibility */}
//       <span className="sr-only">{placeholder}</span>

//       {/* Select Field */}
//       <select
//         {...rest}
//         value={value ?? ""}
//         className={[
//           "w-full appearance-none bg-transparent focus:outline-none pr-8",
//           isEmpty ? "text-white/60" : "text-white",
//           className ?? "",
//         ].join(" ")}
//       >
//         <option value="" disabled hidden>
//           {placeholder}
//         </option>
//         {options.map((opt) => (
//           <option key={opt.value} value={opt.value} className="bg-[#1a1a1a]">
//             {opt.label}
//           </option>
//         ))}
//       </select>

//       {/* Custom dropdown arrow */}
//       <HiChevronDown
//         size={20}
//         className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white/60"
//       />
//     </label>
//   );
// };

const GetinTouch: React.FC<Props> = ({
  titlePrimary = "Let's Drive Your",
  titleSecondary = "Growth Together",
  blurb = "If you have any questions or need any assistance during business hours please get in touch.",
  contactOverride,
  // servicesOverride,
  // budgetsOverride,
  // onSubmit,
  className = "",
}) => {
  // const { contact, services, budgets } = useGetinTouch();
const { contact, } = useGetinTouch();
  const contactData: ContactInfo = { ...contact, ...(contactOverride ?? {}) };
  // const serviceOpts = servicesOverride ?? services;
  // const budgetOpts = budgetsOverride ?? budgets;


  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   service: "",
  //   budget: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  // ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // const submit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (onSubmit) onSubmit(form);
  //   else console.log("Get in touch form:", form);
  // };

  return (
    <section className={`w-full text-white py-16 md:py-24 ${className}`}>
      <div className="max-w-[1200px] border-[#7D7D7D] border-b-[1px] pb-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left content */}
        <div>
          <h2 className="text-[36px] md:text-[56px] font-semibold md:leading-[72px] leading-[48px] md:tracking-[-1.12px] ">
            {titlePrimary}
            <br />
            <span className="text-[#4D9EFF]">{titleSecondary}</span>
          </h2>
          <p className="text-white/70 mt-5 max-w-xl">{blurb}</p>

          <div className="h-px bg-white/15 my-8 " />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl">
            <div>
              <div className="text-white text-[16px] leading-6 font-semibold">Call on</div>
              <div className="mt-1 text-[#E0E0E0] font-normal text-[14px]">{contactData.phone}</div>
            </div>
            <div>
              <div className="text-white text-[16px] leading-6 font-semibold">Location</div>
              <div className="mt-1 text-[#E0E0E0] font-normal text-[14px] whitespace-pre-line">
                {contactData.location}
              </div>
            </div>
            <div>
              <div className="text-white text-[16px] leading-6 font-semibold">Email</div>
              <div className="mt-1 text-[#E0E0E0] font-normal text-[14px]">{contactData.email}</div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-white text-[16px] leading-6 font-semibold mb-3">Social Network</div>
            <div className="flex items-center gap-3">
                {/* <a
                  href=''
                  className="flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_4787_11420)">
                    <path d="M18.3337 10.0003C18.3337 5.40033 14.6003 1.66699 10.0003 1.66699C5.40032 1.66699 1.66699 5.40033 1.66699 10.0003C1.66699 14.0337 4.53366 17.392 8.33366 18.167V12.5003H6.66699V10.0003H8.33366V7.91699C8.33366 6.30866 9.64199 5.00033 11.2503 5.00033H13.3337V7.50033H11.667C11.2087 7.50033 10.8337 7.87533 10.8337 8.33366V10.0003H13.3337V12.5003H10.8337V18.292C15.042 17.8753 18.3337 14.3253 18.3337 10.0003Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4787_11420">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                </a>
                <a
                  href=''
                  className="flex items-center justify-center"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.3337 3.33203C17.6837 3.71786 16.3795 4.2437 15.6128 4.39536C15.5903 4.4012 15.572 4.4087 15.5503 4.41453C14.8728 3.7462 13.9445 3.33203 12.917 3.33203C10.8462 3.33203 9.16699 5.0112 9.16699 7.08203C9.16699 7.1912 9.15783 7.39203 9.16699 7.4987C6.37283 7.4987 4.24616 6.03536 2.72116 4.16536C2.55533 4.58203 2.48283 5.24036 2.48283 5.8587C2.48283 7.0262 3.39533 8.17287 4.81616 8.8837C4.55449 8.9512 4.26616 8.99953 3.96616 8.99953C3.48199 8.99953 2.96949 8.87203 2.50033 8.48536C2.50033 8.49953 2.50033 8.51287 2.50033 8.52787C2.50033 10.1595 4.23199 11.2704 5.77199 11.5795C5.45949 11.7637 4.82949 11.782 4.52199 11.782C4.30533 11.782 3.53866 11.6829 3.33366 11.6445C3.76199 12.982 5.30699 13.7337 6.77949 13.7604C5.62783 14.6637 4.82866 14.9987 2.47033 14.9987H1.66699C3.15699 15.9537 5.05449 16.6662 6.95616 16.6662C13.1478 16.6662 16.667 11.947 16.667 7.4987C16.667 7.42703 16.6653 7.27703 16.6628 7.1262C16.6628 7.1112 16.667 7.09703 16.667 7.08203C16.667 7.05953 16.6603 7.03786 16.6603 7.01536C16.6578 6.90203 16.6553 6.7962 16.6528 6.7412C17.3112 6.2662 17.882 5.6737 18.3337 4.9987C17.7295 5.26703 17.0812 5.44703 16.4003 5.5287C17.0953 5.11203 18.0828 4.1187 18.3337 3.33203Z" fill="white"/>
                </svg>
                </a>
                <a
                  href=''
                  className="flex items-center justify-center"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.66667 2.5C4.36583 2.5 2.5 4.36583 2.5 6.66667V13.3333C2.5 15.6342 4.36583 17.5 6.66667 17.5H13.3333C15.6342 17.5 17.5 15.6342 17.5 13.3333V6.66667C17.5 4.36583 15.6342 2.5 13.3333 2.5H6.66667ZM15 4.16667C15.46 4.16667 15.8333 4.54 15.8333 5C15.8333 5.46 15.46 5.83333 15 5.83333C14.54 5.83333 14.1667 5.46 14.1667 5C14.1667 4.54 14.54 4.16667 15 4.16667ZM10 5.83333C12.3008 5.83333 14.1667 7.69917 14.1667 10C14.1667 12.3008 12.3008 14.1667 10 14.1667C7.69917 14.1667 5.83333 12.3008 5.83333 10C5.83333 7.69917 7.69917 5.83333 10 5.83333ZM10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5Z" fill="white"/>
                </svg>
                </a> */}
                <a
                  href='https://www.linkedin.com/company/bluvo-digital'
                  className="flex items-center justify-center"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15.8333 2.5H4.16667C3.24583 2.5 2.5 3.24583 2.5 4.16667V15.8333C2.5 16.7542 3.24583 17.5 4.16667 17.5H15.8333C16.7542 17.5 17.5 16.7542 17.5 15.8333V4.16667C17.5 3.24583 16.7542 2.5 15.8333 2.5ZM7.5 14.1667H5.3975V8.33333H7.5V14.1667ZM6.41167 7.26417C5.76917 7.26417 5.34 6.83583 5.34 6.26417C5.34 5.6925 5.76833 5.26417 6.4825 5.26417C7.125 5.26417 7.55417 5.6925 7.55417 6.26417C7.55417 6.83583 7.12583 7.26417 6.41167 7.26417ZM15 14.1667H12.965V10.9783C12.965 10.0967 12.4225 9.89333 12.2192 9.89333C12.0158 9.89333 11.3375 10.0292 11.3375 10.9783C11.3375 11.1142 11.3375 14.1667 11.3375 14.1667H9.235V8.33333H11.3375V9.1475C11.6083 8.6725 12.1508 8.33333 13.1683 8.33333C14.1858 8.33333 15 9.1475 15 10.9783V14.1667Z" fill="white"/>
                </svg>
                </a>
            </div>
          </div>
        </div>

        {/* Right card (form) */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
          <HeroForm />
        </div>
        {/* <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-white/60 text-sm mt-1">You can reach us anytime.</p>
          </div>

          <form onSubmit={submit} className="mt-4 flex flex-col items-stretch gap-2 ">
              <LineInput name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
              <LineInput type="email" name="email" value={form.email} onChange={handleChange} placeholder="Work Email" />
              <LineInput name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
              <LineSelect
                name="service"
                value={form.service}
                onChange={handleChange}
                options={serviceOpts}
                placeholder="What Services Are You Interested In?"
              />

              <LineSelect
                name="budget"
                value={form.budget}
                onChange={handleChange}
                options={budgetOpts}
                placeholder="Monthly Ad Budget"
              />

              <LineTextarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
            <div className="flex justify-end">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center rounded-xl
                          bg-[#3B82F6] hover:bg-[#FFEA4D] hover:text-black pl-10 pr-8 py-2.5 font-semibold text-white
                          transition-colors duration-200 overflow-hidden"
              >
                <span className=" transition-transform duration-300 group-hover:-translate-x-1">
                  Submit
                </span>

                <BsArrowRight className="h-4 w-4 translate-x-5 opacity-0
                            transition-all duration-300 ease-out px-0
                            group-hover:translate-x-0 group-hover:opacity-100" />
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default GetinTouch;

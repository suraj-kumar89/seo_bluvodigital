import React from "react";
import { useTeamSection } from "./useTeamSection";

/**
 * Adds a hover panel that slides down from the top of each member card
 * and shows an infinitely scrolling row of logos (brand marks).
 *
 * To enable logos, pass `logos: string[]` for each member from `useTeamSection`.
 */

type Member = ReturnType<typeof useTeamSection>["members"][number] & {
  logos?: string[]; // array of image URLs for the marquee
};

type Props = {
  options?: Parameters<typeof useTeamSection>[0]; // forward hook options as a prop
};

const TeamSection: React.FC<Props> = ({ options }) => {
  const { intro, members } = useTeamSection(options);

  const enhancedMembers = (members as Member[]).slice(0, 2);

  return (
    <section className="w-full text-white">
      {/* Local keyframes for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-24">
        <div className="md:flex gap-24 items-start">
          {/* Left: Heading & copy */}
          <div className="md:pb-0 pb-6 w-[90%]">
            <h2 className="text-[36px] md:text-[56px] font-semibold leading-[72px] tracking-[-1.12px]">
              Your Growth <span className="text-[#4D9EFF]">Team</span>
            </h2>
            <p className="mt-5 text-[16px] text-[#E0E0E0] max-w-[520px]">
              {intro}
            </p>
          </div>

          {/* Right: Cards */}
          <div className="md:flex gap-6">
            {enhancedMembers.map((m) => (
              <article
                key={m.name}
                className="relative md:mb-0 mb-6 group/card rounded-2xl overflow-hidden"
              >
                <div
                  className="
                    bg-[#1A1A1A] border-[#4D4D4D] border-[1px] rounded-[36px]
                    ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                    grid
                    /* Mobile: image + marquee both visible */
                    grid-rows-[1fr_auto]
                    /* Desktop: collapse marquee, expand on hover */
                    md:grid-rows-[1fr_0fr] md:group-hover/card:grid-rows-[1fr_auto]
                    transition-[grid-template-rows] duration-500 ease-out
                    overflow-hidden will-change-[grid-template-rows]
                  "
                >
                  <div className="relative">
                    {/* Photo */}
                    <div>
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="h-full w-full object-cover p-2 rounded-[36px]"
                      />
                    </div>

                    {/* BOTTOM: Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[20px] text-[#FFFFFF] font-semibold">
                          {m.name}
                        </h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.191 3.73271C11.0069 3.89797 10.8141 4.05335 10.6135 4.19821C10.2659 4.43154 9.87503 4.59254 9.46436 4.67421C9.28586 4.70921 9.09919 4.72437 8.72703 4.75354C7.79253 4.82821 7.32469 4.86554 6.93503 5.00321C6.48935 5.16029 6.08456 5.41529 5.75042 5.74943C5.41627 6.08357 5.16128 6.48836 5.00419 6.93404C4.86653 7.32371 4.82919 7.79154 4.75453 8.72604C4.74113 8.97305 4.71465 9.21917 4.67519 9.46337C4.59353 9.87404 4.43253 10.2649 4.19919 10.6125C4.09769 10.7642 3.97636 10.9065 3.73369 11.19C3.12586 11.904 2.82136 12.261 2.64286 12.6344C2.23103 13.4977 2.23103 14.501 2.64286 15.3644C2.82136 15.7377 3.12586 16.0947 3.73369 16.8087C3.97636 17.0922 4.09769 17.2345 4.19919 17.3862C4.43253 17.7339 4.59353 18.1247 4.67519 18.5354C4.71019 18.7139 4.72536 18.9005 4.75453 19.2727C4.82919 20.2072 4.86653 20.675 5.00419 21.0647C5.16128 21.5104 5.41627 21.9152 5.75042 22.2493C6.08456 22.5835 6.48935 22.8385 6.93503 22.9955C7.32469 23.1332 7.79253 23.1705 8.72703 23.2452C9.09919 23.2744 9.28586 23.2895 9.46436 23.3245C9.87503 23.4062 10.2659 23.5684 10.6135 23.8005C10.7652 23.902 10.9075 24.0234 11.191 24.266C11.905 24.8739 12.262 25.1784 12.6354 25.3569C13.4987 25.7687 14.502 25.7687 15.3654 25.3569C15.7387 25.1784 16.0957 24.8739 16.8097 24.266C17.0932 24.0234 17.2355 23.902 17.3872 23.8005C17.7349 23.5672 18.1257 23.4062 18.5364 23.3245C18.7149 23.2895 18.9015 23.2744 19.2737 23.2452C20.2082 23.1705 20.676 23.1332 21.0657 22.9955C21.5114 22.8385 21.9162 22.5835 22.2503 22.2493C22.5844 21.9152 22.8394 21.5104 22.9965 21.0647C23.1342 20.675 23.1715 20.2072 23.2462 19.2727C23.2754 18.9005 23.2905 18.7139 23.3255 18.5354C23.4072 18.1247 23.5694 17.7339 23.8015 17.3862C23.903 17.2345 24.0244 17.0922 24.267 16.8087C24.8749 16.0947 25.1794 15.7377 25.3579 15.3644C25.7697 14.501 25.7697 13.4977 25.3579 12.6344C25.1794 12.261 24.8749 11.904 24.267 11.19C24.1018 11.0059 23.9464 10.8131 23.8015 10.6125C23.5681 10.2649 23.4062 9.87426 23.3255 9.46337C23.2861 9.21917 23.2596 8.97305 23.2462 8.72604C23.1715 7.79154 23.1342 7.32371 22.9965 6.93404C22.8394 6.48836 22.5844 6.08357 22.2503 5.74943C21.9162 5.41529 21.5114 5.16029 21.0657 5.00321C20.676 4.86554 20.2082 4.82821 19.2737 4.75354C19.0267 4.74014 18.7806 4.71366 18.5364 4.67421C18.1255 4.5935 17.7348 4.43168 17.3872 4.19821C17.1866 4.05335 16.9938 3.89797 16.8097 3.73271C16.0957 3.12487 15.7387 2.82037 15.3654 2.64187C14.9392 2.43791 14.4728 2.33203 14.0004 2.33203C13.5279 2.33203 13.0615 2.43791 12.6354 2.64187C12.262 2.82037 11.905 3.12487 11.191 3.73271ZM19.1022 11.5062C19.2671 11.3257 19.356 11.0886 19.3505 10.8442C19.345 10.5998 19.2455 10.367 19.0726 10.1941C18.8998 10.0213 18.6669 9.92172 18.4225 9.91621C18.1781 9.9107 17.941 9.99965 17.7605 10.1645L12.1022 15.8229L10.2402 13.962C10.0597 13.7971 9.82261 13.7082 9.57822 13.7137C9.33382 13.7192 9.10097 13.8188 8.92811 13.9916C8.75525 14.1645 8.65571 14.3973 8.6502 14.6417C8.64469 14.8861 8.73363 15.1232 8.89853 15.3037L11.4302 17.8354C11.6082 18.0131 11.8495 18.1128 12.101 18.1128C12.3526 18.1128 12.5938 18.0131 12.7719 17.8354L19.1022 11.5062Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="text-[#E0E0E0] text-[16px] mt-2">{m.bio}</p>

                      <div className="flex justify-end">
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-white/90 hover:text-white transition"
                            aria-label={`${m.name} on LinkedIn`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.5104 8.796V10.493C12.8657 9.95168 13.3556 9.5119 13.9319 9.21671C14.5083 8.92152 15.1514 8.78103 15.7984 8.809C19.2534 8.809 20.0004 10.969 20.0004 13.779V19.5H16.8004V14.428C16.8004 13.218 16.5564 11.662 14.6724 11.662C12.8454 11.662 12.5334 12.979 12.5334 14.338V19.5H9.34336V8.796H12.5104ZM7.20036 6.106C7.19997 6.423 7.106 6.73284 6.93024 6.99665C6.75448 7.26047 6.50475 7.46653 6.21236 7.589C5.92009 7.71048 5.59828 7.74226 5.28789 7.68029C4.97751 7.61832 4.69257 7.4654 4.46936 7.241C4.24572 7.01646 4.09347 6.73081 4.03175 6.41997C3.97003 6.10913 4.00159 5.78698 4.12247 5.49403C4.24335 5.20108 4.44814 4.95041 4.71111 4.77354C4.97407 4.59667 5.28345 4.5015 5.60036 4.5C5.81098 4.5 6.01953 4.54158 6.21404 4.62236C6.40855 4.70315 6.5852 4.82154 6.73386 4.97075C6.88251 5.11996 7.00024 5.29705 7.08029 5.49186C7.16035 5.68668 7.20115 5.89538 7.20036 6.106Z"
                                fill="white"
                              />
                              <path d="M7.2 8.80859H4V19.4996H7.2V8.80859Z" fill="white" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ROW 2 — logos: always open on mobile, slide down on hover for md+ */}
                  {m.logos && m.logos.length > 0 && (
                    <div className="px-3 overflow-hidden">
                      {/* inner wrapper provides the slide-down feel on desktop only */}
                      <div
                        className="
                          /* Mobile: visible by default */
                          translate-y-0 opacity-100
                          /* Desktop: start hidden, show on hover */
                          md:translate-y-6 md:opacity-0
                          md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100
                          transition-all duration-500 ease-out will-change-transform
                        "
                      >
                        <p className="text-[12px] pl-8 leading-[18px] text-white/70 my-2">
                          Previously Worked With
                        </p>

                        {/* marquee */}
                        <div className="relative h-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                          <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-8 pr-8"
                            style={{
                              width: "200%",
                              animation: "marquee 16s linear infinite",
                            }}
                          >
                            {[...m.logos, ...m.logos].map((logo, idx) => (
                              <img
                                key={`${m.name}-logo-${idx}`}
                                src={logo}
                                alt="brand logo"
                                className="h-[28px] w-[99px]"
                                loading={
                                  idx > m.logos!.length ? "eager" : "lazy"
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

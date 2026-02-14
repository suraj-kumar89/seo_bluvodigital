// src/components/ThankYou.tsx
import Footer from './Footer';
import Header from './header/Header';
export default function FormSubmission() {
  return (
    <>
    <Header />
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-white text-4xl lg:text-9xl font-semibold text-center pb-10">
        Thank You!
      </h1>
      <p className="text-white text-[16px] font-semibold text-center max-w-xl">
        We appreciate your interest in our services! Our team will review your details and get back to you as soon as possible.
      </p>
    </div>
    <Footer />
    </>
  );
}

// import React, { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
// import api from "../../services/api";

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         location: "",
//         message: "",
//     });

//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState("");
//     const [error, setError] = useState("");

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // Handle form submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setSuccess("");
//         setError("");

//         // Basic validation
//         if (!formData.name.trim()) {
//             setError("Please enter your name.");
//             return;
//         }

//         if (!formData.email.trim()) {
//             setError("Please enter your email.");
//             return;
//         }

//         if (!formData.message.trim()) {
//             setError("Please tell us about your project.");
//             return;
//         }

//         setLoading(true);

//         try {
//             await api.post("/contact-enquiries", {
//                 name: formData.name.trim(),
//                 email: formData.email.trim(),
//                 location: formData.location.trim(),
//                 tellUsAboutYourProject: formData.message.trim(),
//             });

//             // Success message
//             setSuccess(
//                 "Thank you! Your message has been sent successfully."
//             );

//             // Clear form
//             setFormData({
//                 name: "",
//                 email: "",
//                 location: "",
//                 message: "",
//             });
//         } catch (err) {
//             console.error("Contact form submission error:", err);

//             setError(
//                 err.response?.data?.message ||
//                 "Something went wrong. Please try again."
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <section className="bg-[#000000] text-white py-6 px-6 lg:px-10">
//             <div className="max-w-3xl mx-auto">

//                 <form
//                     onSubmit={handleSubmit}
//                     className="space-y-6"
//                 >

//                     {/* First Row */}
//                     <div className="grid md:grid-cols-2 gap-10">

//                         {/* Name */}
//                         <div>
//                             <label className="block text-[20px] font-medium mb-4">
//                                 What's Your Name
//                             </label>

//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
//                                 disabled={loading}
//                                 required
//                             />
//                         </div>

//                         {/* Email */}
//                         <div>
//                             <label className="block text-[20px] font-medium mb-4">
//                                 Your E-mail
//                             </label>

//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
//                                 disabled={loading}
//                                 required
//                             />
//                         </div>

//                     </div>

//                     {/* Location */}
//                     <div>
//                         <label className="block text-[20px] font-medium mb-4">
//                             Your Location
//                         </label>

//                         <input
//                             type="text"
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
//                             disabled={loading}
//                         />
//                     </div>

//                     {/* Project */}
//                     <div>
//                         <label className="block text-[20px] font-medium">
//                             Tell Us About Your Project
//                         </label>

//                         <textarea
//                             rows="4"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="w-full resize-none bg-transparent border-b border-zinc-700 pb-0 text-lg outline-none focus:border-white transition"
//                             disabled={loading}
//                             required
//                         ></textarea>
//                     </div>

//                     {/* Success Message */}
//                     {success && (
//                         <div className="text-center pt-2">
//                             <p className="text-green-400 text-sm">
//                                 {success}
//                             </p>
//                         </div>
//                     )}

//                     {/* Error Message */}
//                     {error && (
//                         <div className="text-center pt-2">
//                             <p className="text-red-400 text-sm">
//                                 {error}
//                             </p>
//                         </div>
//                     )}

//                     {/* Button */}
//                     <div className="flex justify-center pt-2">

//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className="
//                                 group
//                                 relative
//                                 overflow-hidden
//                                 rounded-full
//                                 border
//                                 border-white
//                                 px-12
//                                 py-5
//                                 text-xl
//                                 font-medium
//                                 transition-all
//                                 duration-500
//                                 hover:text-black
//                                 disabled:opacity-50
//                                 disabled:cursor-not-allowed
//                             "
//                         >

//                             {/* Hover Background */}
//                             <span
//                                 className="
//                                     absolute
//                                     inset-0
//                                     scale-y-0
//                                     origin-bottom
//                                     bg-white
//                                     transition-transform
//                                     duration-500
//                                     group-hover:scale-y-100
//                                 "
//                             />

//                             {/* Button Content */}
//                             <span className="relative flex items-center gap-1">

//                                 {loading ? (
//                                     <>
//                                         Sending...
//                                     </>
//                                 ) : (
//                                     <>
//                                         Send Message
//                                         <ArrowUpRight size={20} />
//                                     </>
//                                 )}

//                             </span>

//                         </button>

//                     </div>

//                 </form>
//             </div>
//         </section>
//     );
// };

// export default ContactForm;


import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import api from "../../services/api";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        // Basic validation
        if (!formData.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (!formData.email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (!formData.message.trim()) {
            setError("Please tell us about your project.");
            return;
        }

        setLoading(true);

        try {
            await api.post("/contact-enquiries", {
                name: formData.name.trim(),
                email: formData.email.trim(),
                location: formData.location.trim(),
                tellUsAboutYourProject: formData.message.trim(),
            });

            // Show success popup after successful submission
            setSuccess("Thank you! Your message has been sent successfully.");

            // Clear form
            setFormData({
                name: "",
                email: "",
                location: "",
                message: "",
            });
        } catch (err) {
            console.error("Contact form submission error:", err);

            setError(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#000000] text-white py-6 px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Row */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Name */}
                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                What's Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                                disabled={loading}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[20px] font-medium mb-4">
                                Your E-mail
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-[20px] font-medium mb-4">
                            Your Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-zinc-700 pb-4 text-lg outline-none focus:border-white transition"
                            disabled={loading}
                        />
                    </div>

                    {/* Project */}
                    <div>
                        <label className="block text-[20px] font-medium">
                            Tell Us About Your Project
                        </label>

                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none bg-transparent border-b border-zinc-700 pb-0 text-lg outline-none focus:border-white transition"
                            disabled={loading}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="text-center pt-2" role="alert">
                            <p className="text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    {/* Button */}
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative overflow-hidden rounded-full border border-white px-12 py-5 text-xl font-medium transition-all duration-500 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {/* Hover Background */}
                            <span className="absolute inset-0 scale-y-0 origin-bottom bg-white transition-transform duration-500 group-hover:scale-y-100" />

                            {/* Button Content */}
                            <span className="relative flex items-center gap-1">
                                {loading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowUpRight size={20} />
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Popup */}
            {success && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-success-title"
                >
                    <div className="w-full max-w-md border border-neutral-800 bg-neutral-950 p-8 sm:p-10 text-center shadow-2xl">
                        {/* Success Icon */}
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                            <svg
                                className="h-8 w-8 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>

                        <h3
                            id="contact-success-title"
                            className="mb-4 text-2xl font-light text-white"
                        >
                            Message Sent
                            <span className="italic"> Successfully!</span>
                        </h3>

                        <p className="mb-8 leading-7 text-neutral-400">
                            Thank you for reaching out. Your message has been
                            received successfully. Our team will get back to you
                            soon.
                        </p>

                        <button
                            type="button"
                            onClick={() => setSuccess("")}
                            className="w-full border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactForm;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Send, Mail, User, MessageSquare } from "lucide-react";

import Alert from "../components/Alert.jsx";

const Contact = () => {
    const formRef = useRef(null);
    const hideTimerRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const [alertState, setAlertState] = useState({
        show: false,
        text: "",
        type: "success", // "success" | "danger"
    });

    const showAlert = ({ text, type = "success" }) => {
        setAlertState({ show: true, text, type });

        // clear previous timers so alerts don't flicker
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
            setAlertState((prev) => ({ ...prev, show: false }));
        }, 5000);
    };

    useGSAP(() => {
        gsap.fromTo(
            ".animate-form-element",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const name = form.name.trim();
        const email = form.email.trim();
        const message = form.message.trim();

        if (!name || !email || !message) {
            showAlert({ text: "Please fill out all fields.", type: "danger" });
            return null;
        }

        // Basic email format check
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
            showAlert({ text: "Please enter a valid email address.", type: "danger" });
            return null;
        }

        return { name, email, message };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        const cleaned = validate();
        if (!cleaned) return;

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_vssmr6g",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_9sd0dba",
                {
                    from_name: cleaned.name,
                    to_name: "Adnan Soheb",
                    from_email: cleaned.email,
                    to_email: "adnansoheb@gmail.com",
                    message: cleaned.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "s8Chwd72E5OVOzsgQ"
            );

            setForm({ name: "", email: "", message: "" });
            showAlert({ text: "Thank you! Your message has been sent.", type: "success" });
        } catch (err) {
            console.error(err);
            showAlert({ text: "Sorry—something went wrong. Please try again.", type: "danger" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            {alertState.show && <Alert {...alertState} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="absolute inset-0 min-h-screen">
                    <img
                        src="/assets/terminal.png"
                        alt="background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-100" />
                </div>

                <div className="relative z-10 max-w-4xl w-full px-4">
                    <div className="text-center animate-form-element">
                        <h3 className="head-text mb-4">Let&apos;s Connect</h3>
                        <p className="text-lg text-white-600 max-w-2xl mx-auto">
                            Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique
                            project to life, I&apos;m here to help.
                        </p>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 bg-black-200 p-8 rounded-xl border border-black-300 backdrop-blur-sm"
                    >
                        <div className="space-y-6">
                            <div className="animate-form-element">
                                <label className="block mb-2">
                  <span className="field-label flex items-center gap-2">
                    <User size={18} />
                    Full Name
                  </span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="field-input pl-4 pr-4 py-3 w-full rounded-lg bg-black-300 border border-black-400 focus:border-white-400 transition-colors"
                                        placeholder="John Doe"
                                        autoComplete="name"
                                    />
                                </label>
                            </div>

                            <div className="animate-form-element">
                                <label className="block mb-2">
                  <span className="field-label flex items-center gap-2">
                    <Mail size={18} />
                    Email Address
                  </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="field-input pl-4 pr-4 py-3 w-full rounded-lg bg-black-300 border border-black-400 focus:border-white-400 transition-colors"
                                        placeholder="johndoe@example.com"
                                        autoComplete="email"
                                    />
                                </label>
                            </div>

                            <div className="animate-form-element">
                                <label className="block mb-2">
                  <span className="field-label flex items-center gap-2">
                    <MessageSquare size={18} />
                    Your Message
                  </span>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="field-input pl-4 pr-4 py-3 w-full rounded-lg bg-black-300 border border-black-400 focus:border-white-400 transition-colors resize-none"
                                        placeholder="Share your thoughts or project details..."
                                    />
                                </label>
                            </div>

                            <button
                                className={`w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium
                flex items-center justify-center gap-2 hover:opacity-90 transition-opacity animate-form-element
                ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                                type="submit"
                                disabled={loading}
                                aria-busy={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="transform rotate-45" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-6 animate-form-element">
                        Prefer email?{" "}
                        <a className="underline hover:text-white" href="mailto:adnansoheb@gmail.com">
                            adnansoheb@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
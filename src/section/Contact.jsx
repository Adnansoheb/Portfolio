import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

//import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
    const formRef = useRef();
    //const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    useGSAP(() => {
        gsap.fromTo(
            '.animate-form-element',
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };
    //service_vssmr6g
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_vssmr6g',
                'template_9sd0dba',
                {
                    from_name: form.name,
                    to_name: 'Adnan Soheb',
                    from_email: form.email,
                    to_email: 'adnansoheb@gmail.com',
                    message: form.message,
                },
                's8Chwd72E5OVOzsgQ'
            )

            alert('Your message has been sent.')
            // showAlert({
            //     show: true,
            //     text: 'Thank you for your message! I will get back to you soon.',
            //     type: 'success',
            // });

            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!.')
            // showAlert({
            //     show: true,
            //     text: "Sorry, something went wrong. Please try again later.",
            //     type: 'danger',
            // });
        } finally {
            setLoading(false);
            //setTimeout(hideAlert, 5000);
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

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
                        <h3 className="head-text mb-4">Let's Connect</h3>
                        <p className="text-lg text-white-600 max-w-2xl mx-auto">
                            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
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
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className="field-input pl-4 pr-4 py-3 w-full rounded-lg bg-black-300 border border-black-400 focus:border-white-400 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </label>
                            </div>

                            <div className="animate-form-element">
                                <label className="block mb-2">
                  <span className="field-label flex items-center gap-2">
                    <Mail size={18} />
                    Email Address
                  </span>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className="field-input pl-4 pr-4 py-3 w-full rounded-lg bg-black-300 border border-black-400 focus:border-white-400 transition-colors"
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
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
                  ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                type="submit"
                                disabled={loading}
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
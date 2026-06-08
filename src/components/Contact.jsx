import { useState } from 'react';
import { Mail, Phone, Send, ChevronDown, CheckCircle2, AlertTriangle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

// 1. PLACE YOUR GYM IMAGE INSIDE: src/assets/contact-gym.jpg (or .png)
// 2. IMPORT IT DIRECTLY HERE:
import gymPhoto from '../assets/contact-gym.jpg'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pack: 'PACK 1 — STARTER',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  
  const [notification, setNotification] = useState({
    show: false,
    type: 'success',
    message: ''
  });

  const triggerNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_z0sxi8d";
    const TEMPLATE_ID = "template_wy6zy83";
    const PUBLIC_KEY = "msHmzA4l8zUkKdTkb";

    const templateParams = {
      name: formData.fullName,          
      email: formData.email,        
      phone: formData.phone,        
      title: formData.pack, 
      message: formData.message          
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        triggerNotification('success', 'Thank you for your trust. Your coaching request has been logged.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          pack: 'PACK 1 — STARTER',
          message: ''
        });
      })
      .catch((error) => {
        console.error("Email delivery failed...", error);
        triggerNotification('error', 'Transmission offline. Please verify connectivity or retry later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0d0d10] scroll-mt-24">
      
      {/* --- EXTRA LARGE PREMIUM TOAST BANNER CONTAINER --- */}
      {notification.show && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-full max-w-xl px-4 animate-fade-in">
          <div className={`glass-panel p-6 rounded-2xl border flex items-start gap-5 shadow-2xl backdrop-blur-xl bg-[#111115]/95 transition-all duration-300 ${
            notification.type === 'success' ? 'border-green-500/30 shadow-green-500/10' : 'border-red-500/30 shadow-red-500/10'
          }`}>
            
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            )}

            <div className="flex-1">
              <h4 className="text-white text-base font-bold tracking-tight">
                {notification.type === 'success' ? 'Inquiry Dispatched' : 'System Alert'}
              </h4>
              <p className="text-white/70 text-sm mt-1 leading-relaxed">{notification.message}</p>
            </div>

            <button 
              onClick={() => setNotification((prev) => ({ ...prev, show: false }))}
              className="text-white/30 hover:text-white transition-colors p-1.5 rounded-md mt-0.5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your <br />
                <span className="text-gradient-gold">Private Placement.</span>
              </h2>
              <p className="text-jaguar-400 text-lg max-w-md leading-relaxed">
                Completing the official contact form is mandatory to evaluate your profile. Undocumented or direct requests will not be reviewed.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-jaguar-500 mb-1">Email Us</div>
                  <div className="text-white font-medium">fahdbnmbarek@gmail.com</div>
                </div>
              </div>

              <a 
                href="https://wa.me/21650557555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group w-fit cursor-pointer relative"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-300 relative">
                  <Phone className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0d0d10]"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xs uppercase tracking-widest text-jaguar-500 group-hover:text-accent-gold transition-colors">whatsapp Call</div>
                    <span className="bg-green-500/10 text-green-400 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-green-500/20">
                      Instant Chat
                    </span>
                  </div>
                  <div className="text-white font-medium group-hover:text-accent-gold transition-colors">+216 50 557 555</div>
                </div>
              </a>

              {/* Secure Local Image Render */}
              <div className="w-full h-72 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 shadow-2xl relative bg-[#111115]">
                <img 
                  src={gymPhoto} 
                  alt="Premium Training Facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Form UI Frame */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-[#111115]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-jaguar-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="example" 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-jaguar-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@example.com" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-jaguar-400 ml-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+216 50 000 000" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-jaguar-400 ml-1">Select Program Pack</label>
                <div className="relative">
                  <select 
                    name="pack"
                    value={formData.pack}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors appearance-none pr-10 ${
                      formData.pack === 'PACK 5 — VIP 1:1 COACHING' 
                        ? 'bg-accent-gold/10 border-accent-gold text-accent-gold font-bold' 
                        : 'bg-[#141418] border-white/10'
                    }`}
                  >
                    <option value="PACK 1 — STARTER" className="bg-[#141418] text-white">PACK 1 — STARTER (30 Days)</option>
                    <option value="PACK 2 — TRANSFORMATION" className="bg-[#141418] text-white">PACK 2 — TRANSFORMATION (90 Days)</option>
                    <option value="PACK 3 — ELITE TRANSFORMATION" className="bg-[#141418] text-white">PACK 3 — ELITE TRANSFORMATION (6 Months)</option>
                    <option value="PACK 4 — ELITE YEAR COACHING" className="bg-[#141418] text-white">PACK 4 — ELITE YEAR COACHING (12 Months)</option>
                    <option value="PACK 5 — VIP 1:1 COACHING" className="bg-accent-gold text-black font-bold">👑 PACK 5 — VIP 1:1 COACHING (Premium Selection)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-jaguar-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-jaguar-400 ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder="How can we help you reach your peak?" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-gold transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Inquiry"}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
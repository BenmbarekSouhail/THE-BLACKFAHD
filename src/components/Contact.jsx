import { useState } from 'react';
import { Mail, Phone, Send, ChevronDown, CheckCircle2, AlertTriangle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gymPhoto from '../assets/contact-gym.jpg'; 
import { translations } from '../data/translations';

const Contact = ({ lang = 'EN' }) => {
  const activeLang = translations[lang]?.contact ? lang : 'EN';
  const t = translations[activeLang]?.contact || {
    toastSuccessHeader: "Inquiry Dispatched",
    toastSuccessMsg: "Thank you for your trust. Your coaching request has been logged.",
    toastErrorHeader: "System Alert",
    toastErrorMsg: "Transmission offline. Please verify connectivity or retry later.",
    titlePre: "Secure Your",
    titlePost: "Private Placement.",
    description: "Completing the official contact form is mandatory to evaluate your profile. Undocumented or direct requests will not be reviewed.",
    emailUs: "Email Us",
    whatsappCall: "WhatsApp Call",
    instantChat: "Instant Chat",
    labelName: "Full Name",
    labelEmail: "Email Address",
    labelPhone: "Mobile Number",
    labelPack: "Select Program Pack",
    labelMessage: "Message",
    placeholderMessage: "How can we help you reach your peak?",
    btnSending: "Sending...",
    btnSend: "Send Inquiry"
  };

  const currentDict = translations[activeLang] || {};

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
        triggerNotification('success', t.toastSuccessMsg);
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
        triggerNotification('error', t.toastErrorMsg);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#0d0d10] scroll-mt-24">
      {notification.show && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] w-full max-w-xl px-4 animate-fade-in">
          <div className={`glass-panel p-6 rounded-2xl border flex items-start gap-5 shadow-2xl backdrop-blur-xl bg-[#111115]/95 transition-all duration-300 ${
            notification.type === 'success' ? 'border-green-500/30 shadow-green-500/10' : 'border-red-500/30 shadow-red-500/10'
          } ${lang === 'AR' ? 'text-right flex-row-reverse' : 'text-left'}`}>
            
            {notification.type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
            )}

            <div className="flex-1">
              <h4 className="text-white text-base font-bold tracking-tight">
                {notification.type === 'success' ? t.toastSuccessHeader : t.toastErrorHeader}
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
          <div className={`space-y-12 ${lang === 'AR' ? 'text-right' : 'text-left'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.titlePre} <br />
                <span className="text-gradient-gold">{t.titlePost}</span>
              </h2>
              <p className={`text-jaguar-400 text-lg max-w-md leading-relaxed ${lang === 'AR' ? 'mr-0 ml-auto' : ''}`}>
                {t.description}
              </p>
            </div>

            <div className="space-y-8">
              <div className={`flex items-center gap-6 group ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-jaguar-500 mb-1">{t.emailUs}</div>
                  <div className="text-white font-medium">fahdbnmbarek@gmail.com</div>
                </div>
              </div>

              <a 
                href="https://wa.me/21650557555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-6 group w-fit cursor-pointer relative ${lang === 'AR' ? 'flex-row-reverse mr-0 ml-auto' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-300 relative shrink-0">
                  <Phone className="w-5 h-5" />
                  <span className={`absolute top-0 ${lang === 'AR' ? 'left-0' : 'right-0'} w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75`}></span>
                  <span className={`absolute top-0 ${lang === 'AR' ? 'left-0' : 'right-0'} w-2.5 h-2.5 bg-green-500 rounded-full border border-[#0d0d10]`}></span>
                </div>
                <div>
                  <div className={`flex items-center gap-2 mb-1 ${lang === 'AR' ? 'flex-row-reverse' : ''}`}>
                    <div className="text-xs uppercase tracking-widest text-jaguar-500 group-hover:text-accent-gold transition-colors">{t.whatsappCall}</div>
                    <span className="bg-green-500/10 text-green-400 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-green-500/20">
                      {t.instantChat}
                    </span>
                  </div>
                  <div className="text-white font-medium group-hover:text-accent-gold transition-colors" dir="ltr">+216 50 557 555</div>
                </div>
              </a>

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

          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-[#111115]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className={`space-y-2 flex flex-col ${lang === 'AR' ? 'items-end' : 'items-start'}`}>
                  <label className="text-xs uppercase tracking-widest text-jaguar-400 px-1">{t.labelName}</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={lang === 'AR' ? "مثال: أحمد بن علي" : "example"} 
                    className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors ${lang === 'AR' ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`space-y-2 flex flex-col ${lang === 'AR' ? 'items-end' : 'items-start'}`}>
                    <label className="text-xs uppercase tracking-widest text-jaguar-400 px-1">{t.labelEmail}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@example.com" 
                      className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors ${lang === 'AR' ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                  <div className={`space-y-2 flex flex-col ${lang === 'AR' ? 'items-end' : 'items-start'}`}>
                    <label className="text-xs uppercase tracking-widest text-jaguar-400 px-1">{t.labelPhone}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+216 50 000 000" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors text-left"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              <div className={`space-y-2 flex flex-col ${lang === 'AR' ? 'items-end' : 'items-start'}`}>
                <label className="text-xs uppercase tracking-widest text-jaguar-400 px-1">{t.labelPack}</label>
                <div className="relative w-full">
                  <select 
                    name="pack"
                    value={formData.pack}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors appearance-none ${
                      lang === 'AR' ? 'pl-10 pr-4 text-right' : 'pr-10 pl-4 text-left'
                    } ${
                      formData.pack === 'PACK 5 — VIP 1:1 COACHING' 
                        ? 'bg-accent-gold/10 border-accent-gold text-accent-gold font-bold' 
                        : 'bg-[#141418] border-white/10'
                    }`}
                  >
                    <option value="PACK 1 — STARTER" className="bg-[#141418] text-white">
                      {currentDict.packs?.pack1?.name || "PACK 1 — STARTER"} ({lang === 'AR' ? '30 يوم' : '30 Days'})
                    </option>
                    <option value="PACK 2 — TRANSFORMATION" className="bg-[#141418] text-white">
                      {currentDict.packs?.pack2?.name || "PACK 2 — TRANSFORMATION"} ({lang === 'AR' ? '90 يوم' : '90 Days'})
                    </option>
                    <option value="PACK 3 — ELITE TRANSFORMATION" className="bg-[#141418] text-white">
                      {currentDict.packs?.pack3?.name || "PACK 3 — ELITE TRANSFORMATION"} ({lang === 'AR' ? '6 أشهر' : '6 Months'})
                    </option>
                    <option value="PACK 4 — ELITE YEAR COACHING" className="bg-[#141418] text-white">
                      {currentDict.packs?.pack4?.name || "PACK 4 — ELITE YEAR COACHING"} ({lang === 'AR' ? '12 شهر' : '12 Months'})
                    </option>
                    <option value="PACK 5 — VIP 1:1 COACHING" className={`${lang === 'AR' ? 'bg-[#141418] text-accent-gold' : 'bg-accent-gold text-black'} font-bold`}>
                      👑 {currentDict.packs?.pack5?.name || "PACK 5 — VIP 1:1 COACHING"} ({lang === 'AR' ? 'خيارات مميزة' : 'Premium Selection'})
                    </option>
                  </select>
                  <div className={`absolute inset-y-0 ${lang === 'AR' ? 'left-3' : 'right-3'} flex items-center pointer-events-none text-jaguar-400`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className={`space-y-2 flex flex-col ${lang === 'AR' ? 'items-end' : 'items-start'}`}>
                <label className="text-xs uppercase tracking-widest text-jaguar-400 px-1">{t.labelMessage}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  placeholder={t.placeholderMessage} 
                  className={`w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold/50 transition-colors resize-none ${lang === 'AR' ? 'text-right' : 'text-left'}`}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className={`w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-gold transition-all group disabled:opacity-50 disabled:cursor-not-allowed ${
                  lang === 'AR' ? 'flex-row-reverse' : ''
                }`}
              >
                {isSending ? t.btnSending : t.btnSend}
                <Send className={`w-4 h-4 transition-transform ${
                  lang === 'AR' ? 'group-hover:-translate-x-1 group-hover:-translate-y-1 rotate-180' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                }`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
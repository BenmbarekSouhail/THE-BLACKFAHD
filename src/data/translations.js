export const translations = {
  EN: {
    // Hero Component Translations
    hero: {
      accessBadge: "Public Member Access",
      titlePre: "private",
      titlePost: "Coaching.",
      description: "From competitive athletes to everyday fitness goals, professional coaching tailored exactly to your ambitions.",
      ctaButton: "Apply for Membership",
      floatingIndex: "01.",
      floatingTitle: "Precision Gear"
    },

    // WhoIsFahd Component Translations
    about: {
      metaTitle: "BENMBAREK Fahd",
      headline: "Driven by Results.",
      p1: "Since the age of 9, I began my journey in sports, starting with gymnastics and football, and later transitioning into mixed martial arts.",
      p2: "After that, I developed a strong passion for bodybuilding. However, I faced many challenges and hardships, but none of them ever stopped me from training, even during the most difficult times.",
      p3: "Eventually, I made the decision to become a professional bodybuilding athlete and fitness coach.",
      p4: "Today, with over 10 years of experience in the fitness industry, I can help transform you from an average person into someone with a strong, aesthetic physique and high physical performance, building not just your body, but a true athletic identity.",
      p5: "Whether your goal is fat loss, muscle gain, improving fitness, or bodybuilding, you are in the right place.",
      historyTitle: "Contest History",
      fallbackText: "Stage Showcase Photo (Large View)",
      history: [
        { id: 1, title: "First Competition GRAND PRIZE GSN – 2nd" }
      ]
    },

    // Contact Component Translations
    contact: {
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
    },

    // Membership / Pricing Components Translations
    pricingTitle: "Pricing Plans",
    pricingSubtitle: "Choose Your Goal",
    provenResults: "Proven Results",
    topTransformations: "Top Physical Transformations",
    before: "Before",
    after: "After",
    whatsIncluded: "What's Included",
    expectedResults: "Expected Results",
    coreTargets: "Core Targets",
    idealFor: "Ideal For:",
    viewClose: "Close View",
    packs: {
      pack1: {
        name: "PACK 1 — STARTER",
        duration: "30 DAYS",
        ctaText: "Starter Plan",
        idealFor: "Beginners / Fat loss / Muscle gain basics / Restart fitness journey",
        included: [
          "Customized Training Program",
          "Personalized Nutrition Plan",
          "Cardio Protocol (if needed)",
          "Weekly Check-ins",
          "Direct Coaching Support (WhatsApp / DM)",
          "Basic Form & Technique Guidance"
        ],
        expectations: [
          "Structured training & nutrition",
          "Improved body composition (fat loss or lean muscle gain)",
          "Better discipline & consistency"
        ],
        bestFor: ["Fat loss start", "Lean muscle gain foundation", "Beginners", "Getting back in shape"]
      },
      pack2: {
        name: "PACK 2 — TRANSFORMATION",
        duration: "90 DAYS",
        ctaText: "TRANSFORMATION PLAN",
        idealFor: "Fat loss / Muscle gain / Body recomposition",
        badgeText: "Most Wanted Pack",
        included: [
          "Customized Training Program (progressively updated)",
          "Personalized Nutrition Plan (adjusted weekly)",
          "Cardio Protocol (based on goal)",
          "Weekly Check-ins & Adjustments",
          "Direct Coaching Support (WhatsApp / DM)",
          "Progress Tracking (photos + measurements)",
          "Form & Technique Guidance"
        ],
        expectations: [
          "Visible body transformation in 6–10 weeks (with consistency)",
          "Improved muscle definition & fat loss",
          "Strong lifestyle structure (training + nutrition control)"
        ],
        bestFor: ["Serious fat loss", "Lean muscle gain", "Body recomposition", "People wanting real transformation in 3 months"]
      },
      pack3: {
        name: "PACK 3 — ELITE TRANSFORMATION",
        duration: "6 MONTHS",
        ctaText: "Elite 6-Month Plan",
        idealFor: "Advanced transformation / Lean muscle gain / Serious body recomposition",
        included: [
          "Fully periodized Training Program (monthly progression)",
          "Personalized Nutrition Plan (advanced adjustments)",
          "Cardio & conditioning protocol (adapted continuously)",
          "Weekly Check-ins & ongoing adjustments",
          "Direct Priority Coaching Support (WhatsApp / DM)",
          "Full Progress Tracking (photos, measurements, performance)",
          "Advanced Form & Technique Optimization"
        ],
        expectations: [
          "Major physique transformation over 6 months",
          "Significant muscle gain with controlled fat levels",
          "Strong improvement in strength, shape, and conditioning",
          "Fully structured lifestyle & discipline system"
        ],
        bestFor: ["Serious physique transformation", "Long-term fat loss + muscle gain", "Intermediate to advanced trainees", "People committed to real change"]
      },
      pack4: {
        name: "PACK 4 — ELITE YEAR COACHING",
        duration: "12 MONTHS",
        ctaText: "Elite Year Plan",
        idealFor: "Full transformation / Competition prep / Maximum physique development",
        included: [
          "Year-long structured coaching (periodized phases: bulk / cut / recomposition)",
          "Customized Training Programs (continuously updated)",
          "Advanced Nutrition Planning (fully adapted through the year)",
          "Cardio & Conditioning System (goal-based phases)",
          "Weekly Check-ins & ongoing adjustments",
          "Priority Direct Support (WhatsApp / DM)",
          "Full Progress Tracking (photos, measurements, performance)",
          "Peak physique development strategy"
        ],
        expectations: [
          "Complete body transformation within 12 months",
          "Maximum muscle development with controlled fat levels",
          "Elite-level physique conditioning & symmetry",
          "Long-term discipline, structure, and lifestyle mastery"
        ],
        bestFor: ["Serious athletes", "Long-term physique transformation", "Competition preparation (optional pathway)", "Maximum results seekers"]
      },
      pack5: {
        name: "PACK 5 — VIP 1:1 COACHING",
        duration: "90 DAYS MINIMUM",
        price: "Starting from 1500 DT",
        ctaText: "Apply For VIP",
        idealFor: "Early contest prep phase / Serious transformation start / Evaluation phase before long-term coaching extension",
        included: [
          "Premium Flexible Elite Show & Target Adaptability",
          "Minimum 3-Month Structural Baseline Evaluation Blueprint",
          "Physique Control Oversight Without Rushed Methodologies",
          "Natural Long-Term Extension Paths (6 Months VIP — 2500-2800 DT)",
          "Full Custom Contest Prep Option (Custom pricing depending on show & duration)"
        ],
        expectations: [
          "Exclusive elite tracking architecture",
          "Clear, measurable aesthetic and performance milestones",
          "Highly adaptable blueprint tailored entirely to your show timeline"
        ],
        bestFor: ["Serious athletes", "Contest prep candidates", "Maximum accountability seekers", "People wanting an exclusive, flexible premium coaching experience"]
      }
    }
  },
  AR: {
    // Hero Component Translations
    hero: {
      accessBadge: "وصول الأعضاء العام",
      titlePre: "تدريب",
      titlePost: "خاص ومحترف.",
      description: "من الرياضيين التنافسيين إلى أهداف اللياقة البدنية اليومية، تدريب احترافي مصمم خصيصاً لطموحاتك.",
      ctaButton: "تقديم طلب انضمام",
      floatingIndex: "01.",
      floatingTitle: "معدات دقيقة"
    },

    // WhoIsFahd Component Translations
    about: {
      metaTitle: "بن مبارك فهد",
      headline: "مدفوع بالنتائج.",
      p1: "منذ سن التاسعة، بدأت رحلتي في الرياضة، بدءاً من الجمباز وكرة القدم، وانتقلت لاحقاً إلى الفنون القتالية المختلطة.",
      p2: "بعد ذلك، تطور لدي شغف قوي ببناء الأجسام. واجهت العديد من التحديات والصعوبات، لكن لم يمنعني أي منها عن التدريب، حتى في أصعب الأوقات.",
      p3: "في النهاية، اتخذت القرار بأن أصبح رياضياً محترفاً في بناء الأجسام ومدرباً للياقة البدنية.",
      p4: "اليوم، مع أكثر من 10 سنوات من الخبرة في مجال اللياقة البدنية، يمكنني مساعدتك في التحول من شخص عادي إلى شخص يتمتع بخصائص جسدية قوية ومتناسقة وأداء بدني عالٍ، لا نبني جسدك فحسب، بل هوية رياضية حقيقية.",
      p5: "سواء كان هدفك خسارة الدهون، زيادة الكتلة العضلية، تحسين اللياقة، أو بناء الأجسام، فأنت في المكان الصحيح.",
      historyTitle: "سجل البطولات",
      fallbackText: "صورة عرض المسرح (عرض كبير)",
      history: [
        { id: 1, title: "المرتبة الثانية في بطولة GRAND PRIZE GSN الأولى" }
      ]
    },

    // Contact Component Translations
    contact: {
      toastSuccessHeader: "تم إرسال الطلب",
      toastSuccessMsg: "شكراً لثقتك. تم تسجيل طلب التدريب الخاص بك بنجاح.",
      toastErrorHeader: "تنبيه النظام",
      toastErrorMsg: "الإرسال غير متصل. يرجى التحقق من الاتصال أو المحاولة لاحقاً.",
      titlePre: "تأمين مقعدك",
      titlePost: "الخاص والمحدود.",
      description: "إكمال نموذج الاتصال الرسمي إلزامي لتقييم ملفك الشخصي. لن يتم مراجعة الطلبات غير الموثقة أو المباشرة.",
      emailUs: "راسلنا بريدياً",
      whatsappCall: "اتصال واتساب",
      instantChat: "دردشة فورية",
      labelName: "الاسم الكامل",
      labelEmail: "البريد الإلكتروني",
      labelPhone: "رقم الهاتف",
      labelPack: "اختر باقة البرنامج",
      labelMessage: "الرسالة",
      placeholderMessage: "كيف يمكننا مساعدتك للوصول إلى ذروة أدائك؟",
      btnSending: "جاري الإرسال...",
      btnSend: "إرسال الطلب"
    },

    // Membership / Pricing Components Translations
    pricingTitle: "خطة الأسعار",
    pricingSubtitle: "اختر هدفك الرياضي",
    provenResults: "نتائج مثبتة",
    topTransformations: "أقوى التحولات الجسدية",
    before: "قبل",
    after: "بعد",
    whatsIncluded: "ما يشتمل عليه البرنامج",
    expectedResults: "النتائج المتوقعة",
    coreTargets: "المستهدفون الأساسيون",
    idealFor: "مثالي لـ:",
    viewClose: "إغلاق العرض",
    packs: {
      pack1: {
        name: "الباقة 1 — المبتدئين",
        duration: "30 يوم",
        ctaText: "ابدأ الآن",
        idealFor: "المبتدئين / خسارة الدهون / أساسيات بناء العضلات / العودة للتمارين",
        included: [
          "برنامج تدريبي مخصص تماماً لجسدك",
          "خطة تغذية مخصصة لنمط حياتك",
          "نظام الكارديو (حسب الحاجة الحالية)",
          "متابعة أسبوعية دقيقة للنتائج",
          "دعم تواصل مباشر مع الكوتش (واتساب / انستغرام)",
          "توجيه أساسي لإتقان التكنيك الصحيح"
        ],
        expectations: [
          "الالتزام بجدول تدريبي ونظام غذائي منظم",
          "تحسين تركيبة الجسم الأساسية (خسارة دهون أو بناء عضل)",
          "بناء انضباط يومي واستمرارية قوية"
        ],
        bestFor: ["بداية خسارة الدهون", "تأسيس كتلة عضلية صافية", "المبتدئين", "استعادة اللياقة البدنية"]
      },
      pack2: {
        name: "الباقة 2 — التحول الجسدي الكامل",
        duration: "90 يوم",
        ctaText: "خطة التحول الجسدي",
        idealFor: "حرق الدهون / زيادة الكتلة العضلية / إعادة تشكيل الجسم بالكامل",
        badgeText: "الباقة الأكثر طلباً",
        included: [
          "جدول تدريبي مخصص (يتم تحديثه وتطويره دورياً)",
          "نظام غذائي متكامل (تعديلات وتغييرات أسبوعية)",
          "نظام كارديو دقيق مستهدف بناءً على هدفك",
          "مراجعة أسبوعية للمقاييس وتعديل فوري للخطة",
          "تواصل مباشر ذو أولوية مع الكوتش (واتساب / انستغرام)",
          "متابعة مستمرة للتطور (بالصور والمقاسات)",
          "توجيه كامل لإتقان أداء التمارين بأعلى كفاءة"
        ],
        expectations: [
          "تغير ملحوظ في شكل الجسم خلال 6 إلى 10 أسابيع (مع الالتزام)",
          "إبراز تفاصيل العضلات وتنشيف الدهون بوضوح",
          "بناء أسلوب حياة رياضي قوي تحت تحكم كامل"
        ],
        bestFor: ["خسارة دهون متقدمة", "بناء عضلات صافية", "إعادة تشكيل وتناسق الجسم", "الباحثين عن نتائج حقيقية خلال 3 أشهر"]
      },
      pack3: {
        name: "الباقة 3 — تحول النخبة المتقدم",
        duration: "6 أشهر",
        ctaText: "خطة النخبة لـ 6 أشهر",
        idealFor: "تحول متقدم جداً / ضخامة عضلية / إعادة تشكيل شاملة ومستمرة للجسم",
        included: [
          "برنامج تدريبي مقسم على مراحل (تطوير شهري مكثف)",
          "نظام غذائي متقدم وتعديلات عميقة لكسر الثبات",
          "نظام حصص هوائية وكارديو متطور يتكيف مع التغيرات",
          "مراجعة مستمرة وتحديث أسبوعي للاستراتيجية المتبعة",
          "دعم مباشر وفوري فائق الأولوية مع الكوتش شخصياً",
          "تتبع دقيق وشامل للأداء والقوة البدنية والصور",
          "تحسين وتحليل أداء المجموعات العضلية والتكنيك المتقدم"
        ],
        expectations: [
          "تغيير جذري وهائل في البنية الجسدية على مدار نصف سنة",
          "زيادة عضلية ضخمة وصافية مع الحفاظ على مستويات دهون منخفضة",
          "تطور هائل في مستويات القوة البدنية، والتحمل، والتناسق العضلي",
          "تأسيس نظام حياة صارم وانضباط رياضي مستدام مدى الحياة"
        ],
        bestFor: ["تحول بدني شامل وعميق", "خسارة دهون طويلة المدى + بناء عضلي", "المتدربين المتوسطين والمتقدمين", "الملتزمين بتحقيق تغيير جذري لا رجعة فيه"]
      },
      pack4: {
        name: "الباقة 4 — كوتشينغ النخبة السنوي",
        duration: "12 شهر",
        ctaText: "الخطة السنوية المتكاملة",
        idealFor: "تحول كلي شامل / التجهيز للبطولات / الوصول لأقصى تطور جيني ممكن",
        included: [
          "تدريب وتوجيه سنوي هيكلي متكامل (مراحل: تضخيم / تنشيف / إعادة تشكيل)",
          "برامج تدريبية متتالية ومحدثة بشكل مستمر دون انقطاع",
          "تخطيط غذائي متطور يتكيف تماماً مع كافة فصول السنة والتغيرات",
          "منظومة كارديو وتحضير بدني شاملة مبنية على أهداف كل مرحلة",
          "تواصل ومتابعة أسبوعية دقيقة وتعديل المسار بناءً على استجابة الجسم",
          "دعم مباشر فائق الأولوية على مدار الساعة عبر الواتساب",
          "استراتيجية متكاملة للوصول إلى ذروة التناسق العضلي والتنشيف"
        ],
        expectations: [
          "تحول واعادة بناء كاملة ل الهوية الجسدية في غضون عام واحد",
          "أقصى نمو عضلي ممكن تحقيقه طبيعياً مع بقاء نسبة الدهون مثالية",
          "الوصول إلى تناسق عضلي مميز ومستوى تنشيف يناسب الرياضيين المحترفين",
          "اتقان تام للانضباط الذاتي، أسلوب التغذية، والتحكم في نمط الحياة"
        ],
        bestFor: ["الرياضيين الجادين", "تحول بدني خارق طويل الأمد", "الاستعداد للمسرح والبطولات (مسار اختياري)", "الباحثين عن أقصى نتائج ممكنة"]
      },
      pack5: {
        name: "الباقة 5 — تدريب VIP الخاص 1:1",
        duration: "حد أدنى 90 يوم",
        ctaText: "تقديم طلب انضمام للـ VIP",
        idealFor: "مرحلة التجهيز المبكر للمسرح / بداية تحول خاص فائق الدقة / تقييم شامل قبل التمديد",
        included: [
          "مرونة حركية واستجابة فائقة مخصصة للأهداف الاستراتيجية",
          "مخطط تقييمي بدني وهيكلي شامل كحد أدنى لمدة 3 أشهر",
          "إشراف دقيق جداً على تفاصيل الجسد دون اعتماد طرق متسرعة أو ضارة",
          "مسارات تمديد طبيعية طويلة الأمد (6 أشهر VIP — بقيمة 2500-2800 دينار)",
          "خيارات تجهيز كامل للبطولات (تسعير خاص حسب البطولة والمدة المتبقية)"
        ],
        expectations: [
          "بنية تتبع ومراقبة حصرية ومباشرة على أعلى مستوى",
          "أهداف بدنية وجمالية ومؤشرات أداء واضحة وقابلة للقياس الدقيق",
          "مخطط عالي المرونة يتكيف تماماً مع الجدول الزمني الخاص ببطولتك أو عرضك"
        ],
        bestFor: ["الرياضيين الجادين والمحترفين", "المقبلين على المشاركة في البطولات والتجهيز للمسرح", "الباحثين عن أقصى درجات الالتزام والمحاسبة الفردية الدقيقة", "الراغبين في تجربة تدريبية حصرية، مرنة ومتميزة من الفئة الفاخرة"]
      }
    }
  }
};
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const MENU_PREF_OPTIONS = [
  '100% Pure Vegetarian',
  'Strict Jain (No Root Veg)',
  'Authentic Malwi Dal Bafla',
  'Royal North Indian Feast',
  'Sarafa Live Chaat Theatre',
  'Dessert & Mithai Pavilion',
];

/**
 * Contact & Booking Page — Royal Caterers India (RCI).
 * Verified Pardesipura, Indore address, phone +91 98272 86535,
 * direct WhatsApp instant booking generator, and comprehensive 10-field inquiry form.
 */
export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [estimatedBudget, setEstimatedBudget] = useState('To be discussed during consultation');
  const [selectedMenuPrefs, setSelectedMenuPrefs] = useState<string[]>([
    '100% Pure Vegetarian',
    'Authentic Malwi Dal Bafla',
  ]);
  const [additionalNotes, setAdditionalNotes] = useState('');

  const successRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const preEventType = searchParams.get('eventType');
    if (preEventType) {
      setEventType(preEventType);
    }
    const preSetup = searchParams.get('setup');
    if (preSetup) {
      setAdditionalNotes((prev) =>
        prev ? prev : `Interested in setup: ${preSetup}.`
      );
    }
  }, [searchParams]);

  const toggleMenuPref = (val: string) => {
    setFormError(null);
    setSelectedMenuPrefs((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  const getWhatsAppLeadUrl = () => {
    const msg =
      `*New Catering Inquiry - Royal Caterers India*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      (email ? `*Email:* ${email}\n` : '') +
      `*Event Type:* ${eventType}\n` +
      `*Event Date:* ${eventDate}\n` +
      `*Location/Venue:* ${eventLocation}\n` +
      `*Guests:* ${guestCount}\n` +
      `*Budget:* ${estimatedBudget}\n` +
      `*Menu Preferences:* ${selectedMenuPrefs.join(', ')}\n` +
      (additionalNotes ? `*Notes:* ${additionalNotes}\n` : '');

    return `https://wa.me/919827286535?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanedPhone = phone.replace(/\D/g, '');
    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!eventType) {
      setFormError('Please select an event type.');
      return;
    }
    if (!eventDate) {
      setFormError('Please select an event date.');
      return;
    }
    if (!eventLocation.trim()) {
      setFormError('Please enter the event location in Indore or destination venue.');
      return;
    }
    if (!guestCount || Number(guestCount) < 10) {
      setFormError('Please enter the expected number of guests (minimum 10).');
      return;
    }
    if (selectedMenuPrefs.length === 0) {
      setFormError('Please select at least one menu preference.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }, 200);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setEventType('');
    setEventDate('');
    setEventLocation('');
    setGuestCount('');
    setEstimatedBudget('To be discussed during consultation');
    setSelectedMenuPrefs(['100% Pure Vegetarian', 'Authentic Malwi Dal Bafla']);
    setAdditionalNotes('');
    setFormError(null);
    setSubmitted(false);
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="flex flex-col w-full bg-[#F6F1E6] text-[#2B2B2B]">
      {/* 1. Header */}
      <section className="w-full bg-[#F6F1E6] pt-10 pb-12 lg:py-20 border-b border-[#D8D0B9]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#692C90]" aria-hidden="true" />
              <span className="font-trajan text-[11.5px] font-bold uppercase tracking-[0.22em] text-[#692C90]">
                ROYAL CATERERS INDIA &middot; SINCE 1960
              </span>
            </div>
            <p className="font-cursive text-[34px] text-[#692C90] mb-1">
              Where Tradition Meets Taste
            </p>
            <h1 className="font-didot text-[40px] sm:text-[52px] lg:text-[62px] text-[#4A2366] font-bold leading-[1.1] mb-4">
              Begin Planning Your Grand Celebration.
            </h1>
            <p className="font-sans text-[15.5px] text-[#2B2B2B]/85 font-normal max-w-xl leading-relaxed">
              Share your celebration date, guest count, and menu preferences below, or reach out
              directly via phone or WhatsApp to schedule a private menu tasting in Indore.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left Column: Direct Consultation Desk & Google Maps Card */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-6 pb-8 border-b border-[#D8D0B9]">
                <div>
                  <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.2em] text-[#692C90] block mb-1">
                    Direct Consultation Desk
                  </span>
                  <h2 className="font-didot text-[28px] sm:text-[32px] text-[#4A2366] font-bold mb-2">
                    Royal Caterers India
                  </h2>
                  <p className="font-sans text-[15px] text-[#2B2B2B]/80 font-normal leading-relaxed">
                    Personal banquet consultations, decor wagon previews, and menu tastings are
                    arranged by prior appointment at our Pardesipura office.
                  </p>
                </div>

                {/* Verified Address */}
                <div className="flex flex-col gap-1">
                  <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.16em] text-[#692C90]">
                    Verified Indore Office
                  </span>
                  <p className="font-sans text-[15px] text-[#2B2B2B] font-bold flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-[#692C90] shrink-0 mt-0.5">
                      location_on
                    </span>
                    <span>{BUSINESS_INFO.fullAddress}</span>
                  </p>
                  <p className="font-sans text-[13px] text-[#2B2B2B]/70">
                    Timings: {BUSINESS_INFO.tastingHours}
                  </p>
                </div>

                {/* Phone & Instant WhatsApp */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.16em] text-[#692C90]">
                    Direct Booking Line
                  </span>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="font-didot text-[22px] text-[#4A2366] font-bold hover:text-[#692C90] transition-colors w-fit flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#F1A91E]">call</span>
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <div className="pt-2">
                    <a
                      href={`${BUSINESS_INFO.whatsappHref}?text=Hello%20Royal%20Caterers%20India,%20I%20would%20like%20to%20discuss%20catering%20for%20an%20upcoming%20celebration.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#4DAF4E] text-[#2D6A2E] text-[12.5px] font-bold uppercase tracking-[0.14em] rounded-sm hover:bg-[#FAF7F0] transition-colors shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E] animate-pulse" />
                      <span>Chat on WhatsApp (+91 98272 86535)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Google Maps Card */}
              <div
                id="indore-region-map"
                className="bg-white border border-[#D8D0B9] rounded-md overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div className="relative w-full h-48 overflow-hidden border-b border-[#D8D0B9] bg-[#FAF7F0]">
                  <RoyalImage
                    src="/media/photos/wedding_dining_reception_lawn.jpg"
                    alt="Royal Caterers India banquet setting in Indore."
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A2366]/90 backdrop-blur-sm text-[#F1A91E] font-trajan text-[10px] font-bold uppercase tracking-wider rounded">
                    4.8★ Google Profile
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-trajan text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#692C90] block mb-1">
                      GOOGLE BUSINESS LOCATION
                    </span>
                    <h3 className="font-didot text-[22px] text-[#4A2366] font-bold mb-1.5">
                      Pardesipura, Indore
                    </h3>
                    <p className="font-sans text-[14px] text-[#2B2B2B]/80 leading-relaxed">
                      Conveniently located in Pardesipura, Indore. Serving venues across Indore, Ujjain,
                      Bhopal, Dewas, Maheshwar, and destination palaces.
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D8D0B9]/60 flex items-center justify-between">
                    <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#4A2366]">
                      Central India
                    </span>
                    <a
                      href={BUSINESS_INFO.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#692C90] hover:text-[#4A2366] transition-colors border-b-2 border-[#692C90] pb-0.5 inline-flex items-center gap-1"
                    >
                      <span>Open in Google Maps</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 10-Field Catering Enquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#D8D0B9] rounded-md p-7 sm:p-10 lg:p-12 shadow-royal text-[#2B2B2B]">
              <div className="pb-6 mb-8 border-b border-[#D8D0B9]">
                <p className="font-cursive text-[30px] text-[#692C90] mb-1">
                  Tailored Event Specification
                </p>
                <h2 className="font-didot text-[28px] sm:text-[34px] text-[#4A2366] font-bold">
                  Bespoke Catering Enquiry Form
                </h2>
                <p className="font-sans text-[14px] text-[#2B2B2B]/75 mt-1">
                  Fill in your requirements below. You can also send this inquiry directly via WhatsApp for instant response!
                </p>
              </div>

              {/* Validation Error State */}
              {formError && (
                <div
                  role="alert"
                  className="mb-6 p-4 bg-[#F9E6E6] border border-[#9E2A2B] text-[#6E1819] font-bold text-[14px] rounded-sm"
                >
                  {formError}
                </div>
              )}

              {/* Success State with Instant WhatsApp Redirection */}
              {submitted && (
                <div
                  ref={successRef}
                  id="booking-success-message"
                  role="status"
                  aria-live="polite"
                  className="mb-8 p-6 sm:p-8 bg-[#FAF7F0] border-2 border-[#F1A91E] rounded-md flex flex-col gap-4 animate-fadeIn"
                >
                  <div>
                    <span className="font-trajan text-[11px] font-bold uppercase tracking-[0.2em] text-[#692C90] block mb-1">
                      ENQUIRY RECORDED SUCCESSFULLY
                    </span>
                    <h3 className="font-didot text-[24px] sm:text-[28px] text-[#4A2366] font-bold">
                      Thank You, {fullName}!
                    </h3>
                  </div>

                  <p className="font-sans text-[15px] text-[#2B2B2B]/90 font-normal leading-relaxed">
                    Your inquiry for <strong className="font-bold text-[#4A2366]">{eventType}</strong> on{' '}
                    <strong className="font-bold text-[#4A2366]">{eventDate}</strong> ({guestCount}{' '}
                    guests at {eventLocation}) has been compiled.
                  </p>

                  <div className="p-4 bg-white border border-[#D8D0B9] rounded-sm flex flex-col gap-2">
                    <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-[#692C90]">
                      Send This Inquiry Directly To Our Chief Coordinator via WhatsApp:
                    </span>
                    <a
                      href={getWhatsAppLeadUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-royal-gold text-[12px] font-extrabold uppercase tracking-widest rounded-sm shadow-md"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4DAF4E]" />
                      <span>Send to WhatsApp Now (+91 98272 86535)</span>
                    </a>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      id="reset-enquiry-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
                    >
                      New Inquiry Form
                    </button>
                  </div>
                </div>
              )}

              {/* 10 Required Fields */}
              <form
                ref={formRef}
                id="catering-quote-form"
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 1. Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-full-name"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      1. Full Name <span className="text-[#D7263D]">*</span>
                    </label>
                    <input
                      id="client-full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => {
                        setFormError(null);
                        setFullName(e.target.value);
                      }}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-phone"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      2. Phone Number <span className="text-[#D7263D]">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setFormError(null);
                        setPhone(e.target.value);
                      }}
                      placeholder="+91 98272 86535"
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Email Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-email"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      3. Email Address
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>

                  {/* 4. Event Type */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-type"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      4. Event Type <span className="text-[#D7263D]">*</span>
                    </label>
                    <select
                      id="client-event-type"
                      required
                      value={eventType}
                      onChange={(e) => {
                        setFormError(null);
                        setEventType(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] focus:bg-white focus:border-[#692C90] transition-colors"
                    >
                      <option value="" disabled>
                        Select occasion...
                      </option>
                      <option value="Wedding Banquet">Wedding Catering</option>
                      <option value="Corporate Gala">Corporate Catering</option>
                      <option value="Birthday & Soirée">Birthday &amp; Private Parties</option>
                      <option value="Social & Religious Feast">Social &amp; Special Events</option>
                      <option value="Buffet & Live Counter Theatre">Buffet &amp; Live Counters</option>
                      <option value="Bespoke Multi-Day Package">Customised Catering Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 5. Event Date */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-date"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      5. Event Date <span className="text-[#D7263D]">*</span>
                    </label>
                    <input
                      id="client-event-date"
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => {
                        setFormError(null);
                        setEventDate(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>

                  {/* 6. Event Location */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-location"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      6. Event Location / Venue <span className="text-[#D7263D]">*</span>
                    </label>
                    <input
                      id="client-event-location"
                      type="text"
                      required
                      value={eventLocation}
                      onChange={(e) => {
                        setFormError(null);
                        setEventLocation(e.target.value);
                      }}
                      placeholder="Venue, lawn or locality in Indore"
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 7. Expected Number of Guests */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-guest-count"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      7. Expected Guests <span className="text-[#D7263D]">*</span>
                    </label>
                    <input
                      id="client-guest-count"
                      type="number"
                      min="10"
                      required
                      value={guestCount}
                      onChange={(e) => {
                        setFormError(null);
                        setGuestCount(e.target.value);
                      }}
                      placeholder="e.g. 350"
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors"
                    />
                  </div>

                  {/* 8. Estimated Budget Format */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-estimated-budget"
                      className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                    >
                      8. Dining Format &amp; Budget
                    </label>
                    <select
                      id="client-estimated-budget"
                      value={estimatedBudget}
                      onChange={(e) => setEstimatedBudget(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] focus:bg-white focus:border-[#692C90] transition-colors"
                    >
                      <option value="To be discussed during consultation">
                        To be discussed during consultation
                      </option>
                      <option value="Deluxe Pure Veg Buffet">Deluxe Pure Veg Buffet</option>
                      <option value="Royal Wedding Banquet & Live Counters">
                        Royal Wedding Banquet &amp; Live Counters
                      </option>
                      <option value="Traditional Silver Pangat Thali Service">
                        Traditional Silver Pangat Thali Service
                      </option>
                      <option value="Executive Corporate Package">Executive Corporate Package</option>
                    </select>
                  </div>
                </div>

                {/* 9. Menu Preferences */}
                <fieldset className="flex flex-col gap-3">
                  <legend className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold mb-1">
                    9. Menu Preferences <span className="text-[#D7263D]">*</span>
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {MENU_PREF_OPTIONS.map((pref) => {
                      const checked = selectedMenuPrefs.includes(pref);
                      return (
                        <label key={pref} className="cursor-pointer">
                          <input
                            type="checkbox"
                            name="menu_pref"
                            value={pref}
                            checked={checked}
                            onChange={() => toggleMenuPref(pref)}
                            className="peer sr-only"
                          />
                          <span className="block px-3 py-2.5 text-center text-[12.5px] font-bold border border-[#D8D0B9] rounded-sm bg-[#FAF7F0] text-[#2B2B2B] peer-checked:bg-[#4A2366] peer-checked:text-[#F1A91E] peer-checked:border-[#F1A91E] transition-all">
                            {pref}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* 10. Additional Requirements */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="client-additional-notes"
                    className="font-sans text-[12px] uppercase tracking-[0.12em] text-[#4A2366] font-bold"
                  >
                    10. Special Requests or Notes
                  </label>
                  <textarea
                    id="client-additional-notes"
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Specific dishes (Dal Bafla, Chowmein, Pav Bhaji, Dum Aloo), strict Jain kitchen discipline, or event timings..."
                    className="w-full px-4 py-3 bg-[#FAF7F0] border border-[#D8D0B9] rounded-sm text-[#2B2B2B] font-semibold text-[14.5px] placeholder:text-[#2B2B2B]/40 focus:bg-white focus:border-[#692C90] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 btn-royal-gold text-[12.5px] font-extrabold uppercase tracking-[0.16em] rounded-sm shadow-md disabled:opacity-60"
                  >
                    {isSubmitting ? 'Recording Enquiry...' : 'Submit Catering Enquiry'}
                  </button>

                  <a
                    href={`${BUSINESS_INFO.whatsappHref}?text=Hello%20Royal%20Caterers%20India,%20I%20would%20like%20to%20discuss%20a%20catering%20quote.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-4 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm text-center"
                  >
                    Or Chat Directly on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/siteData';
import { RoyalImage } from '../components/RoyalImage';

const MENU_PREF_OPTIONS = [
  'Pure Vegetarian',
  'Jain / Sattvic',
  'Malwi Regional',
  'North Indian Banquet',
  'Live Chaat Counter',
  'Desserts & Mithai',
];

/**
 * Contact & Booking Page — Minimal but Functional (Section 11).
 * Features Bold Black typography across all labels, inputs, and buttons,
 * cursive subheadings, 4K photography, and the 10-field Catering Enquiry Form.
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
    'Pure Vegetarian',
    'Malwi Regional',
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
      setFormError('Please enter the event location.');
      return;
    }
    if (!guestCount || Number(guestCount) < 10) {
      setFormError('Please enter the expected number of guests.');
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
    setSelectedMenuPrefs(['Pure Vegetarian', 'Malwi Regional']);
    setAdditionalNotes('');
    setFormError(null);
    setSubmitted(false);
    window.setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="flex flex-col w-full bg-[#FAF8F2] text-black">
      {/* 1. Minimal Editorial Header */}
      <section className="w-full bg-[#FAF8F2] pt-12 pb-12 lg:py-20 border-b border-[#DCD3C2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#173B70]" aria-hidden="true" />
              <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.22em] text-black">
                CONTACT &amp; BOOKING
              </span>
            </div>
            <p className="font-cursive text-[32px] text-[#173B70] mb-1">
              Begin Your Royal Celebration
            </p>
            <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[62px] text-black font-bold leading-[1.1] mb-4">
              Let’s Make Your Next Event Memorable.
            </h1>
            <p className="font-sans text-[16px] text-black font-medium max-w-xl leading-relaxed">
              Share your event date, guest count, and menu preferences below, or reach out directly
              to schedule a private consultation in Indore.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Desktop Layout: Left Contact Details & Map, Right 10-Field Form */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            {/* Left Column (5 Cols): Verified Details, WhatsApp Action & Map Placeholder */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-6 pb-8 border-b border-[#DCD3C2]">
                <div>
                  <p className="font-cursive text-[28px] text-[#173B70] mb-1">
                    Direct Consultation Desk
                  </p>
                  <h2 className="font-serif text-[28px] text-black font-bold mb-2">
                    Royal Caterers India
                  </h2>
                  <p className="font-sans text-[15px] text-black font-medium leading-relaxed">
                    Menu tastings and banquet planning sessions are arranged by prior appointment at
                    our Pardesipura office.
                  </p>
                </div>

                {/* Verified Location */}
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#173B70]">
                    Verified Location
                  </span>
                  <p className="font-sans text-[15.5px] text-black font-bold">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                </div>

                {/* Phone Number (Flagged for Verification Before Publication) */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#173B70]">
                      Phone Number
                    </span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-black bg-[#EFE5CE] px-2 py-0.5 border border-[#C5A15A] rounded-sm">
                      Verify Before Publication
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="font-sans text-[17px] text-black font-bold hover:text-[#173B70] transition-colors w-fit"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="font-sans text-[13px] text-black font-medium">
                    {BUSINESS_INFO.phoneVerificationNote}
                  </span>
                </div>

                {/* WhatsApp Contact Action */}
                <div className="pt-2">
                  <a
                    href={`${BUSINESS_INFO.whatsappHref}?text=Hello%20Royal%20Caterers%20India,%20I%20would%20like%20to%20discuss%20catering%20for%20an%20upcoming%20event.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.15em] rounded-sm"
                  >
                    Chat on WhatsApp ({BUSINESS_INFO.phoneDisplay})
                  </a>
                </div>
              </div>

              {/* Map Placeholder with 4K Visual Backdrop */}
              <div
                id="indore-region-map"
                className="bg-white border border-[#DCD3C2] rounded-sm overflow-hidden flex flex-col justify-between"
              >
                <div className="relative w-full h-48 overflow-hidden border-b border-[#DCD3C2]">
                  <RoyalImage
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2560&q=90"
                    alt="4K Royal Caterers India banquet setting in Indore."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B70] block mb-1">
                      Location Map Placeholder
                    </span>
                    <h3 className="font-serif text-[24px] text-black font-bold mb-2">
                      Pardesipura, Indore
                    </h3>
                    <p className="font-sans text-[14.5px] text-black font-medium leading-relaxed">
                      Interactive map embed reserved for confirmed street coordinates in
                      Pardesipura, Indore, Madhya Pradesh 452003.
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#DCD3C2] flex items-center justify-between">
                    <span className="font-sans text-[11.5px] font-bold uppercase tracking-[0.15em] text-black">
                      Indore &middot; Central India
                    </span>
                    <a
                      href={BUSINESS_INFO.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-black hover:text-[#173B70] transition-colors border-b-2 border-[#173B70] pb-0.5"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Minimal 10-Field Catering Enquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#DCD3C2] rounded-sm p-7 sm:p-10 lg:p-12 shadow-subtle text-black">
              <div className="pb-6 mb-8 border-b border-[#DCD3C2]">
                <p className="font-cursive text-[28px] text-[#173B70] mb-1">
                  Tailored Event Specification
                </p>
                <h2 className="font-serif text-[30px] sm:text-[36px] text-black font-bold">
                  Catering Enquiry Form
                </h2>
              </div>

              {/* Validation Error State */}
              {formError && (
                <div
                  role="alert"
                  className="mb-6 p-4 bg-[#F9E6E6] border border-[#9E2A2B] text-black font-bold text-[14px] rounded-sm"
                >
                  {formError}
                </div>
              )}

              {/* Success State (Designed for Later Backend Connection) */}
              {submitted && (
                <div
                  ref={successRef}
                  id="booking-success-message"
                  role="status"
                  aria-live="polite"
                  className="mb-8 p-6 sm:p-8 bg-[#FAF8F2] border-2 border-[#C5A15A] rounded-sm flex flex-col gap-4 animate-fadeIn text-black"
                >
                  <div>
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#173B70] block mb-1">
                      Enquiry Details Recorded Locally
                    </span>
                    <h3 className="font-serif text-[26px] text-black font-bold">
                      Thank You, {fullName}.
                    </h3>
                  </div>
                  <p className="font-sans text-[15px] text-black font-medium leading-relaxed">
                    Your enquiry for <strong className="text-black font-bold">{eventType}</strong> on{' '}
                    <strong className="text-black font-bold">{eventDate}</strong> ({guestCount}{' '}
                    guests at {eventLocation}) has been prepared. Once backend form delivery is
                    connected, submissions will be routed automatically.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      id="reset-enquiry-form-btn"
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 btn-royal-outline text-[12px] font-bold uppercase tracking-[0.14em] rounded-sm"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              )}

              {/* 10 Required Fields in Bold Black */}
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
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      1. Full Name <span className="text-[#173B70]">*</span>
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
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-phone"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      2. Phone Number <span className="text-[#173B70]">*</span>
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
                      placeholder="+91 98272 XXXXX"
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 3. Email Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-email"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      3. Email Address
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>

                  {/* 4. Event Type */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-type"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      4. Event Type <span className="text-[#173B70]">*</span>
                    </label>
                    <select
                      id="client-event-type"
                      required
                      value={eventType}
                      onChange={(e) => {
                        setFormError(null);
                        setEventType(e.target.value);
                      }}
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] focus:bg-white focus:border-[#173B70] transition-colors"
                    >
                      <option value="" disabled>
                        Select occasion...
                      </option>
                      <option value="Wedding">Wedding Catering</option>
                      <option value="Corporate Event">Corporate Catering</option>
                      <option value="Birthday">Birthday &amp; Private Parties</option>
                      <option value="Social/Special Event">Social &amp; Special Events</option>
                      <option value="Buffet/Live Counter">Buffet &amp; Live Counters</option>
                      <option value="Other">Customised Catering Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 5. Event Date */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-date"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      5. Event Date <span className="text-[#173B70]">*</span>
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
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>

                  {/* 6. Event Location */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-event-location"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      6. Event Location <span className="text-[#173B70]">*</span>
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
                      placeholder="Venue or locality in Indore"
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 7. Expected Number of Guests */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-guest-count"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      7. Expected Number of Guests <span className="text-[#173B70]">*</span>
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
                      placeholder="e.g. 250"
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors"
                    />
                  </div>

                  {/* 8. Estimated Budget */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="client-estimated-budget"
                      className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                    >
                      8. Estimated Budget
                    </label>
                    <select
                      id="client-estimated-budget"
                      value={estimatedBudget}
                      onChange={(e) => setEstimatedBudget(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] focus:bg-white focus:border-[#173B70] transition-colors"
                    >
                      <option value="To be discussed during consultation">
                        To be discussed during consultation
                      </option>
                      <option value="Standard Buffet Format">Standard Buffet Format</option>
                      <option value="Grand Reception & Live Counters">
                        Grand Reception &amp; Live Counters
                      </option>
                      <option value="Bespoke Multi-Day Wedding Package">
                        Bespoke Multi-Day Wedding Package
                      </option>
                      <option value="Executive Corporate Package">
                        Executive Corporate Package
                      </option>
                    </select>
                  </div>
                </div>

                {/* 9. Menu Preferences (Bold Black Text in Both States) */}
                <fieldset className="flex flex-col gap-3">
                  <legend className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold mb-1">
                    9. Menu Preferences <span className="text-[#173B70]">*</span>
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
                          <span className="block px-3.5 py-2.5 text-center text-[13px] font-bold border border-[#DCD3C2] rounded-sm bg-[#FAF8F2] text-black peer-checked:bg-[#D4AF37] peer-checked:text-black peer-checked:border-[#173B70] transition-colors">
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
                    className="font-sans text-[12.5px] uppercase tracking-[0.12em] text-black font-bold"
                  >
                    10. Additional Requirements
                  </label>
                  <textarea
                    id="client-additional-notes"
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Dietary notes, strict Jain preparation requests, or service timings..."
                    className="w-full px-4 py-3 bg-[#FAF8F2] border border-[#DCD3C2] rounded-sm text-black font-semibold text-[15px] placeholder:text-black/50 focus:bg-white focus:border-[#173B70] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 btn-royal-gold text-[12.5px] font-bold uppercase tracking-[0.16em] rounded-sm disabled:opacity-60"
                  >
                    {isSubmitting ? 'Recording Enquiry...' : 'Request a Catering Quote'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import {
  Pill,
  FlaskConical,
  Syringe,
  HeartPulse,
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Users,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Pill,
    title: "Prescription Services",
    description:
      "Fast, accurate prescription filling with insurance processing and medication therapy management. We handle transfers from any pharmacy.",
  },
  {
    icon: FlaskConical,
    title: "Custom Compounding",
    description:
      "Tailored medications in custom dosages, flavors, and forms. Ideal for patients with allergies or unique therapeutic needs.",
  },
  {
    icon: Syringe,
    title: "Immunizations",
    description:
      "Walk-in flu shots, COVID-19, shingles, pneumonia, and travel vaccinations administered by certified pharmacists.",
  },
  {
    icon: HeartPulse,
    title: "Health Screenings",
    description:
      "Comprehensive screenings for blood pressure, cholesterol, blood glucose, and BMI with personalized wellness guidance.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description:
      "Same-day prescription delivery within a 10-mile radius. Schedule recurring deliveries for monthly medications.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Patient since 2019",
    quote:
      "HealthFirst has been our family pharmacy for years. The pharmacists know us by name and always take time to answer questions about our medications.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Patient since 2021",
    quote:
      "The compounding service was a game-changer for my son who can't swallow pills. They made his medication into a flavor he actually likes.",
    rating: 5,
  },
  {
    name: "Linda R.",
    role: "Patient since 2020",
    quote:
      "Free delivery is incredibly convenient. I never have to worry about missing a dose, and the pharmacists always call to check in.",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Years Serving the Community" },
  { value: "50K+", label: "Prescriptions Filled Annually" },
  { value: "4.9", label: "Average Patient Rating" },
  { value: "98%", label: "Insurance Plans Accepted" },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  MOBILE NAV (client component inline)                               */
/* ------------------------------------------------------------------ */

function MobileNavToggle() {
  return (
    <>
      {/* checkbox hack for pure-CSS mobile menu toggle */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer hidden"
        aria-label="Toggle navigation menu"
      />
      <label
        htmlFor="mobile-menu-toggle"
        className="relative z-50 flex cursor-pointer items-center justify-center md:hidden"
        aria-label="Open menu"
      >
        <Menu className="block h-6 w-6 peer-checked:hidden" />
        <X className="hidden h-6 w-6 peer-checked:block" />
      </label>
      {/* overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-black/50 opacity-0 transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100 md:hidden" />
      {/* slide-out panel */}
      <nav className="fixed right-0 top-0 z-40 flex h-full w-64 translate-x-full flex-col gap-6 bg-white px-8 pt-24 shadow-xl transition-transform peer-checked:translate-x-0 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg font-medium text-gray-700 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Get in Touch
        </a>
      </nav>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HEADER / NAV ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              Health<span className="text-primary">First</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile nav toggle */}
          <MobileNavToggle />
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%20fill%3D%22rgba(255%2C255%2C255%2C0.08)%22%2F%3E%3C%2Fsvg%3E')] bg-repeat" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
              Trusted by 10,000+ patients
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Health,{" "}
              <span className="text-emerald-200">Our Priority</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50/90">
              HealthFirst Pharmacy provides personalized pharmaceutical care
              with prescription services, custom compounding, immunizations,
              health screenings, and free local delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-emerald-50"
              >
                Transfer Your Prescription
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="section-alt scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Comprehensive Pharmacy Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From everyday prescriptions to specialized compounding, we deliver
              the full spectrum of pharmaceutical care.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-emerald-100">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 p-12 text-center">
                <Shield className="h-20 w-20 text-primary/40" />
                <p className="text-lg font-semibold text-primary/60">
                  HealthFirst Pharmacy
                </p>
                <p className="text-sm text-primary/40">
                  Serving Springfield since 2009
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Locally Owned. Community Focused.
              </h2>
              <p className="mt-6 leading-relaxed text-gray-500">
                Founded in 2009, HealthFirst Pharmacy was built on a simple
                idea: everyone deserves a pharmacist who knows their name, their
                history, and their health goals. Unlike big-box pharmacies, we
                take the time to counsel every patient and coordinate with
                healthcare providers to ensure the best outcomes.
              </p>
              <p className="mt-4 leading-relaxed text-gray-500">
                Our team of licensed pharmacists and certified technicians brings
                decades of combined experience in retail pharmacy, clinical
                pharmacy, and specialty compounding.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-sm text-gray-500">
                      Licensed pharmacists on staff
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">Accredited</p>
                    <p className="text-sm text-gray-500">
                      State &amp; nationally certified
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HeartPulse className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Patient-First
                    </p>
                    <p className="text-sm text-gray-500">
                      Personalized care always
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section id="testimonials" className="section-alt scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Patient Stories
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="flex-1 leading-relaxed text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                We&rsquo;re Here to Help
              </h2>
              <p className="mt-4 leading-relaxed text-gray-500">
                Have a question about your prescription, want to transfer, or
                need to schedule an immunization? Reach out and our team will
                respond promptly.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-500">
                      123 Main Street, Springfield, IL 62701
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-500 hover:text-primary"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:info@healthfirstpharmacy.com"
                      className="text-gray-500 hover:text-primary"
                    >
                      info@healthfirstpharmacy.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-500">Mon&ndash;Fri: 8 AM &ndash; 8 PM</p>
                    <p className="text-gray-500">Sat: 9 AM &ndash; 6 PM</p>
                    <p className="text-gray-500">Sun: 10 AM &ndash; 4 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 sm:p-10">
              <h3 className="text-xl font-semibold text-gray-900">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and we&rsquo;ll get back to you within
                one business day.
              </p>
              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-1.5 block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-gray-900 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="flex items-center gap-2">
                <Shield className="h-7 w-7 text-primary" />
                <span className="text-lg font-bold text-white">
                  Health<span className="text-primary">First</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Your trusted community pharmacy delivering personalized care and
                comprehensive pharmaceutical services since 2009.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {services.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="transition-colors hover:text-white"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  123 Main St, Springfield, IL
                </li>
                <li>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    (555) 123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@healthfirstpharmacy.com"
                    className="flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    info@healthfirstpharmacy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} HealthFirst Pharmacy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

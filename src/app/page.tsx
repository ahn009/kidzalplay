"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PlayCircle,
  Music,
  Palette,
  Sun,
  Heart,
  BookOpen,
  Apple,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Star,
  Users,
  Award,
  GraduationCap,
  ArrowRight,
  Download,
  Sparkles,
  Baby,
  CalendarCheck,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ─── Intersection Observer Hook ─── */
function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const { ref, isInView } = useScrollAnimation();
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directions[direction].y,
              x: directions[direction].x,
            }
      }
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Counter Animation ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ─── Programs Data ─── */
const programs = [
  {
    title: "Before & After School",
    description:
      "Structured morning and afternoon support with homework help, guided activities, and supervised care for school-age children.",
    icon: Clock,
    image: "/images/kidz-official-classroom-01.jpg",
    imageAlt: "Children participating in a supervised classroom activity",
    color: "from-orange-400 to-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    age: "5 - 13 years",
  },
  {
    title: "Early Learning & Full Care",
    description:
      "Full-day care in a nurturing environment with age-appropriate routines, play-based learning, and social development.",
    icon: Baby,
    image: "/images/kidz-official-daycare-01.jpg",
    imageAlt: "Children playing together in a day care setting",
    color: "from-teal-400 to-teal-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    age: "3 months - 5 years",
  },
  {
    title: "Autism & Special Needs Support",
    description:
      "Inclusive support for children with autism and developmental needs, with individualized attention and adapted learning activities.",
    icon: Heart,
    image: "/images/kidz-hero-speech-therapy.jpg",
    imageAlt: "Educator using sign language with children during a speech therapy activity",
    color: "from-rose-400 to-rose-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
    age: "All ages",
  },
  {
    title: "Music & Art Program",
    description:
      "Creative expression through music lessons, visual arts, and craft activities that inspire imagination and develop artistic skills.",
    icon: Palette,
    image: "/images/kidz-art-support.jpg",
    imageAlt: "Teacher and child sharing encouragement during an art class",
    color: "from-purple-400 to-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    age: "3 - 13 years",
  },
  {
    title: "Summer Program",
    description:
      "Fun-filled summer activities including outdoor games, educational field trips, swimming, and themed weekly camps to keep kids engaged.",
    icon: Sun,
    image: "/images/kidz-official-zoo-01.jpg",
    imageAlt: "Children learning during an educational zoo activity",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    age: "3 - 13 years",
  },
  {
    title: "Healthy Nutrition",
    description:
      "Balanced meals and snacks prepared daily, following USDA guidelines to ensure every child receives proper nutrition for growth and energy.",
    icon: Apple,
    image: "/images/kids-nutrition.png",
    imageAlt: "Children enjoying healthy food and nutrition activities",
    color: "from-green-400 to-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    age: "All programs",
  },
];

/* ─── Gallery Images ─── */
const galleryImages = [
  { src: "/images/kidz-official-location-01.jpg", alt: "New Kidz at Play location" },
  { src: "/images/kidz-official-location-03.jpg", alt: "Bright learning room" },
  { src: "/images/kidz-official-location-04.jpg", alt: "Child care classroom setup" },
  { src: "/images/kidz-official-location-05.jpg", alt: "Activity space for children" },
  { src: "/images/kidz-official-location-06.jpg", alt: "Play and learning area" },
  { src: "/images/kidz-official-location-07.jpg", alt: "Classroom furniture and supplies" },
  { src: "/images/kidz-official-location-08.jpg", alt: "Welcoming center interior" },
  { src: "/images/kidz-official-curriculum-01.jpg", alt: "Child care curriculum materials" },
];

const trustImages = [
  { src: "/images/kidz-math-support.jpg", alt: "" },
  { src: "/images/kidz-occupational-therapy.jpg", alt: "" },
  { src: "/images/kidz-classroom-presentation.jpg", alt: "" },
  { src: "/images/kidz-teacher-guidance.webp", alt: "" },
];

/* ─── Navigation Data ─── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navigation ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mobileMenuOpen
            ? "bg-background/95 shadow-lg shadow-black/5 py-3 border-b border-warm-orange/10 dark:border-white/10"
            : scrolled
            ? "glass shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-2 ring-warm-orange/20 group-hover:ring-warm-orange/50 transition-all">
              <img
                src="/images/logo-icon.png"
                alt="Kidz at Play"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-foreground leading-none">
                Kidz<span className="text-warm-orange">AtPlay</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Non-Profit Organization
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-warm-orange rounded-lg hover:bg-warm-orange/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle className="ml-2" />
            <Button
              asChild
              className="ml-3 bg-warm-orange hover:bg-warm-orange-dark text-white font-bold rounded-full px-6 shadow-lg shadow-warm-orange/25 hover:shadow-warm-orange/40 transition-all"
            >
              <a href="#contact">Enroll Now</a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card text-foreground shadow-sm ring-1 ring-border transition-colors hover:bg-warm-orange/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-orange"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl border border-warm-orange/10 bg-card shadow-2xl shadow-black/15 md:hidden"
            >
              <div className="px-3 py-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-bold text-foreground/85 transition-colors hover:bg-warm-orange/10 hover:text-warm-orange"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-2 h-12 w-full rounded-xl bg-warm-orange font-bold text-white shadow-lg hover:bg-warm-orange-dark"
                >
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Enroll Now
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(180deg,color-mix(in_srgb,var(--warm-cream)_72%,white)_0%,var(--background)_78%)] dark:bg-[linear-gradient(180deg,#111520_0%,var(--background)_78%)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-orange/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-bold bg-white/80 text-warm-green-dark border border-warm-green/20 rounded-full shadow-sm dark:bg-card/80"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  A Non-Profit Organization Since 2010
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-balance"
              >
                Enrichment{" "}
                <span className="gradient-text-warm">Beyond the</span>
                <br />
                Classroom
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground lg:mx-0 leading-relaxed text-balance"
              >
                Helping children, including children with autism and developmental needs, learn
                in a friendly, educational, and safe environment. From{" "}
                <span className="font-bold text-foreground">3 months to 13 years old</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-warm-orange hover:bg-warm-orange-dark text-white font-bold rounded-full px-8 h-14 text-base shadow-lg shadow-warm-orange/25 transition-all active:scale-[0.98]"
                >
                  <a href="#programs">
                    Explore Programs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/70 font-bold rounded-full px-8 h-14 text-base border-2 border-foreground/15 hover:border-warm-orange hover:text-warm-orange transition-all active:scale-[0.98] dark:bg-card/70"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {trustImages.map((img) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-foreground">Trusted by</div>
                    <div className="text-muted-foreground">200+ families</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-warm-yellow text-warm-yellow"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-foreground">5.0</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-[1.75rem] bg-white/70 shadow-2xl shadow-warm-orange/10 dark:bg-card/60" />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 shadow-2xl shadow-black/10 dark:border-white/10">
                  <img
                    src="/images/kidz-official-afterschool-01.jpg"
                    alt="Children learning together at Kidz at Play"
                    className="aspect-[4/3] w-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                {/* Floating card: New Location */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-3 top-3 max-w-[220px] rounded-2xl bg-white/90 p-4 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur dark:bg-card/90 sm:-left-6 sm:top-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-green/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-warm-green" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">NEW LOCATION</p>
                      <p className="text-xs text-muted-foreground">27 Jasper St, Paterson</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card: Enrollment */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 right-3 max-w-[200px] rounded-2xl bg-white/90 p-4 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur dark:bg-card/90 sm:-right-5 sm:bottom-14"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-warm-orange/20 flex items-center justify-center">
                      <CalendarCheck className="w-5 h-5 text-warm-orange" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">NOW ENROLLING</p>
                      <p className="text-xs text-muted-foreground">3mo - 13yrs</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#announcement"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-warm-orange transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* ═══════════ ANNOUNCEMENT BANNER ═══════════ */}
      <section id="announcement" className="relative py-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-warm-orange via-warm-coral to-warm-orange animate-[shimmer_8s_linear_infinite]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-white">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-extrabold">
                We&apos;re Excited to Announce Our New State-of-the-Art Location!
              </h3>
            </div>
            <div className="h-6 w-px bg-white/30 hidden sm:block" />
            <p className="text-white/90 font-semibold">
              27 Jasper St, Paterson, New Jersey &mdash; <span className="text-warm-yellow font-extrabold">NOW ENROLLING!</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT SECTION ═══════════ */}
      <section id="about" className="relative overflow-hidden py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[1.75rem] bg-warm-green/10" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-black/5">
                  <img
                    src="/images/kidz-official-location-02.jpg"
                    alt="New Kidz at Play classroom and child care space"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
                {/* Stat card */}
                <div className="absolute -bottom-6 right-4 rounded-2xl border border-border bg-card/95 p-6 shadow-xl shadow-black/10 backdrop-blur sm:-right-6">
                  <div className="text-3xl font-black text-warm-orange">
                    <AnimatedCounter target={15} suffix="+" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Years of Service
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Content */}
            <div className="space-y-6">
              <AnimatedSection>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-bold bg-warm-teal/10 text-warm-teal border border-warm-teal/20 rounded-full"
                >
                  About Us
                </Badge>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Nurturing Young Minds,{" "}
                  <span className="gradient-text-fresh">Building Futures</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kidz at Play Recreation Community Service is a non-profit
                    organization incorporated in 2010, focused on programs and
                    services of social and educational developments. We promote
                    the universal right to a transformative education that
                    empowers children and adolescents, including children with
                    autism and developmental needs who benefit from structured
                    social and educational support.
                  </p>
                  <p>
                    Our services provide opportunities for social groups in need
                    of care, working with state entities and designated budgets
                    to improve quality of life for citizens. We seek support
                    from the private and public sector to develop our services
                    at national and international level.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    {
                      icon: Users,
                      label: "Licensed & Insured",
                      value: "Program For Parents",
                    },
                    {
                      icon: Award,
                      label: "Ages Served",
                      value: "3mo - 13 years",
                    },
                    {
                      icon: GraduationCap,
                      label: "Education Focus",
                      value: "Play-Based Learning",
                    },
                    {
                      icon: Heart,
                      label: "Inclusive Care",
                      value: "All Abilities Welcome",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-warm-orange/25 hover:shadow-md"
                    >
                      <item.icon className="w-5 h-5 text-warm-orange mb-2" />
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-foreground mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS SECTION ═══════════ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#111827] to-[#0F172A] dark:from-[#05070D] dark:via-[#0B1020] dark:to-[#05070D]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                target: 200,
                suffix: "+",
                label: "Happy Families",
              },
              {
                icon: Baby,
                target: 500,
                suffix: "+",
                label: "Children Enrolled",
              },
              { icon: BookOpen, target: 15, suffix: "+", label: "Years of Service" },
              {
                icon: Star,
                target: 6,
                suffix: "",
                label: "Programs Offered",
              },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-warm-orange/10 mb-4">
                  <stat.icon className="w-7 h-7 text-warm-orange" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-semibold text-white/60 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROGRAMS SECTION ═══════════ */}
      <section id="programs" className="relative overflow-hidden bg-muted/35 py-24 dark:bg-muted/15">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-bold bg-warm-orange/10 text-warm-orange border border-warm-orange/20 rounded-full mb-6"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Our Programs
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                After-School Programs{" "}
                <span className="gradient-text-sunshine">and More</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground mt-4">
                From toddlers to 13 years old, we offer a diverse range of
                programs designed to nurture, educate, and inspire every child.
              </p>
            </AnimatedSection>
          </div>

          {/* Program Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <Card className="group h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm-orange/20 hover:shadow-xl hover:shadow-black/10">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-25 transition-opacity group-hover:opacity-35`}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${program.bgColor} ${program.textColor} font-bold rounded-full border-0 px-3`}>
                        {program.age}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}>
                        <program.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex min-h-[230px] flex-col p-6">
                    <h3 className="text-xl font-extrabold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <Button
                        variant="ghost"
                        className="h-auto p-0 font-bold text-warm-orange hover:bg-transparent hover:text-warm-orange-dark"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#1A1A2E] hover:bg-[#24243E] dark:bg-warm-orange dark:hover:bg-warm-orange-dark text-white font-bold rounded-full px-8 h-14 shadow-xl transition-all hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black">
                    Download Our Brochure
                  </DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">
                  Get detailed information about all our programs, enrollment
                  requirements, and what makes Kidz at Play special. Contact us
                  at{" "}
                  <span className="font-bold text-warm-orange">
                    (862) 237-7291
                  </span>{" "}
                  or{" "}
                  <span className="font-bold text-warm-orange">
                    info@kidzatplay.org
                  </span>{" "}
                  to receive a copy.
                </p>
                <Button className="w-full bg-warm-orange hover:bg-warm-orange-dark font-bold rounded-full mt-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Request via Email
                </Button>
              </DialogContent>
            </Dialog>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ GALLERY SECTION ═══════════ */}
      <section id="gallery" className="relative overflow-hidden bg-warm-cream py-24 dark:bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-bold bg-warm-green/10 text-warm-green-dark border border-warm-green/20 rounded-full mb-6"
              >
                <Palette className="w-4 h-4 mr-2" />
                Gallery
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Moments of <span className="gradient-text-fresh">Joy & Learning</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground mt-4">
                A glimpse into the daily activities, celebrations, and growth
                happening at Kidz at Play.
              </p>
            </AnimatedSection>
          </div>

          {/* Gallery Grid */}
          <AnimatedSection>
            <div className="hidden gap-4 md:grid md:grid-cols-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/70 bg-card shadow-sm shadow-black/5 ${
                    i === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      i === 0 ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-square"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-bold">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Carousel for mobile */}
          <div className="mt-8 md:hidden">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {galleryImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" />
              <CarouselNext className="hidden" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT / LOCATIONS SECTION ═══════════ */}
      <section id="contact" className="relative overflow-hidden py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-bold bg-warm-rose/10 text-warm-rose border border-warm-rose/20 rounded-full mb-6"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Get in <span className="gradient-text-warm">Touch</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground mt-4">
                Visit any of our three locations or reach out to us directly.
                We&apos;re here to help your family thrive.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Cards */}
            {[
              {
                name: "Newark - Avon Ave",
                address: "452 Avon Ave, Newark, NJ 07108",
                isNew: false,
                gradient: "from-warm-orange to-warm-yellow",
              },
              {
                name: "Newark - Avon Ave",
                address: "176 Avon Ave, Newark, NJ 07108",
                isNew: false,
                gradient: "from-warm-green to-warm-teal",
              },
              {
                name: "Paterson - Jasper St",
                address: "27 Jasper St, Paterson, NJ 07522",
                isNew: true,
                gradient: "from-warm-rose to-warm-lavender",
              },
            ].map((location, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="group h-full overflow-hidden rounded-2xl border border-border/70 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  {/* Gradient top bar */}
                  <div
                    className={`h-2 bg-gradient-to-r ${location.gradient}`}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${location.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-extrabold text-foreground">
                            {location.name}
                          </h3>
                          {location.isNew && (
                            <Badge className="bg-warm-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-0">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Info Bar */}
          <AnimatedSection delay={0.3} className="mt-12">
            <Card className="overflow-hidden rounded-2xl border-0 shadow-xl shadow-black/10">
              <div className="bg-gradient-to-r from-[#1A1A2E] to-[#111827] dark:from-[#05070D] dark:to-[#0B1020] p-8">
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-warm-orange/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-warm-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-semibold uppercase tracking-wider">
                        Phone
                      </p>
                      <a
                        href="tel:8622377291"
                        className="text-lg font-bold text-white hover:text-warm-orange transition-colors"
                      >
                        (862) 237-7291
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-warm-green/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-warm-green" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-semibold uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:info@kidzatplay.org"
                        className="text-lg font-bold text-white hover:text-warm-green transition-colors"
                      >
                        info@kidzatplay.org
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-warm-yellow/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-warm-yellow" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 font-semibold uppercase tracking-wider">
                        Hours
                      </p>
                      <p className="text-lg font-bold text-white">
                        Mon - Fri, 6:30 AM - 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-orange via-warm-coral to-warm-rose" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Give Your Child
              <br />
              the Best Start?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-lg text-white/90 mt-6 max-w-2xl mx-auto">
              Join over 200 families who trust Kidz at Play for their
              children&apos;s care and education. Enroll today and watch your child
              thrive in a nurturing, safe, and fun environment.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-white px-10 text-base font-bold text-warm-orange shadow-xl transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                <a href="tel:8622377291">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (862) 237-7291
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-white/50 bg-white/10 px-10 text-base font-bold text-white backdrop-blur transition-all hover:border-white hover:bg-white/15 active:scale-[0.98]"
              >
                <a href="mailto:info@kidzatplay.org">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="relative bg-[#1A1A2E] text-white dark:bg-[#05070D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-warm-orange/30">
                  <img
                    src="/images/logo-icon.png"
                    alt="Kidz at Play"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-extrabold">
                  Kidz<span className="text-warm-orange">AtPlay</span>
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Kidz at Play Recreation Community Service is a non-profit
                organization incorporated in 2010 focused on programs and
                services of social and educational developments.
              </p>
              <p className="text-xs text-white/40">
                Affiliated with Program For Parents
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white/80 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Programs", href: "#programs" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-warm-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white/80 mb-4">
                Programs
              </h4>
              <ul className="space-y-3">
                {[
                  "Before & After School",
                  "Early Learning & Full Care",
                  "Autism & Special Needs Support",
                  "Music & Art",
                  "Summer Program",
                  "Healthy Nutrition",
                ].map((program) => (
                  <li key={program}>
                    <a
                      href="#programs"
                      className="text-sm text-white/50 hover:text-warm-orange transition-colors"
                    >
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white/80 mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:8622377291"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-warm-orange transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (862) 237-7291
                </a>
                <a
                  href="tel:8622377292"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-warm-orange transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Fax: (862) 237-7292
                </a>
                <a
                  href="mailto:info@kidzatplay.org"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-warm-orange transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@kidzatplay.org
                </a>
                <div className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    452 Avon Ave, Newark NJ 07108
                    <br />
                    27 Jasper St, Paterson NJ 07522
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Kidz at Play Recreation
              Community Service. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              A Non-Profit Organization Since 2010
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Globe, BarChart3, MapPin, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Webild"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Support", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Webild Studio"
          description="Crafting premium digital experiences through elegant design and strategic innovation. We transform your vision into sophisticated digital solutions."
          buttons={[
            { text: "Explore Our Work", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          background={{ variant: "aurora" }}
          imageSrc="http://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797631.jpg"
          imageAlt="Webild Studio showcase"
          frameStyle="card"
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Redefining Digital" },
            { type: "image", src: "http://img.b2bpic.net/free-photo/young-pregnant-woman-work_23-2149292781.jpg", alt: "Brand identity" },
            { type: "text", content: "Excellence" }
          ]}
          buttons={[
            { text: "About Us", href: "#about" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Collection"
          description="Discover our curated selection of premium digital solutions and design services tailored for discerning brands."
          products={[
            {
              id: "1",              name: "Web Design",              price: "Premium",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-still-life-arrangement-with-water_23-2149176107.jpg",              imageAlt: "Web design service"
            },
            {
              id: "2",              name: "Brand Identity",              price: "Signature",              imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230633.jpg",              imageAlt: "Brand identity design"
            },
            {
              id: "3",              name: "Digital Strategy",              price: "Professional",              imageSrc: "http://img.b2bpic.net/free-photo/stacked-aesthetic-objects-still-life_23-2150230633.jpg",              imageAlt: "Strategic digital consulting"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Why Choose Webild"
          description="We combine strategic thinking with exceptional design to deliver transformative digital experiences."
          features={[
            {
              title: "Strategic Approach",              description: "Data-driven insights inform every design decision",              bentoComponent: "globe"
            },
            {
              title: "Performance Metrics",              description: "Real-time analytics and measurable results",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Global Reach",              description: "Connect with audiences worldwide",              bentoComponent: "map"
            },
            {
              title: "Growth Tracking",              description: "Monitor your success with detailed analytics",              bentoComponent: "line-chart"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Webild transformed our digital presence completely. Their attention to detail and strategic thinking elevated our brand to new heights. The results exceeded every expectation we had."
          rating={5}
          author="Sarah Mitchell, CEO"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Sarah Mitchell" },
            { src: "http://img.b2bpic.net/free-photo/close-up-successful-entrepreneur_1098-3855.jpg", alt: "Client testimonial" },
            { src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg", alt: "Client testimonial" },
            { src: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg", alt: "Client testimonial" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process."
          faqs={[
            {
              id: "1",              title: "What is your design process?",              content: "We follow a comprehensive approach: discovery, strategy, design, development, and ongoing optimization. Each phase is collaborative and transparent."
            },
            {
              id: "2",              title: "How long does a project typically take?",              content: "Project timelines vary based on scope and complexity. Most projects range from 8-16 weeks, with regular milestone check-ins."
            },
            {
              id: "3",              title: "Do you offer ongoing support?",              content: "Yes, we provide comprehensive support packages including maintenance, updates, and optimization to ensure your site performs optimally."
            },
            {
              id: "4",              title: "What makes Webild different?",              content: "We combine strategic thinking with exceptional design. Our team prioritizes understanding your business goals to deliver solutions that drive real results."
            }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/call-center-agent-typing-pc-keyboard-assisting-customers-through-live-chat_482257-125755.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Ready to elevate your brand?"
          description="Let's discuss how Webild can transform your digital presence. Contact our team today to schedule a consultation."
          tagIcon={Sparkles}
          background={{ variant: "aurora" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Contact Us"
          termsText="We respect your privacy. Your information will be handled securely."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Webild"
          columns={[
            {
              title: "Product",              items: [
                { label: "Web Design", href: "#products" },
                { label: "Brand Strategy", href: "#products" },
                { label: "Digital Solutions", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Help Center", href: "#faq" },
                { label: "Documentation", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Webild Studio. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}

/**
 * Vaishnav Portfolio - Interactive JavaScript
 * Software Engineer & Mobile Application Developer
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initHeaderScroll();
  initMobileMenu();
  initActiveNavLink();
  initScrollReveal();
  initStatsCounter();
  initTimelineTabs();
  initSkillsStaggerAnimation();
  initSkillsFilter();
  initProjectModal();
  initInsightAccordions();
  initContactForm();
  initBackToTop();
  initTiltEffect();
});

/* ==========================================================================
   Interactive Experience & Education Tab Switcher
   ========================================================================== */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const tabPanes = document.querySelectorAll('.timeline-pane');

  if (!tabBtns.length || !tabPanes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update active tab buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Switch panes with smooth animation
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });
}

/* ==========================================================================
   Project Data Dictionary for Interactive Modal (With Image Support)
   ========================================================================== */
const projectData = {
  'fooddash-app': {
    badge: 'Featured Mobile App',
    title: 'FoodDash — Food Delivery App',
    subtitle: 'Cross-Platform Mobile Ordering & Delivery Ecosystem',
    image: 'assets/images/fooddash.png',
    description: 'Built end-to-end for Android & iOS using Flutter with GetX state management and a robust Django REST Framework backend. Designed for seamless user experience from onboarding and search to cart checkout and order delivery status.',
    features: [
      'Interactive splash & onboarding walkthrough with high-conversion visuals.',
      'Secure OTP-based phone authentication and user profile management.',
      'Searchable real-time menu feed with dynamic category filters and spotlight offers.',
      'Comprehensive product detail page with portion sizes, toppings, and special instructions.',
      'Full cart & checkout pipeline with real-time order state updates and delivery dispatch integration.'
    ],
    architecture: 'Clean MVVM architecture using GetX dependency injection & reactive controllers. Integrated Django REST Framework APIs, PostgreSQL, and Firebase Cloud Messaging for instant order notifications.',
    archFlow: ['Flutter Mobile UI', 'GetX Controllers', 'Django REST APIs', 'PostgreSQL & Firebase FCM'],
    impact: 'Shipped 15+ production features in 2-week Agile sprints; sustained 1,000+ active users with near-zero downtime.',
    tags: ['Flutter', 'Dart', 'GetX', 'Django REST', 'Firebase', 'Android & iOS', 'PostgreSQL'],
    github: 'https://github.com/Yyshnav'
  },
  'inco-app': {
    badge: 'Mobile Loyalty & Rewards',
    title: 'INCO — Loyalty & Rewards App',
    subtitle: 'Flutter · QR Scan-to-Earn · Points Wallet & Redemption',
    image: 'assets/images/inco.png',
    description: 'A cross-platform loyalty and reward application built using Flutter for the mobile client and a PHP backend with REST APIs and Firebase Auth. Enables customers to scan product QR codes, accumulate points in a digital wallet, and redeem gifts effortlessly.',
    features: [
      'High-speed QR Code scanner allowing customers to scan-to-earn instant loyalty points.',
      'Real-time digital points wallet displaying accrued balance and gift reward catalog.',
      'Secure user authentication with Firebase Auth, email/phone login, and profile tracking.',
      'Integrated in-app customer support center and manufacturer direct contact channel.'
    ],
    architecture: 'Cross-platform Flutter frontend utilizing reactive state management and native camera channels for QR scanning. Integrated with a secure PHP REST API and MySQL database for point ledgers and Firebase Auth for credentials.',
    archFlow: ['Flutter Client', 'Camera QR Scanner', 'PHP REST API', 'MySQL Ledger & Firebase Auth'],
    impact: 'Boosted end-user customer engagement and automated point ledger tracking for INDU Components products.',
    tags: ['Flutter', 'Dart', 'PHP', 'HTML5 / CSS3', 'REST APIs', 'Firebase Auth', 'MySQL', 'QR Scanner', 'Google Play'],
    github: 'https://github.com/Yyshnav',
    playstore: 'https://play.google.com/store/apps/details?id=com.inducomponents.incobenefit&hl=en_IN&pli=1'
  },
  'waytofresh-ecosystem': {
    badge: 'Freelance (Mar 2026 – Present)',
    title: 'WayToFresh — Full Product Ecosystem',
    subtitle: 'Customer App • Mr Deliver Partner App • Django Admin Dashboard',
    image: 'assets/images/waytofresh.png',
    description: 'Building WayToFresh, a full-stack delivery platform, as sole developer working remotely on a freelance basis. Architecting and building three components end-to-end: Flutter customer app, Flutter delivery-partner app, and an advanced Django REST admin dashboard.',
    features: [
      '01. WayToFresh Customer App (Flutter): Home & search, dynamic product catalogs, interactive location picker, and streamlined cart & checkout.',
      '02. Mr Deliver Partner App (Flutter): Driver authentication, task dashboard, active delivery route tracking, and driver profile management.',
      '03. WayToFresh Admin Web Dashboard (Django): Real-time order dispatching, product & category management, rider assignment, and push notification controls.',
      'Real-time order tracking via Django Channels (WebSockets) & live rider GPS navigation with Google Maps API.',
      'Asynchronous task processing with Celery & Redis for notification batches and background jobs.',
      'Push notifications via Firebase Cloud Messaging (FCM), SimpleJWT authentication, and Django Signals for automated order state transitions.'
    ],
    architecture: 'Full-stack solo architecture connecting two Flutter cross-platform mobile apps to a Django REST Framework backend with Django Channels (WebSockets) for real-time bidirectional streams, Celery + Redis for task queues, Google Maps SDK for navigation, PostgreSQL database models, and Firebase for FCM & auth.',
    archFlow: ['Flutter Mobile Apps', 'Django Channels (WebSockets)', 'Celery & Redis Worker Queues', 'Google Maps API & PostgreSQL'],
    impact: 'Sole developer owning end-to-end system architecture, mobile frontend, backend APIs, and admin dashboard in active development.',
    tags: ['Flutter', 'Dart', 'Django REST', 'Django Channels', 'Celery & Redis', 'WebSockets', 'Google Maps API', 'Firebase FCM', 'PostgreSQL', 'Freelance'],
    github: 'https://github.com/Yyshnav'
  },
  'crews-auto': {
    badge: 'Featured Mobile App',
    title: 'Crews Auto — Premium Auto Repair Shop',
    subtitle: 'Flutter · Provider · Firebase Backend (Auth & Firestore) · Service Booking & Tracking',
    image: 'assets/images/crews_auto.png',
    description: 'A modern automotive repair and vehicle service application built in Flutter with Provider state management and a complete Firebase backend. Enables vehicle owners to authenticate securely, browse multi-category automotive repair services, claim promotional service discounts, schedule repair appointments, and track vehicle servicing milestones in real time.',
    features: [
      'Brand Onboarding & Authentication: Clean splash walkthrough, secure email/social sign-in, and persistent user session management.',
      'Dynamic Service Catalog: Interactive category grid for periodic servicing, sound systems, engine diagnostics, oil changes, and custom maintenance.',
      'Promotions & Discount Engine: Dynamic promotional carousel highlighting seasonal discounts (e.g. 20% Promo) and special maintenance packages.',
      'Live Service & Maintenance Tracking: Real-time status indicators (Scheduled, In Progress, Testing, Completed) allowing car owners to monitor ongoing service jobs.',
      'Customer Profile & Service History: Personalized customer dashboard with past maintenance records, active requests, and instant notification alerts.'
    ],
    architecture: 'Layered Flutter architecture leveraging Provider for reactive state management, clean routing structure, and Firebase as the complete backend (Firebase Authentication for user credentials and Cloud Firestore for real-time service requests, booking status, and catalog data).',
    archFlow: ['Flutter Mobile UI', 'Provider State Management', 'Firebase Auth', 'Firebase Firestore Backend'],
    impact: 'Provides vehicle owners with a frictionless booking experience and transparent real-time status updates on active repair jobs.',
    tags: ['Flutter', 'Dart', 'Provider', 'Firebase Backend', 'Cloud Firestore', 'Service Booking', 'Live Tracking'],
    github: 'https://github.com/Yyshnav/Crews-Auto-.git'
  },
  'driving-test': {
    badge: 'IoT & Mobile Hardware',
    title: 'Driving Test Automation System',
    subtitle: 'Automated Sensor Track Telemetry & Candidate Scoring App',
    image: null,
    description: 'An integrated hardware and software ecosystem designed to automate driving license test tracks using Arduino sensors, Python analytics, and a Flutter mobile app.',
    features: [
      'Ultrasonic, IR, and track pressure sensor modules for real-time line-touch detection.',
      'Python analytics backend executing algorithmic scoring and candidate violation logs.',
      'Companion Flutter mobile app for registration, digital evaluation cards, and live audit telemetry.'
    ],
    architecture: 'Embedded C microcontroller code transmitting sensor data over IoT gateways to a Python server and Flutter frontend.',
    impact: 'Eliminated human bias and subjective scoring in driver testing evaluations with 100% telemetry accuracy.',
    tags: ['Arduino', 'Embedded C', 'Python', 'Dart', 'Flutter', 'IoT Sensors'],
    github: 'https://github.com/Yyshnav'
  },
  'moto-hub': {
    badge: 'Web Platform & Analytics',
    title: 'Moto Hub & Weather Platform',
    subtitle: 'Automotive Servicing Web Portal & Weather Intelligence App',
    image: null,
    description: 'Comprehensive web portal featuring automotive service management combined with a real-time weather intelligence engine supporting bulk Excel dataset parsing.',
    features: [
      'Bulk Excel dataset upload engine with automated data sanitization and schema mapping.',
      '5-day predictive weather forecasting dashboard with multi-layout views.',
      'Relational vehicle service record storage with administrative search filters.'
    ],
    architecture: 'PHP backend with MySQL database, OpenWeather API integrations, and vanilla JavaScript UI modules.',
    impact: 'Provided responsive, multi-layout weather and vehicle reporting across desktop and mobile devices.',
    tags: ['PHP', 'MySQL', 'OpenWeather API', 'Excel Parser', 'JavaScript'],
    github: 'https://github.com/Yyshnav'
  }
};

/* ==========================================================================
   Interactive Project Detail Modal
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const actionCloseBtn = document.getElementById('modal-action-close');
  const modalGithubLink = document.getElementById('modal-github-link');
  
  const modalImageWrap = document.getElementById('modal-image-wrap');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalArch = document.getElementById('modal-arch');
  const modalImpact = document.getElementById('modal-impact');
  const modalTags = document.getElementById('modal-tags');

  if (!modal) return;

  const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    // Image handling
    if (data.image) {
      modalImg.src = data.image;
      modalImg.alt = data.title;
      modalImageWrap.classList.add('has-image');
    } else {
      modalImg.src = '';
      modalImageWrap.classList.remove('has-image');
    }

    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalDesc.textContent = data.description;
    
    // Features
    modalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    
    // Architecture & Impact
    if (data.archFlow && data.archFlow.length) {
      const flowHtml = `<div class="modal-arch-flow">` + 
        data.archFlow.map((node, i) => 
          `<span class="arch-node"><i class="fa-solid fa-cube"></i> ${node}</span>` + 
          (i < data.archFlow.length - 1 ? `<span class="arch-arrow">➔</span>` : '')
        ).join('') + 
        `</div>`;
      modalArch.innerHTML = flowHtml + `<p>${data.architecture}</p>`;
    } else {
      modalArch.innerHTML = `<p>${data.architecture}</p>`;
    }
    modalImpact.textContent = data.impact;

    // Tags
    modalTags.innerHTML = data.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    // GitHub Link
    if (modalGithubLink) {
      modalGithubLink.href = data.github;
    }

    // Google Play Store Link
    const modalPlaystoreLink = document.getElementById('modal-playstore-link');
    if (modalPlaystoreLink) {
      if (data.playstore) {
        modalPlaystoreLink.href = data.playstore;
        modalPlaystoreLink.style.display = 'inline-flex';
      } else {
        modalPlaystoreLink.style.display = 'none';
        modalPlaystoreLink.href = '#';
      }
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  // Trigger buttons
  document.querySelectorAll('.btn-card-action[data-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Close triggers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (actionCloseBtn) actionCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Header Scroll State
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
    mobileToggle.innerHTML = isOpen 
      ? '<i class="fa-solid fa-xmark"></i>' 
      : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', false);
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', false);
      mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

/* ==========================================================================
   Active Navigation Link on Scroll
   ========================================================================== */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Animated Statistics Counter (Supports Floats, Ints & Suffixes)
   ========================================================================== */
function initStatsCounter() {
  const statsElements = document.querySelectorAll('.stat-number[data-target]');
  if (!statsElements.length) return;

  let hasRun = false;

  const animateCount = (el) => {
    const rawTarget = el.getAttribute('data-target');
    const isFloat = rawTarget.includes('.');
    const target = parseFloat(rawTarget);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const useComma = el.getAttribute('data-comma') === 'true';
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      let currentVal;
      if (isFloat) {
        currentVal = (easeProgress * target).toFixed(1);
      } else {
        const intVal = Math.floor(easeProgress * target);
        currentVal = useComma ? intVal.toLocaleString() : intVal;
      }

      el.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        const finalVal = isFloat 
          ? target.toFixed(1) 
          : (useComma ? target.toLocaleString() : target);
        el.textContent = `${prefix}${finalVal}${suffix}`;
      }
    };

    requestAnimationFrame(updateNumber);
  };

  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        statsElements.forEach(animateCount);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/* ==========================================================================
   Skills One-By-One Staggered Cascade Animation
   ========================================================================== */
function initSkillsStaggerAnimation() {
  const skillsGrid = document.getElementById('skills-grid');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!skillsGrid || !skillCards.length) return;

  let hasAnimated = false;

  const animateCardsIn = () => {
    const visibleCards = Array.from(skillCards).filter(c => !c.classList.contains('hide'));
    visibleCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animated-in');
      }, index * 45); // 45ms stagger per card
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCardsIn();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(skillsGrid);
}

/* ==========================================================================
   Skills Category Filter (With One-By-One Cascade)
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      // Reset and filter
      let matchIndex = 0;
      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hide');
          card.classList.remove('animated-in');
          
          const currentIdx = matchIndex++;
          setTimeout(() => {
            card.classList.add('animated-in');
          }, currentIdx * 40); // One-by-one stagger animation
        } else {
          card.classList.add('hide');
          card.classList.remove('animated-in');
        }
      });
    });
  });
}

/* ==========================================================================
   Interactive Contact Form (Connected directly to WhatsApp)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('contact-toast');
  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Opening WhatsApp...';

    // Format professional WhatsApp message template
    const formattedText = `Hi Vaishnav,%0A%0AMy name is *${encodeURIComponent(name)}* (${encodeURIComponent(email)}).%0A%0A*Subject:* ${encodeURIComponent(subject)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/919744513904?text=${formattedText}`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      
      toast.classList.add('success');
      toast.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Opening WhatsApp with your message pre-filled...';
      
      // Open WhatsApp chat in new window / tab / app
      window.open(whatsappUrl, '_blank');
      form.reset();

      setTimeout(() => {
        toast.classList.remove('success');
      }, 6000);
    }, 600);
  });
}

/* ==========================================================================
   Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   Subtle 3D Tilt Effect on Avatar Frame
   ========================================================================== */
function initTiltEffect() {
  const frame = document.querySelector('.avatar-frame');
  if (!frame) return;

  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 15;
    const rotateY = (x / rect.width) * 15;

    frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
  });

  frame.addEventListener('mouseleave', () => {
    frame.style.transform = 'rotate(5deg)';
  });
}

/* ==========================================================================
   Interactive Inline Case Study Accordion Controller
   ========================================================================== */
function initInsightAccordions() {
  const cards = document.querySelectorAll('.insight-accordion-card');
  if (!cards.length) return;

  cards.forEach(card => {
    const header = card.querySelector('.insight-accordion-header');
    const toggleBtn = card.querySelector('.btn-accordion-toggle');
    const toggleText = card.querySelector('.toggle-text');
    const collapseBtn = card.querySelector('.btn-collapse-toggle');

    const toggleAccordion = () => {
      const isExpanded = card.classList.toggle('expanded');
      
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', isExpanded);
      }

      if (toggleText) {
        toggleText.textContent = isExpanded 
          ? 'Hide Technical Deep-Dive' 
          : 'Explore Architecture & Engineering Deep-Dive';
      }
    };

    if (header) {
      header.addEventListener('click', (e) => {
        // Prevent toggle if clicking on text selection
        if (e.target.closest('a')) return;
        toggleAccordion();
      });
    }

    if (collapseBtn) {
      collapseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('expanded');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', false);
        if (toggleText) toggleText.textContent = 'Explore Architecture & Engineering Deep-Dive';
        
        // Smooth scroll back to card top if needed
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  });
}



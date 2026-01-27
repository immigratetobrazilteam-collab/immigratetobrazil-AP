
// Master JS for State: AP - Persona: Equatorial Pioneer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ap_index_form_immigrate_to_amap = document.getElementById('ap-index-form-immigrate-to-amap');
  if (ap_index_form_immigrate_to_amap) {
    gsap.from('#ap-index-form-immigrate-to-amap input, #ap-index-form-immigrate-to-amap textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_index_list__immigration_assistance_for_adventure_seekers_in_amap_ = document.getElementById('ap-index-list--immigration-assistance-for-adventure-seekers-in-amap-');
  if (ap_index_list__immigration_assistance_for_adventure_seekers_in_amap_) {
    gsap.from('#ap-index-list--immigration-assistance-for-adventure-seekers-in-amap- li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_index_list_immigration_legal_services_in_brazil = document.getElementById('ap-index-list-immigration-legal-services-in-brazil');
  if (ap_index_list_immigration_legal_services_in_brazil) {
    gsap.from('#ap-index-list-immigration-legal-services-in-brazil li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_index_section_why_amap = document.getElementById('ap-index-section-why-amap');
  if (ap_index_section_why_amap) {
    gsap.fromTo('#ap-index-section-why-amap', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_index_list_how_the_process_works = document.getElementById('ap-index-list-how-the-process-works');
  if (ap_index_list_how_the_process_works) {
    gsap.from('#ap-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_index_section__frequently_asked_questions_about_living_in_amap_ = document.getElementById('ap-index-section--frequently-asked-questions-about-living-in-amap-');
  if (ap_index_section__frequently_asked_questions_about_living_in_amap_) {
    gsap.fromTo('#ap-index-section--frequently-asked-questions-about-living-in-amap-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ap-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ap_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ap-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ap-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_quick_facts = document.getElementById('ap-renouncingcitizenship-list-quick-facts');
  if (ap_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ap-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ap-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ap_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ap-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ap-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ap_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ap-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_renunciation_overview = document.getElementById('ap-renouncingcitizenship-section-renunciation-overview');
  if (ap_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ap-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_form_who_is_this_for = document.getElementById('ap-renouncingcitizenship-form-who-is-this-for');
  if (ap_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ap-renouncingcitizenship-form-who-is-this-for input, #ap-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_required_documents = document.getElementById('ap-renouncingcitizenship-list-required-documents');
  if (ap_renouncingcitizenship_list_required_documents) {
    gsap.from('#ap-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_process = document.getElementById('ap-renouncingcitizenship-list-process');
  if (ap_renouncingcitizenship_list_process) {
    gsap.from('#ap-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ap-renouncingcitizenship-section-timelines-deadlines');
  if (ap_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ap-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_fees_costs = document.getElementById('ap-renouncingcitizenship-section-fees-costs');
  if (ap_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ap-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ap-renouncingcitizenship-list-risks-common-mistakes');
  if (ap_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ap-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ap-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ap_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_amap_specific_context = document.getElementById('ap-renouncingcitizenship-section-amap-specific-context');
  if (ap_renouncingcitizenship_section_amap_specific_context) {
    gsap.fromTo('#ap-renouncingcitizenship-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ap-renouncingcitizenship-section-what-our-clients-say');
  if (ap_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ap-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ap-renouncingcitizenship-section-frequently-asked-questions');
  if (ap_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ap-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_international_support = document.getElementById('ap-renouncingcitizenship-section-international-support');
  if (ap_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ap-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_our_credentials = document.getElementById('ap-renouncingcitizenship-list-our-credentials');
  if (ap_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ap-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_list_related_services = document.getElementById('ap-renouncingcitizenship-list-related-services');
  if (ap_renouncingcitizenship_list_related_services) {
    gsap.from('#ap-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ap-renouncingcitizenship-section-youre-in-good-hands');
  if (ap_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ap-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_renouncingcitizenship_section_21 = document.getElementById('ap-renouncingcitizenship-section-21');
  if (ap_renouncingcitizenship_section_21) {
    gsap.fromTo('#ap-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ap-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ap_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ap-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ap-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_quick_facts = document.getElementById('ap-provisional-list-quick-facts');
  if (ap_provisional_list_quick_facts) {
    gsap.from('#ap-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_common_challenges_applicants_face = document.getElementById('ap-provisional-list-common-challenges-applicants-face');
  if (ap_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ap-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_how_we_solve_these_challenges = document.getElementById('ap-provisional-list-how-we-solve-these-challenges');
  if (ap_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ap-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_naturalisation_overview = document.getElementById('ap-provisional-section-naturalisation-overview');
  if (ap_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ap-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_form_who_is_this_naturalisation_for = document.getElementById('ap-provisional-form-who-is-this-naturalisation-for');
  if (ap_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ap-provisional-form-who-is-this-naturalisation-for input, #ap-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_required_documents = document.getElementById('ap-provisional-list-required-documents');
  if (ap_provisional_list_required_documents) {
    gsap.from('#ap-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_application_process = document.getElementById('ap-provisional-list-application-process');
  if (ap_provisional_list_application_process) {
    gsap.from('#ap-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_timelines_deadlines = document.getElementById('ap-provisional-section-timelines-deadlines');
  if (ap_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ap-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_fees_costs = document.getElementById('ap-provisional-section-fees-costs');
  if (ap_provisional_section_fees_costs) {
    gsap.fromTo('#ap-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_risks_common_mistakes = document.getElementById('ap-provisional-list-risks-common-mistakes');
  if (ap_provisional_list_risks_common_mistakes) {
    gsap.from('#ap-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_diy_vs_professional_assistance = document.getElementById('ap-provisional-section-diy-vs-professional-assistance');
  if (ap_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_amap_specific_context = document.getElementById('ap-provisional-section-amap-specific-context');
  if (ap_provisional_section_amap_specific_context) {
    gsap.fromTo('#ap-provisional-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_what_our_clients_say = document.getElementById('ap-provisional-section-what-our-clients-say');
  if (ap_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ap-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_frequently_asked_questions = document.getElementById('ap-provisional-section-frequently-asked-questions');
  if (ap_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ap-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_international_support = document.getElementById('ap-provisional-section-international-support');
  if (ap_provisional_section_international_support) {
    gsap.fromTo('#ap-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_our_credentials = document.getElementById('ap-provisional-list-our-credentials');
  if (ap_provisional_list_our_credentials) {
    gsap.from('#ap-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_list_related_services = document.getElementById('ap-provisional-list-related-services');
  if (ap_provisional_list_related_services) {
    gsap.from('#ap-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_youre_in_good_hands = document.getElementById('ap-provisional-section-youre-in-good-hands');
  if (ap_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ap-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_provisional_section_21 = document.getElementById('ap-provisional-section-21');
  if (ap_provisional_section_21) {
    gsap.fromTo('#ap-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ap-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ap_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ap-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ap-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_quick_facts = document.getElementById('ap-special-list-quick-facts');
  if (ap_special_list_quick_facts) {
    gsap.from('#ap-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_common_challenges_applicants_face = document.getElementById('ap-special-list-common-challenges-applicants-face');
  if (ap_special_list_common_challenges_applicants_face) {
    gsap.from('#ap-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_how_we_solve_these_challenges = document.getElementById('ap-special-list-how-we-solve-these-challenges');
  if (ap_special_list_how_we_solve_these_challenges) {
    gsap.from('#ap-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_naturalisation_overview = document.getElementById('ap-special-section-naturalisation-overview');
  if (ap_special_section_naturalisation_overview) {
    gsap.fromTo('#ap-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_form_who_is_this_naturalisation_for = document.getElementById('ap-special-form-who-is-this-naturalisation-for');
  if (ap_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ap-special-form-who-is-this-naturalisation-for input, #ap-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_required_documents = document.getElementById('ap-special-list-required-documents');
  if (ap_special_list_required_documents) {
    gsap.from('#ap-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_application_process = document.getElementById('ap-special-list-application-process');
  if (ap_special_list_application_process) {
    gsap.from('#ap-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_timelines_deadlines = document.getElementById('ap-special-section-timelines-deadlines');
  if (ap_special_section_timelines_deadlines) {
    gsap.fromTo('#ap-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_fees_costs = document.getElementById('ap-special-section-fees-costs');
  if (ap_special_section_fees_costs) {
    gsap.fromTo('#ap-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_risks_common_mistakes = document.getElementById('ap-special-list-risks-common-mistakes');
  if (ap_special_list_risks_common_mistakes) {
    gsap.from('#ap-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_diy_vs_professional_assistance = document.getElementById('ap-special-section-diy-vs-professional-assistance');
  if (ap_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_amap_specific_context = document.getElementById('ap-special-section-amap-specific-context');
  if (ap_special_section_amap_specific_context) {
    gsap.fromTo('#ap-special-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_what_our_clients_say = document.getElementById('ap-special-section-what-our-clients-say');
  if (ap_special_section_what_our_clients_say) {
    gsap.fromTo('#ap-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_frequently_asked_questions = document.getElementById('ap-special-section-frequently-asked-questions');
  if (ap_special_section_frequently_asked_questions) {
    gsap.fromTo('#ap-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_international_support = document.getElementById('ap-special-section-international-support');
  if (ap_special_section_international_support) {
    gsap.fromTo('#ap-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_our_credentials = document.getElementById('ap-special-list-our-credentials');
  if (ap_special_list_our_credentials) {
    gsap.from('#ap-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_list_related_services = document.getElementById('ap-special-list-related-services');
  if (ap_special_list_related_services) {
    gsap.from('#ap-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_youre_in_good_hands = document.getElementById('ap-special-section-youre-in-good-hands');
  if (ap_special_section_youre_in_good_hands) {
    gsap.fromTo('#ap-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_special_section_21 = document.getElementById('ap-special-section-21');
  if (ap_special_section_21) {
    gsap.fromTo('#ap-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ap-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ap_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ap-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ap-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_quick_facts = document.getElementById('ap-ordinary-list-quick-facts');
  if (ap_ordinary_list_quick_facts) {
    gsap.from('#ap-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_common_challenges_applicants_face = document.getElementById('ap-ordinary-list-common-challenges-applicants-face');
  if (ap_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ap-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_how_we_solve_these_challenges = document.getElementById('ap-ordinary-list-how-we-solve-these-challenges');
  if (ap_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ap-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_naturalisation_overview = document.getElementById('ap-ordinary-section-naturalisation-overview');
  if (ap_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ap-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ap-ordinary-form-who-is-this-naturalisation-for');
  if (ap_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ap-ordinary-form-who-is-this-naturalisation-for input, #ap-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_required_documents = document.getElementById('ap-ordinary-list-required-documents');
  if (ap_ordinary_list_required_documents) {
    gsap.from('#ap-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_application_process = document.getElementById('ap-ordinary-list-application-process');
  if (ap_ordinary_list_application_process) {
    gsap.from('#ap-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_timelines_deadlines = document.getElementById('ap-ordinary-section-timelines-deadlines');
  if (ap_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ap-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_fees_costs = document.getElementById('ap-ordinary-section-fees-costs');
  if (ap_ordinary_section_fees_costs) {
    gsap.fromTo('#ap-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_risks_common_mistakes = document.getElementById('ap-ordinary-list-risks-common-mistakes');
  if (ap_ordinary_list_risks_common_mistakes) {
    gsap.from('#ap-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_diy_vs_professional_assistance = document.getElementById('ap-ordinary-section-diy-vs-professional-assistance');
  if (ap_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_amap_specific_context = document.getElementById('ap-ordinary-section-amap-specific-context');
  if (ap_ordinary_section_amap_specific_context) {
    gsap.fromTo('#ap-ordinary-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_what_our_clients_say = document.getElementById('ap-ordinary-section-what-our-clients-say');
  if (ap_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ap-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_frequently_asked_questions = document.getElementById('ap-ordinary-section-frequently-asked-questions');
  if (ap_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ap-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_international_support = document.getElementById('ap-ordinary-section-international-support');
  if (ap_ordinary_section_international_support) {
    gsap.fromTo('#ap-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_our_credentials = document.getElementById('ap-ordinary-list-our-credentials');
  if (ap_ordinary_list_our_credentials) {
    gsap.from('#ap-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_list_related_services = document.getElementById('ap-ordinary-list-related-services');
  if (ap_ordinary_list_related_services) {
    gsap.from('#ap-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_youre_in_good_hands = document.getElementById('ap-ordinary-section-youre-in-good-hands');
  if (ap_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ap-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_ordinary_section_21 = document.getElementById('ap-ordinary-section-21');
  if (ap_ordinary_section_21) {
    gsap.fromTo('#ap-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ap-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ap_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ap-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ap-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_quick_facts = document.getElementById('ap-extraordinary-list-quick-facts');
  if (ap_extraordinary_list_quick_facts) {
    gsap.from('#ap-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_common_challenges_applicants_face = document.getElementById('ap-extraordinary-list-common-challenges-applicants-face');
  if (ap_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ap-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ap-extraordinary-list-how-we-solve-these-challenges');
  if (ap_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ap-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_naturalisation_overview = document.getElementById('ap-extraordinary-section-naturalisation-overview');
  if (ap_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ap-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ap-extraordinary-form-who-is-this-naturalisation-for');
  if (ap_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ap-extraordinary-form-who-is-this-naturalisation-for input, #ap-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_required_documents = document.getElementById('ap-extraordinary-list-required-documents');
  if (ap_extraordinary_list_required_documents) {
    gsap.from('#ap-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_application_process = document.getElementById('ap-extraordinary-list-application-process');
  if (ap_extraordinary_list_application_process) {
    gsap.from('#ap-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_timelines_deadlines = document.getElementById('ap-extraordinary-section-timelines-deadlines');
  if (ap_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ap-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_fees_costs = document.getElementById('ap-extraordinary-section-fees-costs');
  if (ap_extraordinary_section_fees_costs) {
    gsap.fromTo('#ap-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_risks_common_mistakes = document.getElementById('ap-extraordinary-list-risks-common-mistakes');
  if (ap_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ap-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ap-extraordinary-section-diy-vs-professional-assistance');
  if (ap_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_amap_specific_context = document.getElementById('ap-extraordinary-section-amap-specific-context');
  if (ap_extraordinary_section_amap_specific_context) {
    gsap.fromTo('#ap-extraordinary-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_what_our_clients_say = document.getElementById('ap-extraordinary-section-what-our-clients-say');
  if (ap_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ap-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_frequently_asked_questions = document.getElementById('ap-extraordinary-section-frequently-asked-questions');
  if (ap_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ap-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_international_support = document.getElementById('ap-extraordinary-section-international-support');
  if (ap_extraordinary_section_international_support) {
    gsap.fromTo('#ap-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_our_credentials = document.getElementById('ap-extraordinary-list-our-credentials');
  if (ap_extraordinary_list_our_credentials) {
    gsap.from('#ap-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_list_related_services = document.getElementById('ap-extraordinary-list-related-services');
  if (ap_extraordinary_list_related_services) {
    gsap.from('#ap-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_youre_in_good_hands = document.getElementById('ap-extraordinary-section-youre-in-good-hands');
  if (ap_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ap-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extraordinary_section_21 = document.getElementById('ap-extraordinary-section-21');
  if (ap_extraordinary_section_21) {
    gsap.fromTo('#ap-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ap-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ap_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ap-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ap-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_quick_facts = document.getElementById('ap-reacquisitioncitizenship-list-quick-facts');
  if (ap_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ap-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ap-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ap_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ap-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ap-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ap_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ap-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ap-reacquisitioncitizenship-section-reacquisition-overview');
  if (ap_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ap-reacquisitioncitizenship-form-who-is-this-for');
  if (ap_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ap-reacquisitioncitizenship-form-who-is-this-for input, #ap-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_required_documents = document.getElementById('ap-reacquisitioncitizenship-list-required-documents');
  if (ap_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ap-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_process = document.getElementById('ap-reacquisitioncitizenship-list-process');
  if (ap_reacquisitioncitizenship_list_process) {
    gsap.from('#ap-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ap-reacquisitioncitizenship-section-timelines-deadlines');
  if (ap_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_fees_costs = document.getElementById('ap-reacquisitioncitizenship-section-fees-costs');
  if (ap_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ap-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ap_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ap-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ap-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ap_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_amap_specific_context = document.getElementById('ap-reacquisitioncitizenship-section-amap-specific-context');
  if (ap_reacquisitioncitizenship_section_amap_specific_context) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ap-reacquisitioncitizenship-section-what-our-clients-say');
  if (ap_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ap-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ap_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_international_support = document.getElementById('ap-reacquisitioncitizenship-section-international-support');
  if (ap_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_our_credentials = document.getElementById('ap-reacquisitioncitizenship-list-our-credentials');
  if (ap_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ap-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_list_related_services = document.getElementById('ap-reacquisitioncitizenship-list-related-services');
  if (ap_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ap-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ap-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ap_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_reacquisitioncitizenship_section_21 = document.getElementById('ap-reacquisitioncitizenship-section-21');
  if (ap_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ap-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ap-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ap_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ap-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ap-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_quick_facts = document.getElementById('ap-scientificresearch-list-quick-facts');
  if (ap_scientificresearch_list_quick_facts) {
    gsap.from('#ap-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ap-scientificresearch-list-common-challenges-applicants-face');
  if (ap_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ap-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ap-scientificresearch-list-how-we-solve-these-challenges');
  if (ap_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ap-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_residency_overview = document.getElementById('ap-scientificresearch-section-residency-overview');
  if (ap_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ap-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_form_who_is_this_residency_for = document.getElementById('ap-scientificresearch-form-who-is-this-residency-for');
  if (ap_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ap-scientificresearch-form-who-is-this-residency-for input, #ap-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_required_documents = document.getElementById('ap-scientificresearch-list-required-documents');
  if (ap_scientificresearch_list_required_documents) {
    gsap.from('#ap-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_application_process = document.getElementById('ap-scientificresearch-list-application-process');
  if (ap_scientificresearch_list_application_process) {
    gsap.from('#ap-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_timelines_deadlines = document.getElementById('ap-scientificresearch-section-timelines-deadlines');
  if (ap_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ap-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_fees_costs = document.getElementById('ap-scientificresearch-section-fees-costs');
  if (ap_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ap-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_risks_common_mistakes = document.getElementById('ap-scientificresearch-list-risks-common-mistakes');
  if (ap_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ap-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ap-scientificresearch-section-diy-vs-professional-assistance');
  if (ap_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_amap_specific_context = document.getElementById('ap-scientificresearch-section-amap-specific-context');
  if (ap_scientificresearch_section_amap_specific_context) {
    gsap.fromTo('#ap-scientificresearch-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_what_our_clients_say = document.getElementById('ap-scientificresearch-section-what-our-clients-say');
  if (ap_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ap-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_frequently_asked_questions = document.getElementById('ap-scientificresearch-section-frequently-asked-questions');
  if (ap_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ap-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_international_support = document.getElementById('ap-scientificresearch-section-international-support');
  if (ap_scientificresearch_section_international_support) {
    gsap.fromTo('#ap-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_our_credentials = document.getElementById('ap-scientificresearch-list-our-credentials');
  if (ap_scientificresearch_list_our_credentials) {
    gsap.from('#ap-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_list_related_services = document.getElementById('ap-scientificresearch-list-related-services');
  if (ap_scientificresearch_list_related_services) {
    gsap.from('#ap-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_youre_in_good_hands = document.getElementById('ap-scientificresearch-section-youre-in-good-hands');
  if (ap_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ap-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_scientificresearch_section_21 = document.getElementById('ap-scientificresearch-section-21');
  if (ap_scientificresearch_section_21) {
    gsap.fromTo('#ap-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_form_study_in_brazil_with_study_residency = document.getElementById('ap-study-form-study-in-brazil-with-study-residency');
  if (ap_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ap-study-form-study-in-brazil-with-study-residency input, #ap-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_quick_facts = document.getElementById('ap-study-list-quick-facts');
  if (ap_study_list_quick_facts) {
    gsap.from('#ap-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_common_challenges_applicants_face = document.getElementById('ap-study-list-common-challenges-applicants-face');
  if (ap_study_list_common_challenges_applicants_face) {
    gsap.from('#ap-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_how_we_solve_these_challenges = document.getElementById('ap-study-list-how-we-solve-these-challenges');
  if (ap_study_list_how_we_solve_these_challenges) {
    gsap.from('#ap-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_residency_overview = document.getElementById('ap-study-section-residency-overview');
  if (ap_study_section_residency_overview) {
    gsap.fromTo('#ap-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_form_who_is_this_residency_for = document.getElementById('ap-study-form-who-is-this-residency-for');
  if (ap_study_form_who_is_this_residency_for) {
    gsap.from('#ap-study-form-who-is-this-residency-for input, #ap-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_required_documents = document.getElementById('ap-study-list-required-documents');
  if (ap_study_list_required_documents) {
    gsap.from('#ap-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_application_process = document.getElementById('ap-study-list-application-process');
  if (ap_study_list_application_process) {
    gsap.from('#ap-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_timelines_deadlines = document.getElementById('ap-study-section-timelines-deadlines');
  if (ap_study_section_timelines_deadlines) {
    gsap.fromTo('#ap-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_fees_costs = document.getElementById('ap-study-section-fees-costs');
  if (ap_study_section_fees_costs) {
    gsap.fromTo('#ap-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_risks_common_mistakes = document.getElementById('ap-study-list-risks-common-mistakes');
  if (ap_study_list_risks_common_mistakes) {
    gsap.from('#ap-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_diy_vs_professional_assistance = document.getElementById('ap-study-section-diy-vs-professional-assistance');
  if (ap_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_amap_specific_context = document.getElementById('ap-study-section-amap-specific-context');
  if (ap_study_section_amap_specific_context) {
    gsap.fromTo('#ap-study-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_what_our_clients_say = document.getElementById('ap-study-section-what-our-clients-say');
  if (ap_study_section_what_our_clients_say) {
    gsap.fromTo('#ap-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_frequently_asked_questions = document.getElementById('ap-study-section-frequently-asked-questions');
  if (ap_study_section_frequently_asked_questions) {
    gsap.fromTo('#ap-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_international_support = document.getElementById('ap-study-section-international-support');
  if (ap_study_section_international_support) {
    gsap.fromTo('#ap-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_our_credentials = document.getElementById('ap-study-list-our-credentials');
  if (ap_study_list_our_credentials) {
    gsap.from('#ap-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_list_related_services = document.getElementById('ap-study-list-related-services');
  if (ap_study_list_related_services) {
    gsap.from('#ap-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_youre_in_good_hands = document.getElementById('ap-study-section-youre-in-good-hands');
  if (ap_study_section_youre_in_good_hands) {
    gsap.fromTo('#ap-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_study_section_21 = document.getElementById('ap-study-section-21');
  if (ap_study_section_21) {
    gsap.fromTo('#ap-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ap-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ap_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ap-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ap-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_quick_facts = document.getElementById('ap-educationalexchange-list-quick-facts');
  if (ap_educationalexchange_list_quick_facts) {
    gsap.from('#ap-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ap-educationalexchange-list-common-challenges-applicants-face');
  if (ap_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ap-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ap-educationalexchange-list-how-we-solve-these-challenges');
  if (ap_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ap-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_residency_overview = document.getElementById('ap-educationalexchange-section-residency-overview');
  if (ap_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ap-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_form_who_is_this_residency_for = document.getElementById('ap-educationalexchange-form-who-is-this-residency-for');
  if (ap_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ap-educationalexchange-form-who-is-this-residency-for input, #ap-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_required_documents = document.getElementById('ap-educationalexchange-list-required-documents');
  if (ap_educationalexchange_list_required_documents) {
    gsap.from('#ap-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_application_process = document.getElementById('ap-educationalexchange-list-application-process');
  if (ap_educationalexchange_list_application_process) {
    gsap.from('#ap-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_timelines_deadlines = document.getElementById('ap-educationalexchange-section-timelines-deadlines');
  if (ap_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ap-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_fees_costs = document.getElementById('ap-educationalexchange-section-fees-costs');
  if (ap_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ap-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_risks_common_mistakes = document.getElementById('ap-educationalexchange-list-risks-common-mistakes');
  if (ap_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ap-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ap-educationalexchange-section-diy-vs-professional-assistance');
  if (ap_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_amap_specific_context = document.getElementById('ap-educationalexchange-section-amap-specific-context');
  if (ap_educationalexchange_section_amap_specific_context) {
    gsap.fromTo('#ap-educationalexchange-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_what_our_clients_say = document.getElementById('ap-educationalexchange-section-what-our-clients-say');
  if (ap_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ap-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_frequently_asked_questions = document.getElementById('ap-educationalexchange-section-frequently-asked-questions');
  if (ap_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ap-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_international_support = document.getElementById('ap-educationalexchange-section-international-support');
  if (ap_educationalexchange_section_international_support) {
    gsap.fromTo('#ap-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_our_credentials = document.getElementById('ap-educationalexchange-list-our-credentials');
  if (ap_educationalexchange_list_our_credentials) {
    gsap.from('#ap-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_list_related_services = document.getElementById('ap-educationalexchange-list-related-services');
  if (ap_educationalexchange_list_related_services) {
    gsap.from('#ap-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_youre_in_good_hands = document.getElementById('ap-educationalexchange-section-youre-in-good-hands');
  if (ap_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ap-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_educationalexchange_section_21 = document.getElementById('ap-educationalexchange-section-21');
  if (ap_educationalexchange_section_21) {
    gsap.fromTo('#ap-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ap-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ap_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ap-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ap-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_quick_facts = document.getElementById('ap-humanitarian-list-quick-facts');
  if (ap_humanitarian_list_quick_facts) {
    gsap.from('#ap-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_common_challenges_applicants_face = document.getElementById('ap-humanitarian-list-common-challenges-applicants-face');
  if (ap_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ap-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ap-humanitarian-list-how-we-solve-these-challenges');
  if (ap_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ap-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_residency_overview = document.getElementById('ap-humanitarian-section-residency-overview');
  if (ap_humanitarian_section_residency_overview) {
    gsap.fromTo('#ap-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_form_who_is_this_residency_for = document.getElementById('ap-humanitarian-form-who-is-this-residency-for');
  if (ap_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ap-humanitarian-form-who-is-this-residency-for input, #ap-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_required_documents = document.getElementById('ap-humanitarian-list-required-documents');
  if (ap_humanitarian_list_required_documents) {
    gsap.from('#ap-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_application_process = document.getElementById('ap-humanitarian-list-application-process');
  if (ap_humanitarian_list_application_process) {
    gsap.from('#ap-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_timelines_deadlines = document.getElementById('ap-humanitarian-section-timelines-deadlines');
  if (ap_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ap-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_fees_costs = document.getElementById('ap-humanitarian-section-fees-costs');
  if (ap_humanitarian_section_fees_costs) {
    gsap.fromTo('#ap-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_risks_common_mistakes = document.getElementById('ap-humanitarian-list-risks-common-mistakes');
  if (ap_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ap-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ap-humanitarian-section-diy-vs-professional-assistance');
  if (ap_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_amap_specific_context = document.getElementById('ap-humanitarian-section-amap-specific-context');
  if (ap_humanitarian_section_amap_specific_context) {
    gsap.fromTo('#ap-humanitarian-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_what_our_clients_say = document.getElementById('ap-humanitarian-section-what-our-clients-say');
  if (ap_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ap-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_frequently_asked_questions = document.getElementById('ap-humanitarian-section-frequently-asked-questions');
  if (ap_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ap-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_international_support = document.getElementById('ap-humanitarian-section-international-support');
  if (ap_humanitarian_section_international_support) {
    gsap.fromTo('#ap-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_our_credentials = document.getElementById('ap-humanitarian-list-our-credentials');
  if (ap_humanitarian_list_our_credentials) {
    gsap.from('#ap-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_list_related_services = document.getElementById('ap-humanitarian-list-related-services');
  if (ap_humanitarian_list_related_services) {
    gsap.from('#ap-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_youre_in_good_hands = document.getElementById('ap-humanitarian-section-youre-in-good-hands');
  if (ap_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ap-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_humanitarian_section_21 = document.getElementById('ap-humanitarian-section-21');
  if (ap_humanitarian_section_21) {
    gsap.fromTo('#ap-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ap-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ap_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ap-digitalnomad-form-digital-nomad-residency-in-brazil input, #ap-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_quick_facts = document.getElementById('ap-digitalnomad-list-quick-facts');
  if (ap_digitalnomad_list_quick_facts) {
    gsap.from('#ap-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ap-digitalnomad-list-common-challenges-applicants-face');
  if (ap_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ap-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ap-digitalnomad-list-how-we-solve-these-challenges');
  if (ap_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ap-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_residency_overview = document.getElementById('ap-digitalnomad-section-residency-overview');
  if (ap_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ap-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_form_who_is_this_residency_for = document.getElementById('ap-digitalnomad-form-who-is-this-residency-for');
  if (ap_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ap-digitalnomad-form-who-is-this-residency-for input, #ap-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_required_documents = document.getElementById('ap-digitalnomad-list-required-documents');
  if (ap_digitalnomad_list_required_documents) {
    gsap.from('#ap-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_application_process = document.getElementById('ap-digitalnomad-list-application-process');
  if (ap_digitalnomad_list_application_process) {
    gsap.from('#ap-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_timelines_deadlines = document.getElementById('ap-digitalnomad-section-timelines-deadlines');
  if (ap_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ap-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_fees_costs = document.getElementById('ap-digitalnomad-section-fees-costs');
  if (ap_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ap-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_risks_common_mistakes = document.getElementById('ap-digitalnomad-list-risks-common-mistakes');
  if (ap_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ap-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ap-digitalnomad-section-diy-vs-professional-assistance');
  if (ap_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_amap_specific_context = document.getElementById('ap-digitalnomad-section-amap-specific-context');
  if (ap_digitalnomad_section_amap_specific_context) {
    gsap.fromTo('#ap-digitalnomad-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_what_our_clients_say = document.getElementById('ap-digitalnomad-section-what-our-clients-say');
  if (ap_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ap-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_frequently_asked_questions = document.getElementById('ap-digitalnomad-section-frequently-asked-questions');
  if (ap_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ap-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_international_support = document.getElementById('ap-digitalnomad-section-international-support');
  if (ap_digitalnomad_section_international_support) {
    gsap.fromTo('#ap-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_our_credentials = document.getElementById('ap-digitalnomad-list-our-credentials');
  if (ap_digitalnomad_list_our_credentials) {
    gsap.from('#ap-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_list_related_services = document.getElementById('ap-digitalnomad-list-related-services');
  if (ap_digitalnomad_list_related_services) {
    gsap.from('#ap-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_youre_in_good_hands = document.getElementById('ap-digitalnomad-section-youre-in-good-hands');
  if (ap_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ap-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_digitalnomad_section_21 = document.getElementById('ap-digitalnomad-section-21');
  if (ap_digitalnomad_section_21) {
    gsap.fromTo('#ap-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ap-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ap_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ap-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ap-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_quick_facts = document.getElementById('ap-familyreunion-list-quick-facts');
  if (ap_familyreunion_list_quick_facts) {
    gsap.from('#ap-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_common_challenges_applicants_face = document.getElementById('ap-familyreunion-list-common-challenges-applicants-face');
  if (ap_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ap-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ap-familyreunion-list-how-we-solve-these-challenges');
  if (ap_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ap-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_residency_overview = document.getElementById('ap-familyreunion-section-residency-overview');
  if (ap_familyreunion_section_residency_overview) {
    gsap.fromTo('#ap-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_form_who_is_this_residency_for = document.getElementById('ap-familyreunion-form-who-is-this-residency-for');
  if (ap_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ap-familyreunion-form-who-is-this-residency-for input, #ap-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_required_documents = document.getElementById('ap-familyreunion-list-required-documents');
  if (ap_familyreunion_list_required_documents) {
    gsap.from('#ap-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_application_process = document.getElementById('ap-familyreunion-list-application-process');
  if (ap_familyreunion_list_application_process) {
    gsap.from('#ap-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_timelines_deadlines = document.getElementById('ap-familyreunion-section-timelines-deadlines');
  if (ap_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ap-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_fees_costs = document.getElementById('ap-familyreunion-section-fees-costs');
  if (ap_familyreunion_section_fees_costs) {
    gsap.fromTo('#ap-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_risks_common_mistakes = document.getElementById('ap-familyreunion-list-risks-common-mistakes');
  if (ap_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ap-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ap-familyreunion-section-diy-vs-professional-assistance');
  if (ap_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_amap_specific_context = document.getElementById('ap-familyreunion-section-amap-specific-context');
  if (ap_familyreunion_section_amap_specific_context) {
    gsap.fromTo('#ap-familyreunion-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_what_our_clients_say = document.getElementById('ap-familyreunion-section-what-our-clients-say');
  if (ap_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ap-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_frequently_asked_questions = document.getElementById('ap-familyreunion-section-frequently-asked-questions');
  if (ap_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ap-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_international_support = document.getElementById('ap-familyreunion-section-international-support');
  if (ap_familyreunion_section_international_support) {
    gsap.fromTo('#ap-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_our_credentials = document.getElementById('ap-familyreunion-list-our-credentials');
  if (ap_familyreunion_list_our_credentials) {
    gsap.from('#ap-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_list_related_services = document.getElementById('ap-familyreunion-list-related-services');
  if (ap_familyreunion_list_related_services) {
    gsap.from('#ap-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_youre_in_good_hands = document.getElementById('ap-familyreunion-section-youre-in-good-hands');
  if (ap_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ap-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_familyreunion_section_21 = document.getElementById('ap-familyreunion-section-21');
  if (ap_familyreunion_section_21) {
    gsap.fromTo('#ap-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ap-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ap_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ap-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ap-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_quick_facts = document.getElementById('ap-mercosul-list-quick-facts');
  if (ap_mercosul_list_quick_facts) {
    gsap.from('#ap-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_common_challenges_applicants_face = document.getElementById('ap-mercosul-list-common-challenges-applicants-face');
  if (ap_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ap-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_how_we_solve_these_challenges = document.getElementById('ap-mercosul-list-how-we-solve-these-challenges');
  if (ap_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ap-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_residency_overview = document.getElementById('ap-mercosul-section-residency-overview');
  if (ap_mercosul_section_residency_overview) {
    gsap.fromTo('#ap-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_form_who_is_this_residency_for = document.getElementById('ap-mercosul-form-who-is-this-residency-for');
  if (ap_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ap-mercosul-form-who-is-this-residency-for input, #ap-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_required_documents = document.getElementById('ap-mercosul-list-required-documents');
  if (ap_mercosul_list_required_documents) {
    gsap.from('#ap-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_application_process = document.getElementById('ap-mercosul-list-application-process');
  if (ap_mercosul_list_application_process) {
    gsap.from('#ap-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_timelines_deadlines = document.getElementById('ap-mercosul-section-timelines-deadlines');
  if (ap_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ap-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_fees_costs = document.getElementById('ap-mercosul-section-fees-costs');
  if (ap_mercosul_section_fees_costs) {
    gsap.fromTo('#ap-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_risks_common_mistakes = document.getElementById('ap-mercosul-list-risks-common-mistakes');
  if (ap_mercosul_list_risks_common_mistakes) {
    gsap.from('#ap-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_diy_vs_professional_assistance = document.getElementById('ap-mercosul-section-diy-vs-professional-assistance');
  if (ap_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_amap_specific_context = document.getElementById('ap-mercosul-section-amap-specific-context');
  if (ap_mercosul_section_amap_specific_context) {
    gsap.fromTo('#ap-mercosul-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_what_our_clients_say = document.getElementById('ap-mercosul-section-what-our-clients-say');
  if (ap_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ap-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_frequently_asked_questions = document.getElementById('ap-mercosul-section-frequently-asked-questions');
  if (ap_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ap-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_international_support = document.getElementById('ap-mercosul-section-international-support');
  if (ap_mercosul_section_international_support) {
    gsap.fromTo('#ap-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_our_credentials = document.getElementById('ap-mercosul-list-our-credentials');
  if (ap_mercosul_list_our_credentials) {
    gsap.from('#ap-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_list_related_services = document.getElementById('ap-mercosul-list-related-services');
  if (ap_mercosul_list_related_services) {
    gsap.from('#ap-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_youre_in_good_hands = document.getElementById('ap-mercosul-section-youre-in-good-hands');
  if (ap_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ap-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_mercosul_section_21 = document.getElementById('ap-mercosul-section-21');
  if (ap_mercosul_section_21) {
    gsap.fromTo('#ap-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ap-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ap_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ap-retiree-form-retire-in-brazil-with-retiree-residency input, #ap-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_quick_facts = document.getElementById('ap-retiree-list-quick-facts');
  if (ap_retiree_list_quick_facts) {
    gsap.from('#ap-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_common_challenges_applicants_face = document.getElementById('ap-retiree-list-common-challenges-applicants-face');
  if (ap_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ap-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_how_we_solve_these_challenges = document.getElementById('ap-retiree-list-how-we-solve-these-challenges');
  if (ap_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ap-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_residency_overview = document.getElementById('ap-retiree-section-residency-overview');
  if (ap_retiree_section_residency_overview) {
    gsap.fromTo('#ap-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_form_who_is_this_residency_for = document.getElementById('ap-retiree-form-who-is-this-residency-for');
  if (ap_retiree_form_who_is_this_residency_for) {
    gsap.from('#ap-retiree-form-who-is-this-residency-for input, #ap-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_required_documents = document.getElementById('ap-retiree-list-required-documents');
  if (ap_retiree_list_required_documents) {
    gsap.from('#ap-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_application_process = document.getElementById('ap-retiree-list-application-process');
  if (ap_retiree_list_application_process) {
    gsap.from('#ap-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_timelines_deadlines = document.getElementById('ap-retiree-section-timelines-deadlines');
  if (ap_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ap-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_fees_costs = document.getElementById('ap-retiree-section-fees-costs');
  if (ap_retiree_section_fees_costs) {
    gsap.fromTo('#ap-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_risks_common_mistakes = document.getElementById('ap-retiree-list-risks-common-mistakes');
  if (ap_retiree_list_risks_common_mistakes) {
    gsap.from('#ap-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_diy_vs_professional_assistance = document.getElementById('ap-retiree-section-diy-vs-professional-assistance');
  if (ap_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_amap_specific_context = document.getElementById('ap-retiree-section-amap-specific-context');
  if (ap_retiree_section_amap_specific_context) {
    gsap.fromTo('#ap-retiree-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_what_our_clients_say = document.getElementById('ap-retiree-section-what-our-clients-say');
  if (ap_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ap-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_frequently_asked_questions = document.getElementById('ap-retiree-section-frequently-asked-questions');
  if (ap_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ap-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_international_support = document.getElementById('ap-retiree-section-international-support');
  if (ap_retiree_section_international_support) {
    gsap.fromTo('#ap-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_our_credentials = document.getElementById('ap-retiree-list-our-credentials');
  if (ap_retiree_list_our_credentials) {
    gsap.from('#ap-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_list_related_services = document.getElementById('ap-retiree-list-related-services');
  if (ap_retiree_list_related_services) {
    gsap.from('#ap-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_youre_in_good_hands = document.getElementById('ap-retiree-section-youre-in-good-hands');
  if (ap_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ap-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_retiree_section_21 = document.getElementById('ap-retiree-section-21');
  if (ap_retiree_section_21) {
    gsap.fromTo('#ap-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ap-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ap_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ap-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ap-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_quick_facts = document.getElementById('ap-volunteer-list-quick-facts');
  if (ap_volunteer_list_quick_facts) {
    gsap.from('#ap-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_common_challenges_applicants_face = document.getElementById('ap-volunteer-list-common-challenges-applicants-face');
  if (ap_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ap-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_how_we_solve_these_challenges = document.getElementById('ap-volunteer-list-how-we-solve-these-challenges');
  if (ap_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ap-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_residency_overview = document.getElementById('ap-volunteer-section-residency-overview');
  if (ap_volunteer_section_residency_overview) {
    gsap.fromTo('#ap-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_form_who_is_this_residency_for = document.getElementById('ap-volunteer-form-who-is-this-residency-for');
  if (ap_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ap-volunteer-form-who-is-this-residency-for input, #ap-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_required_documents = document.getElementById('ap-volunteer-list-required-documents');
  if (ap_volunteer_list_required_documents) {
    gsap.from('#ap-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_application_process = document.getElementById('ap-volunteer-list-application-process');
  if (ap_volunteer_list_application_process) {
    gsap.from('#ap-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_timelines_deadlines = document.getElementById('ap-volunteer-section-timelines-deadlines');
  if (ap_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ap-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_fees_costs = document.getElementById('ap-volunteer-section-fees-costs');
  if (ap_volunteer_section_fees_costs) {
    gsap.fromTo('#ap-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_risks_common_mistakes = document.getElementById('ap-volunteer-list-risks-common-mistakes');
  if (ap_volunteer_list_risks_common_mistakes) {
    gsap.from('#ap-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_diy_vs_professional_assistance = document.getElementById('ap-volunteer-section-diy-vs-professional-assistance');
  if (ap_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_amap_specific_context = document.getElementById('ap-volunteer-section-amap-specific-context');
  if (ap_volunteer_section_amap_specific_context) {
    gsap.fromTo('#ap-volunteer-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_what_our_clients_say = document.getElementById('ap-volunteer-section-what-our-clients-say');
  if (ap_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ap-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_frequently_asked_questions = document.getElementById('ap-volunteer-section-frequently-asked-questions');
  if (ap_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ap-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_international_support = document.getElementById('ap-volunteer-section-international-support');
  if (ap_volunteer_section_international_support) {
    gsap.fromTo('#ap-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_our_credentials = document.getElementById('ap-volunteer-list-our-credentials');
  if (ap_volunteer_list_our_credentials) {
    gsap.from('#ap-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_list_related_services = document.getElementById('ap-volunteer-list-related-services');
  if (ap_volunteer_list_related_services) {
    gsap.from('#ap-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_youre_in_good_hands = document.getElementById('ap-volunteer-section-youre-in-good-hands');
  if (ap_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ap-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_volunteer_section_21 = document.getElementById('ap-volunteer-section-21');
  if (ap_volunteer_section_21) {
    gsap.fromTo('#ap-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ap-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ap_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ap-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ap-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_quick_facts = document.getElementById('ap-skilledworker-list-quick-facts');
  if (ap_skilledworker_list_quick_facts) {
    gsap.from('#ap-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_common_challenges_applicants_face = document.getElementById('ap-skilledworker-list-common-challenges-applicants-face');
  if (ap_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ap-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ap-skilledworker-list-how-we-solve-these-challenges');
  if (ap_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ap-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_residency_overview = document.getElementById('ap-skilledworker-section-residency-overview');
  if (ap_skilledworker_section_residency_overview) {
    gsap.fromTo('#ap-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_form_who_is_this_residency_for = document.getElementById('ap-skilledworker-form-who-is-this-residency-for');
  if (ap_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ap-skilledworker-form-who-is-this-residency-for input, #ap-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_required_documents = document.getElementById('ap-skilledworker-list-required-documents');
  if (ap_skilledworker_list_required_documents) {
    gsap.from('#ap-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_application_process = document.getElementById('ap-skilledworker-list-application-process');
  if (ap_skilledworker_list_application_process) {
    gsap.from('#ap-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_timelines_deadlines = document.getElementById('ap-skilledworker-section-timelines-deadlines');
  if (ap_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ap-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_fees_costs = document.getElementById('ap-skilledworker-section-fees-costs');
  if (ap_skilledworker_section_fees_costs) {
    gsap.fromTo('#ap-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_risks_common_mistakes = document.getElementById('ap-skilledworker-list-risks-common-mistakes');
  if (ap_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ap-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ap-skilledworker-section-diy-vs-professional-assistance');
  if (ap_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_amap_specific_context = document.getElementById('ap-skilledworker-section-amap-specific-context');
  if (ap_skilledworker_section_amap_specific_context) {
    gsap.fromTo('#ap-skilledworker-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_what_our_clients_say = document.getElementById('ap-skilledworker-section-what-our-clients-say');
  if (ap_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ap-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_frequently_asked_questions = document.getElementById('ap-skilledworker-section-frequently-asked-questions');
  if (ap_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ap-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_international_support = document.getElementById('ap-skilledworker-section-international-support');
  if (ap_skilledworker_section_international_support) {
    gsap.fromTo('#ap-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_our_credentials = document.getElementById('ap-skilledworker-list-our-credentials');
  if (ap_skilledworker_list_our_credentials) {
    gsap.from('#ap-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_list_related_services = document.getElementById('ap-skilledworker-list-related-services');
  if (ap_skilledworker_list_related_services) {
    gsap.from('#ap-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_youre_in_good_hands = document.getElementById('ap-skilledworker-section-youre-in-good-hands');
  if (ap_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ap-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_skilledworker_section_21 = document.getElementById('ap-skilledworker-section-21');
  if (ap_skilledworker_section_21) {
    gsap.fromTo('#ap-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ap-religious-form-religious-residency-in-brazil-for-missions');
  if (ap_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ap-religious-form-religious-residency-in-brazil-for-missions input, #ap-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_quick_facts = document.getElementById('ap-religious-list-quick-facts');
  if (ap_religious_list_quick_facts) {
    gsap.from('#ap-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_common_challenges_applicants_face = document.getElementById('ap-religious-list-common-challenges-applicants-face');
  if (ap_religious_list_common_challenges_applicants_face) {
    gsap.from('#ap-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_how_we_solve_these_challenges = document.getElementById('ap-religious-list-how-we-solve-these-challenges');
  if (ap_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ap-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_residency_overview = document.getElementById('ap-religious-section-residency-overview');
  if (ap_religious_section_residency_overview) {
    gsap.fromTo('#ap-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_form_who_is_this_residency_for = document.getElementById('ap-religious-form-who-is-this-residency-for');
  if (ap_religious_form_who_is_this_residency_for) {
    gsap.from('#ap-religious-form-who-is-this-residency-for input, #ap-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_required_documents = document.getElementById('ap-religious-list-required-documents');
  if (ap_religious_list_required_documents) {
    gsap.from('#ap-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_application_process = document.getElementById('ap-religious-list-application-process');
  if (ap_religious_list_application_process) {
    gsap.from('#ap-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_timelines_deadlines = document.getElementById('ap-religious-section-timelines-deadlines');
  if (ap_religious_section_timelines_deadlines) {
    gsap.fromTo('#ap-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_fees_costs = document.getElementById('ap-religious-section-fees-costs');
  if (ap_religious_section_fees_costs) {
    gsap.fromTo('#ap-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_risks_common_mistakes = document.getElementById('ap-religious-list-risks-common-mistakes');
  if (ap_religious_list_risks_common_mistakes) {
    gsap.from('#ap-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_diy_vs_professional_assistance = document.getElementById('ap-religious-section-diy-vs-professional-assistance');
  if (ap_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_amap_specific_context = document.getElementById('ap-religious-section-amap-specific-context');
  if (ap_religious_section_amap_specific_context) {
    gsap.fromTo('#ap-religious-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_what_our_clients_say = document.getElementById('ap-religious-section-what-our-clients-say');
  if (ap_religious_section_what_our_clients_say) {
    gsap.fromTo('#ap-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_frequently_asked_questions = document.getElementById('ap-religious-section-frequently-asked-questions');
  if (ap_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ap-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_international_support = document.getElementById('ap-religious-section-international-support');
  if (ap_religious_section_international_support) {
    gsap.fromTo('#ap-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_our_credentials = document.getElementById('ap-religious-list-our-credentials');
  if (ap_religious_list_our_credentials) {
    gsap.from('#ap-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_list_related_services = document.getElementById('ap-religious-list-related-services');
  if (ap_religious_list_related_services) {
    gsap.from('#ap-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_youre_in_good_hands = document.getElementById('ap-religious-section-youre-in-good-hands');
  if (ap_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ap-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_religious_section_21 = document.getElementById('ap-religious-section-21');
  if (ap_religious_section_21) {
    gsap.fromTo('#ap-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ap-investor-form-gain-residency-in-brazil-through-investment');
  if (ap_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ap-investor-form-gain-residency-in-brazil-through-investment input, #ap-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_quick_facts = document.getElementById('ap-investor-list-quick-facts');
  if (ap_investor_list_quick_facts) {
    gsap.from('#ap-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_common_challenges_applicants_face = document.getElementById('ap-investor-list-common-challenges-applicants-face');
  if (ap_investor_list_common_challenges_applicants_face) {
    gsap.from('#ap-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_how_we_solve_these_challenges = document.getElementById('ap-investor-list-how-we-solve-these-challenges');
  if (ap_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ap-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_residency_overview = document.getElementById('ap-investor-section-residency-overview');
  if (ap_investor_section_residency_overview) {
    gsap.fromTo('#ap-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_form_who_is_this_residency_for = document.getElementById('ap-investor-form-who-is-this-residency-for');
  if (ap_investor_form_who_is_this_residency_for) {
    gsap.from('#ap-investor-form-who-is-this-residency-for input, #ap-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_required_documents = document.getElementById('ap-investor-list-required-documents');
  if (ap_investor_list_required_documents) {
    gsap.from('#ap-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_application_process = document.getElementById('ap-investor-list-application-process');
  if (ap_investor_list_application_process) {
    gsap.from('#ap-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_timelines_deadlines = document.getElementById('ap-investor-section-timelines-deadlines');
  if (ap_investor_section_timelines_deadlines) {
    gsap.fromTo('#ap-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_fees_costs = document.getElementById('ap-investor-section-fees-costs');
  if (ap_investor_section_fees_costs) {
    gsap.fromTo('#ap-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_risks_common_mistakes = document.getElementById('ap-investor-list-risks-common-mistakes');
  if (ap_investor_list_risks_common_mistakes) {
    gsap.from('#ap-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_diy_vs_professional_assistance = document.getElementById('ap-investor-section-diy-vs-professional-assistance');
  if (ap_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_amap_specific_context = document.getElementById('ap-investor-section-amap-specific-context');
  if (ap_investor_section_amap_specific_context) {
    gsap.fromTo('#ap-investor-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_what_our_clients_say = document.getElementById('ap-investor-section-what-our-clients-say');
  if (ap_investor_section_what_our_clients_say) {
    gsap.fromTo('#ap-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_frequently_asked_questions = document.getElementById('ap-investor-section-frequently-asked-questions');
  if (ap_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ap-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_international_support = document.getElementById('ap-investor-section-international-support');
  if (ap_investor_section_international_support) {
    gsap.fromTo('#ap-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_our_credentials = document.getElementById('ap-investor-list-our-credentials');
  if (ap_investor_list_our_credentials) {
    gsap.from('#ap-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_list_related_services = document.getElementById('ap-investor-list-related-services');
  if (ap_investor_list_related_services) {
    gsap.from('#ap-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_youre_in_good_hands = document.getElementById('ap-investor-section-youre-in-good-hands');
  if (ap_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ap-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_investor_section_21 = document.getElementById('ap-investor-section-21');
  if (ap_investor_section_21) {
    gsap.fromTo('#ap-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ap-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ap_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ap-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ap-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_quick_facts = document.getElementById('ap-healthtreatment-list-quick-facts');
  if (ap_healthtreatment_list_quick_facts) {
    gsap.from('#ap-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ap-healthtreatment-list-common-challenges-applicants-face');
  if (ap_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ap-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ap-healthtreatment-list-how-we-solve-these-challenges');
  if (ap_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ap-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_residency_overview = document.getElementById('ap-healthtreatment-section-residency-overview');
  if (ap_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ap-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_form_who_is_this_residency_for = document.getElementById('ap-healthtreatment-form-who-is-this-residency-for');
  if (ap_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ap-healthtreatment-form-who-is-this-residency-for input, #ap-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_required_documents = document.getElementById('ap-healthtreatment-list-required-documents');
  if (ap_healthtreatment_list_required_documents) {
    gsap.from('#ap-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_application_process = document.getElementById('ap-healthtreatment-list-application-process');
  if (ap_healthtreatment_list_application_process) {
    gsap.from('#ap-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_timelines_deadlines = document.getElementById('ap-healthtreatment-section-timelines-deadlines');
  if (ap_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ap-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_fees_costs = document.getElementById('ap-healthtreatment-section-fees-costs');
  if (ap_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ap-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_risks_common_mistakes = document.getElementById('ap-healthtreatment-list-risks-common-mistakes');
  if (ap_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ap-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ap-healthtreatment-section-diy-vs-professional-assistance');
  if (ap_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_amap_specific_context = document.getElementById('ap-healthtreatment-section-amap-specific-context');
  if (ap_healthtreatment_section_amap_specific_context) {
    gsap.fromTo('#ap-healthtreatment-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_what_our_clients_say = document.getElementById('ap-healthtreatment-section-what-our-clients-say');
  if (ap_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ap-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_frequently_asked_questions = document.getElementById('ap-healthtreatment-section-frequently-asked-questions');
  if (ap_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ap-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_international_support = document.getElementById('ap-healthtreatment-section-international-support');
  if (ap_healthtreatment_section_international_support) {
    gsap.fromTo('#ap-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_our_credentials = document.getElementById('ap-healthtreatment-list-our-credentials');
  if (ap_healthtreatment_list_our_credentials) {
    gsap.from('#ap-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_list_related_services = document.getElementById('ap-healthtreatment-list-related-services');
  if (ap_healthtreatment_list_related_services) {
    gsap.from('#ap-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_youre_in_good_hands = document.getElementById('ap-healthtreatment-section-youre-in-good-hands');
  if (ap_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ap-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_healthtreatment_section_21 = document.getElementById('ap-healthtreatment-section-21');
  if (ap_healthtreatment_section_21) {
    gsap.fromTo('#ap-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ap-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ap_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ap-cplp-form-residency-for-cplp-citizens-in-brazil input, #ap-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_quick_facts = document.getElementById('ap-cplp-list-quick-facts');
  if (ap_cplp_list_quick_facts) {
    gsap.from('#ap-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_common_challenges_applicants_face = document.getElementById('ap-cplp-list-common-challenges-applicants-face');
  if (ap_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ap-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_how_we_solve_these_challenges = document.getElementById('ap-cplp-list-how-we-solve-these-challenges');
  if (ap_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ap-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_residency_overview = document.getElementById('ap-cplp-section-residency-overview');
  if (ap_cplp_section_residency_overview) {
    gsap.fromTo('#ap-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_form_who_is_this_residency_for = document.getElementById('ap-cplp-form-who-is-this-residency-for');
  if (ap_cplp_form_who_is_this_residency_for) {
    gsap.from('#ap-cplp-form-who-is-this-residency-for input, #ap-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_required_documents = document.getElementById('ap-cplp-list-required-documents');
  if (ap_cplp_list_required_documents) {
    gsap.from('#ap-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_application_process = document.getElementById('ap-cplp-list-application-process');
  if (ap_cplp_list_application_process) {
    gsap.from('#ap-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_timelines_deadlines = document.getElementById('ap-cplp-section-timelines-deadlines');
  if (ap_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ap-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_fees_costs = document.getElementById('ap-cplp-section-fees-costs');
  if (ap_cplp_section_fees_costs) {
    gsap.fromTo('#ap-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_risks_common_mistakes = document.getElementById('ap-cplp-list-risks-common-mistakes');
  if (ap_cplp_list_risks_common_mistakes) {
    gsap.from('#ap-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_diy_vs_professional_assistance = document.getElementById('ap-cplp-section-diy-vs-professional-assistance');
  if (ap_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_amap_specific_context = document.getElementById('ap-cplp-section-amap-specific-context');
  if (ap_cplp_section_amap_specific_context) {
    gsap.fromTo('#ap-cplp-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_what_our_clients_say = document.getElementById('ap-cplp-section-what-our-clients-say');
  if (ap_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ap-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_frequently_asked_questions = document.getElementById('ap-cplp-section-frequently-asked-questions');
  if (ap_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ap-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_international_support = document.getElementById('ap-cplp-section-international-support');
  if (ap_cplp_section_international_support) {
    gsap.fromTo('#ap-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_our_credentials = document.getElementById('ap-cplp-list-our-credentials');
  if (ap_cplp_list_our_credentials) {
    gsap.from('#ap-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_list_related_services = document.getElementById('ap-cplp-list-related-services');
  if (ap_cplp_list_related_services) {
    gsap.from('#ap-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_youre_in_good_hands = document.getElementById('ap-cplp-section-youre-in-good-hands');
  if (ap_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ap-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_cplp_section_21 = document.getElementById('ap-cplp-section-21');
  if (ap_cplp_section_21) {
    gsap.fromTo('#ap-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ap-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ap_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ap-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ap-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_quick_facts = document.getElementById('ap-youthexchange-list-quick-facts');
  if (ap_youthexchange_list_quick_facts) {
    gsap.from('#ap-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_common_challenges_applicants_face = document.getElementById('ap-youthexchange-list-common-challenges-applicants-face');
  if (ap_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ap-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ap-youthexchange-list-how-we-solve-these-challenges');
  if (ap_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ap-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_residency_overview = document.getElementById('ap-youthexchange-section-residency-overview');
  if (ap_youthexchange_section_residency_overview) {
    gsap.fromTo('#ap-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_form_who_is_this_residency_for = document.getElementById('ap-youthexchange-form-who-is-this-residency-for');
  if (ap_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ap-youthexchange-form-who-is-this-residency-for input, #ap-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_required_documents = document.getElementById('ap-youthexchange-list-required-documents');
  if (ap_youthexchange_list_required_documents) {
    gsap.from('#ap-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_application_process = document.getElementById('ap-youthexchange-list-application-process');
  if (ap_youthexchange_list_application_process) {
    gsap.from('#ap-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_timelines_deadlines = document.getElementById('ap-youthexchange-section-timelines-deadlines');
  if (ap_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ap-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_fees_costs = document.getElementById('ap-youthexchange-section-fees-costs');
  if (ap_youthexchange_section_fees_costs) {
    gsap.fromTo('#ap-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_risks_common_mistakes = document.getElementById('ap-youthexchange-list-risks-common-mistakes');
  if (ap_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ap-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ap-youthexchange-section-diy-vs-professional-assistance');
  if (ap_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_amap_specific_context = document.getElementById('ap-youthexchange-section-amap-specific-context');
  if (ap_youthexchange_section_amap_specific_context) {
    gsap.fromTo('#ap-youthexchange-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_what_our_clients_say = document.getElementById('ap-youthexchange-section-what-our-clients-say');
  if (ap_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ap-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_frequently_asked_questions = document.getElementById('ap-youthexchange-section-frequently-asked-questions');
  if (ap_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ap-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_international_support = document.getElementById('ap-youthexchange-section-international-support');
  if (ap_youthexchange_section_international_support) {
    gsap.fromTo('#ap-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_our_credentials = document.getElementById('ap-youthexchange-list-our-credentials');
  if (ap_youthexchange_list_our_credentials) {
    gsap.from('#ap-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_list_related_services = document.getElementById('ap-youthexchange-list-related-services');
  if (ap_youthexchange_list_related_services) {
    gsap.from('#ap-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_youre_in_good_hands = document.getElementById('ap-youthexchange-section-youre-in-good-hands');
  if (ap_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ap-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_youthexchange_section_21 = document.getElementById('ap-youthexchange-section-21');
  if (ap_youthexchange_section_21) {
    gsap.fromTo('#ap-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ap-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ap_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ap-work-form-work-and-reside-in-brazil-with-work-residency input, #ap-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_quick_facts = document.getElementById('ap-work-list-quick-facts');
  if (ap_work_list_quick_facts) {
    gsap.from('#ap-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_common_challenges_applicants_face = document.getElementById('ap-work-list-common-challenges-applicants-face');
  if (ap_work_list_common_challenges_applicants_face) {
    gsap.from('#ap-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_how_we_solve_these_challenges = document.getElementById('ap-work-list-how-we-solve-these-challenges');
  if (ap_work_list_how_we_solve_these_challenges) {
    gsap.from('#ap-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_residency_overview = document.getElementById('ap-work-section-residency-overview');
  if (ap_work_section_residency_overview) {
    gsap.fromTo('#ap-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_form_who_is_this_residency_for = document.getElementById('ap-work-form-who-is-this-residency-for');
  if (ap_work_form_who_is_this_residency_for) {
    gsap.from('#ap-work-form-who-is-this-residency-for input, #ap-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_required_documents = document.getElementById('ap-work-list-required-documents');
  if (ap_work_list_required_documents) {
    gsap.from('#ap-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_application_process = document.getElementById('ap-work-list-application-process');
  if (ap_work_list_application_process) {
    gsap.from('#ap-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_timelines_deadlines = document.getElementById('ap-work-section-timelines-deadlines');
  if (ap_work_section_timelines_deadlines) {
    gsap.fromTo('#ap-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_fees_costs = document.getElementById('ap-work-section-fees-costs');
  if (ap_work_section_fees_costs) {
    gsap.fromTo('#ap-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_risks_common_mistakes = document.getElementById('ap-work-list-risks-common-mistakes');
  if (ap_work_list_risks_common_mistakes) {
    gsap.from('#ap-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_diy_vs_professional_assistance = document.getElementById('ap-work-section-diy-vs-professional-assistance');
  if (ap_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_amap_specific_context = document.getElementById('ap-work-section-amap-specific-context');
  if (ap_work_section_amap_specific_context) {
    gsap.fromTo('#ap-work-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_what_our_clients_say = document.getElementById('ap-work-section-what-our-clients-say');
  if (ap_work_section_what_our_clients_say) {
    gsap.fromTo('#ap-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_frequently_asked_questions = document.getElementById('ap-work-section-frequently-asked-questions');
  if (ap_work_section_frequently_asked_questions) {
    gsap.fromTo('#ap-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_international_support = document.getElementById('ap-work-section-international-support');
  if (ap_work_section_international_support) {
    gsap.fromTo('#ap-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_our_credentials = document.getElementById('ap-work-list-our-credentials');
  if (ap_work_list_our_credentials) {
    gsap.from('#ap-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_list_related_services = document.getElementById('ap-work-list-related-services');
  if (ap_work_list_related_services) {
    gsap.from('#ap-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_youre_in_good_hands = document.getElementById('ap-work-section-youre-in-good-hands');
  if (ap_work_section_youre_in_good_hands) {
    gsap.fromTo('#ap-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_work_section_21 = document.getElementById('ap-work-section-21');
  if (ap_work_section_21) {
    gsap.fromTo('#ap-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ap-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ap_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ap-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ap-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_quick_facts = document.getElementById('ap-startup-list-quick-facts');
  if (ap_startup_list_quick_facts) {
    gsap.from('#ap-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_common_challenges_applicants_face = document.getElementById('ap-startup-list-common-challenges-applicants-face');
  if (ap_startup_list_common_challenges_applicants_face) {
    gsap.from('#ap-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_how_we_solve_these_challenges = document.getElementById('ap-startup-list-how-we-solve-these-challenges');
  if (ap_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ap-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_visa_overview = document.getElementById('ap-startup-section-visa-overview');
  if (ap_startup_section_visa_overview) {
    gsap.fromTo('#ap-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_form_who_is_this_visa_for = document.getElementById('ap-startup-form-who-is-this-visa-for');
  if (ap_startup_form_who_is_this_visa_for) {
    gsap.from('#ap-startup-form-who-is-this-visa-for input, #ap-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_required_documents = document.getElementById('ap-startup-list-required-documents');
  if (ap_startup_list_required_documents) {
    gsap.from('#ap-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_application_process = document.getElementById('ap-startup-list-application-process');
  if (ap_startup_list_application_process) {
    gsap.from('#ap-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_timelines_deadlines = document.getElementById('ap-startup-section-timelines-deadlines');
  if (ap_startup_section_timelines_deadlines) {
    gsap.fromTo('#ap-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_fees_costs = document.getElementById('ap-startup-section-fees-costs');
  if (ap_startup_section_fees_costs) {
    gsap.fromTo('#ap-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_risks_common_mistakes = document.getElementById('ap-startup-list-risks-common-mistakes');
  if (ap_startup_list_risks_common_mistakes) {
    gsap.from('#ap-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_diy_vs_professional_assistance = document.getElementById('ap-startup-section-diy-vs-professional-assistance');
  if (ap_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_amap_specific_context = document.getElementById('ap-startup-section-amap-specific-context');
  if (ap_startup_section_amap_specific_context) {
    gsap.fromTo('#ap-startup-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_what_our_clients_say = document.getElementById('ap-startup-section-what-our-clients-say');
  if (ap_startup_section_what_our_clients_say) {
    gsap.fromTo('#ap-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_frequently_asked_questions = document.getElementById('ap-startup-section-frequently-asked-questions');
  if (ap_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ap-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_international_support = document.getElementById('ap-startup-section-international-support');
  if (ap_startup_section_international_support) {
    gsap.fromTo('#ap-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_our_credentials = document.getElementById('ap-startup-list-our-credentials');
  if (ap_startup_list_our_credentials) {
    gsap.from('#ap-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_list_related_services = document.getElementById('ap-startup-list-related-services');
  if (ap_startup_list_related_services) {
    gsap.from('#ap-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_youre_in_good_hands = document.getElementById('ap-startup-section-youre-in-good-hands');
  if (ap_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ap-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_startup_section_21 = document.getElementById('ap-startup-section-21');
  if (ap_startup_section_21) {
    gsap.fromTo('#ap-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ap-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ap_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ap-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ap-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_quick_facts = document.getElementById('ap-family-list-quick-facts');
  if (ap_family_list_quick_facts) {
    gsap.from('#ap-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_common_challenges_applicants_face = document.getElementById('ap-family-list-common-challenges-applicants-face');
  if (ap_family_list_common_challenges_applicants_face) {
    gsap.from('#ap-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_how_we_solve_these_challenges = document.getElementById('ap-family-list-how-we-solve-these-challenges');
  if (ap_family_list_how_we_solve_these_challenges) {
    gsap.from('#ap-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_visa_overview = document.getElementById('ap-family-section-visa-overview');
  if (ap_family_section_visa_overview) {
    gsap.fromTo('#ap-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_form_who_is_this_visa_for = document.getElementById('ap-family-form-who-is-this-visa-for');
  if (ap_family_form_who_is_this_visa_for) {
    gsap.from('#ap-family-form-who-is-this-visa-for input, #ap-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_required_documents = document.getElementById('ap-family-list-required-documents');
  if (ap_family_list_required_documents) {
    gsap.from('#ap-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_application_process = document.getElementById('ap-family-list-application-process');
  if (ap_family_list_application_process) {
    gsap.from('#ap-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_timelines_deadlines = document.getElementById('ap-family-section-timelines-deadlines');
  if (ap_family_section_timelines_deadlines) {
    gsap.fromTo('#ap-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_fees_costs = document.getElementById('ap-family-section-fees-costs');
  if (ap_family_section_fees_costs) {
    gsap.fromTo('#ap-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_risks_common_mistakes = document.getElementById('ap-family-list-risks-common-mistakes');
  if (ap_family_list_risks_common_mistakes) {
    gsap.from('#ap-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_diy_vs_professional_assistance = document.getElementById('ap-family-section-diy-vs-professional-assistance');
  if (ap_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_amap_specific_context = document.getElementById('ap-family-section-amap-specific-context');
  if (ap_family_section_amap_specific_context) {
    gsap.fromTo('#ap-family-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_what_our_clients_say = document.getElementById('ap-family-section-what-our-clients-say');
  if (ap_family_section_what_our_clients_say) {
    gsap.fromTo('#ap-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_frequently_asked_questions = document.getElementById('ap-family-section-frequently-asked-questions');
  if (ap_family_section_frequently_asked_questions) {
    gsap.fromTo('#ap-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_international_support = document.getElementById('ap-family-section-international-support');
  if (ap_family_section_international_support) {
    gsap.fromTo('#ap-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_our_credentials = document.getElementById('ap-family-list-our-credentials');
  if (ap_family_list_our_credentials) {
    gsap.from('#ap-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_list_related_services = document.getElementById('ap-family-list-related-services');
  if (ap_family_list_related_services) {
    gsap.from('#ap-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_youre_in_good_hands = document.getElementById('ap-family-section-youre-in-good-hands');
  if (ap_family_section_youre_in_good_hands) {
    gsap.fromTo('#ap-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_family_section_21 = document.getElementById('ap-family-section-21');
  if (ap_family_section_21) {
    gsap.fromTo('#ap-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ap-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ap_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ap-sports-form-compete-in-brazil-with-the-sports-visa input, #ap-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_quick_facts = document.getElementById('ap-sports-list-quick-facts');
  if (ap_sports_list_quick_facts) {
    gsap.from('#ap-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_common_challenges_applicants_face = document.getElementById('ap-sports-list-common-challenges-applicants-face');
  if (ap_sports_list_common_challenges_applicants_face) {
    gsap.from('#ap-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_how_we_solve_these_challenges = document.getElementById('ap-sports-list-how-we-solve-these-challenges');
  if (ap_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ap-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_visa_overview = document.getElementById('ap-sports-section-visa-overview');
  if (ap_sports_section_visa_overview) {
    gsap.fromTo('#ap-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_form_who_is_this_visa_for = document.getElementById('ap-sports-form-who-is-this-visa-for');
  if (ap_sports_form_who_is_this_visa_for) {
    gsap.from('#ap-sports-form-who-is-this-visa-for input, #ap-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_required_documents = document.getElementById('ap-sports-list-required-documents');
  if (ap_sports_list_required_documents) {
    gsap.from('#ap-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_application_process = document.getElementById('ap-sports-list-application-process');
  if (ap_sports_list_application_process) {
    gsap.from('#ap-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_timelines_deadlines = document.getElementById('ap-sports-section-timelines-deadlines');
  if (ap_sports_section_timelines_deadlines) {
    gsap.fromTo('#ap-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_fees_costs = document.getElementById('ap-sports-section-fees-costs');
  if (ap_sports_section_fees_costs) {
    gsap.fromTo('#ap-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_risks_common_mistakes = document.getElementById('ap-sports-list-risks-common-mistakes');
  if (ap_sports_list_risks_common_mistakes) {
    gsap.from('#ap-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_diy_vs_professional_assistance = document.getElementById('ap-sports-section-diy-vs-professional-assistance');
  if (ap_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_amap_specific_context = document.getElementById('ap-sports-section-amap-specific-context');
  if (ap_sports_section_amap_specific_context) {
    gsap.fromTo('#ap-sports-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_what_our_clients_say = document.getElementById('ap-sports-section-what-our-clients-say');
  if (ap_sports_section_what_our_clients_say) {
    gsap.fromTo('#ap-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_frequently_asked_questions = document.getElementById('ap-sports-section-frequently-asked-questions');
  if (ap_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ap-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_international_support = document.getElementById('ap-sports-section-international-support');
  if (ap_sports_section_international_support) {
    gsap.fromTo('#ap-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_our_credentials = document.getElementById('ap-sports-list-our-credentials');
  if (ap_sports_list_our_credentials) {
    gsap.from('#ap-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_list_related_services = document.getElementById('ap-sports-list-related-services');
  if (ap_sports_list_related_services) {
    gsap.from('#ap-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_youre_in_good_hands = document.getElementById('ap-sports-section-youre-in-good-hands');
  if (ap_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ap-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_sports_section_21 = document.getElementById('ap-sports-section-21');
  if (ap_sports_section_21) {
    gsap.fromTo('#ap-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ap-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ap_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ap-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ap-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_quick_facts = document.getElementById('ap-medical-list-quick-facts');
  if (ap_medical_list_quick_facts) {
    gsap.from('#ap-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_common_challenges_applicants_face = document.getElementById('ap-medical-list-common-challenges-applicants-face');
  if (ap_medical_list_common_challenges_applicants_face) {
    gsap.from('#ap-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_how_we_solve_these_challenges = document.getElementById('ap-medical-list-how-we-solve-these-challenges');
  if (ap_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ap-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_visa_overview = document.getElementById('ap-medical-section-visa-overview');
  if (ap_medical_section_visa_overview) {
    gsap.fromTo('#ap-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_form_who_is_this_visa_for = document.getElementById('ap-medical-form-who-is-this-visa-for');
  if (ap_medical_form_who_is_this_visa_for) {
    gsap.from('#ap-medical-form-who-is-this-visa-for input, #ap-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_required_documents = document.getElementById('ap-medical-list-required-documents');
  if (ap_medical_list_required_documents) {
    gsap.from('#ap-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_application_process = document.getElementById('ap-medical-list-application-process');
  if (ap_medical_list_application_process) {
    gsap.from('#ap-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_timelines_deadlines = document.getElementById('ap-medical-section-timelines-deadlines');
  if (ap_medical_section_timelines_deadlines) {
    gsap.fromTo('#ap-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_fees_costs = document.getElementById('ap-medical-section-fees-costs');
  if (ap_medical_section_fees_costs) {
    gsap.fromTo('#ap-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_risks_common_mistakes = document.getElementById('ap-medical-list-risks-common-mistakes');
  if (ap_medical_list_risks_common_mistakes) {
    gsap.from('#ap-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_diy_vs_professional_assistance = document.getElementById('ap-medical-section-diy-vs-professional-assistance');
  if (ap_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_amap_specific_context = document.getElementById('ap-medical-section-amap-specific-context');
  if (ap_medical_section_amap_specific_context) {
    gsap.fromTo('#ap-medical-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_what_our_clients_say = document.getElementById('ap-medical-section-what-our-clients-say');
  if (ap_medical_section_what_our_clients_say) {
    gsap.fromTo('#ap-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_frequently_asked_questions = document.getElementById('ap-medical-section-frequently-asked-questions');
  if (ap_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ap-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_international_support = document.getElementById('ap-medical-section-international-support');
  if (ap_medical_section_international_support) {
    gsap.fromTo('#ap-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_our_credentials = document.getElementById('ap-medical-list-our-credentials');
  if (ap_medical_list_our_credentials) {
    gsap.from('#ap-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_list_related_services = document.getElementById('ap-medical-list-related-services');
  if (ap_medical_list_related_services) {
    gsap.from('#ap-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_youre_in_good_hands = document.getElementById('ap-medical-section-youre-in-good-hands');
  if (ap_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ap-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_medical_section_21 = document.getElementById('ap-medical-section-21');
  if (ap_medical_section_21) {
    gsap.fromTo('#ap-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ap-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ap_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ap-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ap-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_quick_facts = document.getElementById('ap-tourist-list-quick-facts');
  if (ap_tourist_list_quick_facts) {
    gsap.from('#ap-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_common_challenges_applicants_face = document.getElementById('ap-tourist-list-common-challenges-applicants-face');
  if (ap_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ap-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_how_we_solve_these_challenges = document.getElementById('ap-tourist-list-how-we-solve-these-challenges');
  if (ap_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ap-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_visa_overview = document.getElementById('ap-tourist-section-visa-overview');
  if (ap_tourist_section_visa_overview) {
    gsap.fromTo('#ap-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_form_who_is_this_visa_for = document.getElementById('ap-tourist-form-who-is-this-visa-for');
  if (ap_tourist_form_who_is_this_visa_for) {
    gsap.from('#ap-tourist-form-who-is-this-visa-for input, #ap-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_required_documents = document.getElementById('ap-tourist-list-required-documents');
  if (ap_tourist_list_required_documents) {
    gsap.from('#ap-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_application_process = document.getElementById('ap-tourist-list-application-process');
  if (ap_tourist_list_application_process) {
    gsap.from('#ap-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_timelines_deadlines = document.getElementById('ap-tourist-section-timelines-deadlines');
  if (ap_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ap-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_fees_costs = document.getElementById('ap-tourist-section-fees-costs');
  if (ap_tourist_section_fees_costs) {
    gsap.fromTo('#ap-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_risks_common_mistakes = document.getElementById('ap-tourist-list-risks-common-mistakes');
  if (ap_tourist_list_risks_common_mistakes) {
    gsap.from('#ap-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_diy_vs_professional_assistance = document.getElementById('ap-tourist-section-diy-vs-professional-assistance');
  if (ap_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_amap_specific_context = document.getElementById('ap-tourist-section-amap-specific-context');
  if (ap_tourist_section_amap_specific_context) {
    gsap.fromTo('#ap-tourist-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_what_our_clients_say = document.getElementById('ap-tourist-section-what-our-clients-say');
  if (ap_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ap-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_frequently_asked_questions = document.getElementById('ap-tourist-section-frequently-asked-questions');
  if (ap_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ap-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_international_support = document.getElementById('ap-tourist-section-international-support');
  if (ap_tourist_section_international_support) {
    gsap.fromTo('#ap-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_our_credentials = document.getElementById('ap-tourist-list-our-credentials');
  if (ap_tourist_list_our_credentials) {
    gsap.from('#ap-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_list_related_services = document.getElementById('ap-tourist-list-related-services');
  if (ap_tourist_list_related_services) {
    gsap.from('#ap-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_youre_in_good_hands = document.getElementById('ap-tourist-section-youre-in-good-hands');
  if (ap_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ap-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_tourist_section_21 = document.getElementById('ap-tourist-section-21');
  if (ap_tourist_section_21) {
    gsap.fromTo('#ap-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ap-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ap_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ap-transit-form-transit-through-brazil-with-the-transit-visa input, #ap-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_quick_facts = document.getElementById('ap-transit-list-quick-facts');
  if (ap_transit_list_quick_facts) {
    gsap.from('#ap-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_common_challenges_applicants_face = document.getElementById('ap-transit-list-common-challenges-applicants-face');
  if (ap_transit_list_common_challenges_applicants_face) {
    gsap.from('#ap-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_how_we_solve_these_challenges = document.getElementById('ap-transit-list-how-we-solve-these-challenges');
  if (ap_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ap-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_visa_overview = document.getElementById('ap-transit-section-visa-overview');
  if (ap_transit_section_visa_overview) {
    gsap.fromTo('#ap-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_form_who_is_this_visa_for = document.getElementById('ap-transit-form-who-is-this-visa-for');
  if (ap_transit_form_who_is_this_visa_for) {
    gsap.from('#ap-transit-form-who-is-this-visa-for input, #ap-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_required_documents = document.getElementById('ap-transit-list-required-documents');
  if (ap_transit_list_required_documents) {
    gsap.from('#ap-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_application_process = document.getElementById('ap-transit-list-application-process');
  if (ap_transit_list_application_process) {
    gsap.from('#ap-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_timelines_deadlines = document.getElementById('ap-transit-section-timelines-deadlines');
  if (ap_transit_section_timelines_deadlines) {
    gsap.fromTo('#ap-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_fees_costs = document.getElementById('ap-transit-section-fees-costs');
  if (ap_transit_section_fees_costs) {
    gsap.fromTo('#ap-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_risks_common_mistakes = document.getElementById('ap-transit-list-risks-common-mistakes');
  if (ap_transit_list_risks_common_mistakes) {
    gsap.from('#ap-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_diy_vs_professional_assistance = document.getElementById('ap-transit-section-diy-vs-professional-assistance');
  if (ap_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_amap_specific_context = document.getElementById('ap-transit-section-amap-specific-context');
  if (ap_transit_section_amap_specific_context) {
    gsap.fromTo('#ap-transit-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_what_our_clients_say = document.getElementById('ap-transit-section-what-our-clients-say');
  if (ap_transit_section_what_our_clients_say) {
    gsap.fromTo('#ap-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_frequently_asked_questions = document.getElementById('ap-transit-section-frequently-asked-questions');
  if (ap_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ap-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_international_support = document.getElementById('ap-transit-section-international-support');
  if (ap_transit_section_international_support) {
    gsap.fromTo('#ap-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_our_credentials = document.getElementById('ap-transit-list-our-credentials');
  if (ap_transit_list_our_credentials) {
    gsap.from('#ap-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_list_related_services = document.getElementById('ap-transit-list-related-services');
  if (ap_transit_list_related_services) {
    gsap.from('#ap-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_youre_in_good_hands = document.getElementById('ap-transit-section-youre-in-good-hands');
  if (ap_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ap-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_transit_section_21 = document.getElementById('ap-transit-section-21');
  if (ap_transit_section_21) {
    gsap.fromTo('#ap-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ap-student-form-study-in-brazil-with-the-student-visa');
  if (ap_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ap-student-form-study-in-brazil-with-the-student-visa input, #ap-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_quick_facts = document.getElementById('ap-student-list-quick-facts');
  if (ap_student_list_quick_facts) {
    gsap.from('#ap-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_common_challenges_applicants_face = document.getElementById('ap-student-list-common-challenges-applicants-face');
  if (ap_student_list_common_challenges_applicants_face) {
    gsap.from('#ap-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_how_we_solve_these_challenges = document.getElementById('ap-student-list-how-we-solve-these-challenges');
  if (ap_student_list_how_we_solve_these_challenges) {
    gsap.from('#ap-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_visa_overview = document.getElementById('ap-student-section-visa-overview');
  if (ap_student_section_visa_overview) {
    gsap.fromTo('#ap-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_form_who_is_this_visa_for = document.getElementById('ap-student-form-who-is-this-visa-for');
  if (ap_student_form_who_is_this_visa_for) {
    gsap.from('#ap-student-form-who-is-this-visa-for input, #ap-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_required_documents = document.getElementById('ap-student-list-required-documents');
  if (ap_student_list_required_documents) {
    gsap.from('#ap-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_application_process = document.getElementById('ap-student-list-application-process');
  if (ap_student_list_application_process) {
    gsap.from('#ap-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_timelines_deadlines = document.getElementById('ap-student-section-timelines-deadlines');
  if (ap_student_section_timelines_deadlines) {
    gsap.fromTo('#ap-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_fees_costs = document.getElementById('ap-student-section-fees-costs');
  if (ap_student_section_fees_costs) {
    gsap.fromTo('#ap-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_risks_common_mistakes = document.getElementById('ap-student-list-risks-common-mistakes');
  if (ap_student_list_risks_common_mistakes) {
    gsap.from('#ap-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_diy_vs_professional_assistance = document.getElementById('ap-student-section-diy-vs-professional-assistance');
  if (ap_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_amap_specific_context = document.getElementById('ap-student-section-amap-specific-context');
  if (ap_student_section_amap_specific_context) {
    gsap.fromTo('#ap-student-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_what_our_clients_say = document.getElementById('ap-student-section-what-our-clients-say');
  if (ap_student_section_what_our_clients_say) {
    gsap.fromTo('#ap-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_frequently_asked_questions = document.getElementById('ap-student-section-frequently-asked-questions');
  if (ap_student_section_frequently_asked_questions) {
    gsap.fromTo('#ap-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_international_support = document.getElementById('ap-student-section-international-support');
  if (ap_student_section_international_support) {
    gsap.fromTo('#ap-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_our_credentials = document.getElementById('ap-student-list-our-credentials');
  if (ap_student_list_our_credentials) {
    gsap.from('#ap-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_list_related_services = document.getElementById('ap-student-list-related-services');
  if (ap_student_list_related_services) {
    gsap.from('#ap-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_youre_in_good_hands = document.getElementById('ap-student-section-youre-in-good-hands');
  if (ap_student_section_youre_in_good_hands) {
    gsap.fromTo('#ap-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_student_section_21 = document.getElementById('ap-student-section-21');
  if (ap_student_section_21) {
    gsap.fromTo('#ap-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ap-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ap_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ap-business-form-conduct-business-in-brazil-with-the-business-visa input, #ap-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_quick_facts = document.getElementById('ap-business-list-quick-facts');
  if (ap_business_list_quick_facts) {
    gsap.from('#ap-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_common_challenges_applicants_face = document.getElementById('ap-business-list-common-challenges-applicants-face');
  if (ap_business_list_common_challenges_applicants_face) {
    gsap.from('#ap-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_how_we_solve_these_challenges = document.getElementById('ap-business-list-how-we-solve-these-challenges');
  if (ap_business_list_how_we_solve_these_challenges) {
    gsap.from('#ap-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_visa_overview = document.getElementById('ap-business-section-visa-overview');
  if (ap_business_section_visa_overview) {
    gsap.fromTo('#ap-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_form_who_is_this_visa_for = document.getElementById('ap-business-form-who-is-this-visa-for');
  if (ap_business_form_who_is_this_visa_for) {
    gsap.from('#ap-business-form-who-is-this-visa-for input, #ap-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_required_documents = document.getElementById('ap-business-list-required-documents');
  if (ap_business_list_required_documents) {
    gsap.from('#ap-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_application_process = document.getElementById('ap-business-list-application-process');
  if (ap_business_list_application_process) {
    gsap.from('#ap-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_timelines_deadlines = document.getElementById('ap-business-section-timelines-deadlines');
  if (ap_business_section_timelines_deadlines) {
    gsap.fromTo('#ap-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_fees_costs = document.getElementById('ap-business-section-fees-costs');
  if (ap_business_section_fees_costs) {
    gsap.fromTo('#ap-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_risks_common_mistakes = document.getElementById('ap-business-list-risks-common-mistakes');
  if (ap_business_list_risks_common_mistakes) {
    gsap.from('#ap-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_diy_vs_professional_assistance = document.getElementById('ap-business-section-diy-vs-professional-assistance');
  if (ap_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_amap_specific_context = document.getElementById('ap-business-section-amap-specific-context');
  if (ap_business_section_amap_specific_context) {
    gsap.fromTo('#ap-business-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_what_our_clients_say = document.getElementById('ap-business-section-what-our-clients-say');
  if (ap_business_section_what_our_clients_say) {
    gsap.fromTo('#ap-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_frequently_asked_questions = document.getElementById('ap-business-section-frequently-asked-questions');
  if (ap_business_section_frequently_asked_questions) {
    gsap.fromTo('#ap-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_international_support = document.getElementById('ap-business-section-international-support');
  if (ap_business_section_international_support) {
    gsap.fromTo('#ap-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_our_credentials = document.getElementById('ap-business-list-our-credentials');
  if (ap_business_list_our_credentials) {
    gsap.from('#ap-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_list_related_services = document.getElementById('ap-business-list-related-services');
  if (ap_business_list_related_services) {
    gsap.from('#ap-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_youre_in_good_hands = document.getElementById('ap-business-section-youre-in-good-hands');
  if (ap_business_section_youre_in_good_hands) {
    gsap.fromTo('#ap-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_business_section_21 = document.getElementById('ap-business-section-21');
  if (ap_business_section_21) {
    gsap.fromTo('#ap-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ap-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ap_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ap-research-form-conduct-research-in-brazil-with-the-research-visa input, #ap-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_quick_facts = document.getElementById('ap-research-list-quick-facts');
  if (ap_research_list_quick_facts) {
    gsap.from('#ap-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_common_challenges_applicants_face = document.getElementById('ap-research-list-common-challenges-applicants-face');
  if (ap_research_list_common_challenges_applicants_face) {
    gsap.from('#ap-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_how_we_solve_these_challenges = document.getElementById('ap-research-list-how-we-solve-these-challenges');
  if (ap_research_list_how_we_solve_these_challenges) {
    gsap.from('#ap-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_visa_overview = document.getElementById('ap-research-section-visa-overview');
  if (ap_research_section_visa_overview) {
    gsap.fromTo('#ap-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_form_who_is_this_visa_for = document.getElementById('ap-research-form-who-is-this-visa-for');
  if (ap_research_form_who_is_this_visa_for) {
    gsap.from('#ap-research-form-who-is-this-visa-for input, #ap-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_required_documents = document.getElementById('ap-research-list-required-documents');
  if (ap_research_list_required_documents) {
    gsap.from('#ap-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_application_process = document.getElementById('ap-research-list-application-process');
  if (ap_research_list_application_process) {
    gsap.from('#ap-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_timelines_deadlines = document.getElementById('ap-research-section-timelines-deadlines');
  if (ap_research_section_timelines_deadlines) {
    gsap.fromTo('#ap-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_fees_costs = document.getElementById('ap-research-section-fees-costs');
  if (ap_research_section_fees_costs) {
    gsap.fromTo('#ap-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_risks_common_mistakes = document.getElementById('ap-research-list-risks-common-mistakes');
  if (ap_research_list_risks_common_mistakes) {
    gsap.from('#ap-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_diy_vs_professional_assistance = document.getElementById('ap-research-section-diy-vs-professional-assistance');
  if (ap_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_amap_specific_context = document.getElementById('ap-research-section-amap-specific-context');
  if (ap_research_section_amap_specific_context) {
    gsap.fromTo('#ap-research-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_what_our_clients_say = document.getElementById('ap-research-section-what-our-clients-say');
  if (ap_research_section_what_our_clients_say) {
    gsap.fromTo('#ap-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_frequently_asked_questions = document.getElementById('ap-research-section-frequently-asked-questions');
  if (ap_research_section_frequently_asked_questions) {
    gsap.fromTo('#ap-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_international_support = document.getElementById('ap-research-section-international-support');
  if (ap_research_section_international_support) {
    gsap.fromTo('#ap-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_our_credentials = document.getElementById('ap-research-list-our-credentials');
  if (ap_research_list_our_credentials) {
    gsap.from('#ap-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_list_related_services = document.getElementById('ap-research-list-related-services');
  if (ap_research_list_related_services) {
    gsap.from('#ap-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_youre_in_good_hands = document.getElementById('ap-research-section-youre-in-good-hands');
  if (ap_research_section_youre_in_good_hands) {
    gsap.fromTo('#ap-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_research_section_21 = document.getElementById('ap-research-section-21');
  if (ap_research_section_21) {
    gsap.fromTo('#ap-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ap-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ap_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ap-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ap-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_quick_facts = document.getElementById('ap-diplomatic-list-quick-facts');
  if (ap_diplomatic_list_quick_facts) {
    gsap.from('#ap-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_common_challenges_applicants_face = document.getElementById('ap-diplomatic-list-common-challenges-applicants-face');
  if (ap_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ap-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ap-diplomatic-list-how-we-solve-these-challenges');
  if (ap_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ap-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_visa_overview = document.getElementById('ap-diplomatic-section-visa-overview');
  if (ap_diplomatic_section_visa_overview) {
    gsap.fromTo('#ap-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_form_who_is_this_visa_for = document.getElementById('ap-diplomatic-form-who-is-this-visa-for');
  if (ap_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ap-diplomatic-form-who-is-this-visa-for input, #ap-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_required_documents = document.getElementById('ap-diplomatic-list-required-documents');
  if (ap_diplomatic_list_required_documents) {
    gsap.from('#ap-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_application_process = document.getElementById('ap-diplomatic-list-application-process');
  if (ap_diplomatic_list_application_process) {
    gsap.from('#ap-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_timelines_deadlines = document.getElementById('ap-diplomatic-section-timelines-deadlines');
  if (ap_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ap-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_fees_costs = document.getElementById('ap-diplomatic-section-fees-costs');
  if (ap_diplomatic_section_fees_costs) {
    gsap.fromTo('#ap-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_risks_common_mistakes = document.getElementById('ap-diplomatic-list-risks-common-mistakes');
  if (ap_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ap-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ap-diplomatic-section-diy-vs-professional-assistance');
  if (ap_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_amap_specific_context = document.getElementById('ap-diplomatic-section-amap-specific-context');
  if (ap_diplomatic_section_amap_specific_context) {
    gsap.fromTo('#ap-diplomatic-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_what_our_clients_say = document.getElementById('ap-diplomatic-section-what-our-clients-say');
  if (ap_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ap-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_frequently_asked_questions = document.getElementById('ap-diplomatic-section-frequently-asked-questions');
  if (ap_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ap-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_international_support = document.getElementById('ap-diplomatic-section-international-support');
  if (ap_diplomatic_section_international_support) {
    gsap.fromTo('#ap-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_our_credentials = document.getElementById('ap-diplomatic-list-our-credentials');
  if (ap_diplomatic_list_our_credentials) {
    gsap.from('#ap-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_list_related_services = document.getElementById('ap-diplomatic-list-related-services');
  if (ap_diplomatic_list_related_services) {
    gsap.from('#ap-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_youre_in_good_hands = document.getElementById('ap-diplomatic-section-youre-in-good-hands');
  if (ap_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ap-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_diplomatic_section_21 = document.getElementById('ap-diplomatic-section-21');
  if (ap_diplomatic_section_21) {
    gsap.fromTo('#ap-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ap-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ap_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ap-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ap-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_quick_facts = document.getElementById('ap-journalist-list-quick-facts');
  if (ap_journalist_list_quick_facts) {
    gsap.from('#ap-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_common_challenges_applicants_face = document.getElementById('ap-journalist-list-common-challenges-applicants-face');
  if (ap_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ap-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_how_we_solve_these_challenges = document.getElementById('ap-journalist-list-how-we-solve-these-challenges');
  if (ap_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ap-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_visa_overview = document.getElementById('ap-journalist-section-visa-overview');
  if (ap_journalist_section_visa_overview) {
    gsap.fromTo('#ap-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_form_who_is_this_visa_for = document.getElementById('ap-journalist-form-who-is-this-visa-for');
  if (ap_journalist_form_who_is_this_visa_for) {
    gsap.from('#ap-journalist-form-who-is-this-visa-for input, #ap-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_required_documents = document.getElementById('ap-journalist-list-required-documents');
  if (ap_journalist_list_required_documents) {
    gsap.from('#ap-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_application_process = document.getElementById('ap-journalist-list-application-process');
  if (ap_journalist_list_application_process) {
    gsap.from('#ap-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_timelines_deadlines = document.getElementById('ap-journalist-section-timelines-deadlines');
  if (ap_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ap-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_fees_costs = document.getElementById('ap-journalist-section-fees-costs');
  if (ap_journalist_section_fees_costs) {
    gsap.fromTo('#ap-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_risks_common_mistakes = document.getElementById('ap-journalist-list-risks-common-mistakes');
  if (ap_journalist_list_risks_common_mistakes) {
    gsap.from('#ap-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_diy_vs_professional_assistance = document.getElementById('ap-journalist-section-diy-vs-professional-assistance');
  if (ap_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_amap_specific_context = document.getElementById('ap-journalist-section-amap-specific-context');
  if (ap_journalist_section_amap_specific_context) {
    gsap.fromTo('#ap-journalist-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_what_our_clients_say = document.getElementById('ap-journalist-section-what-our-clients-say');
  if (ap_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ap-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_frequently_asked_questions = document.getElementById('ap-journalist-section-frequently-asked-questions');
  if (ap_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ap-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_international_support = document.getElementById('ap-journalist-section-international-support');
  if (ap_journalist_section_international_support) {
    gsap.fromTo('#ap-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_our_credentials = document.getElementById('ap-journalist-list-our-credentials');
  if (ap_journalist_list_our_credentials) {
    gsap.from('#ap-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_list_related_services = document.getElementById('ap-journalist-list-related-services');
  if (ap_journalist_list_related_services) {
    gsap.from('#ap-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_youre_in_good_hands = document.getElementById('ap-journalist-section-youre-in-good-hands');
  if (ap_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ap-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_journalist_section_21 = document.getElementById('ap-journalist-section-21');
  if (ap_journalist_section_21) {
    gsap.fromTo('#ap-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ap-fines-form-resolve-immigration-fines-in-brazil');
  if (ap_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ap-fines-form-resolve-immigration-fines-in-brazil input, #ap-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_quick_facts = document.getElementById('ap-fines-list-quick-facts');
  if (ap_fines_list_quick_facts) {
    gsap.from('#ap-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_common_challenges_applicants_face = document.getElementById('ap-fines-list-common-challenges-applicants-face');
  if (ap_fines_list_common_challenges_applicants_face) {
    gsap.from('#ap-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_how_we_solve_these_challenges = document.getElementById('ap-fines-list-how-we-solve-these-challenges');
  if (ap_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ap-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_service_overview = document.getElementById('ap-fines-section-service-overview');
  if (ap_fines_section_service_overview) {
    gsap.fromTo('#ap-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_form_who_is_this_service_for = document.getElementById('ap-fines-form-who-is-this-service-for');
  if (ap_fines_form_who_is_this_service_for) {
    gsap.from('#ap-fines-form-who-is-this-service-for input, #ap-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_required_documents = document.getElementById('ap-fines-list-required-documents');
  if (ap_fines_list_required_documents) {
    gsap.from('#ap-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_process = document.getElementById('ap-fines-list-process');
  if (ap_fines_list_process) {
    gsap.from('#ap-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_timelines_deadlines = document.getElementById('ap-fines-section-timelines-deadlines');
  if (ap_fines_section_timelines_deadlines) {
    gsap.fromTo('#ap-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_fees_costs = document.getElementById('ap-fines-section-fees-costs');
  if (ap_fines_section_fees_costs) {
    gsap.fromTo('#ap-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_risks_common_mistakes = document.getElementById('ap-fines-list-risks-common-mistakes');
  if (ap_fines_list_risks_common_mistakes) {
    gsap.from('#ap-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_diy_vs_professional_assistance = document.getElementById('ap-fines-section-diy-vs-professional-assistance');
  if (ap_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_amap_specific_context = document.getElementById('ap-fines-section-amap-specific-context');
  if (ap_fines_section_amap_specific_context) {
    gsap.fromTo('#ap-fines-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_what_our_clients_say = document.getElementById('ap-fines-section-what-our-clients-say');
  if (ap_fines_section_what_our_clients_say) {
    gsap.fromTo('#ap-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_frequently_asked_questions = document.getElementById('ap-fines-section-frequently-asked-questions');
  if (ap_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ap-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_international_support = document.getElementById('ap-fines-section-international-support');
  if (ap_fines_section_international_support) {
    gsap.fromTo('#ap-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_our_credentials = document.getElementById('ap-fines-list-our-credentials');
  if (ap_fines_list_our_credentials) {
    gsap.from('#ap-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_list_related_services = document.getElementById('ap-fines-list-related-services');
  if (ap_fines_list_related_services) {
    gsap.from('#ap-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_youre_in_good_hands = document.getElementById('ap-fines-section-youre-in-good-hands');
  if (ap_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ap-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_fines_section_21 = document.getElementById('ap-fines-section-21');
  if (ap_fines_section_21) {
    gsap.fromTo('#ap-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_form_deportation_assistance_in_brazil = document.getElementById('ap-deportation-form-deportation-assistance-in-brazil');
  if (ap_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ap-deportation-form-deportation-assistance-in-brazil input, #ap-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_quick_facts = document.getElementById('ap-deportation-list-quick-facts');
  if (ap_deportation_list_quick_facts) {
    gsap.from('#ap-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_common_challenges_applicants_face = document.getElementById('ap-deportation-list-common-challenges-applicants-face');
  if (ap_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ap-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_how_we_solve_these_challenges = document.getElementById('ap-deportation-list-how-we-solve-these-challenges');
  if (ap_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ap-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_service_overview = document.getElementById('ap-deportation-section-service-overview');
  if (ap_deportation_section_service_overview) {
    gsap.fromTo('#ap-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_form_who_is_this_service_for = document.getElementById('ap-deportation-form-who-is-this-service-for');
  if (ap_deportation_form_who_is_this_service_for) {
    gsap.from('#ap-deportation-form-who-is-this-service-for input, #ap-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_required_documents = document.getElementById('ap-deportation-list-required-documents');
  if (ap_deportation_list_required_documents) {
    gsap.from('#ap-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_process = document.getElementById('ap-deportation-list-process');
  if (ap_deportation_list_process) {
    gsap.from('#ap-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_timelines_deadlines = document.getElementById('ap-deportation-section-timelines-deadlines');
  if (ap_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ap-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_fees_costs = document.getElementById('ap-deportation-section-fees-costs');
  if (ap_deportation_section_fees_costs) {
    gsap.fromTo('#ap-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_risks_common_mistakes = document.getElementById('ap-deportation-list-risks-common-mistakes');
  if (ap_deportation_list_risks_common_mistakes) {
    gsap.from('#ap-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_diy_vs_professional_assistance = document.getElementById('ap-deportation-section-diy-vs-professional-assistance');
  if (ap_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_amap_specific_context = document.getElementById('ap-deportation-section-amap-specific-context');
  if (ap_deportation_section_amap_specific_context) {
    gsap.fromTo('#ap-deportation-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_what_our_clients_say = document.getElementById('ap-deportation-section-what-our-clients-say');
  if (ap_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ap-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_frequently_asked_questions = document.getElementById('ap-deportation-section-frequently-asked-questions');
  if (ap_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ap-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_international_support = document.getElementById('ap-deportation-section-international-support');
  if (ap_deportation_section_international_support) {
    gsap.fromTo('#ap-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_our_credentials = document.getElementById('ap-deportation-list-our-credentials');
  if (ap_deportation_list_our_credentials) {
    gsap.from('#ap-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_list_related_services = document.getElementById('ap-deportation-list-related-services');
  if (ap_deportation_list_related_services) {
    gsap.from('#ap-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_youre_in_good_hands = document.getElementById('ap-deportation-section-youre-in-good-hands');
  if (ap_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ap-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_deportation_section_21 = document.getElementById('ap-deportation-section-21');
  if (ap_deportation_section_21) {
    gsap.fromTo('#ap-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ap-translation-form-sworn-document-translation-services-in-brazil');
  if (ap_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ap-translation-form-sworn-document-translation-services-in-brazil input, #ap-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_quick_facts = document.getElementById('ap-translation-list-quick-facts');
  if (ap_translation_list_quick_facts) {
    gsap.from('#ap-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_common_challenges_applicants_face = document.getElementById('ap-translation-list-common-challenges-applicants-face');
  if (ap_translation_list_common_challenges_applicants_face) {
    gsap.from('#ap-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_how_we_solve_these_challenges = document.getElementById('ap-translation-list-how-we-solve-these-challenges');
  if (ap_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ap-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_service_overview = document.getElementById('ap-translation-section-service-overview');
  if (ap_translation_section_service_overview) {
    gsap.fromTo('#ap-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_form_who_is_this_service_for = document.getElementById('ap-translation-form-who-is-this-service-for');
  if (ap_translation_form_who_is_this_service_for) {
    gsap.from('#ap-translation-form-who-is-this-service-for input, #ap-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_required_documents = document.getElementById('ap-translation-list-required-documents');
  if (ap_translation_list_required_documents) {
    gsap.from('#ap-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_process = document.getElementById('ap-translation-list-process');
  if (ap_translation_list_process) {
    gsap.from('#ap-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_timelines_deadlines = document.getElementById('ap-translation-section-timelines-deadlines');
  if (ap_translation_section_timelines_deadlines) {
    gsap.fromTo('#ap-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_fees_costs = document.getElementById('ap-translation-section-fees-costs');
  if (ap_translation_section_fees_costs) {
    gsap.fromTo('#ap-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_risks_common_mistakes = document.getElementById('ap-translation-list-risks-common-mistakes');
  if (ap_translation_list_risks_common_mistakes) {
    gsap.from('#ap-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_diy_vs_professional_assistance = document.getElementById('ap-translation-section-diy-vs-professional-assistance');
  if (ap_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_amap_specific_context = document.getElementById('ap-translation-section-amap-specific-context');
  if (ap_translation_section_amap_specific_context) {
    gsap.fromTo('#ap-translation-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_what_our_clients_say = document.getElementById('ap-translation-section-what-our-clients-say');
  if (ap_translation_section_what_our_clients_say) {
    gsap.fromTo('#ap-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_frequently_asked_questions = document.getElementById('ap-translation-section-frequently-asked-questions');
  if (ap_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ap-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_international_support = document.getElementById('ap-translation-section-international-support');
  if (ap_translation_section_international_support) {
    gsap.fromTo('#ap-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_our_credentials = document.getElementById('ap-translation-list-our-credentials');
  if (ap_translation_list_our_credentials) {
    gsap.from('#ap-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_list_related_services = document.getElementById('ap-translation-list-related-services');
  if (ap_translation_list_related_services) {
    gsap.from('#ap-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_youre_in_good_hands = document.getElementById('ap-translation-section-youre-in-good-hands');
  if (ap_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ap-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_translation_section_21 = document.getElementById('ap-translation-section-21');
  if (ap_translation_section_21) {
    gsap.fromTo('#ap-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ap-expulsion-form-expulsion-assistance-in-brazil');
  if (ap_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ap-expulsion-form-expulsion-assistance-in-brazil input, #ap-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_quick_facts = document.getElementById('ap-expulsion-list-quick-facts');
  if (ap_expulsion_list_quick_facts) {
    gsap.from('#ap-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_common_challenges_applicants_face = document.getElementById('ap-expulsion-list-common-challenges-applicants-face');
  if (ap_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ap-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_how_we_solve_these_challenges = document.getElementById('ap-expulsion-list-how-we-solve-these-challenges');
  if (ap_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ap-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_service_overview = document.getElementById('ap-expulsion-section-service-overview');
  if (ap_expulsion_section_service_overview) {
    gsap.fromTo('#ap-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_form_who_is_this_service_for = document.getElementById('ap-expulsion-form-who-is-this-service-for');
  if (ap_expulsion_form_who_is_this_service_for) {
    gsap.from('#ap-expulsion-form-who-is-this-service-for input, #ap-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_required_documents = document.getElementById('ap-expulsion-list-required-documents');
  if (ap_expulsion_list_required_documents) {
    gsap.from('#ap-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_process = document.getElementById('ap-expulsion-list-process');
  if (ap_expulsion_list_process) {
    gsap.from('#ap-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_timelines_deadlines = document.getElementById('ap-expulsion-section-timelines-deadlines');
  if (ap_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ap-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_fees_costs = document.getElementById('ap-expulsion-section-fees-costs');
  if (ap_expulsion_section_fees_costs) {
    gsap.fromTo('#ap-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_risks_common_mistakes = document.getElementById('ap-expulsion-list-risks-common-mistakes');
  if (ap_expulsion_list_risks_common_mistakes) {
    gsap.from('#ap-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_diy_vs_professional_assistance = document.getElementById('ap-expulsion-section-diy-vs-professional-assistance');
  if (ap_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_amap_specific_context = document.getElementById('ap-expulsion-section-amap-specific-context');
  if (ap_expulsion_section_amap_specific_context) {
    gsap.fromTo('#ap-expulsion-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_what_our_clients_say = document.getElementById('ap-expulsion-section-what-our-clients-say');
  if (ap_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ap-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_frequently_asked_questions = document.getElementById('ap-expulsion-section-frequently-asked-questions');
  if (ap_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ap-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_international_support = document.getElementById('ap-expulsion-section-international-support');
  if (ap_expulsion_section_international_support) {
    gsap.fromTo('#ap-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_our_credentials = document.getElementById('ap-expulsion-list-our-credentials');
  if (ap_expulsion_list_our_credentials) {
    gsap.from('#ap-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_list_related_services = document.getElementById('ap-expulsion-list-related-services');
  if (ap_expulsion_list_related_services) {
    gsap.from('#ap-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_youre_in_good_hands = document.getElementById('ap-expulsion-section-youre-in-good-hands');
  if (ap_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ap-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_expulsion_section_21 = document.getElementById('ap-expulsion-section-21');
  if (ap_expulsion_section_21) {
    gsap.fromTo('#ap-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ap-appeals-form-appeal-immigration-denials-in-brazil');
  if (ap_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ap-appeals-form-appeal-immigration-denials-in-brazil input, #ap-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_quick_facts = document.getElementById('ap-appeals-list-quick-facts');
  if (ap_appeals_list_quick_facts) {
    gsap.from('#ap-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_common_challenges_applicants_face = document.getElementById('ap-appeals-list-common-challenges-applicants-face');
  if (ap_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ap-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_how_we_solve_these_challenges = document.getElementById('ap-appeals-list-how-we-solve-these-challenges');
  if (ap_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ap-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_service_overview = document.getElementById('ap-appeals-section-service-overview');
  if (ap_appeals_section_service_overview) {
    gsap.fromTo('#ap-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_form_who_is_this_service_for = document.getElementById('ap-appeals-form-who-is-this-service-for');
  if (ap_appeals_form_who_is_this_service_for) {
    gsap.from('#ap-appeals-form-who-is-this-service-for input, #ap-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_required_documents = document.getElementById('ap-appeals-list-required-documents');
  if (ap_appeals_list_required_documents) {
    gsap.from('#ap-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_appeal_process = document.getElementById('ap-appeals-list-appeal-process');
  if (ap_appeals_list_appeal_process) {
    gsap.from('#ap-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_timelines_deadlines = document.getElementById('ap-appeals-section-timelines-deadlines');
  if (ap_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ap-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_fees_costs = document.getElementById('ap-appeals-section-fees-costs');
  if (ap_appeals_section_fees_costs) {
    gsap.fromTo('#ap-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_risks_common_mistakes = document.getElementById('ap-appeals-list-risks-common-mistakes');
  if (ap_appeals_list_risks_common_mistakes) {
    gsap.from('#ap-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_diy_vs_professional_assistance = document.getElementById('ap-appeals-section-diy-vs-professional-assistance');
  if (ap_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_amap_specific_context = document.getElementById('ap-appeals-section-amap-specific-context');
  if (ap_appeals_section_amap_specific_context) {
    gsap.fromTo('#ap-appeals-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_what_our_clients_say = document.getElementById('ap-appeals-section-what-our-clients-say');
  if (ap_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ap-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_frequently_asked_questions = document.getElementById('ap-appeals-section-frequently-asked-questions');
  if (ap_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ap-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_international_support = document.getElementById('ap-appeals-section-international-support');
  if (ap_appeals_section_international_support) {
    gsap.fromTo('#ap-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_our_credentials = document.getElementById('ap-appeals-list-our-credentials');
  if (ap_appeals_list_our_credentials) {
    gsap.from('#ap-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_list_related_services = document.getElementById('ap-appeals-list-related-services');
  if (ap_appeals_list_related_services) {
    gsap.from('#ap-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_youre_in_good_hands = document.getElementById('ap-appeals-section-youre-in-good-hands');
  if (ap_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ap-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_appeals_section_21 = document.getElementById('ap-appeals-section-21');
  if (ap_appeals_section_21) {
    gsap.fromTo('#ap-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ap-consular-form-consular-services-in-brazil-for-citizens');
  if (ap_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ap-consular-form-consular-services-in-brazil-for-citizens input, #ap-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_quick_facts = document.getElementById('ap-consular-list-quick-facts');
  if (ap_consular_list_quick_facts) {
    gsap.from('#ap-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_common_challenges_applicants_face = document.getElementById('ap-consular-list-common-challenges-applicants-face');
  if (ap_consular_list_common_challenges_applicants_face) {
    gsap.from('#ap-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_how_we_solve_these_challenges = document.getElementById('ap-consular-list-how-we-solve-these-challenges');
  if (ap_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ap-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_service_overview = document.getElementById('ap-consular-section-service-overview');
  if (ap_consular_section_service_overview) {
    gsap.fromTo('#ap-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_form_who_is_this_service_for = document.getElementById('ap-consular-form-who-is-this-service-for');
  if (ap_consular_form_who_is_this_service_for) {
    gsap.from('#ap-consular-form-who-is-this-service-for input, #ap-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_required_documents = document.getElementById('ap-consular-list-required-documents');
  if (ap_consular_list_required_documents) {
    gsap.from('#ap-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_process = document.getElementById('ap-consular-list-process');
  if (ap_consular_list_process) {
    gsap.from('#ap-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_timelines_deadlines = document.getElementById('ap-consular-section-timelines-deadlines');
  if (ap_consular_section_timelines_deadlines) {
    gsap.fromTo('#ap-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_fees_costs = document.getElementById('ap-consular-section-fees-costs');
  if (ap_consular_section_fees_costs) {
    gsap.fromTo('#ap-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_risks_common_mistakes = document.getElementById('ap-consular-list-risks-common-mistakes');
  if (ap_consular_list_risks_common_mistakes) {
    gsap.from('#ap-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_diy_vs_professional_assistance = document.getElementById('ap-consular-section-diy-vs-professional-assistance');
  if (ap_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_amap_specific_context = document.getElementById('ap-consular-section-amap-specific-context');
  if (ap_consular_section_amap_specific_context) {
    gsap.fromTo('#ap-consular-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_what_our_clients_say = document.getElementById('ap-consular-section-what-our-clients-say');
  if (ap_consular_section_what_our_clients_say) {
    gsap.fromTo('#ap-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_frequently_asked_questions = document.getElementById('ap-consular-section-frequently-asked-questions');
  if (ap_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ap-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_international_support = document.getElementById('ap-consular-section-international-support');
  if (ap_consular_section_international_support) {
    gsap.fromTo('#ap-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_our_credentials = document.getElementById('ap-consular-list-our-credentials');
  if (ap_consular_list_our_credentials) {
    gsap.from('#ap-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_list_related_services = document.getElementById('ap-consular-list-related-services');
  if (ap_consular_list_related_services) {
    gsap.from('#ap-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_youre_in_good_hands = document.getElementById('ap-consular-section-youre-in-good-hands');
  if (ap_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ap-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_consular_section_21 = document.getElementById('ap-consular-section-21');
  if (ap_consular_section_21) {
    gsap.fromTo('#ap-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ap-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ap_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ap-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ap-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_quick_facts = document.getElementById('ap-criminalrecords-list-quick-facts');
  if (ap_criminalrecords_list_quick_facts) {
    gsap.from('#ap-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ap-criminalrecords-list-common-challenges-applicants-face');
  if (ap_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ap-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ap-criminalrecords-list-how-we-solve-these-challenges');
  if (ap_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ap-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_service_overview = document.getElementById('ap-criminalrecords-section-service-overview');
  if (ap_criminalrecords_section_service_overview) {
    gsap.fromTo('#ap-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_form_who_is_this_service_for = document.getElementById('ap-criminalrecords-form-who-is-this-service-for');
  if (ap_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ap-criminalrecords-form-who-is-this-service-for input, #ap-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_required_documents = document.getElementById('ap-criminalrecords-list-required-documents');
  if (ap_criminalrecords_list_required_documents) {
    gsap.from('#ap-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_process = document.getElementById('ap-criminalrecords-list-process');
  if (ap_criminalrecords_list_process) {
    gsap.from('#ap-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_timelines_deadlines = document.getElementById('ap-criminalrecords-section-timelines-deadlines');
  if (ap_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ap-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_fees_costs = document.getElementById('ap-criminalrecords-section-fees-costs');
  if (ap_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ap-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_risks_common_mistakes = document.getElementById('ap-criminalrecords-list-risks-common-mistakes');
  if (ap_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ap-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ap-criminalrecords-section-diy-vs-professional-assistance');
  if (ap_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_amap_specific_context = document.getElementById('ap-criminalrecords-section-amap-specific-context');
  if (ap_criminalrecords_section_amap_specific_context) {
    gsap.fromTo('#ap-criminalrecords-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_what_our_clients_say = document.getElementById('ap-criminalrecords-section-what-our-clients-say');
  if (ap_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ap-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_frequently_asked_questions = document.getElementById('ap-criminalrecords-section-frequently-asked-questions');
  if (ap_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ap-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_international_support = document.getElementById('ap-criminalrecords-section-international-support');
  if (ap_criminalrecords_section_international_support) {
    gsap.fromTo('#ap-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_our_credentials = document.getElementById('ap-criminalrecords-list-our-credentials');
  if (ap_criminalrecords_list_our_credentials) {
    gsap.from('#ap-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_list_related_services = document.getElementById('ap-criminalrecords-list-related-services');
  if (ap_criminalrecords_list_related_services) {
    gsap.from('#ap-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_youre_in_good_hands = document.getElementById('ap-criminalrecords-section-youre-in-good-hands');
  if (ap_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ap-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_criminalrecords_section_21 = document.getElementById('ap-criminalrecords-section-21');
  if (ap_criminalrecords_section_21) {
    gsap.fromTo('#ap-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_form_extradition_assistance_in_brazil = document.getElementById('ap-extradition-form-extradition-assistance-in-brazil');
  if (ap_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ap-extradition-form-extradition-assistance-in-brazil input, #ap-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_quick_facts = document.getElementById('ap-extradition-list-quick-facts');
  if (ap_extradition_list_quick_facts) {
    gsap.from('#ap-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_common_challenges_applicants_face = document.getElementById('ap-extradition-list-common-challenges-applicants-face');
  if (ap_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ap-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_how_we_solve_these_challenges = document.getElementById('ap-extradition-list-how-we-solve-these-challenges');
  if (ap_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ap-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_service_overview = document.getElementById('ap-extradition-section-service-overview');
  if (ap_extradition_section_service_overview) {
    gsap.fromTo('#ap-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_form_who_is_this_service_for = document.getElementById('ap-extradition-form-who-is-this-service-for');
  if (ap_extradition_form_who_is_this_service_for) {
    gsap.from('#ap-extradition-form-who-is-this-service-for input, #ap-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_required_documents = document.getElementById('ap-extradition-list-required-documents');
  if (ap_extradition_list_required_documents) {
    gsap.from('#ap-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_process = document.getElementById('ap-extradition-list-process');
  if (ap_extradition_list_process) {
    gsap.from('#ap-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_timelines_deadlines = document.getElementById('ap-extradition-section-timelines-deadlines');
  if (ap_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ap-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_fees_costs = document.getElementById('ap-extradition-section-fees-costs');
  if (ap_extradition_section_fees_costs) {
    gsap.fromTo('#ap-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_risks_common_mistakes = document.getElementById('ap-extradition-list-risks-common-mistakes');
  if (ap_extradition_list_risks_common_mistakes) {
    gsap.from('#ap-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_diy_vs_professional_assistance = document.getElementById('ap-extradition-section-diy-vs-professional-assistance');
  if (ap_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_amap_specific_context = document.getElementById('ap-extradition-section-amap-specific-context');
  if (ap_extradition_section_amap_specific_context) {
    gsap.fromTo('#ap-extradition-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_what_our_clients_say = document.getElementById('ap-extradition-section-what-our-clients-say');
  if (ap_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ap-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_frequently_asked_questions = document.getElementById('ap-extradition-section-frequently-asked-questions');
  if (ap_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ap-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_international_support = document.getElementById('ap-extradition-section-international-support');
  if (ap_extradition_section_international_support) {
    gsap.fromTo('#ap-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_our_credentials = document.getElementById('ap-extradition-list-our-credentials');
  if (ap_extradition_list_our_credentials) {
    gsap.from('#ap-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_list_related_services = document.getElementById('ap-extradition-list-related-services');
  if (ap_extradition_list_related_services) {
    gsap.from('#ap-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_youre_in_good_hands = document.getElementById('ap-extradition-section-youre-in-good-hands');
  if (ap_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ap-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_extradition_section_21 = document.getElementById('ap-extradition-section-21');
  if (ap_extradition_section_21) {
    gsap.fromTo('#ap-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ap-north-form-discover-the-north-amazon-and-beyond');
  if (ap_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ap-north-form-discover-the-north-amazon-and-beyond input, #ap-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_quick_facts = document.getElementById('ap-north-list-quick-facts');
  if (ap_north_list_quick_facts) {
    gsap.from('#ap-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_common_challenges_applicants_face = document.getElementById('ap-north-list-common-challenges-applicants-face');
  if (ap_north_list_common_challenges_applicants_face) {
    gsap.from('#ap-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_how_we_solve_these_challenges = document.getElementById('ap-north-list-how-we-solve-these-challenges');
  if (ap_north_list_how_we_solve_these_challenges) {
    gsap.from('#ap-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_trip_overview = document.getElementById('ap-north-section-trip-overview');
  if (ap_north_section_trip_overview) {
    gsap.fromTo('#ap-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_form_who_is_this_trip_for = document.getElementById('ap-north-form-who-is-this-trip-for');
  if (ap_north_form_who_is_this_trip_for) {
    gsap.from('#ap-north-form-who-is-this-trip-for input, #ap-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_required_documents = document.getElementById('ap-north-list-required-documents');
  if (ap_north_list_required_documents) {
    gsap.from('#ap-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_booking_process = document.getElementById('ap-north-list-booking-process');
  if (ap_north_list_booking_process) {
    gsap.from('#ap-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_timelines_deadlines = document.getElementById('ap-north-section-timelines-deadlines');
  if (ap_north_section_timelines_deadlines) {
    gsap.fromTo('#ap-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_fees_costs = document.getElementById('ap-north-section-fees-costs');
  if (ap_north_section_fees_costs) {
    gsap.fromTo('#ap-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_risks_common_mistakes = document.getElementById('ap-north-list-risks-common-mistakes');
  if (ap_north_list_risks_common_mistakes) {
    gsap.from('#ap-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_diy_vs_professional_assistance = document.getElementById('ap-north-section-diy-vs-professional-assistance');
  if (ap_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_amap_specific_context = document.getElementById('ap-north-section-amap-specific-context');
  if (ap_north_section_amap_specific_context) {
    gsap.fromTo('#ap-north-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_what_our_clients_say = document.getElementById('ap-north-section-what-our-clients-say');
  if (ap_north_section_what_our_clients_say) {
    gsap.fromTo('#ap-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_frequently_asked_questions = document.getElementById('ap-north-section-frequently-asked-questions');
  if (ap_north_section_frequently_asked_questions) {
    gsap.fromTo('#ap-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_international_support = document.getElementById('ap-north-section-international-support');
  if (ap_north_section_international_support) {
    gsap.fromTo('#ap-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_our_credentials = document.getElementById('ap-north-list-our-credentials');
  if (ap_north_list_our_credentials) {
    gsap.from('#ap-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_list_related_services = document.getElementById('ap-north-list-related-services');
  if (ap_north_list_related_services) {
    gsap.from('#ap-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_youre_in_good_hands = document.getElementById('ap-north-section-youre-in-good-hands');
  if (ap_north_section_youre_in_good_hands) {
    gsap.fromTo('#ap-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_north_section_21 = document.getElementById('ap-north-section-21');
  if (ap_north_section_21) {
    gsap.fromTo('#ap-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ap-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ap_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ap-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ap-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_quick_facts = document.getElementById('ap-centralwest-list-quick-facts');
  if (ap_centralwest_list_quick_facts) {
    gsap.from('#ap-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_common_challenges_applicants_face = document.getElementById('ap-centralwest-list-common-challenges-applicants-face');
  if (ap_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ap-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_how_we_solve_these_challenges = document.getElementById('ap-centralwest-list-how-we-solve-these-challenges');
  if (ap_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ap-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_trip_overview = document.getElementById('ap-centralwest-section-trip-overview');
  if (ap_centralwest_section_trip_overview) {
    gsap.fromTo('#ap-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_form_who_is_this_trip_for = document.getElementById('ap-centralwest-form-who-is-this-trip-for');
  if (ap_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ap-centralwest-form-who-is-this-trip-for input, #ap-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_required_documents = document.getElementById('ap-centralwest-list-required-documents');
  if (ap_centralwest_list_required_documents) {
    gsap.from('#ap-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_booking_process = document.getElementById('ap-centralwest-list-booking-process');
  if (ap_centralwest_list_booking_process) {
    gsap.from('#ap-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_timelines_deadlines = document.getElementById('ap-centralwest-section-timelines-deadlines');
  if (ap_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ap-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_fees_costs = document.getElementById('ap-centralwest-section-fees-costs');
  if (ap_centralwest_section_fees_costs) {
    gsap.fromTo('#ap-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_risks_common_mistakes = document.getElementById('ap-centralwest-list-risks-common-mistakes');
  if (ap_centralwest_list_risks_common_mistakes) {
    gsap.from('#ap-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_diy_vs_professional_assistance = document.getElementById('ap-centralwest-section-diy-vs-professional-assistance');
  if (ap_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_amap_specific_context = document.getElementById('ap-centralwest-section-amap-specific-context');
  if (ap_centralwest_section_amap_specific_context) {
    gsap.fromTo('#ap-centralwest-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_what_our_clients_say = document.getElementById('ap-centralwest-section-what-our-clients-say');
  if (ap_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ap-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_frequently_asked_questions = document.getElementById('ap-centralwest-section-frequently-asked-questions');
  if (ap_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ap-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_international_support = document.getElementById('ap-centralwest-section-international-support');
  if (ap_centralwest_section_international_support) {
    gsap.fromTo('#ap-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_our_credentials = document.getElementById('ap-centralwest-list-our-credentials');
  if (ap_centralwest_list_our_credentials) {
    gsap.from('#ap-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_list_related_services = document.getElementById('ap-centralwest-list-related-services');
  if (ap_centralwest_list_related_services) {
    gsap.from('#ap-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_youre_in_good_hands = document.getElementById('ap-centralwest-section-youre-in-good-hands');
  if (ap_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ap-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_centralwest_section_21 = document.getElementById('ap-centralwest-section-21');
  if (ap_centralwest_section_21) {
    gsap.fromTo('#ap-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ap-southeast-form-dynamic-southeast-cities-and-history');
  if (ap_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ap-southeast-form-dynamic-southeast-cities-and-history input, #ap-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_quick_facts = document.getElementById('ap-southeast-list-quick-facts');
  if (ap_southeast_list_quick_facts) {
    gsap.from('#ap-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_common_challenges_applicants_face = document.getElementById('ap-southeast-list-common-challenges-applicants-face');
  if (ap_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ap-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_how_we_solve_these_challenges = document.getElementById('ap-southeast-list-how-we-solve-these-challenges');
  if (ap_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ap-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_trip_overview = document.getElementById('ap-southeast-section-trip-overview');
  if (ap_southeast_section_trip_overview) {
    gsap.fromTo('#ap-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_form_who_is_this_trip_for = document.getElementById('ap-southeast-form-who-is-this-trip-for');
  if (ap_southeast_form_who_is_this_trip_for) {
    gsap.from('#ap-southeast-form-who-is-this-trip-for input, #ap-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_required_documents = document.getElementById('ap-southeast-list-required-documents');
  if (ap_southeast_list_required_documents) {
    gsap.from('#ap-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_booking_process = document.getElementById('ap-southeast-list-booking-process');
  if (ap_southeast_list_booking_process) {
    gsap.from('#ap-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_timelines_deadlines = document.getElementById('ap-southeast-section-timelines-deadlines');
  if (ap_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ap-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_fees_costs = document.getElementById('ap-southeast-section-fees-costs');
  if (ap_southeast_section_fees_costs) {
    gsap.fromTo('#ap-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_risks_common_mistakes = document.getElementById('ap-southeast-list-risks-common-mistakes');
  if (ap_southeast_list_risks_common_mistakes) {
    gsap.from('#ap-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_diy_vs_professional_assistance = document.getElementById('ap-southeast-section-diy-vs-professional-assistance');
  if (ap_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_amap_specific_context = document.getElementById('ap-southeast-section-amap-specific-context');
  if (ap_southeast_section_amap_specific_context) {
    gsap.fromTo('#ap-southeast-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_what_our_clients_say = document.getElementById('ap-southeast-section-what-our-clients-say');
  if (ap_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ap-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_frequently_asked_questions = document.getElementById('ap-southeast-section-frequently-asked-questions');
  if (ap_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ap-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_international_support = document.getElementById('ap-southeast-section-international-support');
  if (ap_southeast_section_international_support) {
    gsap.fromTo('#ap-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_our_credentials = document.getElementById('ap-southeast-list-our-credentials');
  if (ap_southeast_list_our_credentials) {
    gsap.from('#ap-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_list_related_services = document.getElementById('ap-southeast-list-related-services');
  if (ap_southeast_list_related_services) {
    gsap.from('#ap-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_youre_in_good_hands = document.getElementById('ap-southeast-section-youre-in-good-hands');
  if (ap_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ap-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_southeast_section_21 = document.getElementById('ap-southeast-section-21');
  if (ap_southeast_section_21) {
    gsap.fromTo('#ap-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ap-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ap_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ap-northeast-form-vibrant-northeast-beaches-and-culture input, #ap-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_quick_facts = document.getElementById('ap-northeast-list-quick-facts');
  if (ap_northeast_list_quick_facts) {
    gsap.from('#ap-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_common_challenges_applicants_face = document.getElementById('ap-northeast-list-common-challenges-applicants-face');
  if (ap_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ap-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_how_we_solve_these_challenges = document.getElementById('ap-northeast-list-how-we-solve-these-challenges');
  if (ap_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ap-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_trip_overview = document.getElementById('ap-northeast-section-trip-overview');
  if (ap_northeast_section_trip_overview) {
    gsap.fromTo('#ap-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_form_who_is_this_trip_for = document.getElementById('ap-northeast-form-who-is-this-trip-for');
  if (ap_northeast_form_who_is_this_trip_for) {
    gsap.from('#ap-northeast-form-who-is-this-trip-for input, #ap-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_required_documents = document.getElementById('ap-northeast-list-required-documents');
  if (ap_northeast_list_required_documents) {
    gsap.from('#ap-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_booking_process = document.getElementById('ap-northeast-list-booking-process');
  if (ap_northeast_list_booking_process) {
    gsap.from('#ap-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_timelines_deadlines = document.getElementById('ap-northeast-section-timelines-deadlines');
  if (ap_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ap-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_fees_costs = document.getElementById('ap-northeast-section-fees-costs');
  if (ap_northeast_section_fees_costs) {
    gsap.fromTo('#ap-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_risks_common_mistakes = document.getElementById('ap-northeast-list-risks-common-mistakes');
  if (ap_northeast_list_risks_common_mistakes) {
    gsap.from('#ap-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_diy_vs_professional_assistance = document.getElementById('ap-northeast-section-diy-vs-professional-assistance');
  if (ap_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_amap_specific_context = document.getElementById('ap-northeast-section-amap-specific-context');
  if (ap_northeast_section_amap_specific_context) {
    gsap.fromTo('#ap-northeast-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_what_our_clients_say = document.getElementById('ap-northeast-section-what-our-clients-say');
  if (ap_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ap-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_frequently_asked_questions = document.getElementById('ap-northeast-section-frequently-asked-questions');
  if (ap_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ap-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_international_support = document.getElementById('ap-northeast-section-international-support');
  if (ap_northeast_section_international_support) {
    gsap.fromTo('#ap-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_our_credentials = document.getElementById('ap-northeast-list-our-credentials');
  if (ap_northeast_list_our_credentials) {
    gsap.from('#ap-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_list_related_services = document.getElementById('ap-northeast-list-related-services');
  if (ap_northeast_list_related_services) {
    gsap.from('#ap-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_youre_in_good_hands = document.getElementById('ap-northeast-section-youre-in-good-hands');
  if (ap_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ap-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_northeast_section_21 = document.getElementById('ap-northeast-section-21');
  if (ap_northeast_section_21) {
    gsap.fromTo('#ap-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_form_charming_south_wine_and_gauchos = document.getElementById('ap-south-form-charming-south-wine-and-gauchos');
  if (ap_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ap-south-form-charming-south-wine-and-gauchos input, #ap-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_quick_facts = document.getElementById('ap-south-list-quick-facts');
  if (ap_south_list_quick_facts) {
    gsap.from('#ap-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_common_challenges_applicants_face = document.getElementById('ap-south-list-common-challenges-applicants-face');
  if (ap_south_list_common_challenges_applicants_face) {
    gsap.from('#ap-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_how_we_solve_these_challenges = document.getElementById('ap-south-list-how-we-solve-these-challenges');
  if (ap_south_list_how_we_solve_these_challenges) {
    gsap.from('#ap-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_trip_overview = document.getElementById('ap-south-section-trip-overview');
  if (ap_south_section_trip_overview) {
    gsap.fromTo('#ap-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_form_who_is_this_trip_for = document.getElementById('ap-south-form-who-is-this-trip-for');
  if (ap_south_form_who_is_this_trip_for) {
    gsap.from('#ap-south-form-who-is-this-trip-for input, #ap-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_required_documents = document.getElementById('ap-south-list-required-documents');
  if (ap_south_list_required_documents) {
    gsap.from('#ap-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_booking_process = document.getElementById('ap-south-list-booking-process');
  if (ap_south_list_booking_process) {
    gsap.from('#ap-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_timelines_deadlines = document.getElementById('ap-south-section-timelines-deadlines');
  if (ap_south_section_timelines_deadlines) {
    gsap.fromTo('#ap-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_fees_costs = document.getElementById('ap-south-section-fees-costs');
  if (ap_south_section_fees_costs) {
    gsap.fromTo('#ap-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_risks_common_mistakes = document.getElementById('ap-south-list-risks-common-mistakes');
  if (ap_south_list_risks_common_mistakes) {
    gsap.from('#ap-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_diy_vs_professional_assistance = document.getElementById('ap-south-section-diy-vs-professional-assistance');
  if (ap_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ap-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_amap_specific_context = document.getElementById('ap-south-section-amap-specific-context');
  if (ap_south_section_amap_specific_context) {
    gsap.fromTo('#ap-south-section-amap-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_what_our_clients_say = document.getElementById('ap-south-section-what-our-clients-say');
  if (ap_south_section_what_our_clients_say) {
    gsap.fromTo('#ap-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_frequently_asked_questions = document.getElementById('ap-south-section-frequently-asked-questions');
  if (ap_south_section_frequently_asked_questions) {
    gsap.fromTo('#ap-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_international_support = document.getElementById('ap-south-section-international-support');
  if (ap_south_section_international_support) {
    gsap.fromTo('#ap-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_our_credentials = document.getElementById('ap-south-list-our-credentials');
  if (ap_south_list_our_credentials) {
    gsap.from('#ap-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_list_related_services = document.getElementById('ap-south-list-related-services');
  if (ap_south_list_related_services) {
    gsap.from('#ap-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_youre_in_good_hands = document.getElementById('ap-south-section-youre-in-good-hands');
  if (ap_south_section_youre_in_good_hands) {
    gsap.fromTo('#ap-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

  const ap_south_section_21 = document.getElementById('ap-south-section-21');
  if (ap_south_section_21) {
    gsap.fromTo('#ap-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'back.out(1.5)'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});

export const pageIds = [
  'home', 'about', 'specialties', 'approach', 'contact', 'firstVisit', 'pillars', 'privacy',
  'family', 'lifestyle', 'prevention', 'women', 'menopause', 'weight', 'longevity',
] as const;

export type PageId = typeof pageIds[number];
export type Locale = 'pt-BR' | 'en' | 'de' | 'it' | 'fr' | 'es';

export const locales: readonly Locale[] = ['pt-BR', 'en', 'de', 'it', 'fr', 'es'];

const portugueseSlugs: Record<PageId, string> = {
  home: '', about: 'sobre', specialties: 'especialidades', approach: 'abordagem',
  contact: 'contato', firstVisit: 'primeira-consulta', pillars: 'pilares', privacy: 'privacidade',
  family: 'medicina-de-familia', lifestyle: 'medicina-do-estilo-de-vida',
  prevention: 'prevencao', women: 'saude-da-mulher', menopause: 'menopausa',
  weight: 'emagrecimento', longevity: 'longevidade',
};

const translatedSlugs: Record<Exclude<Locale, 'pt-BR'>, Record<PageId, string>> = {
  en: {
    home: '', about: 'about', specialties: 'areas-of-care', approach: 'approach',
    contact: 'contact', firstVisit: 'first-visit', pillars: 'lifestyle-pillars', privacy: 'privacy',
    family: 'family-medicine', lifestyle: 'lifestyle-medicine', prevention: 'prevention',
    women: 'womens-health', menopause: 'menopause', weight: 'weight-management', longevity: 'healthy-aging',
  },
  de: {
    home: '', about: 'ueber-uns', specialties: 'behandlungsbereiche', approach: 'ansatz',
    contact: 'kontakt', firstVisit: 'erster-termin', pillars: 'lebensstil-saeulen', privacy: 'datenschutz',
    family: 'familienmedizin', lifestyle: 'lebensstilmedizin', prevention: 'praevention',
    women: 'frauengesundheit', menopause: 'wechseljahre', weight: 'gewichtsmanagement', longevity: 'gesundes-altern',
  },
  it: {
    home: '', about: 'chi-siamo', specialties: 'aree-di-cura', approach: 'approccio',
    contact: 'contatti', firstVisit: 'prima-visita', pillars: 'pilastri-stile-di-vita', privacy: 'privacy',
    family: 'medicina-di-famiglia', lifestyle: 'medicina-dello-stile-di-vita', prevention: 'prevenzione',
    women: 'salute-della-donna', menopause: 'menopausa', weight: 'gestione-del-peso', longevity: 'invecchiamento-sano',
  },
  fr: {
    home: '', about: 'a-propos', specialties: 'domaines-de-soins', approach: 'approche',
    contact: 'contact', firstVisit: 'premiere-consultation', pillars: 'piliers-mode-de-vie', privacy: 'confidentialite',
    family: 'medecine-familiale', lifestyle: 'medecine-du-mode-de-vie', prevention: 'prevention',
    women: 'sante-des-femmes', menopause: 'menopause', weight: 'gestion-du-poids', longevity: 'vieillir-en-sante',
  },
  es: {
    home: '', about: 'acerca-de', specialties: 'areas-de-atencion', approach: 'enfoque',
    contact: 'contacto', firstVisit: 'primera-consulta', pillars: 'pilares-estilo-de-vida', privacy: 'privacidad',
    family: 'medicina-familiar', lifestyle: 'medicina-del-estilo-de-vida', prevention: 'prevencion',
    women: 'salud-de-la-mujer', menopause: 'menopausia', weight: 'control-del-peso', longevity: 'envejecimiento-saludable',
  },
};

export const careNav: readonly { page: PageId; label: string }[] = [
  { page: 'family', label: 'Medicina de família' },
  { page: 'lifestyle', label: 'Estilo de vida (abordagem)' },
  { page: 'prevention', label: 'Prevenção' },
  { page: 'women', label: 'Saúde da mulher' },
  { page: 'menopause', label: 'Menopausa' },
  { page: 'weight', label: 'Emagrecimento' },
  { page: 'longevity', label: 'Longevidade' },
];

export function localizedPath(locale: Locale, page: PageId): string {
  const slug = locale === 'pt-BR' ? portugueseSlugs[page] : translatedSlugs[locale][page];
  const prefix = locale === 'pt-BR' ? '' : `/${locale}`;
  return `${prefix}/${slug ? `${slug}/` : ''}`;
}

export function pageFromPath(path: string): PageId | undefined {
  return pageIds.find((page) => locales.some((locale) => localizedPath(locale, page) === path));
}

export function localeFromPath(path: string): Locale {
  return locales.find((locale) => locale !== 'pt-BR' && path.startsWith(`/${locale}/`)) ?? 'pt-BR';
}

export const languageNames: Record<Locale, string> = {
  'pt-BR': 'Português', en: 'English', de: 'Deutsch', it: 'Italiano', fr: 'Français', es: 'Español',
};

export const doctorTitles: Record<Locale, string> = {
  'pt-BR': 'Doutora', en: 'Dr.', de: 'Ärztin', it: 'Dott.ssa', fr: 'Dre', es: 'Dra.',
};

export type LocalizedPage = { title: string; lead: string; detail: string };
type Translation = {
  nav: [string, string, string, string, string, string];
  ui: {
    language: string; book: string; whatsapp: string; address: string; care: string;
    privacy: string; rights: string; disclaimer: string; languagesOfCare: string;
    consultationLanguages: string; map: string; registration: string; more: string;
    pillars: string; consultation: string; note: string; switchLanguage: string; skip: string; menu: string; theme: string;
  };
  pages: Record<PageId, LocalizedPage>;
};

export const translations: Record<Exclude<Locale, 'pt-BR'>, Translation> = {
  en: {
    nav: ['Home', 'About', 'Areas of care', 'Approach', 'Contact', 'First visit'],
    ui: {
      language: 'Language', book: 'Book an appointment', whatsapp: 'Contact via WhatsApp',
      address: 'Address', care: 'Areas of care', privacy: 'Privacy', rights: 'All rights reserved.',
      disclaimer: 'This website is informational and does not replace a medical consultation.',
      languagesOfCare: 'Consultation languages', consultationLanguages: 'Appointments are available in Portuguese. Teleconsultations may also be conducted in English, Italian or German, subject to availability and clinical suitability. A translated website does not imply care in French or Spanish.',
      map: 'Open in Google Maps', registration: 'Professional registration', more: 'Learn more',
      pillars: 'Six lifestyle pillars', consultation: 'What to expect', note: 'Clinical information',
      switchLanguage: 'Choose website language', skip: 'Skip to content', menu: 'Open menu', theme: 'Toggle light and dark mode',
    },
    pages: {
      home: { title: 'Family doctor in Curitiba', lead: 'Dr. Ligiana Maffini is a family and community physician in Curitiba, Brazil. She offers in-person care in Cristo Rei and follow-up by teleconsultation when clinically appropriate.', detail: 'Her lifestyle medicine training informs her approach to prevention, women’s health, menopause, clinical weight management and healthy aging. Lifestyle medicine is an approach, not a second registered specialty.' },
      about: { title: 'About Dr. Ligiana Maffini', lead: 'Ligiana Maffini Romanus is a family and community physician with more than 25 years of primary care experience.', detail: 'She sees patients at her private office in Cristo Rei, Curitiba. Her training in lifestyle medicine complements family medicine. Her Brazilian registration is CRM/PR 17731 · RQE 37637.' },
      specialties: { title: 'Areas of care', lead: 'Family medicine brings different health concerns together in a continuous, person-centred consultation.', detail: 'Explore the topics below. Prevention, menopause, weight and aging are areas of care within family medicine, not separate registered specialties.' },
      approach: { title: 'A long-term approach to care', lead: 'Appointments make room for your medical history, daily life and goals before decisions are made together.', detail: 'When relevant, the care plan considers sleep, nutrition, movement, stress and relationships. Any treatment follows an individual medical assessment.' },
      contact: { title: 'Contact the office in Curitiba', lead: 'The office is located at Rua Zeila Moura dos Santos, 101, room 503, Cristo Rei, Curitiba, Paraná, Brazil.', detail: 'In-person consultations take place at this address. Teleconsultation can support continuity of care when clinically indicated. There are no other Dr. Ligiana offices in nearby cities.' },
      firstVisit: { title: 'Your first visit', lead: 'Find out how to book, where the office is and what to expect before your appointment with Dr. Ligiana Maffini.', detail: 'There is no patient form on this website. Appointment details are confirmed directly with the office.' },
      pillars: { title: 'Six pillars of lifestyle medicine', lead: 'Nutrition, physical activity, sleep, stress management, social connection and reducing harmful substances may be discussed as part of family medicine care.', detail: 'These are not a fixed checklist or a substitute for diagnosis. Priorities and goals depend on your health history and medical assessment.' },
      privacy: { title: 'Privacy policy', lead: 'This informational website has no patient registration, clinical intake form or patient portal. It does not ask for identification numbers, symptoms or test results.', detail: 'The website is hosted by Cloudflare, which may generate technical access logs. The contact page embeds Google Maps. WhatsApp and email links open external services subject to their own policies. No third-party tracking cookies or analytics are used here. For privacy requests, email draligianamaffini@gmail.com. Last updated: August 2026. Brazilian LGPD applies.' },
      family: { title: 'Family and community medicine in Curitiba', lead: 'Dr. Ligiana Maffini provides continuous care focused on the person, family and context, rather than isolated symptoms.', detail: 'Consultations can address prevention, chronic conditions, medication reviews and referrals when needed. The office does not replace emergency care.' },
      lifestyle: { title: 'A lifestyle medicine approach in Curitiba', lead: 'Dr. Ligiana integrates lifestyle medicine training into her family medicine consultations. This is an approach, not a second specialty registered with the Brazilian medical council.', detail: 'Food, movement, sleep, stress, relationships and reducing harmful substances are considered alongside medical history, examination and treatment when appropriate.' },
      prevention: { title: 'Prevention and primary care in Curitiba', lead: 'Preventive care starts with individual risk, history and life stage, not a one-size-fits-all list of tests.', detail: 'Dr. Ligiana helps plan screening, vaccination and follow-up when indicated, within a continuous family medicine relationship.' },
      women: { title: 'Women’s health after 40 in Curitiba', lead: 'Family medicine can help women navigate changing health needs after 40 with an integrated view of symptoms and everyday life.', detail: 'Sleep, metabolic health, menopause, prevention and emotional wellbeing are assessed individually. Specialist referral is arranged when needed.' },
      menopause: { title: 'Menopause care in Curitiba', lead: 'Menopause symptoms and their effect on sleep, mood and daily life deserve individual medical assessment.', detail: 'Care may include lifestyle measures and discussion of treatment options when appropriate. No treatment is promised or prescribed through this website.' },
      weight: { title: 'Clinical weight management in Curitiba', lead: 'Weight management is considered in the context of overall health, without miracle claims or a standard plan for everyone.', detail: 'The consultation may review nutrition, sleep, activity, medical conditions and medications. Treatment choices depend on individual assessment.' },
      longevity: { title: 'Healthy aging in Curitiba', lead: 'Healthy aging involves preserving function, autonomy and quality of life over time.', detail: 'Dr. Ligiana combines prevention and family medicine follow-up with realistic lifestyle goals tailored to each patient.' },
    },
  },
  de: {
    nav: ['Startseite', 'Über uns', 'Behandlungsbereiche', 'Ansatz', 'Kontakt', 'Erster Termin'],
    ui: {
      language: 'Sprache', book: 'Termin vereinbaren', whatsapp: 'Kontakt über WhatsApp', address: 'Adresse', care: 'Behandlungsbereiche', privacy: 'Datenschutz', rights: 'Alle Rechte vorbehalten.',
      disclaimer: 'Diese Website dient der Information und ersetzt keine ärztliche Beratung.', languagesOfCare: 'Sprachen der Beratung',
      consultationLanguages: 'Beratungen sind auf Portugiesisch möglich. Videosprechstunden können je nach Verfügbarkeit und medizinischer Eignung auch auf Englisch, Italienisch oder Deutsch stattfinden. Die Übersetzung der Website bedeutet kein Angebot von Beratungen auf Französisch oder Spanisch.',
      map: 'In Google Maps öffnen', registration: 'Ärztliche Registrierung', more: 'Mehr erfahren', pillars: 'Sechs Säulen des Lebensstils', consultation: 'Ablauf der Beratung', note: 'Medizinische Information', switchLanguage: 'Sprache der Website wählen', skip: 'Zum Inhalt springen', menu: 'Menü öffnen', theme: 'Hell-Dunkel-Modus wechseln',
    },
    pages: {
      home: { title: 'Familienärztin in Curitiba', lead: 'Dr. Ligiana Maffini ist Fachärztin für Familien- und Gemeindemedizin in Curitiba, Brasilien. Sie behandelt persönlich in Cristo Rei und bietet Videosprechstunden zur Weiterbetreuung an, wenn diese medizinisch geeignet sind.', detail: 'Ihre Ausbildung in Lebensstilmedizin ergänzt die Prävention und Betreuung bei Frauengesundheit, Wechseljahren, klinischem Gewichtsmanagement und gesundem Altern. Lebensstilmedizin ist ein Ansatz, keine zweite anerkannte Facharztbezeichnung.' },
      about: { title: 'Über Dr. Ligiana Maffini', lead: 'Ligiana Maffini Romanus ist Ärztin für Familien- und Gemeindemedizin mit mehr als 25 Jahren Erfahrung in der Primärversorgung.', detail: 'Ihre Praxis befindet sich in Cristo Rei, Curitiba. Ihre Ausbildung in Lebensstilmedizin ergänzt die Familienmedizin. Brasilianische Registrierung: CRM/PR 17731 · RQE 37637.' },
      specialties: { title: 'Behandlungsbereiche', lead: 'Die Familienmedizin verbindet verschiedene gesundheitliche Anliegen in einer kontinuierlichen, patientenzentrierten Betreuung.', detail: 'Prävention, Wechseljahre, Gewicht und Altern sind Themen innerhalb der Familienmedizin, keine eigenständigen eingetragenen Fachgebiete.' },
      approach: { title: 'Ein langfristiger Behandlungsansatz', lead: 'Im Gespräch ist Zeit für Krankengeschichte, Alltag und persönliche Ziele, bevor Entscheidungen gemeinsam getroffen werden.', detail: 'Wenn sinnvoll, berücksichtigt der Behandlungsplan Schlaf, Ernährung, Bewegung, Stress und soziale Beziehungen. Jede Behandlung setzt eine individuelle ärztliche Beurteilung voraus.' },
      contact: { title: 'Kontakt zur Praxis in Curitiba', lead: 'Die Praxis befindet sich in der Rua Zeila Moura dos Santos, 101, Raum 503, Cristo Rei, Curitiba, Paraná, Brasilien.', detail: 'Persönliche Termine finden an dieser Adresse statt. Videosprechstunden können bei medizinischer Eignung die Weiterbetreuung unterstützen. In umliegenden Städten gibt es keine weiteren Praxen von Dr. Ligiana.' },
      firstVisit: { title: 'Ihr erster Termin', lead: 'Hier erfahren Sie, wie Sie einen Termin vereinbaren, wo sich die Praxis befindet und was Sie vor dem Besuch wissen sollten.', detail: 'Auf dieser Website gibt es kein Patientenformular. Einzelheiten zum Termin werden direkt mit der Praxis geklärt.' },
      pillars: { title: 'Sechs Säulen der Lebensstilmedizin', lead: 'Ernährung, Bewegung, Schlaf, Stressbewältigung, soziale Beziehungen und der Abbau schädlicher Substanzen können Teil der familienmedizinischen Betreuung sein.', detail: 'Diese Themen sind keine starre Checkliste und ersetzen keine Diagnose. Ziele und Prioritäten hängen von der individuellen ärztlichen Beurteilung ab.' },
      privacy: { title: 'Datenschutzerklärung', lead: 'Diese Informationswebsite enthält keine Patientenregistrierung, kein medizinisches Aufnahmeformular und kein Patientenportal. Sie fragt weder Ausweisnummern noch Symptome oder Befunde ab.', detail: 'Die Website wird von Cloudflare gehostet; dabei können technische Zugriffsprotokolle entstehen. Auf der Kontaktseite ist Google Maps eingebettet. WhatsApp- und E-Mail-Links führen zu externen Diensten mit eigenen Richtlinien. Hier werden keine Tracking-Cookies oder Analysewerkzeuge Dritter verwendet. Datenschutzanfragen: draligianamaffini@gmail.com. Stand: August 2026. Es gilt das brasilianische Datenschutzgesetz LGPD.' },
      family: { title: 'Familien- und Gemeindemedizin in Curitiba', lead: 'Dr. Ligiana Maffini bietet kontinuierliche Versorgung, die Mensch, Familie und Lebensumfeld einbezieht statt nur einzelne Symptome.', detail: 'Die Beratung kann Prävention, chronische Erkrankungen, Medikamentenprüfung und bei Bedarf Überweisungen umfassen. Die Praxis ersetzt keine Notfallversorgung.' },
      lifestyle: { title: 'Lebensstilmedizinischer Ansatz in Curitiba', lead: 'Dr. Ligiana integriert ihre Ausbildung in Lebensstilmedizin in die Familienmedizin. Es handelt sich um einen Behandlungsansatz, nicht um eine zweite beim brasilianischen Ärzterat eingetragene Fachrichtung.', detail: 'Ernährung, Bewegung, Schlaf, Stress, Beziehungen und der Abbau schädlicher Substanzen werden zusammen mit Anamnese und Behandlung berücksichtigt.' },
      prevention: { title: 'Prävention und Primärversorgung in Curitiba', lead: 'Vorsorge orientiert sich an individuellen Risiken, Vorgeschichte und Lebensphase, nicht an einer einheitlichen Liste von Untersuchungen.', detail: 'Dr. Ligiana plant bei Bedarf Früherkennung, Impfungen und Nachsorge im Rahmen der kontinuierlichen Familienmedizin.' },
      women: { title: 'Frauengesundheit ab 40 in Curitiba', lead: 'Familienmedizin begleitet Frauen bei gesundheitlichen Veränderungen ab 40 mit einem ganzheitlichen Blick auf Beschwerden und Alltag.', detail: 'Schlaf, Stoffwechsel, Wechseljahre, Vorsorge und psychisches Wohlbefinden werden individuell beurteilt. Bei Bedarf erfolgt eine Überweisung.' },
      menopause: { title: 'Betreuung in den Wechseljahren in Curitiba', lead: 'Beschwerden in den Wechseljahren und ihre Auswirkungen auf Schlaf, Stimmung und Alltag verdienen eine individuelle ärztliche Beurteilung.', detail: 'Die Betreuung kann Lebensstilmaßnahmen und geeignete Behandlungsmöglichkeiten umfassen. Über diese Website werden keine Behandlungen versprochen oder verordnet.' },
      weight: { title: 'Ärztliches Gewichtsmanagement in Curitiba', lead: 'Gewichtsmanagement wird im Zusammenhang mit der allgemeinen Gesundheit betrachtet, ohne Wunderbehauptungen oder Standardplan.', detail: 'Die Beratung kann Ernährung, Schlaf, Bewegung, Erkrankungen und Medikamente berücksichtigen. Behandlungsentscheidungen hängen von der individuellen Untersuchung ab.' },
      longevity: { title: 'Gesundes Altern in Curitiba', lead: 'Gesundes Altern bedeutet, Funktion, Selbstständigkeit und Lebensqualität langfristig zu erhalten.', detail: 'Dr. Ligiana verbindet Vorsorge und kontinuierliche familienmedizinische Betreuung mit realistischen, individuell angepassten Lebensstilzielen.' },
    },
  },
  it: {
    nav: ['Inizio', 'Chi siamo', 'Aree di cura', 'Approccio', 'Contatti', 'Prima visita'],
    ui: {
      language: 'Lingua', book: 'Prenota una visita', whatsapp: 'Contatta su WhatsApp', address: 'Indirizzo', care: 'Aree di cura', privacy: 'Privacy', rights: 'Tutti i diritti riservati.',
      disclaimer: 'Questo sito è informativo e non sostituisce una visita medica.', languagesOfCare: 'Lingue delle visite',
      consultationLanguages: 'Le visite sono disponibili in portoghese. Le televisite possono svolgersi anche in inglese, italiano o tedesco, secondo disponibilità e idoneità clinica. La traduzione del sito non implica visite in francese o spagnolo.',
      map: 'Apri in Google Maps', registration: 'Iscrizione professionale', more: 'Scopri di più', pillars: 'Sei pilastri dello stile di vita', consultation: 'Come si svolge la visita', note: 'Informazione medica', switchLanguage: 'Scegli la lingua del sito', skip: 'Vai al contenuto', menu: 'Apri il menu', theme: 'Cambia tema chiaro o scuro',
    },
    pages: {
      home: { title: 'Medica di famiglia a Curitiba', lead: 'La dott.ssa Ligiana Maffini è specialista in Medicina di Famiglia e Comunità a Curitiba, in Brasile. Riceve di persona a Cristo Rei e offre televisite di controllo quando clinicamente appropriate.', detail: 'La formazione in medicina dello stile di vita orienta il suo approccio alla prevenzione, salute della donna, menopausa, gestione clinica del peso e invecchiamento sano. È un approccio, non una seconda specializzazione registrata.' },
      about: { title: 'La dott.ssa Ligiana Maffini', lead: 'Ligiana Maffini Romanus è medica di famiglia e comunità con oltre 25 anni di esperienza nell’assistenza primaria.', detail: 'Riceve nello studio privato a Cristo Rei, Curitiba. La formazione in medicina dello stile di vita integra la medicina di famiglia. Iscrizione brasiliana: CRM/PR 17731 · RQE 37637.' },
      specialties: { title: 'Aree di cura', lead: 'La medicina di famiglia riunisce diverse esigenze di salute in un’assistenza continuativa e centrata sulla persona.', detail: 'Prevenzione, menopausa, peso e invecchiamento sono ambiti di cura della medicina di famiglia, non specializzazioni registrate a sé stanti.' },
      approach: { title: 'Un approccio di cura a lungo termine', lead: 'Le visite dedicano tempo alla storia clinica, alla vita quotidiana e agli obiettivi personali prima di prendere decisioni condivise.', detail: 'Quando opportuno, il piano considera sonno, alimentazione, movimento, stress e relazioni. Ogni trattamento richiede una valutazione medica individuale.' },
      contact: { title: 'Contatta lo studio a Curitiba', lead: 'Lo studio si trova in Rua Zeila Moura dos Santos, 101, stanza 503, Cristo Rei, Curitiba, Paraná, Brasile.', detail: 'Le visite in presenza si svolgono a questo indirizzo. La televisita può sostenere la continuità delle cure quando indicata clinicamente. Non ci sono altri studi della dott.ssa Ligiana nelle città vicine.' },
      firstVisit: { title: 'La tua prima visita', lead: 'Scopri come prenotare, dove si trova lo studio e cosa aspettarti prima dell’appuntamento con la dott.ssa Ligiana Maffini.', detail: 'Su questo sito non è presente un modulo per i pazienti. I dettagli dell’appuntamento vengono confermati direttamente dallo studio.' },
      pillars: { title: 'Sei pilastri della medicina dello stile di vita', lead: 'Alimentazione, attività fisica, sonno, gestione dello stress, relazioni sociali e riduzione delle sostanze nocive possono entrare nel percorso di medicina di famiglia.', detail: 'Non sono una lista rigida né sostituiscono la diagnosi. Priorità e obiettivi dipendono dalla valutazione medica individuale.' },
      privacy: { title: 'Informativa sulla privacy', lead: 'Questo sito informativo non dispone di registrazione dei pazienti, modulo di anamnesi o area riservata. Non richiede documenti, sintomi o referti.', detail: 'Il sito è ospitato da Cloudflare, che può generare registri tecnici di accesso. La pagina contatti incorpora Google Maps. I link a WhatsApp ed e-mail aprono servizi esterni con proprie informative. Non utilizziamo cookie di tracciamento o analytics di terzi. Per richieste sulla privacy: draligianamaffini@gmail.com. Aggiornamento: agosto 2026. Si applica la legge brasiliana LGPD.' },
      family: { title: 'Medicina di famiglia e comunità a Curitiba', lead: 'La dott.ssa Ligiana Maffini offre cure continuative rivolte alla persona, alla famiglia e al contesto di vita, non soltanto ai singoli sintomi.', detail: 'La visita può comprendere prevenzione, patologie croniche, revisione dei farmaci e invio ad altri specialisti quando necessario. Lo studio non sostituisce il pronto soccorso.' },
      lifestyle: { title: 'Approccio di medicina dello stile di vita a Curitiba', lead: 'La dott.ssa Ligiana integra la formazione in medicina dello stile di vita nelle visite di medicina di famiglia. È un approccio, non una seconda specializzazione registrata presso l’ordine brasiliano.', detail: 'Alimentazione, movimento, sonno, stress, relazioni e riduzione delle sostanze nocive vengono considerati insieme alla storia clinica e alla terapia.' },
      prevention: { title: 'Prevenzione e cure primarie a Curitiba', lead: 'La prevenzione parte dai rischi individuali, dalla storia clinica e dalla fase di vita, non da un elenco standard di esami.', detail: 'La dott.ssa Ligiana aiuta a pianificare screening, vaccinazioni e controlli quando indicati, all’interno di un’assistenza continuativa.' },
      women: { title: 'Salute della donna dopo i 40 anni a Curitiba', lead: 'La medicina di famiglia accompagna le donne nei cambiamenti di salute dopo i 40 anni, considerando sintomi e vita quotidiana nel loro insieme.', detail: 'Sonno, metabolismo, menopausa, prevenzione e benessere emotivo vengono valutati individualmente. Se necessario, si ricorre a specialisti.' },
      menopause: { title: 'Cura della menopausa a Curitiba', lead: 'I sintomi della menopausa e il loro impatto su sonno, umore e vita quotidiana meritano una valutazione medica individuale.', detail: 'Il percorso può comprendere interventi sullo stile di vita e la discussione di trattamenti appropriati. Nessun trattamento viene promesso o prescritto su questo sito.' },
      weight: { title: 'Gestione clinica del peso a Curitiba', lead: 'Il peso viene considerato nel contesto della salute generale, senza promesse miracolose né programmi uguali per tutti.', detail: 'La visita può esaminare alimentazione, sonno, attività, condizioni mediche e farmaci. Le scelte terapeutiche dipendono dalla valutazione individuale.' },
      longevity: { title: 'Invecchiamento sano a Curitiba', lead: 'Invecchiare in salute significa preservare funzionalità, autonomia e qualità della vita nel tempo.', detail: 'La dott.ssa Ligiana unisce prevenzione e follow-up di medicina di famiglia a obiettivi di stile di vita realistici e personalizzati.' },
    },
  },
  fr: {
    nav: ['Accueil', 'À propos', 'Domaines de soins', 'Approche', 'Contact', 'Première visite'],
    ui: {
      language: 'Langue', book: 'Prendre rendez-vous', whatsapp: 'Contacter par WhatsApp', address: 'Adresse', care: 'Domaines de soins', privacy: 'Confidentialité', rights: 'Tous droits réservés.',
      disclaimer: 'Ce site est informatif et ne remplace pas une consultation médicale.', languagesOfCare: 'Langues des consultations',
      consultationLanguages: 'Les consultations sont disponibles en portugais. Les téléconsultations peuvent aussi se dérouler en anglais, italien ou allemand, selon la disponibilité et l’indication clinique. La traduction du site ne signifie pas que des consultations sont proposées en français ou en espagnol.',
      map: 'Ouvrir dans Google Maps', registration: 'Inscription professionnelle', more: 'En savoir plus', pillars: 'Six piliers du mode de vie', consultation: 'Déroulement de la consultation', note: 'Information médicale', switchLanguage: 'Choisir la langue du site', skip: 'Aller au contenu', menu: 'Ouvrir le menu', theme: 'Changer de thème clair ou sombre',
    },
    pages: {
      home: { title: 'Médecin de famille à Curitiba', lead: 'La Dre Ligiana Maffini est spécialiste en médecine familiale et communautaire à Curitiba, au Brésil. Elle reçoit à Cristo Rei et propose des téléconsultations de suivi lorsque cela est cliniquement approprié.', detail: 'Sa formation en médecine du mode de vie nourrit son approche de la prévention, de la santé des femmes, de la ménopause, du suivi du poids et du vieillissement en santé. Il s’agit d’une approche, pas d’une deuxième spécialité enregistrée.' },
      about: { title: 'À propos de la Dre Ligiana Maffini', lead: 'Ligiana Maffini Romanus est médecin de famille et communautaire avec plus de 25 ans d’expérience en soins primaires.', detail: 'Son cabinet privé se trouve à Cristo Rei, Curitiba. Sa formation en médecine du mode de vie complète la médecine familiale. Inscription brésilienne : CRM/PR 17731 · RQE 37637.' },
      specialties: { title: 'Domaines de soins', lead: 'La médecine familiale relie divers besoins de santé dans un suivi continu et centré sur la personne.', detail: 'Prévention, ménopause, poids et vieillissement sont des domaines de soins au sein de la médecine familiale, et non des spécialités enregistrées distinctes.' },
      approach: { title: 'Une approche de soins à long terme', lead: 'Les consultations laissent du temps pour l’histoire médicale, la vie quotidienne et les objectifs personnels avant de prendre des décisions ensemble.', detail: 'Si nécessaire, le plan tient compte du sommeil, de l’alimentation, de l’activité physique, du stress et des relations. Tout traitement repose sur une évaluation médicale individuelle.' },
      contact: { title: 'Contacter le cabinet à Curitiba', lead: 'Le cabinet se situe Rua Zeila Moura dos Santos, 101, salle 503, Cristo Rei, Curitiba, Paraná, Brésil.', detail: 'Les consultations en personne ont lieu à cette adresse. La téléconsultation peut soutenir la continuité des soins lorsque cela est indiqué. La Dre Ligiana n’a pas d’autres cabinets dans les villes voisines.' },
      firstVisit: { title: 'Votre première consultation', lead: 'Découvrez comment prendre rendez-vous, où se trouve le cabinet et ce qu’il faut savoir avant de rencontrer la Dre Ligiana Maffini.', detail: 'Ce site ne propose aucun formulaire patient. Les détails du rendez-vous sont confirmés directement avec le cabinet.' },
      pillars: { title: 'Six piliers de la médecine du mode de vie', lead: 'Alimentation, activité physique, sommeil, gestion du stress, liens sociaux et réduction des substances nocives peuvent faire partie des soins de médecine familiale.', detail: 'Il ne s’agit pas d’une liste rigide ni d’un substitut au diagnostic. Les priorités dépendent de l’évaluation médicale individuelle.' },
      privacy: { title: 'Politique de confidentialité', lead: 'Ce site d’information ne comporte ni inscription de patients, ni formulaire de données médicales, ni espace patient. Il ne demande pas de pièce d’identité, de symptômes ou de résultats d’examens.', detail: 'Le site est hébergé par Cloudflare, qui peut générer des journaux techniques. La page contact intègre Google Maps. Les liens WhatsApp et e-mail ouvrent des services externes soumis à leurs propres règles. Aucun cookie de suivi ni outil d’analyse tiers n’est utilisé ici. Pour toute demande relative aux données : draligianamaffini@gmail.com. Mise à jour : août 2026. La loi brésilienne LGPD s’applique.' },
      family: { title: 'Médecine familiale et communautaire à Curitiba', lead: 'La Dre Ligiana Maffini propose un suivi continu tenant compte de la personne, de la famille et de son contexte plutôt que de symptômes isolés.', detail: 'La consultation peut couvrir la prévention, les maladies chroniques, la révision des traitements et les orientations nécessaires. Le cabinet ne remplace pas les urgences.' },
      lifestyle: { title: 'Approche de médecine du mode de vie à Curitiba', lead: 'La Dre Ligiana intègre sa formation en médecine du mode de vie aux consultations de médecine familiale. C’est une approche, et non une seconde spécialité enregistrée auprès du conseil médical brésilien.', detail: 'Alimentation, activité, sommeil, stress, relations et réduction des substances nocives sont considérés avec les antécédents médicaux et le traitement.' },
      prevention: { title: 'Prévention et soins primaires à Curitiba', lead: 'La prévention part des risques individuels, des antécédents et de l’étape de vie, non d’une liste identique d’examens pour tous.', detail: 'La Dre Ligiana aide à planifier dépistage, vaccination et suivi lorsque cela est indiqué, dans le cadre de la médecine familiale.' },
      women: { title: 'Santé des femmes après 40 ans à Curitiba', lead: 'La médecine familiale accompagne les besoins de santé changeants des femmes après 40 ans en tenant compte des symptômes et du quotidien.', detail: 'Sommeil, santé métabolique, ménopause, prévention et bien-être émotionnel sont évalués individuellement. Une orientation spécialisée est proposée si nécessaire.' },
      menopause: { title: 'Suivi de la ménopause à Curitiba', lead: 'Les symptômes de la ménopause et leurs effets sur le sommeil, l’humeur et le quotidien méritent une évaluation médicale individuelle.', detail: 'Le suivi peut inclure des mesures de mode de vie et la discussion de traitements adaptés. Aucun traitement n’est promis ou prescrit par ce site.' },
      weight: { title: 'Suivi médical du poids à Curitiba', lead: 'Le poids est envisagé dans le contexte de la santé globale, sans promesse miracle ni programme identique pour tous.', detail: 'La consultation peut aborder l’alimentation, le sommeil, l’activité, les maladies et les médicaments. Les choix dépendent d’une évaluation individuelle.' },
      longevity: { title: 'Vieillir en santé à Curitiba', lead: 'Vieillir en santé consiste à préserver les capacités, l’autonomie et la qualité de vie au fil du temps.', detail: 'La Dre Ligiana associe prévention et suivi en médecine familiale à des objectifs de mode de vie réalistes et personnalisés.' },
    },
  },
  es: {
    nav: ['Inicio', 'Acerca de', 'Áreas de atención', 'Enfoque', 'Contacto', 'Primera consulta'],
    ui: {
      language: 'Idioma', book: 'Pedir cita', whatsapp: 'Contactar por WhatsApp', address: 'Dirección', care: 'Áreas de atención', privacy: 'Privacidad', rights: 'Todos los derechos reservados.',
      disclaimer: 'Este sitio es informativo y no sustituye una consulta médica.', languagesOfCare: 'Idiomas de consulta',
      consultationLanguages: 'Las consultas se ofrecen en portugués. Las teleconsultas también pueden realizarse en inglés, italiano o alemán, según disponibilidad e indicación clínica. La traducción del sitio no implica atención en francés o español.',
      map: 'Abrir en Google Maps', registration: 'Registro profesional', more: 'Más información', pillars: 'Seis pilares del estilo de vida', consultation: 'Cómo es la consulta', note: 'Información médica', switchLanguage: 'Elegir idioma del sitio', skip: 'Ir al contenido', menu: 'Abrir menú', theme: 'Cambiar tema claro u oscuro',
    },
    pages: {
      home: { title: 'Médica de familia en Curitiba', lead: 'La Dra. Ligiana Maffini es especialista en Medicina de Familia y Comunidad en Curitiba, Brasil. Atiende presencialmente en Cristo Rei y ofrece teleconsultas de seguimiento cuando son clínicamente adecuadas.', detail: 'Su formación en medicina del estilo de vida orienta el abordaje de la prevención, salud de la mujer, menopausia, control clínico del peso y envejecimiento saludable. Es un enfoque, no una segunda especialidad registrada.' },
      about: { title: 'Acerca de la Dra. Ligiana Maffini', lead: 'Ligiana Maffini Romanus es médica de familia y comunidad con más de 25 años de experiencia en atención primaria.', detail: 'Atiende en su consultorio privado en Cristo Rei, Curitiba. Su formación en medicina del estilo de vida complementa la medicina de familia. Registro brasileño: CRM/PR 17731 · RQE 37637.' },
      specialties: { title: 'Áreas de atención', lead: 'La medicina de familia integra distintas necesidades de salud en una atención continua y centrada en la persona.', detail: 'Prevención, menopausia, peso y envejecimiento son áreas de atención de la medicina de familia, no especialidades registradas por separado.' },
      approach: { title: 'Un enfoque de atención a largo plazo', lead: 'Las consultas dejan tiempo para conocer la historia médica, la vida diaria y los objetivos personales antes de tomar decisiones compartidas.', detail: 'Cuando corresponde, el plan considera sueño, alimentación, movimiento, estrés y relaciones. Todo tratamiento requiere evaluación médica individual.' },
      contact: { title: 'Contacto del consultorio en Curitiba', lead: 'El consultorio está en Rua Zeila Moura dos Santos, 101, sala 503, Cristo Rei, Curitiba, Paraná, Brasil.', detail: 'Las consultas presenciales se realizan en esta dirección. La teleconsulta puede apoyar la continuidad de la atención cuando esté indicada. La Dra. Ligiana no tiene otros consultorios en ciudades cercanas.' },
      firstVisit: { title: 'Tu primera consulta', lead: 'Conoce cómo pedir cita, dónde está el consultorio y qué esperar antes de acudir a la Dra. Ligiana Maffini.', detail: 'Este sitio no tiene formulario para pacientes. Los detalles de la cita se confirman directamente con el consultorio.' },
      pillars: { title: 'Seis pilares de la medicina del estilo de vida', lead: 'Alimentación, actividad física, sueño, manejo del estrés, vínculos sociales y reducción de sustancias nocivas pueden formar parte de la atención en medicina de familia.', detail: 'No son una lista rígida ni reemplazan un diagnóstico. Las prioridades y metas dependen de una evaluación médica individual.' },
      privacy: { title: 'Política de privacidad', lead: 'Este sitio informativo no registra pacientes, no tiene formulario de datos clínicos ni portal de pacientes. No solicita documentos de identidad, síntomas ni resultados de estudios.', detail: 'El sitio está alojado en Cloudflare, que puede generar registros técnicos de acceso. La página de contacto incorpora Google Maps. Los enlaces a WhatsApp y correo abren servicios externos con sus propias políticas. Aquí no se usan cookies de seguimiento ni herramientas de análisis de terceros. Para consultas de privacidad: draligianamaffini@gmail.com. Actualización: agosto de 2026. Se aplica la ley brasileña LGPD.' },
      family: { title: 'Medicina de familia y comunidad en Curitiba', lead: 'La Dra. Ligiana Maffini ofrece atención continua centrada en la persona, su familia y su contexto, no solo en síntomas aislados.', detail: 'La consulta puede abordar prevención, enfermedades crónicas, revisión de medicamentos y derivaciones cuando se necesiten. El consultorio no sustituye las urgencias.' },
      lifestyle: { title: 'Enfoque de medicina del estilo de vida en Curitiba', lead: 'La Dra. Ligiana integra su formación en medicina del estilo de vida en las consultas de medicina de familia. Es un enfoque, no una segunda especialidad registrada ante el consejo médico brasileño.', detail: 'Alimentación, movimiento, sueño, estrés, relaciones y reducción de sustancias nocivas se consideran junto con la historia clínica y el tratamiento.' },
      prevention: { title: 'Prevención y atención primaria en Curitiba', lead: 'La prevención parte del riesgo individual, la historia médica y la etapa de vida, no de una lista de pruebas igual para todos.', detail: 'La Dra. Ligiana ayuda a planificar chequeos, vacunas y seguimiento cuando estén indicados, dentro de una relación continua de medicina de familia.' },
      women: { title: 'Salud de la mujer después de los 40 en Curitiba', lead: 'La medicina de familia acompaña los cambios de salud de las mujeres después de los 40 con una mirada integrada de síntomas y vida cotidiana.', detail: 'Sueño, salud metabólica, menopausia, prevención y bienestar emocional se evalúan de forma individual. Se deriva a especialistas cuando hace falta.' },
      menopause: { title: 'Atención de la menopausia en Curitiba', lead: 'Los síntomas de la menopausia y sus efectos sobre el sueño, el ánimo y la vida diaria merecen evaluación médica individual.', detail: 'La atención puede incluir medidas de estilo de vida y conversación sobre tratamientos adecuados. Este sitio no promete ni prescribe tratamientos.' },
      weight: { title: 'Control clínico del peso en Curitiba', lead: 'El control del peso se considera dentro de la salud general, sin promesas milagrosas ni un plan idéntico para todos.', detail: 'La consulta puede revisar alimentación, sueño, actividad, condiciones médicas y medicamentos. Las decisiones dependen de la evaluación individual.' },
      longevity: { title: 'Envejecimiento saludable en Curitiba', lead: 'Envejecer con salud significa preservar la función, la autonomía y la calidad de vida a lo largo del tiempo.', detail: 'La Dra. Ligiana combina prevención y seguimiento en medicina de familia con metas de estilo de vida realistas y personalizadas.' },
    },
  },
};

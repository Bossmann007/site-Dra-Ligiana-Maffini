import type { Locale } from './i18n';

type Step = { title: string; text: string };
type Question = { question: string; answer: string };

type OnboardingCopy = {
  eyebrow: string;
  explore: string;
  stepsTitle: string;
  steps: readonly Step[];
  prepareTitle: string;
  prepareIntro: string;
  prepare: readonly string[];
  locationTitle: string;
  locationText: string;
  remoteTitle: string;
  remoteText: string;
  languagesTitle: string;
  questionsTitle: string;
  questions: readonly Question[];
  contactTitle: string;
  contactText: string;
  book: string;
  map: string;
};

export const onboardingCopy: Record<Locale, OnboardingCopy> = {
  'pt-BR': {
    eyebrow: 'Para novos pacientes', explore: 'Entenda como funciona', stepsTitle: 'Do primeiro contato ao acompanhamento',
    steps: [
      { title: 'Entre em contato', text: 'Agende pelo WhatsApp. O consultório confirma disponibilidade e orienta sobre os detalhes práticos da consulta.' },
      { title: 'Combine os detalhes', text: 'Confirme com o consultório o local, horário e qualquer orientação específica para o seu atendimento. Não há formulário de cadastro neste site.' },
      { title: 'Converse com a médica', text: 'A consulta considera sua história, suas dúvidas e sua rotina. Avaliação e condutas são definidas individualmente, em conversa com a Dra. Ligiana.' },
      { title: 'Defina os próximos passos', text: 'Se houver necessidade de retorno, exames ou encaminhamento, o plano de acompanhamento será discutido na consulta.' },
    ],
    prepareTitle: 'O que pode ser útil ter em mãos',
    prepareIntro: 'Não é uma lista obrigatória. Se você já tiver estes itens, eles podem ajudar na conversa:',
    prepare: ['Lista dos medicamentos e suplementos que usa', 'Exames e relatórios recentes relacionados à sua dúvida', 'Perguntas ou sintomas que deseja abordar'],
    locationTitle: 'Onde acontece a consulta presencial',
    locationText: 'O consultório fica no Cristo Rei, em Curitiba. Não há unidades da Dra. Ligiana em outras cidades.',
    remoteTitle: 'E a teleconsulta?',
    remoteText: 'A teleconsulta pode ser usada para continuidade do cuidado quando houver indicação clínica. Confirme essa possibilidade no agendamento.',
    languagesTitle: 'Idiomas de atendimento', questionsTitle: 'Dúvidas antes de agendar',
    questions: [
      { question: 'Preciso preencher um formulário no site?', answer: 'Não. O site não coleta dados de pacientes. O agendamento é feito pelo WhatsApp.' },
      { question: 'Preciso enviar exames antes da consulta?', answer: 'Este site não recebe exames. Se houver necessidade de compartilhar informações de saúde antes do atendimento, confirme o canal adequado com o consultório.' },
      { question: 'Como saber duração, valores e disponibilidade?', answer: 'Esses detalhes devem ser confirmados diretamente com o consultório antes de agendar. O site não informa valores nem duração fixa.' },
    ],
    contactTitle: 'Quer dar o primeiro passo?', contactText: 'Fale com o consultório para confirmar disponibilidade e esclarecer dúvidas práticas.',
    book: 'Conversar pelo WhatsApp', map: 'Ver endereço e mapa',
  },
  en: {
    eyebrow: 'For new patients', explore: 'See how it works', stepsTitle: 'From first contact to follow-up',
    steps: [
      { title: 'Get in touch', text: 'Contact the office by WhatsApp. The team will confirm availability and practical appointment details.' },
      { title: 'Confirm the details', text: 'Check the location, time and any specific instructions with the office. There is no patient registration form on this website.' },
      { title: 'Meet the physician', text: 'The consultation considers your history, questions and daily life. Assessment and care decisions are individual and discussed with Dr. Ligiana.' },
      { title: 'Plan next steps', text: 'If follow-up, tests or referral are needed, the care plan will be discussed during the consultation.' },
    ],
    prepareTitle: 'What may be helpful to bring', prepareIntro: 'These items are optional. If you have them, they may help the conversation:',
    prepare: ['A list of medicines and supplements you use', 'Recent tests or reports related to your concern', 'Questions or symptoms you would like to discuss'],
    locationTitle: 'Where in-person visits take place', locationText: 'The office is in Cristo Rei, Curitiba. Dr. Ligiana has no other offices in nearby cities.',
    remoteTitle: 'What about teleconsultations?', remoteText: 'Teleconsultation may be used for continuity of care when clinically appropriate. Please confirm this when booking.',
    languagesTitle: 'Consultation languages', questionsTitle: 'Questions before booking',
    questions: [
      { question: 'Do I need to complete a form on the website?', answer: 'No. This website does not collect patient information. Appointments are arranged by WhatsApp.' },
      { question: 'Should I send test results in advance?', answer: 'This website does not receive test results. If health information is needed beforehand, ask the office which channel to use.' },
      { question: 'How do I find out the fee, duration and availability?', answer: 'Please confirm these practical details directly with the office before booking. The website does not state fixed fees or appointment lengths.' },
    ],
    contactTitle: 'Ready to take the next step?', contactText: 'Contact the office to check availability and ask practical questions.',
    book: 'Contact via WhatsApp', map: 'View address and map',
  },
  de: {
    eyebrow: 'Für neue Patienten', explore: 'So funktioniert es', stepsTitle: 'Vom ersten Kontakt bis zur Weiterbetreuung',
    steps: [
      { title: 'Kontakt aufnehmen', text: 'Kontaktieren Sie die Praxis per WhatsApp. Das Team bestätigt Verfügbarkeit und praktische Einzelheiten.' },
      { title: 'Einzelheiten klären', text: 'Klären Sie Ort, Uhrzeit und besondere Hinweise direkt mit der Praxis. Auf dieser Website gibt es kein Patientenformular.' },
      { title: 'Ärztliches Gespräch', text: 'Im Termin werden Ihre Vorgeschichte, Fragen und Ihr Alltag berücksichtigt. Untersuchung und Behandlung werden individuell mit Ärztin Ligiana besprochen.' },
      { title: 'Nächste Schritte planen', text: 'Falls Nachsorge, Untersuchungen oder Überweisungen nötig sind, wird der weitere Plan im Termin besprochen.' },
    ],
    prepareTitle: 'Was hilfreich sein kann', prepareIntro: 'Diese Dinge sind nicht vorgeschrieben. Falls vorhanden, können sie das Gespräch erleichtern:',
    prepare: ['Liste Ihrer Medikamente und Nahrungsergänzungsmittel', 'Aktuelle Untersuchungen oder Berichte zum Anliegen', 'Fragen oder Beschwerden, die Sie ansprechen möchten'],
    locationTitle: 'Ort der persönlichen Beratung', locationText: 'Die Praxis befindet sich in Cristo Rei, Curitiba. Es gibt keine weiteren Praxen von Ärztin Ligiana in umliegenden Städten.',
    remoteTitle: 'Und die Videosprechstunde?', remoteText: 'Eine Videosprechstunde kann bei medizinischer Eignung zur Weiterbetreuung genutzt werden. Bitte klären Sie dies bei der Terminvereinbarung.',
    languagesTitle: 'Sprachen der Beratung', questionsTitle: 'Fragen vor dem Termin',
    questions: [
      { question: 'Muss ich ein Formular auf der Website ausfüllen?', answer: 'Nein. Diese Website sammelt keine Patientendaten. Termine werden per WhatsApp vereinbart.' },
      { question: 'Soll ich Befunde vorher senden?', answer: 'Diese Website nimmt keine Befunde entgegen. Falls vorab Gesundheitsdaten benötigt werden, fragen Sie die Praxis nach einem geeigneten Kanal.' },
      { question: 'Wo erfahre ich Preis, Dauer und freie Termine?', answer: 'Bitte klären Sie diese Angaben direkt mit der Praxis. Auf der Website stehen keine festen Preise oder Termindauern.' },
    ],
    contactTitle: 'Bereit für den nächsten Schritt?', contactText: 'Fragen Sie die Praxis nach freien Terminen und praktischen Einzelheiten.',
    book: 'Per WhatsApp kontaktieren', map: 'Adresse und Karte ansehen',
  },
  it: {
    eyebrow: 'Per nuovi pazienti', explore: 'Scopri come funziona', stepsTitle: 'Dal primo contatto al follow-up',
    steps: [
      { title: 'Contatta lo studio', text: 'Scrivi su WhatsApp. Lo studio confermerà la disponibilità e i dettagli pratici della visita.' },
      { title: 'Conferma i dettagli', text: 'Verifica luogo, orario e indicazioni particolari direttamente con lo studio. Questo sito non dispone di un modulo per i pazienti.' },
      { title: 'Incontra la medica', text: 'La visita considera storia clinica, domande e vita quotidiana. Valutazione e decisioni vengono discusse individualmente con la dott.ssa Ligiana.' },
      { title: 'Definisci i prossimi passi', text: 'Se sono necessari controlli, esami o invii a specialisti, il piano viene discusso durante la visita.' },
    ],
    prepareTitle: 'Cosa può essere utile portare', prepareIntro: 'Non è un elenco obbligatorio. Se li hai, questi elementi possono aiutare:',
    prepare: ['Elenco di farmaci e integratori utilizzati', 'Esami o referti recenti pertinenti', 'Domande o sintomi di cui vuoi parlare'],
    locationTitle: 'Dove si svolge la visita in presenza', locationText: 'Lo studio si trova a Cristo Rei, Curitiba. La dott.ssa Ligiana non ha altre sedi nelle città vicine.',
    remoteTitle: 'E la televisita?', remoteText: 'La televisita può essere utilizzata per la continuità delle cure quando clinicamente appropriata. Conferma questa possibilità al momento della prenotazione.',
    languagesTitle: 'Lingue delle visite', questionsTitle: 'Domande prima di prenotare',
    questions: [
      { question: 'Devo compilare un modulo sul sito?', answer: 'No. Questo sito non raccoglie dati dei pazienti. Le visite si prenotano tramite WhatsApp.' },
      { question: 'Devo inviare gli esami in anticipo?', answer: 'Questo sito non riceve esami. Se occorrono dati sanitari prima della visita, chiedi allo studio quale canale usare.' },
      { question: 'Come conosco costo, durata e disponibilità?', answer: 'Conferma questi dettagli direttamente con lo studio prima di prenotare. Il sito non indica tariffe o durate fisse.' },
    ],
    contactTitle: 'Vuoi fare il primo passo?', contactText: 'Contatta lo studio per verificare la disponibilità e chiarire i dettagli pratici.',
    book: 'Scrivi su WhatsApp', map: 'Vedi indirizzo e mappa',
  },
  fr: {
    eyebrow: 'Pour les nouveaux patients', explore: 'Voir comment ça se passe', stepsTitle: 'Du premier contact au suivi',
    steps: [
      { title: 'Contactez le cabinet', text: 'Écrivez par WhatsApp. Le cabinet confirmera les disponibilités et les détails pratiques du rendez-vous.' },
      { title: 'Confirmez les détails', text: 'Vérifiez le lieu, l’heure et toute consigne particulière avec le cabinet. Il n’y a pas de formulaire patient sur ce site.' },
      { title: 'Rencontrez la médecin', text: 'La consultation tient compte de vos antécédents, de vos questions et de votre quotidien. L’évaluation et les décisions sont discutées individuellement avec la Dre Ligiana.' },
      { title: 'Prévoyez la suite', text: 'Si un suivi, des examens ou une orientation sont nécessaires, le plan sera discuté pendant la consultation.' },
    ],
    prepareTitle: 'Ce qui peut être utile à apporter', prepareIntro: 'Rien n’est obligatoire dans cette liste. Si vous les avez, ces éléments peuvent aider :',
    prepare: ['Liste des médicaments et compléments utilisés', 'Examens ou comptes rendus récents liés à votre question', 'Questions ou symptômes dont vous souhaitez parler'],
    locationTitle: 'Lieu des consultations en personne', locationText: 'Le cabinet se trouve à Cristo Rei, Curitiba. La Dre Ligiana n’a pas d’autre cabinet dans les villes voisines.',
    remoteTitle: 'Et la téléconsultation ?', remoteText: 'La téléconsultation peut servir à la continuité des soins lorsqu’elle est cliniquement adaptée. Confirmez cette possibilité lors de la prise de rendez-vous.',
    languagesTitle: 'Langues des consultations', questionsTitle: 'Questions avant de réserver',
    questions: [
      { question: 'Dois-je remplir un formulaire sur le site ?', answer: 'Non. Ce site ne recueille pas de données de patients. Les rendez-vous se prennent par WhatsApp.' },
      { question: 'Dois-je envoyer mes examens à l’avance ?', answer: 'Ce site ne reçoit pas d’examens. Si des informations de santé sont nécessaires avant la visite, demandez au cabinet quel canal utiliser.' },
      { question: 'Comment connaître le tarif, la durée et les disponibilités ?', answer: 'Confirmez ces détails directement avec le cabinet. Le site ne publie ni tarif ni durée fixe.' },
    ],
    contactTitle: 'Vous souhaitez prendre rendez-vous ?', contactText: 'Contactez le cabinet pour connaître les disponibilités et poser vos questions pratiques.',
    book: 'Contacter par WhatsApp', map: 'Voir l’adresse et la carte',
  },
  es: {
    eyebrow: 'Para pacientes nuevos', explore: 'Conoce cómo funciona', stepsTitle: 'Del primer contacto al seguimiento',
    steps: [
      { title: 'Comunícate con el consultorio', text: 'Escribe por WhatsApp. El equipo confirmará disponibilidad y detalles prácticos de la cita.' },
      { title: 'Confirma los detalles', text: 'Consulta el lugar, la hora y cualquier indicación específica con el consultorio. Este sitio no tiene formulario para pacientes.' },
      { title: 'Habla con la médica', text: 'La consulta considera tu historia, preguntas y vida cotidiana. La evaluación y las decisiones se conversan individualmente con la Dra. Ligiana.' },
      { title: 'Planifica los próximos pasos', text: 'Si hacen falta controles, estudios o derivaciones, el plan se conversará durante la consulta.' },
    ],
    prepareTitle: 'Qué puede ser útil llevar', prepareIntro: 'No es una lista obligatoria. Si los tienes, estos elementos pueden ayudar:',
    prepare: ['Lista de medicamentos y suplementos que usas', 'Estudios o informes recientes relacionados con tu consulta', 'Preguntas o síntomas que deseas comentar'],
    locationTitle: 'Dónde es la consulta presencial', locationText: 'El consultorio está en Cristo Rei, Curitiba. La Dra. Ligiana no tiene otras sedes en ciudades cercanas.',
    remoteTitle: '¿Y la teleconsulta?', remoteText: 'La teleconsulta puede servir para dar continuidad a la atención cuando sea clínicamente adecuada. Confirma esta posibilidad al pedir cita.',
    languagesTitle: 'Idiomas de consulta', questionsTitle: 'Dudas antes de pedir cita',
    questions: [
      { question: '¿Debo completar un formulario en el sitio?', answer: 'No. Este sitio no recoge datos de pacientes. Las citas se coordinan por WhatsApp.' },
      { question: '¿Debo enviar estudios antes de la consulta?', answer: 'Este sitio no recibe estudios. Si se necesita información de salud de antemano, consulta al consultorio qué canal usar.' },
      { question: '¿Cómo averiguo precio, duración y disponibilidad?', answer: 'Confirma esos detalles directamente con el consultorio antes de reservar. El sitio no indica precios ni duraciones fijas.' },
    ],
    contactTitle: '¿Quieres dar el primer paso?', contactText: 'Comunícate con el consultorio para conocer la disponibilidad y aclarar dudas prácticas.',
    book: 'Hablar por WhatsApp', map: 'Ver dirección y mapa',
  },
};

import { translations, type Locale, type PageId } from './i18n';

type OnboardingCopy = {
  welcome: string;
  intro: string;
  language: string;
  purpose: string;
  about: string;
  area: string;
  areaPlaceholder: string;
  lifestyle: string;
  prepareTitle: string;
  prepareIntro: string;
  prepare: readonly string[];
  contactTitle: string;
  contactIntro: string;
  preview: string;
  messageIntro: string;
  messageAbout: string;
  messageArea: string;
  editNote: string;
  next: string;
  back: string;
  close: string;
  whatsapp: string;
  start: string;
};

export const onboardingCopy: Record<Locale, OnboardingCopy> = {
  'pt-BR': {
    welcome: 'Sua primeira consulta', intro: 'Vamos entender o que você procura antes de falar com o consultório.', language: 'Escolha o idioma do guia',
    purpose: 'O que você procura?', about: 'Quero conhecer a Dra. Ligiana e seu atendimento', area: 'Quero conversar sobre uma área de cuidado', areaPlaceholder: 'Escolha um tema', lifestyle: 'Abordagem em medicina do estilo de vida',
    prepareTitle: 'Antes da consulta', prepareIntro: 'Se você já tiver, estes itens podem ajudar na conversa. Não é obrigatório enviar nada pelo site.',
    prepare: ['Medicamentos e suplementos em uso', 'Exames recentes relacionados à sua dúvida', 'Perguntas que deseja fazer'],
    contactTitle: 'Pronto para conversar?', contactIntro: 'O contato e o agendamento são feitos pelo WhatsApp do consultório.', preview: 'Mensagem sugerida',
    messageIntro: 'Olá! Gostaria de conversar sobre uma consulta com a Dra. Ligiana.', messageAbout: 'Quero conhecer melhor o atendimento.', messageArea: 'Tenho interesse em',
    editNote: 'Ao abrir o WhatsApp, o tema escolhido será compartilhado com o serviço. Você pode editar a mensagem antes de enviá-la. O site não guarda suas respostas.',
    next: 'Continuar', back: 'Voltar', close: 'Fechar guia', whatsapp: 'Abrir WhatsApp', start: 'Iniciar guia interativo',
  },
  en: {
    welcome: 'Your first visit', intro: 'Let us understand what you are looking for before you contact the office.', language: 'Choose the guide language',
    purpose: 'What are you looking for?', about: 'I want to learn about Dr. Ligiana and her care', area: 'I want to discuss an area of care', areaPlaceholder: 'Choose a topic', lifestyle: 'Lifestyle medicine approach',
    prepareTitle: 'Before the visit', prepareIntro: 'If available, these items may help the conversation. You do not need to send anything through this website.',
    prepare: ['Medicines and supplements you use', 'Recent tests related to your concern', 'Questions you want to ask'],
    contactTitle: 'Ready to talk?', contactIntro: 'Contact and booking are handled through the office WhatsApp.', preview: 'Suggested message',
    messageIntro: 'Hello! I would like to ask about an appointment with Dr. Ligiana.', messageAbout: 'I would like to learn more about her care.', messageArea: 'I am interested in',
    editNote: 'Opening WhatsApp shares your selected topic with the service. You can edit the draft before sending. This website does not save your choices.',
    next: 'Continue', back: 'Back', close: 'Close guide', whatsapp: 'Open WhatsApp', start: 'Start the interactive guide',
  },
  de: {
    welcome: 'Ihr erster Termin', intro: 'Teilen Sie uns zunächst mit, wonach Sie suchen, bevor Sie die Praxis kontaktieren.', language: 'Sprache des Leitfadens wählen',
    purpose: 'Wonach suchen Sie?', about: 'Ich möchte Ärztin Ligiana und ihre Betreuung kennenlernen', area: 'Ich möchte ein Behandlungsthema besprechen', areaPlaceholder: 'Thema wählen', lifestyle: 'Ansatz der Lebensstilmedizin',
    prepareTitle: 'Vor dem Termin', prepareIntro: 'Falls vorhanden, können diese Dinge das Gespräch erleichtern. Sie müssen über diese Website nichts senden.',
    prepare: ['Ihre Medikamente und Nahrungsergänzungsmittel', 'Aktuelle Untersuchungen zu Ihrem Anliegen', 'Fragen, die Sie stellen möchten'],
    contactTitle: 'Bereit für ein Gespräch?', contactIntro: 'Kontakt und Terminvereinbarung erfolgen über WhatsApp der Praxis.', preview: 'Nachrichtenvorschlag',
    messageIntro: 'Hallo! Ich möchte mich nach einem Termin bei Ärztin Ligiana erkundigen.', messageAbout: 'Ich möchte mehr über ihre Betreuung erfahren.', messageArea: 'Ich interessiere mich für',
    editNote: 'Beim Öffnen wird Ihr gewähltes Thema an WhatsApp übermittelt. Sie können den Entwurf vor dem Senden bearbeiten. Diese Website speichert Ihre Auswahl nicht.',
    next: 'Weiter', back: 'Zurück', close: 'Leitfaden schließen', whatsapp: 'WhatsApp öffnen', start: 'Interaktiven Leitfaden starten',
  },
  it: {
    welcome: 'La tua prima visita', intro: 'Capiamo cosa cerchi prima di contattare lo studio.', language: 'Scegli la lingua della guida',
    purpose: 'Cosa cerchi?', about: 'Voglio conoscere la dott.ssa Ligiana e il suo approccio', area: 'Voglio parlare di un tema di cura', areaPlaceholder: 'Scegli un tema', lifestyle: 'Approccio alla medicina dello stile di vita',
    prepareTitle: 'Prima della visita', prepareIntro: 'Se li hai, questi elementi possono aiutare. Non devi inviare nulla tramite questo sito.',
    prepare: ['Farmaci e integratori che utilizzi', 'Esami recenti pertinenti', 'Domande che vuoi fare'],
    contactTitle: 'Pronto a parlare?', contactIntro: 'Contatti e prenotazioni avvengono tramite il WhatsApp dello studio.', preview: 'Messaggio suggerito',
    messageIntro: 'Buongiorno! Vorrei chiedere informazioni su una visita con la dott.ssa Ligiana.', messageAbout: 'Vorrei conoscere meglio il suo approccio.', messageArea: 'Mi interessa',
    editNote: 'Aprendo WhatsApp, il tema scelto viene condiviso con il servizio. Puoi modificare la bozza prima di inviarla. Il sito non salva le tue scelte.',
    next: 'Continua', back: 'Indietro', close: 'Chiudi la guida', whatsapp: 'Apri WhatsApp', start: 'Avvia la guida interattiva',
  },
  fr: {
    welcome: 'Votre première consultation', intro: 'Précisons ce que vous recherchez avant de contacter le cabinet.', language: 'Choisissez la langue du guide',
    purpose: 'Que recherchez-vous ?', about: 'Je veux connaître la Dre Ligiana et son approche', area: 'Je veux parler d’un domaine de soins', areaPlaceholder: 'Choisissez un sujet', lifestyle: 'Approche en médecine du mode de vie',
    prepareTitle: 'Avant la consultation', prepareIntro: 'Si vous les avez, ces éléments peuvent aider. Vous n’avez rien à envoyer sur ce site.',
    prepare: ['Médicaments et compléments utilisés', 'Examens récents liés à votre question', 'Questions que vous souhaitez poser'],
    contactTitle: 'Prêt à échanger ?', contactIntro: 'Le contact et la prise de rendez-vous passent par le WhatsApp du cabinet.', preview: 'Message suggéré',
    messageIntro: 'Bonjour ! Je souhaite me renseigner sur une consultation avec la Dre Ligiana.', messageAbout: 'J’aimerais mieux connaître son approche.', messageArea: 'Je m’intéresse à',
    editNote: 'L’ouverture de WhatsApp transmet le sujet choisi à ce service. Vous pourrez modifier le brouillon avant l’envoi. Ce site ne conserve pas vos choix.',
    next: 'Continuer', back: 'Retour', close: 'Fermer le guide', whatsapp: 'Ouvrir WhatsApp', start: 'Commencer le guide interactif',
  },
  es: {
    welcome: 'Tu primera consulta', intro: 'Veamos qué buscas antes de contactar al consultorio.', language: 'Elige el idioma de la guía',
    purpose: '¿Qué buscas?', about: 'Quiero conocer a la Dra. Ligiana y su atención', area: 'Quiero hablar sobre un área de atención', areaPlaceholder: 'Elige un tema', lifestyle: 'Enfoque en medicina del estilo de vida',
    prepareTitle: 'Antes de la consulta', prepareIntro: 'Si los tienes, estos elementos pueden ayudar. No necesitas enviar nada por este sitio.',
    prepare: ['Medicamentos y suplementos que usas', 'Estudios recientes relacionados con tu consulta', 'Preguntas que deseas hacer'],
    contactTitle: '¿Listo para conversar?', contactIntro: 'El contacto y la reserva se hacen por el WhatsApp del consultorio.', preview: 'Mensaje sugerido',
    messageIntro: '¡Hola! Quisiera consultar sobre una cita con la Dra. Ligiana.', messageAbout: 'Quiero conocer mejor su atención.', messageArea: 'Me interesa',
    editNote: 'Al abrir WhatsApp, el tema elegido se comparte con ese servicio. Puedes editar el borrador antes de enviarlo. El sitio no guarda tus respuestas.',
    next: 'Continuar', back: 'Volver', close: 'Cerrar guía', whatsapp: 'Abrir WhatsApp', start: 'Iniciar la guía interactiva',
  },
};

export const carePages: readonly PageId[] = ['family', 'lifestyle', 'prevention', 'women', 'menopause', 'weight', 'longevity'];

const portugueseCare: Partial<Record<PageId, string>> = {
  family: 'Medicina de Família e Comunidade',
  prevention: 'Prevenção',
  women: 'Saúde da mulher',
  menopause: 'Menopausa',
  weight: 'Emagrecimento clínico',
  longevity: 'Longevidade',
};

export function careLabel(locale: Locale, page: PageId): string | undefined {
  if (locale !== 'pt-BR') return translations[locale].pages[page].title;
  return page === 'lifestyle' ? onboardingCopy['pt-BR'].lifestyle : portugueseCare[page];
}

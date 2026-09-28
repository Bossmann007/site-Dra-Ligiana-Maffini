import hero from '../assets/images/hero.jpg';
import lifestyle from '../assets/images/lifestyle.jpg';
import seated from '../assets/images/seated.jpg';
import goldPortrait from '../assets/images/gold-portrait.jpg';
import portraitSmile from '../assets/images/portrait-smile.jpg';
import clinicMoment from '../assets/images/clinic-moment.jpg';
import consultation from '../assets/images/consultation.jpg';
import clinicPhoto1 from '../assets/images/clinic-photo-1.webp';
import clinicPhoto2 from '../assets/images/clinic-photo-2.webp';
import clinicPhoto3 from '../assets/images/clinic-photo-3.webp';

export const photos = {
  hero,
  lifestyle,
  seated,
  goldPortrait,
  portraitSmile,
  clinicMoment,
  consultation,
  clinicPhoto1,
  clinicPhoto2,
  clinicPhoto3,
} as const;

/** Home strip: Dra / consultório / Dra / consultório / Dra / consultório */
export const homeGallery = [
  {
    src: seated,
    alt: 'Dra. Ligiana Maffini em retrato profissional sentada',
    caption: 'Presença',
  },
  {
    src: clinicPhoto1,
    alt: 'Sala de espera da clínica da Dra. Ligiana Maffini, com poltronas e TV',
    caption: 'Ambiente',
  },
  {
    src: goldPortrait,
    alt: 'Dra. Ligiana Maffini em retrato editorial dourado',
    caption: 'Cuidado',
  },
  {
    src: clinicPhoto2,
    alt: 'Consultório da Dra. Ligiana Maffini em Curitiba, com mesa de atendimento e poltronas',
    caption: 'Consultório',
  },
  {
    src: lifestyle,
    alt: 'Dra. Ligiana Maffini em retrato descontraído',
    caption: 'Escuta',
  },
  {
    src: clinicPhoto3,
    alt: 'Interior do consultório da Dra. Ligiana Maffini, com poltronas e área de atendimento',
    caption: 'Acolhimento',
  },
] as const;

export const aboutGallery = [
  { src: portraitSmile, alt: 'Retrato sorridente da Dra. Ligiana Maffini' },
  { src: consultation, alt: 'Dra. Ligiana Maffini em ambiente de consulta' },
  { src: clinicMoment, alt: 'Momento de reflexão no consultório' },
] as const;

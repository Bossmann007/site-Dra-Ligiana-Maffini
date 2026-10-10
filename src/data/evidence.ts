/** Public data and references shown under "Dados e fontes" on each care page. Figures were checked against the cited pages on 2026-10-10. */
export type EvidenceItem = { text: string; source: string; url: string };

const WHO_PHC = { source: 'OMS — Primary health care (ficha técnica, 2025)', url: 'https://www.who.int/news-room/fact-sheets/detail/primary-health-care' };
const WHO_PA = { source: 'OMS — Physical activity (ficha técnica, 2024)', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' };
const WHO_MENO = { source: 'OMS — Menopause (ficha técnica, 2024)', url: 'https://www.who.int/news-room/fact-sheets/detail/menopause' };
const WHO_OBESITY = { source: 'OMS — Obesity and overweight (ficha técnica, 2026)', url: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight' };
const WHO_AGEING = { source: 'OMS — Ageing and health (ficha técnica, 2025)', url: 'https://www.who.int/news-room/fact-sheets/detail/ageing-and-health' };
const VIGITEL = { source: 'Ministério da Saúde — Vigitel Brasil 2023', url: 'https://bvsms.saude.gov.br/bvs/publicacoes/vigitel_brasil_2023.pdf' };
const INCA_MAMA = { source: 'INCA — Detecção precoce do câncer de mama (atualizado em 30/09/2025)', url: 'https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/deteccao-precoce' };
const INCA_COLO = { source: 'INCA — Detecção precoce do câncer do colo do útero (atualizado em 30/09/2025)', url: 'https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-do-colo-do-utero/acoes/deteccao-precoce' };

export const evidence: Record<string, EvidenceItem[]> = {
  'medicina-de-familia': [
    { text: 'A OMS descreve a atenção primária como uma abordagem de toda a sociedade com três componentes: serviços de saúde integrados, políticas que atuam sobre os determinantes da saúde e participação de pessoas, famílias e comunidades no próprio cuidado.', ...WHO_PHC },
    { text: 'Em 2023, nas capitais brasileiras, 27,9% dos adultos referiram diagnóstico médico de hipertensão e 10,2% de diabetes (dados autorreferidos por telefone).', ...VIGITEL },
  ],
  'medicina-do-estilo-de-vida': [
    { text: 'A recomendação global para adultos é de pelo menos 150 minutos de atividade física moderada por semana. Cerca de 31% dos adultos no mundo (1,8 bilhão) não a atingiam em 2022, 5 pontos percentuais a mais que em 2010.', ...WHO_PA },
    { text: 'Nas capitais brasileiras em 2023, 40,6% dos adultos praticavam atividade física no lazer equivalente a 150 minutos de atividade moderada por semana, e 21,4% tinham consumo recomendado de frutas e hortaliças.', ...VIGITEL },
  ],
  prevencao: [
    { text: 'Desde setembro de 2025, a recomendação do INCA para o rastreamento do câncer de mama é a mamografia de 50 a 74 anos, uma vez a cada dois anos.', ...INCA_MAMA },
    { text: 'No rastreamento do câncer do colo do útero, a faixa recomendada é de 25 a 64 anos. O teste de HPV (DNA) passou a ser o exame primário, repetido a cada cinco anos após resultado negativo; o citopatológico continua onde o novo teste ainda não é oferecido.', ...INCA_COLO },
    { text: 'Em 2023, nas capitais, 73,1% das mulheres de 50 a 69 anos referiram mamografia nos últimos dois anos e 76,8% das de 25 a 64 anos referiram citologia nos últimos três anos.', ...VIGITEL },
  ],
  'saude-da-mulher': [
    { text: 'Em 2021, mulheres com 50 anos ou mais eram 26% de todas as mulheres e meninas do mundo, contra 22% dez anos antes.', ...WHO_MENO },
    { text: 'O INCA recomenda mamografia de 50 a 74 anos a cada dois anos e rastreamento do colo do útero de 25 a 64 anos (teste de HPV a cada cinco anos após resultado negativo).', ...INCA_MAMA },
    { text: 'Em 2023, nas capitais, 16,8% das mulheres e 7,1% dos homens referiram diagnóstico médico de depressão (12,3% no total).', ...VIGITEL },
  ],
  menopausa: [
    { text: 'A maioria das mulheres chega à menopausa entre 45 e 55 anos; antes dos 40 ela é considerada prematura. A menopausa natural é reconhecida após 12 meses consecutivos sem menstruação, sem outra causa evidente.', ...WHO_MENO },
    { text: 'Sintomas frequentes: ondas de calor e suores noturnos, alterações do ciclo, ressecamento vaginal, dificuldade para dormir e mudanças de humor. A OMS recomenda conversar com um profissional de saúde para pesar as opções, hormonais e não hormonais, de acordo com histórico, valores e preferências.', ...WHO_MENO },
  ],
  emagrecimento: [
    { text: 'Em 2024, 2,6 bilhões de adultos (45%) viviam com sobrepeso e 940 milhões (cerca de 16%) com obesidade. A OMS define sobrepeso como IMC ≥ 25 e obesidade como IMC ≥ 30, e descreve a obesidade como doença crônica resultante da interação de fatores ambientais, psicossociais e biológicos.', ...WHO_OBESITY },
    { text: 'Em 2023, nas capitais brasileiras, 61,4% dos adultos tinham excesso de peso e 24,3% tinham obesidade (peso e altura autorreferidos, o que tende a subestimar os valores reais).', ...VIGITEL },
  ],
  longevidade: [
    { text: 'A OMS projeta 1,4 bilhão de pessoas com 60 anos ou mais em 2030 (1 em cada 6 no mundo) e 2,1 bilhões em 2050.', ...WHO_AGEING },
    { text: 'A OMS recomenda, para adultos, pelo menos 150 minutos de atividade física moderada por semana e destaca que o fortalecimento muscular beneficia todas as pessoas.', ...WHO_PA },
  ],
};

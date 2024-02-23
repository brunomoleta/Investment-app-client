import { nanoid } from "nanoid";
import CreditCard from "../assets/illustrations/icon-online.svg";
import Budget from "../assets/illustrations/icon-budgeting.svg";
import Onboard from "../assets/illustrations/icon-onboarding.svg";
import API from "../assets/illustrations/icon-api.svg";

import Pinterest from "../assets/social-media/icon-pinterest.svg";
import Twitter from "../assets/social-media/icon-twitter.svg";
import Facebook from "../assets/social-media/icon-facebook.svg";
import Youtube from "../assets/social-media/icon-youtube.svg";
import Instagram from "../assets/social-media/icon-instagram.svg";

import ForeignCash from "../assets/images/image-currency.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
import Airplane from "../assets/images/image-plane.jpg";
import Confetti from "../assets/images/image-confetti.jpg";

export const headerItems: string[] = [
  "home",
  "sobre",
  "contato",
  "blog",
  "carreiras",
];

export const footerItems: string[] = [
  "sobre",
  "blog",
  "contato",
  "carreiras",
  "acesso administrador",
  "política de privacidade",
];

export const HomeHero = {
  heading: "Assessoria financeira humanizada.",
  subheading:
    "É difícil atingir a independência " +
    "financeira quando você não é herdeiro. " +
    "Por isso reunimos especialistas em pessoas com conhecimento" +
    " técnico impar pra te auxiliar a chegar lá" +
    ", sem estresse e sem pressa.",
};

export const WhyUsInfo = [
  {
    id: nanoid(),
    image: CreditCard,
    name: "Invista com o cartão de crédito",
    paragraph:
      "Com aprovação da CVM " +
      "disponibilizamos o investimento com" +
      " débito automático" +
      " pelo cartão de crédito." +
      " É fácil demais, não é mesmo?",
  },
  {
    id: nanoid(),
    image: Budget,
    name: "Estabeleça objetivos",
    paragraph:
      "Junto de seu assessor" +
      " estabeleça metas de curto, médio e " +
      "longo prazo. A fim de atingir os seus sonhos",
  },
  {
    id: nanoid(),
    image: Onboard,
    name: "Sem enrolação",
    paragraph:
      "Respeitamos suas preferências" +
      " de risco. Seu assessor não vai te empurrar " +
      "um produto fraco pois ele é bem remunerado por nós.",
  },
  {
    id: nanoid(),
    image: API,
    name: "Seus dados seguros",
    paragraph:
      "aqui controlar a conta de todos os seus aplicativos" +
      " que envolvem dinheiro, e seus dados" +
      " estão protegidos pela lei suíça, " +
      "a mais rigorosa do mundo. Pode confiar ;)",
  },
];

export const SMIcons = [
  {
    id: nanoid(),
    name: "facebook",
    image: Facebook,
  },
  {
    id: nanoid(),
    name: "youtube",
    image: Youtube,
  },
  {
    id: nanoid(),
    name: "twitter",
    image: Twitter,
  },
  {
    id: nanoid(),
    name: "pinterest",
    image: Pinterest,
  },
  {
    id: nanoid(),
    name: "instagram",
    image: Instagram,
  },
];

export const blogArticles = [
  {
    id: nanoid(),
    name: "Diversificar investimentos em moeda entrangeira",
    author: "Roberto Roena",
    image: ForeignCash,
    content:
      "Investir em moedas estáveis como o euro, franco suíço e libra é fundamental para garantir segurança e estabilidade financeira em tempos de volatilidade econômica. Essas moedas têm uma história de valorização e confiabilidade, oferecendo uma proteção contra flutuações excessivas no mercado. Além disso, são amplamente reconhecidas e utilizadas internacionalmente, facilitando transações comerciais e investimentos em diversos países. Diversificar uma carteira de investimentos com essas moedas proporciona uma estratégia sólida para preservação de capital e mitigação de riscos, contribuindo para um planejamento financeiro mais sólido e eficaz a longo prazo.",
  },
  {
    id: nanoid(),
    name: "Invista sem abrir mão da qualidade de vida",
    author: "Humberta Silva",
    image: Restaurant,
    content:
      "Investir consistentemente todo mês enquanto ainda se dedica ao que se ama é uma prática essencial para construir um futuro financeiro sólido sem sacrificar paixões e interesses pessoais. A disciplina de destinar uma parte do rendimento mensal para investimentos, mesmo que modesta, pode gerar retornos significativos ao longo do tempo devido ao poder do interesse composto. Manter esse compromisso regularmente não apenas promove o crescimento financeiro, mas também fortalece hábitos de responsabilidade e planejamento.\n" +
      "\n" +
      "Equilibrar o investimento com o que traz alegria e realização pessoal é crucial para uma vida plena. Ao continuar a perseguir paixões e hobbies, mantém-se a saúde mental, a motivação e o bem-estar emocional. Além disso, explorar interesses fora do trabalho pode até mesmo abrir portas para novas oportunidades e perspectivas.\n" +
      "\n" +
      "Dessa forma, ao integrar a prática consistente de investimentos com a busca contínua daquilo que nos faz felizes, podemos construir uma vida financeira sólida e gratificante. Essa abordagem equilibrada nos permite desfrutar do presente enquanto planejamos para o futuro com confiança e segurança.",
  },
  {
    id: nanoid(),
    name: "Como otimizar o uso de suas milhas",
    author: "Omara Portuondo",
    image: Airplane,
    content:
      "Usar milhas com sabedoria requer uma estratégia inteligente e planejamento cuidadoso. Em vez de gastá-las impulsivamente em pequenas recompensas, é prudente acumulá-las para resgates mais significativos, como passagens aéreas de longa distância ou upgrades de classe. Monitorar as promoções e oportunidades de resgate é essencial para obter o máximo valor das milhas, aproveitando ofertas especiais e períodos de baixa demanda.\n" +
      "\n" +
      "Além disso, é importante estar ciente das políticas de expiração das milhas e manter um calendário de vencimento atualizado para evitar perdas desnecessárias. Ao maximizar o uso das milhas em momentos estratégicos e escolhas inteligentes de resgate, é possível desfrutar de benefícios significativos sem comprometer a eficácia do programa de fidelidade.",
  },
  {
    id: nanoid(),
    name: "Chegamos a marca 40 mil clientes.",
    author: "Clara Gabardo",
    image: Confetti,
    content:
      "Com imensa gratidão, celebramos alcançar a marca de 40 mil clientes. Este marco extraordinário não seria possível sem a confiança e o apoio contínuo de cada um de vocês. Cada feedback, cada interação e cada momento compartilhado conosco moldaram o que somos hoje.\n" +
      "\n" +
      "A jornada até aqui foi marcada por desafios e aprendizados. Através dos erros cometidos, aprendemos a crescer, aprimorando nossos produtos e serviços graças aos valiosos insights fornecidos por vocês, nossos estimados clientes. Cada crítica construtiva nos incentivou a buscar constantemente a excelência e a superar as expectativas.\n" +
      "\n" +
      "Portanto, é com profunda gratidão que expressamos nosso reconhecimento a todos os nossos clientes. Vocês são a razão de nossa existência e o combustível que impulsiona nosso crescimento. Continuaremos empenhados em servi-los da melhor maneira possível, honrando sua confiança e contribuição para o nosso sucesso. Muito obrigado por fazerem parte desta jornada conosco.",
  },
];

export const confirmMessage =
    "Sim, desejo remover minha conta e excluir todos os meus dados.";
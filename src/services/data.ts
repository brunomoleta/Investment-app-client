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

export const headeritems: string[] = [
  "home",
  "sobre",
  "contato",
  "blog",
  "carreiras",
];

export const footeritems: string[] = [
  "sobre",
  "contato",
  "blog",
  "carreiras",
  "acesso administrador",
  "política de privacidade",
  "acesso assessor",
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
      "disponbilizamos o investimento com" +
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

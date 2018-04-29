import Anime from "animejs";

export const animatePageIn = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateY: ["150%", "0px"],
    opacity: [0, 1],
    duration: 3000,
    delay: 500,
    elasticity: 400
  });
};

export const animatePageOut = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateY: ['0px', '-150%'],
    opacity: [1, 0],
    duration: 3000,
  });
};

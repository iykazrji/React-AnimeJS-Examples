import Anime from "animejs";

export const animatePageIn = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateX: ["100%", "0"],
    opacity: [0, 1],
    duration: 2700,
    delay: 500,
    elasticity: 50
  });
};

export const animatePageOut = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateX: ['0', '-100%'],
    opacity: [1, 0],
    duration: 2200
  });
};

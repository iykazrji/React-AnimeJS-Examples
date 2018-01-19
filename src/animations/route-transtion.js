import Anime from "animejs";

export const animatePageIn = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateX: ["100%", "0"],
    opacity: [0, 1],
    duration: 3000,
    delay: 500
  });
};

export const animatePageOut = PageElement => {
  Anime.remove(PageElement);
  let animation = Anime({
    targets: PageElement,
    translateX: ['0', '-100%'],
    opacity: [1, 0],
    duration: 3000
  });
};

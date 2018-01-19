const AnimateElement = (target, animate) => {
    Anime.remove(target); // Stop and remove this element from current animation if present...
    let targetParent = target.parentNode;
    let animation = Anime({
      targets: target,
      translateX: animate
        ? `${targetParent.offsetWidth - target.offsetWidth}px`
        : "0",
      scaleX: animate ? 0.13 : 1,
      scaleY: animate ? 8 : 1,
      duration: 1500,
      elasticity: 600,
    });
  };
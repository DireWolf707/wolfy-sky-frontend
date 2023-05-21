export const animateConstants = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
}

export const stagerChildrenVariant = {
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

export const scaleBlurInOutVariant = {
  initial: { opacity: 0.6, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

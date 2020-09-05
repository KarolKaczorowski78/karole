
// using clouser becouse it's used as callback
const toggleClasses = (nameOfClass, item) => () => item.classList.toggle(nameOfClass);

export default toggleClasses;
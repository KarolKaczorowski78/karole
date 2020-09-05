const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        const { isIntersecting, target } = entry;
        if (isIntersecting) {
            const img = target.childNodes[0];
            img.src = target.title;

            setTimeout(() => target.classList.add('shown-product'), 650);

            observer.unobserve(target);
        }
    }, options)
}) 

const options = {
    threshold: 0.3
}

export default observer;
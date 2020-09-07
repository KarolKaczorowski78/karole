const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        const { isIntersecting, target } = entry;
        if (isIntersecting) {
            const img = target.childNodes[0];
            img.src = target.title;
            target.classList.add('shown-product')

            observer.unobserve(target);
        }
    }, options)
}) 

const options = {
    threshold: 0.3
}

export default observer;
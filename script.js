
document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation menu
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggleButton && nav) {
        toggleButton.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");

            toggleButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });
    }

    // Coffee bean information
    const beanDetails = {
        brazil: "Brazil Santos is a good starting point for users who want a smooth, balanced coffee with chocolate and nutty notes. It works well in a French press.",

        ethiopia: "Ethiopian Yirgacheffe suits users who enjoy bright, floral and citrus flavours. It is ideal for pour-over brewing.",

        colombia: "Colombian Supremo offers a balanced taste with cocoa and fruit notes. It is a versatile choice for filter coffee."
    };

    // View details functionality
    const output = document.getElementById("bean-details");
    const buttons = document.querySelectorAll(".bean-button");

    if (output && buttons.length > 0) {
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const key = button.dataset.bean;

                if (Object.hasOwn(beanDetails, key)) {
                    output.innerHTML = `
                        <h3>Bean details</h3>
                        <p>${beanDetails[key]}</p>
                    `;

                    output.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }
            });
        });
    }
});

const interestCheck = document.querySelectorAll(".interests_active");

for (const item of interestCheck) {
    const inputBtn = item.closest("li").querySelector("input");

    inputBtn.addEventListener("change", () => {
        const input = item.querySelectorAll("input");
        for (const value of input) {
            if (inputBtn.checked === true) {
                value.checked = true;
            } else {
                value.checked = false;
            }
        }
    });
}


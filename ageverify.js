const OriginalMO = window.MutationObserver;

window.MutationObserver = function(callback) {
    return Object.create(OriginalMO.prototype, {
        observe: { value: () => console.log('\x1B[31mMutationObserver blocked.\x1B[0m') },
        disconnect: { value: () => {} }
    });
};

document.querySelector("ageverif-checker")?.remove();
setTimeout(() => {
  document.querySelector("ageverif-checker")?.remove();
  document.querySelector(".age-lock")?.remove();
  document.body.style.overflow = "auto";
}, 800);


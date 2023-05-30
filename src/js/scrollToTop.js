export class ScrollToTop {
  constructor(button) {
    this.button = button;
    this.displayOnScroll();
    this.scrollOnClick();
  }

  displayOnScroll() {
    let self = this;
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        self.button.style.display = "block";
      } else {
        self.button.style.display = "none";
      }
    });
  }

  scrollOnClick() {
    this.button.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}

export class Cookies {
  constructor(banner) {
    this.banner = banner;
    this.checkAcceptance();
    this.closeCookies();
  }
  checkAcceptance() {
    const self = this;
    this.banner.lastEle
    if (localStorage.getItem("cookiesAccepted") === null) {
      setTimeout(function () {
        self.banner.classList.remove("d-none");
      }, 5000);
    }
  }

  closeCookies() {
    const self = this;
    this.banner.lastElementChild.addEventListener("click", () => {
        self.banner.classList.add("d-none");
        localStorage.setItem("cookiesAccepted", true);
    })
    
  }
}

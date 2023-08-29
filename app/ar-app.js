/****** titleScript ******/

console.log("Hello 🌎");

const btn = document.querySelector("button");
if (btn) {
  btn.onclick = function () {
    btn.classList.toggle("dipped");
  };
}

let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};

const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

/***** mainScript *****/

const showInfo = () => {}
const showPortfolio = (done) => {
  const portfolio = document.querySelector("#portfolio-panel");
  const portfolio1 = document.querySelector("#portfolio-panel1");
  const btn_left = document.querySelector(".leftButton");
  const btn_right = document.querySelector(".rightButton");
  const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
  const krapi0 = document.querySelector("#portfolio-item0")
  const krapi1 = document.querySelector("#portfolio-item1")
  const krapi2 = document.querySelector("#portfolio-item2")

  let y = 0;
  let currentItem = 0;

  portfolio.setAttribute("visible", true);
  portfolio1.setAttribute("visible", true);

  const showPortfolioItem = (item) => {
    for (let i = 0; i <= 2; i++) {
      document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
    }
  }
  const id = setInterval(() => {
    y += 0;
    if (y >= 0) {
      clearInterval(id);
      btn_left.setAttribute("visible", true);
      btn_right.setAttribute("visible", true);
      btn_left.addEventListener('click', () => {
        currentItem = (currentItem + 1) % 3;
        showPortfolioItem(currentItem);
      });
      btn_right.addEventListener('click', () => {
        currentItem = (currentItem - 1 + 3) % 3;
        showPortfolioItem(currentItem);
      });
      krapi0.addEventListener("click", function (evt) {
      window.location.href="https://softmind.tech";
      })
      krapi1.addEventListener("click", function (evt) {
      window.location.href="https://softmind.tech";
      })
      krapi2.addEventListener("click", function (evt) {
      window.location.href="https://softmind.tech";
      })
      
      setTimeout(() => {
        done();
      }, 0);
    }
    portfolio.setAttribute("position", "0 " + y + " -0.01");
  }, 10);
}

const showAvatar = (onDone) => {
  const avatar = document.querySelector("#avatar");
  let z = -0.3;
  const id = setInterval(() => {
    z += 0.008;
    if (z >= 0.3) {
      clearInterval(id);
      onDone();
    }
    avatar.setAttribute("position", "0 -0.25 " + z);
  }, 10);
}

AFRAME.registerComponent('mytarget', {
  init: function () {
    this.el.addEventListener('targetFound', event => {
      console.log("target found");
      showAvatar(() => {
        setTimeout(() => {
          showPortfolio(() => {
            setTimeout(() => {
              showInfo();
            }, 300);
          });
        }, 300);
      });
    });
    this.el.addEventListener('targetLost', event => {
      console.log("target found");
    });
  }
});
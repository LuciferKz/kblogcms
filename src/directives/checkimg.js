export default {
  inserted: function (el) {
    let _img = document.createElement('img')
    _img.src = el.dataset.src
    _img.onload = function () {
      el.src = el.dataset.src
    }
  },
  update: function (el) {
    let _img = document.createElement('img')
    _img.src = el.dataset.src
    _img.onload = function () {
      el.src = el.dataset.src
    }
  }
}

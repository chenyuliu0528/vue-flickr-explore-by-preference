export const isScrollBarReachBottom = (ratio = 0) => {
  const vh =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  function getScrollXY () {
    let scrOfX = 0
    let scrOfY = 0
    if (typeof window.pageYOffset === 'number') {
      // Netscape compliant
      scrOfY = window.pageYOffset
      scrOfX = window.pageXOffset
    } else if (
      document.body &&
      (document.body.scrollLeft || document.body.scrollTop)
    ) {
    // DOM compliant
      scrOfY = document.body.scrollTop
      scrOfX = document.body.scrollLeft
    } else if (
      document.documentElement &&
      (document.documentElement.scrollLeft ||
      document.documentElement.scrollTop)
    ) {
      // IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop
      scrOfX = document.documentElement.scrollLeft
    }
    return [scrOfX, scrOfY]
  }

  function getDocHeight () {
    var D = document
    return Math.max(
      D.body.scrollHeight,
      D.documentElement.scrollHeight,
      D.body.offsetHeight,
      D.documentElement.offsetHeight,
      D.body.clientHeight,
      D.documentElement.clientHeight
    )
  }
  return getDocHeight() <= getScrollXY()[1] + window.innerHeight + vh * ratio
}

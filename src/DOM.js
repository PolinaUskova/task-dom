export function appendToBody(tag, content, count) {
  for (let i = 0; i < count; i += 1) {
    let el = document.createElement(tag);
    el.textContent = content;
    document.body.append(el);
  }
}
export function generateTree(childrenCount, level) {
  let res = document.createElement('div');
    res.classList.add('item_' + 1);

    let makeChildrens = function (div, lvl) {
        for (let i = 1; i <= childrenCount; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item_' + lvl);
            if (lvl < level) {
                makeChildrens(newDiv, lvl + 1);
            }
            div.append(newDiv);
        }
    };
    makeChildrens(res, 2);
    return res;
}

export function replaceNodes() {
  let res = document.createElement('div');
    res.classList.add('item_' + 1);

    let makeChildrens = function (div, lvl) {
        for (let i = 1; i <= 2; i++) {
            if (lvl === 2) {
              var newDiv = document.createElement('SECTION');
              newDiv.classList.add('item_' + lvl);
            } else {
              var newDiv = document.createElement('div');
              newDiv.classList.add('item_' + lvl);
            }
            if (lvl < 3) {
              makeChildrens(newDiv, lvl + 1);
            }
          div.append(newDiv);
        }
    };
    makeChildrens(res, 2);
  return res;
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function changeBackgroundColor3() {
  const colors = ['red', 'green', 'purple'];
  const changeBkgrdColor = (color) => new Promise((resolve) => document.body.style.backgroundColor = color);

  colors.forEach(async (color, index) => {
    await delay(5000 * index);
    await changeBkgrdColor(color);
  });
}

changeBackgroundColor3();
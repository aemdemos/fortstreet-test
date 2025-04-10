export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`aicolumns-i9q9cm-494745282-${cols.length}-cols`);

  // setup image aicolumns-i9q9cm-494745282
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('aicolumns-i9q9cm-494745282-img-col');
        }
      }
    });
  });
}

const instance = basicLightbox.create(
  `
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`,
  {
    closable: false,
  }
);
instance.show();
console.log(instance.visible());
instance.close();
console.log(instance.visible());
console.log(instance.element());
// console.log(instance.visible());

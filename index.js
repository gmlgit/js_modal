const fruits = [
  { id: 1, title: "Яблоки", price: 20, img: "http://urls" },
  { id: 2, title: "Яблоки", price: 20, img: "http://urls" },
  { id: 3, title: "Яблоки", price: 20, img: "http://urls" },
];

const modal = $.modal({
  title: "Vladilen Modal",
  closable: true,
  content: `
  <h4>Modal is working</h4>
  <p>Some text</p>
  `,
  width: "400px",
});
//myModal.open();

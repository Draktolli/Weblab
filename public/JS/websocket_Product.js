const socket = io("http://localhost:1234", {transports: ["websocket"]});

const message_product = document.getElementById('inp_title');
const messages_product = document.getElementById('products');


const handleSubmitNewMessageProduct = () => {
  socket.emit('messageProduct', { data: message_product.value })
}

socket.on('messageProduct', ({ data }) => {
  handleNewMessageProduct(data);
})

const handleNewMessageProduct = (message) => {
  messages_product.appendChild(buildNewMessageProduct(message));
}

const buildNewMessageProduct = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}


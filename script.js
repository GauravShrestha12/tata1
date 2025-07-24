async function getProduct() {
  try {
    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?limit=10&offset=2"
    );
    const response = await res.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
async function createProduct(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;

  const formData = {
    title: title,
    price: price,
    description: description,
    categoryId: 34,
    images: ["https://i.imgur.com/QkIaSt1.jpeg"],
  };

  console.log(formData);
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

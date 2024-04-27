body {
  margin: 0;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to left, #ff0000, #00ff00);
  overflow-y: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: auto;
}

.card {
  background-color: #f8f8f8;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  max-width: 400px;
  padding-right: 40px;
}

.card-title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.input-section {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 16px;
  color: #555;
}

input[type="text"],
input[type="number"] {
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

#results {
  font-weight: bold;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 90%;
  }
}

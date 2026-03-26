const app = require("./server");
const { sequelize } = require("./src/models");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    sequelize.sync()
    console.log(`Server is running on port ${PORT}`);
});
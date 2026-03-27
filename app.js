const app = require("./server");
const { verificarConexion, sequelize } = require("./config/db");

(async () => {
    await verificarConexion();

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, async () => {
        await sequelize.sync();
        console.log(`Server is running on port ${PORT}`);
    });
})();
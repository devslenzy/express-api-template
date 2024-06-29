module.exports = {
    baseUrl: "api",
    route: "example",
    method: "get",
    /**
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    run: async (req, res) => {
        res.send("Hello World");
    }
};
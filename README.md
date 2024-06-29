# Express API Template Project 🥳
## Download
You can download the packages required by the project to the project with your existing package manager!
```bash
npm install
pnpm install
yarn
```
## Setup
First, open the `.env` file to get the following information! 
```
PORT=5000
```

### Entering data
- **PORT**: Entered API port!

## A sample API object
```js
module.exports = {
    baseUrl: "api", // Base URL (required)
    route: "example", // Route (required)
    method: "get", // Method (required)
    /**
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    run: async (req, res) => {
        // ...
    }
};
```

## License
[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Authors and Acknowledgments
- Coded and designed by **[@devslenzy](https://discord.com/users/1070795507082985524)** and may not be shared anywhere without his permission!

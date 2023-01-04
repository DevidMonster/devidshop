//routes
import config from "../config";

//Pages
import Home from "../pages/Home";
import Item from "../pages/Item";


const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.item, component: Item },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

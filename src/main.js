import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// Icons
import "boxicons";

// Css
import "@/assets/main.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const app = createApp(App);

app.use(router);

app.mount("#app");

import About from "../pages/about";
import Resume from "../pages/resume/Resume";

export const routesPublic = [
    {path: '/', component: About, layout: ''},
    {path: '/resume', component: Resume, layout: ''},
]
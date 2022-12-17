import About from "../pages/about";
import Project from "../pages/project/Project";
import Resume from "../pages/resume/Resume";

export const routesPublic = [
    {path: '/', component: About, layout: ''},
    {path: '/resume', component: Resume, layout: ''},
    {path: '/project', component: Project, layout: ''},
]
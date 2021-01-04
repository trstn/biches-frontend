const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/tristan/Sites/biches/biches-frontend/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/tristan/Sites/biches/biches-frontend/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/tristan/Sites/biches/biches-frontend/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/tristan/Sites/biches/biches-frontend/src/pages/Index.vue")

export default [
  {
    path: "/project/vue-js-todo-list/",
    component: c1
  },
  {
    path: "/project/pepperoni-pizza/",
    component: c1
  },
  {
    path: "/project/hacker-news-redesign/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]

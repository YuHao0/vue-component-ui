import navConfig from './nav.config.json'

const loadComponent = function(path) {
  return r => require([`../pages${path}/index.vue`], r)
}

const registerRoute = (navConfig) => {
  let route = []
  navConfig.forEach((nav, index) => {
    if (nav.href) return
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      });
    } else {
      addRoute(nav)
    }
  })
  function addRoute(page) {
    const component = loadComponent(page.path);
    let child = {
      path: page.path,
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: page.title || page.name,
      component: component
    }
    route.push(child)
  }

  return route
}

let route = registerRoute(navConfig);
const defaultPath = '/button';

route = route.concat([{
  path: '',
  redirect: defaultPath
}, {
  path: '*',
  redirect: defaultPath
}]);

export default route;

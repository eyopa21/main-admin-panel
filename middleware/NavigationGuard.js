export default defineNuxtRouteMiddleware((to, from) => {
    //console.log("login", to)
    const cookie = useCookie('isLoggedIn')
    console.log(cookie.value)
    if ((to.fullPath === '/login' || to.fullPath === '/loginwithcode') && cookie.value) {
        console.log("login")
            //return abortNavigation()
        return navigateTo('/')
    } //else if (to.fullPath === '/' || !cookie.value || to.fullPath === '/content' && !cookie.value || to.fullPath === '/projects' && !cookie.value || to.fullPath === '/skills' && !cookie.value || to.fullPath === '/timeline' && !cookie.value || to.fullPath === '/settings' && !cookie.value || to.fullPath === '/settings/general' && !cookie.value) {
    if (((to.fullPath === '/') || (to.fullPath === '/content') || (to.fullPath === '/projects') || (to.fullPath === '/skills') || (to.fullPath === '/timeline') || (to.fullPath === '/settings') || (to.fullPath === '/setting/general')) && !cookie.value) {
        return navigateTo('/login')
            //return abortNavigation()
    }
})
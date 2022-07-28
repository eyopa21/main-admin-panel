export default defineNuxtRouteMiddleware((to, from) => {
    console.log("hello");
    return navigateTo("/");
});
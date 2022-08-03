<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
    
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { GET_USER } from './gql/user/getUser';
import { useQuery, useMutation } from "@vue/apollo-composable";

const cookie = useCookie('isLoggedIn')

console.log(cookie.value)
const router = useRouter();
const layoutState = useLayout();

const getIsLoggedIn = computed(() => {
  if(cookie.value == true){
    console.log("user logged in")
    //router.push('/')
  }
  else if(!cookie.value) {
    console.log("user not logged in");
    router.push('/login');
  }

})




const { loading, result, error } = useQuery(GET_USER);
watchEffect(() => {
  if (result.value) {
    console.log("result.value", result.value);
    layoutState.value.user = result.value.user[0];
    
  } else if (error.value) {
    console.log("error.value", error.value);
  }
});


</script>
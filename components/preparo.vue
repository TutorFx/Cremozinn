<template>
  <v-card elevation="0" outlined class="row rounded-xl my-10">
    <div class="pa-5" style="width: 100%">
      <h2 class="d-flex justify-center">
        <div class="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#FF5252"><defs><clipPath id="b"><rect width="24" height="24"></rect></clipPath></defs><g id="a" clip-path="url(#b)"><g transform="translate(2 4)"><g transform="translate(1.955)"><path d="M46.543,2.128a1.43,1.43,0,0,0,.163-.657,1.471,1.471,0,0,0-2.943,0,1.446,1.446,0,0,0,.163.657C40.411,2.307,37.2,3.205,37.2,4.771a.418.418,0,0,0,.42.42H52.849a.422.422,0,0,0,.42-.42C53.269,3.205,50.069,2.3,46.543,2.128ZM45.256.846a.62.62,0,1,1-.62.62A.621.621,0,0,1,45.256.846ZM38.34,4.367c.778-.7,3.311-1.44,6.915-1.44v.016c3.6,0,6.138.741,6.915,1.419H38.34Z" transform="translate(-37.2)"></path></g><g transform="translate(3.468 7.22)"><path d="M66.42,137.4a.422.422,0,0,0-.42.42v4.519a.42.42,0,1,0,.841,0V137.82A.418.418,0,0,0,66.42,137.4Z" transform="translate(-66 -137.4)"></path></g><g transform="translate(0 5.707)"><path d="M19.58,110.224H18.024v-1.2a.422.422,0,0,0-.42-.42H2.417a.422.422,0,0,0-.42.42v1.2H.42a.42.42,0,1,0,0,.841H2v6.206a2.377,2.377,0,0,0,2.585,2.522H15.476A2.345,2.345,0,0,0,18,117.271v-6.206H19.58a.42.42,0,1,0,0-.841Zm-2.4,7.047a1.508,1.508,0,0,1-1.682,1.682H4.572a1.56,1.56,0,0,1-1.745-1.682v-7.83H17.183Z" transform="translate(0 -108.6)"></path></g></g></g></svg>
        </div>
        Ingredientes
      </h2>
      <div>
        <ol>
          <li v-for="(item, i) in data" :key="i">
            <span
              ><p>
                {{ item }}
              </p></span
            >
          </li>
        </ol>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>
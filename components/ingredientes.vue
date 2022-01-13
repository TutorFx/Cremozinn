<template>
  <v-card elevation="0" outlined class="row rounded-xl my-10">
    <div  class="pa-3 pa-lg-16" style="width: 100%">
      <h2 class="d-flex justify-center">
        <div class="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FF5252"
          >
            <defs>
              <clipPath id="b"><rect width="24" height="24"></rect></clipPath>
            </defs>
            <g id="a" clip-path="url(#b)">
              <g transform="translate(2 2)">
                <path
                  d="M158.4,279.684a3.226,3.226,0,0,0,3.223,3.223h1.18a3.226,3.226,0,0,0,3.223-3.223V277H158.4Zm1.172-1.512h5.281v1.512a2.053,2.053,0,0,1-2.051,2.051h-1.18a2.056,2.056,0,0,1-2.051-2.051Z"
                  transform="translate(-152.212 -266.18)"
                ></path>
                <path
                  d="M204,216.2h4.063v1.172H204Z"
                  transform="translate(-196.031 -207.755)"
                ></path>
                <path
                  d="M19.145,15.555a.315.315,0,0,1-.316-.316V11.273A1.49,1.49,0,0,0,17.34,9.785H16.5v-1.9L14.668,4.875V0h-3.7V2.313a.969.969,0,1,1-1.937,0V0H5.34V4.875L3.5,7.883v1.9H2.66a1.49,1.49,0,0,0-1.488,1.488v3.965a.315.315,0,0,1-.316.316H0v1.172H.855a1.49,1.49,0,0,0,1.488-1.488V11.273a.315.315,0,0,1,.316-.316H3.5V20H16.5V10.957h.836a.315.315,0,0,1,.316.316v3.965a1.49,1.49,0,0,0,1.488,1.488H20V15.555Zm-3.812,3.273H4.668V8.211L6.5,5.2V1.172H7.855V2.313a2.141,2.141,0,1,0,4.281,0V1.172h1.352V5.2l1.836,3.008V18.828Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        Ingredientes
      </h2>
      <div class="instructions e-instructions" itemprop="recipeInstructions">
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
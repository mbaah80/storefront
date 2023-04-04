import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "C:/Users/user-pc/Downloads/themeforest-18l4RoFD-multikart-responsive-vuejs-ecommerce-template/multikart-responsive-vuejs-ecommerce-template/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
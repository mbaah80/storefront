import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "C:/Users/user-pc/Downloads/themeforest-18l4RoFD-multikart-responsive-vuejs-ecommerce-template/multikart-responsive-vuejs-ecommerce-template/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
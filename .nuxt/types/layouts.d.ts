import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "C:/Users/user-pc/Desktop/projects/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
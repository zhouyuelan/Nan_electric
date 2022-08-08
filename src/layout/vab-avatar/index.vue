<template>
  <div class="vab-avatar">
    <span class="ant-dropdown-link">
      <a-avatar :src="avatar" />
      {{ username }}
    </span>
  </div>
</template>

<script>
  import { recordRoute } from '@/config'

  import { useStore } from 'vuex'
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  export default {
    name: 'VabAvatar',
    components: {},
    setup() {
      const store = useStore()
      const router = useRouter()
      const route = useRoute()

      const logout = async () => {
        await store.dispatch('user/logout')
        if (recordRoute) {
          const fullPath = route.fullPath
          router.push(`/login?redirect=${fullPath}`)
        } else {
          router.push('/login')
        }
      }

      const buy = () => {
        window.open('http://vue-admin-beautiful.com/authorization/')
      }

      return {
        avatar: computed(() => store.getters['user/avatar']),
        username: computed(() => store.getters['user/username']),
        logout,
        buy,
      }
    },
  }
</script>
<style lang="less">
  .vab-avatar {
    .ant-dropdown-link {
      display: block;
      min-height: 64px;
      cursor: pointer;
    }
  }
</style>

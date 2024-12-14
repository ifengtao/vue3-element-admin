<template>
  <div class="flex">
    <template v-if="!isMobile">
      <!--全屏 -->
      <div class="nav-action-item" @click="toggle">
        <svg-icon :icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
      </div>
      <!-- 主题 -->
      <div class="nav-action-item">
        <el-switch v-model="isDark" active-icon="Moon" inactive-icon="Sunny" @change="changeTheme" />
      </div>
      <!-- 消息通知 -->
      <el-dropdown class="message nav-action-item" trigger="click">
        <el-badge is-dot>
          <div class="message-icon">
            <i-ep-bell />
          </div>
        </el-badge>
        <template #dropdown>
          <div class="natice-dropdown">
            <el-tabs v-model="activeTab">
              <el-tab-pane v-for="(label, key) in { MESSAGE: '消息', NATICE: '通知', TODO: '待办' }" :label="label"
                :name="key" :key="key">
                <div class="message-item" v-for="message in getFilteredMessages(key)" :key="message.id">
                  <el-link type="primary">
                    <el-text class="message-text" size="default" truncated>
                      {{ message.title }}
                    </el-text>
                  </el-link>
                </div>
              </el-tab-pane>
            </el-tabs>
            <el-divider />
            <div class="flex-x-between">
              <el-link type="primary" :underline="false">
                <span class="text-xs">查看更多</span>
                <el-icon class="text-xs">
                  <ArrowRight />
                </el-icon>
              </el-link>
              <el-link type="primary" :underline="false">
                <span class="text-xs">全部已读</span>
              </el-link>
            </div>
          </div>
        </template>
      </el-dropdown>
    </template>

    <!-- 用户头像 -->
    <el-dropdown class="nav-action-item" trigger="click">
      <div class="userinfo">
        <img :src="adminStore?.user?.avatar || appStore.defaultAvatar" class="avatar" />
        <span>{{ adminStore?.user?.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <a target="_blank" href="#">
            <el-dropdown-item>项目地址</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click="logout">
            注销登出
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import {
  useAppStore,
  useAdminStore,
} from "@/store";

const appStore = useAppStore();
const adminStore = useAdminStore();

const route = useRoute();
const router = useRouter();

const isMobile = computed(() => appStore.device === "mobile");

const { isFullscreen, toggle } = useFullscreen();

const activeTab = ref("MESSAGE");

const messages = ref([
  {
    id: 1,
    title: "系统升级通知：服务器将于今晚12点进行升级维护，请提前保存工作内容。",
    type: "MESSAGE",
  },
  {
    id: 2,
    title: "新功能发布：我们的应用程序现在支持多语言功能。",
    type: "MESSAGE",
  },
  {
    id: 3,
    title: "重要提醒：请定期更改您的密码以保证账户安全。",
    type: "MESSAGE",
  },
  {
    id: 4,
    title: "通知：您有一条未读的系统消息，请及时查看。",
    type: "NOTICE",
  },
  {
    id: 5,
    title: "新订单通知：您有一笔新的订单需要处理。",
    type: "NOTICE",
  },
  {
    id: 6,
    title: "审核提醒：您的审核请求已被批准。",
    type: "NOTICE",
  },
  { id: 7, title: "待办事项：完成用户权限设置。", type: "TODO" },
  { id: 8, title: "待办事项：更新产品列表。", type: "TODO" },
  { id: 9, title: "待办事项：备份数据库。", type: "TODO" },
]);

const getFilteredMessages = (type) => {
  return messages.value.filter((message) => message.type === type);
};

/* 注销 */
function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
    lockScroll: false,
  }).then(() => {
    userStore
      .logout()
      .then(() => {
        tagsViewStore.delAllViews();
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`);
      });
  });
}
const isDark = ref(appStore.theme === "dark");
const changeTheme = (val) => {
  isDark.value = val;
  appStore.changeTheme(isDark.value ? "dark" : "light");
};
</script>
<style lang="scss" scoped>
.message-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
}

.natice-dropdown {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.nav-action-item {
  display: inline-block;
  min-width: 40px;
  height: $navbar-height;
  line-height: $navbar-height;
  color: var(--el-text-color);
  text-align: center;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }
}

.userinfo {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;

  .avatar {
    display: inline-block;
    border-radius: 9999px;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
}

.message-item {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 380px;
}

.message-text {
  width: 350px;
}

.flex-x-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep(.message .el-badge__content.is-fixed.is-dot) {
  top: 5px;
  right: 10px;
}

:deep(.el-divider--horizontal) {
  margin: 10px 0;
}

.dark .nav-action-item:hover {
  background: rgb(255 255 255 / 20%);
}

.layout-top .nav-action-item,
.layout-mix .nav-action-item {
  color: #fff;
}
</style>

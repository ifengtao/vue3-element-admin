import { defineStore } from "pinia";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import avatarMale from "@/assets/images/avatar_male.webp";
import avatarFemale from "@/assets/images/avatar_female.webp";
import { generateThemeColors, applyTheme, toggleDarkMode } from "@/utils/theme";
import { reactive } from "vue";
export const useAppStore = defineStore('app', () => {
    // 标题
    const title = "Vue 3 Element Admin";
    // 语言
    const locale = zhCn;
    // 配置
    const theme = ref("light");
    const themeColor = ref("#409EFF");
    // 布局
    const layout = "left"; // left: 左侧导航
    // 头像
    const defaultAvatar = avatarMale;
    // 水印
    const waterMark = {
        enable: false,
        content: "vue3-element-admin",
        fontSize: 20,
        width: 200,
        height: 200,
        rotate: 30,
        zIndex: 9999,
        font: {
            fontFamily: "Microsoft Yahei",
            fontWeight: "bold",
            color: theme === 'dark' ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)'
        }
    }

    // 侧边栏状态
    const sidebarStatus = ref("opened"); // closed: 关闭, opened: 打开
    const sidebar = reactive({
        opened: sidebarStatus.value === "opened",
        withoutAnimation: false
    });
    const sidebarLogo = ref(true);
    function toggleSidebar() {
        sidebar.opened = !sidebar.opened;
        sidebarStatus.value = sidebar.opened
            ? "closed"
            : "opened";
    }

    // 页签视图
    const tagsView = true;
    const visitedViews = ref([]);
    function addVisitedView(view) {
        // 如果已经存在于已访问的视图列表中，则不再添加
        if (visitedViews.value.some((v) => v.path === view.path)) {
            return;
        }
        // 如果视图是固定的（affix），则在已访问的视图列表的开头添加
        if (view.affix) {
            visitedViews.value.unshift(view);
        } else {
            // 如果视图不是固定的，则在已访问的视图列表的末尾添加
            visitedViews.value.push(view);
        }
    }
    // 缓存视图列表
    const cachedViews = ref([]);
    // 添加缓存视图到缓存视图列表中
    function addCachedView(view) {
        const viewName = view.name;
        // 如果缓存视图名称已经存在于缓存视图列表中，则不再添加
        if (cachedViews.value.includes(viewName)) {
            return;
        }

        // 如果视图需要缓存（keepAlive），则将其路由名称添加到缓存视图列表中
        if (view.keepAlive) {
            cachedViews.value.push(viewName);
        }
    }

    // 监听主题变化
    watch(
        [theme, themeColor],
        ([newTheme, newThemeColor]) => {
            toggleDarkMode(newTheme === 'dark');
            const colors = generateThemeColors(newThemeColor);
            applyTheme(colors);
        },
        { immediate: true }
    );
    function changeTheme(val) {
        theme.value = val;
    }

    return {
        title,
        locale,
        waterMark,
        tagsView,
        cachedViews,
        addCachedView,
        sidebar,
        sidebarLogo,
        sidebarStatus,
        toggleSidebar,
        visitedViews,
        addVisitedView,
        layout,
        defaultAvatar,
        changeTheme
    }
});
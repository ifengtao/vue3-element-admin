export default [{
    path: "/book",
    component: "Layout",
    name: "book",
    meta: {
        title: "图书管理",
        icon: "Notebook",
        hidden: false,
        alwaysShow: false,
        params: null,
    },
    children: [
        {
            path: "/book",
            component: "book/index",
            name: "BookIndex",
            meta: {
                title: "图书管理",
                icon: "el-icon-Notebook",
                hidden: false,
                alwaysShow: false,
                params: null,
            },
        },
    ],
},
{
    path: "/author",
    component: "Layout",
    name: "author",
    meta: {
        title: "作者管理",
        icon: "el-icon-User",
        hidden: false,
        alwaysShow: false,
        params: null,
    },
    children: [
        {
            path: "/author",
            component: "author/index",
            name: "AuthorIndex",
            meta: {
                title: "作者管理",
                icon: "",
                hidden: false,
                alwaysShow: true,
                params: null,
            },
        },
    ],
},
{
    path: "/publish",
    component: "Layout",
    name: "publish",
    meta: {
        title: "出版社",
        icon: "el-icon-reading",
        hidden: false,
        alwaysShow: false,
        params: null,
    },
    children: [
        {
            path: "/publish",
            component: "publish/index",
            name: "PublishIndex",
            meta: {
                title: "出版社管理",
                icon: "",
                hidden: false,
                alwaysShow: true,
                params: null,
            },
        },
    ],
},

{
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
        title: "系统设置",
        icon: "system",
        hidden: false,
        alwaysShow: false,
        params: null,
    },
    children: [
        {
            path: "user",
            component: "system/user/index",
            name: "SystemUser",
            meta: {
                title: "用户管理",
                icon: "el-icon-User",
                hidden: false,
                alwaysShow: false,
                params: null,
            },
        },
        {
            path: "role",
            component: "system/role/index",
            name: "SystemRole",
            meta: {
                title: "角色管理",
                icon: "role",
                hidden: false,
                alwaysShow: false,
                params: null,
            },
        },
        {
            path: "menu",
            component: "system/menu/index",
            name: "SystemMenu",
            meta: {
                title: "菜单管理",
                icon: "menu",
                hidden: false,
                alwaysShow: false,
                params: null,
            },
        },
    ],
}]
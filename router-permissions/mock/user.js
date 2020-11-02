export default [

    {
        url: '/user/getRouter',
        type: 'post',
        response: type => {
            if (type.body.type === 'admin') {
                return {
                    code: 20000,
                    data: {
                        router: [
                            {
                                id: 1,
                                name: 'Nested',
                                code: null,
                                description: null,
                                url: '/nested',
                                component: 'layout',
                                generatemenu: 1,
                                sort: 0,
                                parentId: null,
                                permName: null,
                                redirect: '/nested/menu1',
                                title: '管理员路由',
                                icon: 'nested',
                                children: [
                                    {
                                        id: 2,
                                        name: 'Menu1',
                                        code: null,
                                        description: null,
                                        url: 'menu1',
                                        component: 'nested/menu1',
                                        generatemenu: 1,
                                        sort: 0,
                                        parentId: 1,
                                        permName: null,
                                        redirect: '',
                                        title: 'Menu1',
                                        icon: 'menu1',
                                        children: [
                                            {
                                                id: 4,
                                                name: 'Menu1-1',
                                                code: null,
                                                description: null,
                                                url: 'menu1-1',
                                                component: 'nested/menu1/menu1-1',
                                                generatemenu: 1,
                                                sort: 0,
                                                parentId: 2,
                                                permName: null,
                                                redirect: '',
                                                title: 'Menu1-1',
                                                icon: '',
                                                children: null
                                            },
                                            {
                                                id: 5,
                                                name: 'Menu1-2',
                                                code: null,
                                                description: null,
                                                url: 'menu1-2',
                                                component: 'nested/menu1/menu1-2',
                                                generatemenu: 1,
                                                sort: 0,
                                                parentId: 2,
                                                permName: null,
                                                redirect: '',
                                                title: 'Menu1-2',
                                                icon: '',
                                                children: null
                                            }
                                        ]
                                    },
                                    {
                                        id: 3,
                                        name: 'Menu2',
                                        code: null,
                                        description: null,
                                        url: 'menu2',
                                        component: 'nested/menu2',
                                        generatemenu: 1,
                                        sort: 0,
                                        parentId: 1,
                                        permName: null,
                                        redirect: '',
                                        title: 'Menu2',
                                        icon: 'menu2',
                                        children: null
                                    }
                                ]
                            }
                        ],
                        permit: ['add', 'delete', 'edit', 'view']
                    }
                }
            } else if (type.body.type === 'user') {
                return {
                    code: 20000,
                    data: {
                        router: [
                            {
                                id: 1,
                                name: 'Example',
                                code: null,
                                description: null,
                                url: '/example',
                                component: 'layout',
                                generatemenu: 1,
                                sort: 0,
                                parentId: null,
                                permName: null,
                                redirect: '/example/table',
                                title: '普通用户',
                                icon: 'example',
                                children: [
                                    {
                                        id: 2,
                                        name: 'Table',
                                        code: null,
                                        description: null,
                                        url: 'table',
                                        component: 'table',
                                        generatemenu: 1,
                                        sort: 0,
                                        parentId: 1,
                                        permName: null,
                                        redirect: '',
                                        title: 'Table',
                                        icon: 'table',
                                        children: null
                                    },
                                    {
                                        id: 3,
                                        name: 'Tree',
                                        code: null,
                                        description: null,
                                        url: 'tree',
                                        component: 'tree',
                                        generatemenu: 1,
                                        sort: 0,
                                        parentId: 1,
                                        permName: null,
                                        redirect: '',
                                        title: 'Tree',
                                        icon: 'tree',
                                        children: null
                                    }
                                ]
                            }
                        ],
                        permit: ['edit', 'view']
                    }
                }
            }
        }
    },
]

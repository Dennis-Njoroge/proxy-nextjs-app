export const APP_NAME = "Admin Portal";
export const AUTH_TOKEN_KEY = 'accessToken';
export const AUTH_REFRESH_TOKEN_KEY = 'refreshToken';
export const PAGE_NAMES = {
    DASHBOARD: { name: 'Dashboard', route: '/dashboard' },
    PHONE_INSURANCE: { name: 'Phone Insurance', route: '/dashboard/phone-insurance' },
    CLAIMS: { name: 'Claims', route: '/dashboard/phone-insurance/claims' },
    ENROLLED_CUSTOMERS: { name: 'Enrolled Customers', route: '/dashboard/phone-insurance/device-customers' },
    ENROLLED_DEVICES: { name: 'Enrolled Devices', route: '/dashboard/phone-insurance/enrolled-devices' },
    MANAGE_SHOPS_STORES: { name: 'Manage Shops/Stores', route: '/dashboard/phone-insurance/manage-stores' },
    AKIBA_PLUS: { name: 'Akiba Plus Dashboard', route: '/dashboard/akiba-plus' },
    TRANSFERS: { name: 'Transfers', route: '/dashboard/akiba-plus/transfers' },
    CONTRIBUTIONS: { name: 'Contributions', route: '/dashboard/akiba-plus/contributions' },
    DIGITAL_STORE: { name: 'Digital Store', route: '/dashboard/digital-store' },
    APPLICATIONS: { name: 'Applications', route: '/dashboard/digital-store/applications' },
    CUSTOMERS: { name: 'Customers', route: '/dashboard/digital-store/customers' },
    GROUPS: { name: 'Groups', route: '/dashboard/digital-store/groups' },
    USER_MANAGEMENT: { name: 'User Management', route: '/dashboard/user-management' },
    SYSTEM_USERS: { name: 'System Users', route: '/dashboard/user-management/users' },
    SYSTEM_ROLES: { name: 'System Roles', route: '/dashboard/user-management/roles' }
};
export const userMenus = [
    {
        pageName: PAGE_NAMES.DASHBOARD.name,
        route: "/",
        enabled: true,
        pageIcon: "home"
    },
    // {
    //     pageName: PAGE_NAMES.PHONE_INSURANCE.name,
    //     route: "/dashboard/phone-insurance",
    //     enabled: true,
    //     pageIcon: "phonelink_setup",
    //     child: [
    //         {
    //             pageName: PAGE_NAMES.CLAIMS.name,
    //             route: "/dashboard/phone-insurance/claims",
    //             enabled: true,
    //             pageIcon: "list",
    //         },
    //         {
    //             pageName: PAGE_NAMES.ENROLLED_CUSTOMERS.name,
    //             route: "/dashboard/phone-insurance/device-customers",
    //             enabled: true,
    //             pageIcon: "people",
    //         },
    //         {
    //             pageName: PAGE_NAMES.ENROLLED_DEVICES.name,
    //             route: "/dashboard/phone-insurance/enrolled-devices",
    //             enabled: true,
    //             pageIcon: "security_update_good",
    //         },
    //         {
    //             pageName: PAGE_NAMES.MANAGE_SHOPS_STORES.name,
    //             route: "/dashboard/phone-insurance/manage-stores",
    //             enabled: true,
    //             pageIcon: "store",
    //         }
    //     ]
    // },
    // {
    //     pageName: PAGE_NAMES.AKIBA_PLUS.name,
    //     route: "/dashboard/akiba-plus",
    //     enabled: true,
    //     pageIcon: "credit_card_heart",
    //     child: [
    //         {
    //             pageName: PAGE_NAMES.DASHBOARD.name,
    //             route: "/dashboard/akiba-plus",
    //             enabled: true,
    //             pageIcon: "credit_card_heart",
    //         },
    //         {
    //             pageName: PAGE_NAMES.TRANSFERS.name,
    //             route: "/dashboard/akiba-plus/transfers",
    //             enabled: true,
    //             pageIcon: "currency_exchange",
    //         },
    //         {
    //             pageName: PAGE_NAMES.CONTRIBUTIONS.name,
    //             route: "/dashboard/akiba-plus/contributions",
    //             enabled: true,
    //             pageIcon: "currency_exchange",
    //         }
    //     ]
    // },
    // {
    //     pageName: PAGE_NAMES.DIGITAL_STORE.name,
    //     route: "/dashboard/digital-store",
    //     enabled: true,
    //     pageIcon: "store",
    //     child: [
    //         {
    //             pageName: PAGE_NAMES.APPLICATIONS.name,
    //             route: "/dashboard/digital-store/applications",
    //             enabled: true,
    //             pageIcon: "home",
    //         },
    //         {
    //             pageName: PAGE_NAMES.CUSTOMERS.name,
    //             route: "/dashboard/digital-store/customers",
    //             enabled: true,
    //             pageIcon: "currency_exchange",
    //         },
    //         {
    //             pageName: PAGE_NAMES.GROUPS.name,
    //             route: "/dashboard/digital-store/groups",
    //             enabled: true,
    //             pageIcon: "groups"
    //         }
    //     ]
    // },
    {
        pageName: PAGE_NAMES.USER_MANAGEMENT.name,
        route: "/dashboard/user-management",
        enabled: true,
        pageIcon: "people",
        child: [
            {
                pageName: PAGE_NAMES.SYSTEM_USERS.name,
                route: "/dashboard/user-management/users",
                enabled: true,
                pageIcon: "manage_accounts",
            },
            {
                pageName: PAGE_NAMES.SYSTEM_ROLES.name,
                route: "/dashboard/user-management/roles",
                enabled: true,
                pageIcon: "engineering",
            }
        ]
    }
];
export const PERMISSIONS = {
    VIEW: 'View',
    CREATE: 'Create',
    UPDATE: 'Update',
    DELETE: 'Delete',
    APPROVED: 'Approve'
}
export const ROLES_PERMISSIONS = [
    PERMISSIONS.VIEW,
    PERMISSIONS.CREATE,
    PERMISSIONS.UPDATE,
    PERMISSIONS.DELETE,
    PERMISSIONS.APPROVED
];
export const INACTIVITY_TIMEOUT = Boolean(process.env.NEXT_PUBLIC_INACTIVITY_TIMEOUT)
    ? parseInt(process.env.NEXT_PUBLIC_INACTIVITY_TIMEOUT) : 300000;

export const PAGE_SIZE = 250;

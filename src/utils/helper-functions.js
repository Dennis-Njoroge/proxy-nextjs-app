//removes tags from string
import moment from "dayjs";
import CurrencyFormat from "react-currency-format";

const formatMenuArray = (menus) => {
    const flatArray = [];
    menus.forEach((element) => {
        flatArray.push(element);
        if (Array.isArray(element.child)) {
            flatArray.push(...formatMenuArray(element.child));
        }
    });
    return flatArray;
}

export const formatPermissions = (permissions) => {
    if (!permissions){
        return [];
    }
    return  permissions; //eval(permissions).map(str => parseInt(str, 10))
}

export const formatMenus = (menuList) => {
    return menuList.map(menuItem => {
        if (menuItem.child && menuItem.child.length > 0) {
            menuItem.child = menuItem.child.map(childItem => {
                return {
                    ...childItem,
                    mainMenuId: menuItem.id
                };
            });
        }
        return menuItem;
    });
};


export const checkPermission = (menus, permission, path, page = false) => {
    let newMenus = formatMenuArray(menus);
    const activeMenu = newMenus.find(menu => menu.route === path);
    if (page){
        return activeMenu !== undefined;
    }
    if (activeMenu){
        const formattedPerms = formatPermissions(activeMenu.permissions);
        return formattedPerms.includes(permission);
    }
    return false;
}


export const sanitizeString = string => {
    if(string){
        return string?.toString().replace(/(<([^>]+)>)/gi, '')
    }
}

export const getInitials = (name = '', join = '. ' ) => name
    ?.replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join(join);

export const formatDate = (date, format = 'DD MMM YYYY') => {
    if(date){
        return moment(date).format(format);
    }
    return null;
}

export const toSentenceCase = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (match) {
        return match.toUpperCase();
    });
}

export const getYearsRange = (startYear = 1990) => {
    // Get current year
    const currentYear = moment().year();

  // Create an array of years from 1990 to current year
    const yearsRange = [];
    for (let year = startYear; year <= currentYear; year++) {
        yearsRange.push(year);
    }
   return yearsRange
}

export const getYear = (date) =>{
    if (date){
        return moment(date).year()
    }
}

export const getMonth = (date) =>{
    if (date){
        return moment(date).month()
    }
}

export const formatCurrency = (amount, currency = 'Kes') => {
    if (!amount){
        amount = 0;
    }
    return (
        <CurrencyFormat
            displayType={'text'}
            value={amount}
            decimalScale={2}
            thousandSeparator={true}
            prefix={currency+' '}
        />
    )
}

export const getGreetings = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Night";
    }
}

export const applyFilters = (data, query, fields = []) => {
    if (!Boolean(query)) {
        return data;
    }

    const normalizedQuery = query.trim().toLowerCase();

    return data.filter((datum) => {
        return fields.some(field => {
            const normalizedFieldValue = datum?.[field]?.toLowerCase();
            return normalizedFieldValue?.includes(normalizedQuery);
        });
    });
};

export const getAutoCompleteValue = (options, value, filterField = 'id') => {
    return Array.isArray(options) ? options.find(option => option[filterField] === value) ?? null : null;
};
export const getAutocompleteMultipleValues = (values, options, field = 'id') => {
    let data = [];
    if (values){
        values.map(val => {
            const obj = options.find(opt => opt[field] === val);
            if (obj){
                data.push(obj);
            }
            return val;
        })
    }
    return data;
}
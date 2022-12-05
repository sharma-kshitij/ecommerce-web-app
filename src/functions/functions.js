// -----------------STRING CASE FUNCTIONS------------------

export function camelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/^(.)/, function (b) {
            return b.toUpperCase();
        });
}

export function reverseCamelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toLowerCase();
        })
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}

// ----------------STRING TRUNCATE FUNCTION------------------

export function stringTruncate(str, size) {
    return (
        "" + 
        str.substring(0,size ) + 
        (str.length<=size ? "" : "...")
        );
}


// ----------------CATEGORY FILTER FUNCTION------------------

export function filterList(
    initialList, 
    itemList, 
    categories) {
    
    const newItems= [];


    if (categories.length === 1) {
        return initialList;
    } 
    else {
        initialList.forEach(listItem => {
            for (let i = 0; i < categories.length; i++) {
                if(listItem.category === categories[i])
                    newItems.push(listItem);
            }
        });
    return newItems;
    }   
}

// ----------------REMOVE ONCE FROM ARRAY-----------------

export function removeItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        if(arr.length === 1)
            arr.splice(index,1,"none");
        else
            arr.splice(index, 1);
        return arr;
    }
    else if ( arr.length === 1 ){
        return ["none"];
    }
    
    return ["none"];
}
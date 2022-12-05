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

// ! TODO: MODIFY OPERATIONS SUCH THAT BOTH CAN BE APPLIED SIMULTANIOUSLY

export function filterListByCategory(
    initialList, 
    itemListState,
    categories) {
    
    let newItems= [];

    if (categories.length === 1) {
        newItems = [...initialList];
    } 
    else {
        initialList.forEach(listItem => {
            for (let i = 0; i < categories.length; i++) {
                if(listItem.category === categories[i])
                    newItems.push(listItem);
            }
        });
    }

    // if (itemListState.rating > 1) {
    //     newItems = [...intersectArray(newItems, itemListState.itemList)];
    // }

    return newItems;
}

// ----------------RATING FILTER FUNCTION------------------

export function filterListByRating(
    initialList, 
    itemListState, 
    rating) {
    
    let newItems= [];
    
    initialList.forEach(listItem => {
        if(listItem.rating.rate >= rating)
            newItems.push(listItem);
    });

    // if(itemListState.category.length > 1) {
    //     newItems = [...intersectArray(newItems, itemListState.itemList)];
    // }

    return newItems;
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
    else {
        return ["none"];
    }
}

// ---------------INTERSECTION OF ARRAYS----------------

export function intersectArray(array1, array2) {
    
    const intersectedArray = array1.filter(value => array2.includes(value));
    return intersectedArray;

}

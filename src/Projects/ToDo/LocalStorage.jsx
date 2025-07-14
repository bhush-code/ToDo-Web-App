const key="todoList";

export const setLocalStorage = (value) => {



    console.log("Setting localStorage for key:", key, "with value:", value);

    const setItem=localStorage.setItem(key, JSON.stringify(value));
    // return setItem;
}

export const getLocalStorage = () => {
    const getItem = localStorage.getItem(key);
    console.log("getItem", getItem);
   if(getItem)
   {
       return JSON.parse(getItem);
   }
    return [];
}    
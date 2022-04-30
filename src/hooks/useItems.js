import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("items.json")
            .then(res => res.json())
            .then(result => setItems(result));
    }, []);

    return [items, setItems];
}

export default useItems;
import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://rocky-caverns-30170.herokuapp.com/item")
            .then(res => res.json())
            .then(result => setItems(result));
    }, []);

    return [items, setItems];
}

export default useItems;
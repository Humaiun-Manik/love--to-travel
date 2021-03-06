import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useOrder = () => {

    const { user } = useFirebase();
    const { uid } = user;
    const [selectedTour, setSelectedTour] = useState([]);

    useEffect(() => {
        fetch(`https://morning-retreat-19009.herokuapp.com/orders/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedTour(data);
                };
            });
    }, [uid]);

    const addToMyOrder = (tour) => {
        const isHave = selectedTour.find((selected) => selected._id === tour._id);

        delete tour._id;
        tour.uid = uid;
        tour.status = 'pending';

        if (isHave) {
            alert('Tour has been selected');
        } else {
            fetch('https://morning-retreat-19009.herokuapp.com/tour/add', {
                method: 'post',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(tour)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedTour, tour];
                        setSelectedTour(newSelection);
                    };
                });
        };
    };

    const remove = (id) => {

        const confirmation = window.confirm('Are you sure to delete!!')
        if (confirmation) {
            fetch(`https://morning-retreat-19009.herokuapp.com/delete/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const selectAfterRemove = selectedTour.filter(tour => tour._id !== id);
                        setSelectedTour(selectAfterRemove);
                    } else {
                        alert('Something went wrong!');
                    };
                });
        }
    };

    return { addToMyOrder, selectedTour, setSelectedTour, remove };
};

export default useOrder;
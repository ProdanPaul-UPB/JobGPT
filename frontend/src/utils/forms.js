export const handleInputForm = (event, setState) => {
    const {name, value} = event.target;
    setState(prevState => ({
            ...prevState, [name]: value
        }));
};

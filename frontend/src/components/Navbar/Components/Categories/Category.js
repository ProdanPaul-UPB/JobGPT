import "./Category.scss";

import {useNavigate} from "react-router-dom";
const Category = ({ name, path }) => {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => {navigate(`/careers/${path}`)}} className={"category"}>{name}</button>
        </>
    );
}

export default Category;
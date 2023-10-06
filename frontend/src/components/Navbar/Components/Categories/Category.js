import "./Category.scss";
const Category = ({ name }) => {
    return (
        <>
            <button className={"category"}>{name}</button>
        </>
    );
}

export default Category;
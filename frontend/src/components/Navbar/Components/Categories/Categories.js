import Category from "./Category";
import "./Categories.scss";

const Categories = () => {
    return (
        <div className="categories">
            <Category name={"Grafică & Design"} />
            <Category name={"Programare & Tech"} />
            <Category name={"Digital marketing"} />
            <Category name={"Video & Animaţie"} />
            <Category name={"Scrieri & Traduceri"} />
            <Category name={"Muzică & Audio"} />
            <Category name={"Business"} />
            <Category name={"Fotografie"} />
        </div>
    )
}

export default Categories;
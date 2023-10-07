import Category from "./Category";
import "./Categories.scss";

const Categories = () => {
    return (
        <div className="categories">
            <Category name={"Grafică & Design"} />
            <Category name={"Programare & Tech"} />
            <Category name={"Digital marketing & Business"} />
            <Category name={"Video & Fotografie"} />
            <Category name={"Medicină / Big Pharma"} />
            <Category name={"Muzică & Audio"} />
        </div>
    )
}

export default Categories;
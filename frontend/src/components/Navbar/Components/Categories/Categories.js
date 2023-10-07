import Category from "./Category";
import "./Categories.scss";

const Categories = () => {

    return (
        <div className="categories">
            <Category name={"Grafică & Design"} path={"design"} />
            <Category name={"Programare & Tech"} path={"tech"} />
            <Category name={"Digital marketing & Business"} path={"business"} />
            <Category name={"Video & Fotografie"} path={"videophoto"} />
            <Category name={"Medicină / Big Pharma"} path={"med"} />
            <Category name={"Muzică & Audio"} path={"audio"} />
        </div>
    )
}

export default Categories;
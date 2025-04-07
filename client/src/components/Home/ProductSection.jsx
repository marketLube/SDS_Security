import { PrimaryButton } from "../ui/Button";
import { productList } from "../../data/productList";
import { ProductCarousel } from "../ui/Carousel";

export const ProductSection = () => {
    return (
        <section>
            <div className="bg-accent-background rounded-2xl flex flex-col md:flex-row  items-center justify-between gap-8 md:gap-24  px-5 py-16 md:px-10 overflow-hidden">
                <div className="w-full md:w-5/12 ">
                    <h2 className="text-accent-foreground font-medium leading-tight  mb-3">
                        Innovative Protection <span className="tracking-tight"> Explore What’s New!</span>
                    </h2>
                    <p className="mb-10 opacity-60 w-10/12 tracking-wide">
                        Discover our latest security products, from CCTV cameras to smart access systems, designed for reliable protection
                        and peace of mind.
                    </p>
                    <PrimaryButton>View All Products</PrimaryButton>
                </div>
                <div className="w-full md:w-7/12 relative ">
                    <ProductCarousel productList={productList} />
                </div>
            </div>
        </section>
    );
};

import ProductCard from "@/components/ProductCard";
// import { Product } from "@/types";

// interface ProductListProps {
//   items: Product[];
// }

const ProductList: React.FC<any> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {items.map(() => (
          <ProductCard key={item.id} data={item} />
        ))} */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
              
      </div>
    </div>
  );
};

export default ProductList;
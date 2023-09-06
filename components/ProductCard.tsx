import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

// import { Product } from "@/types";

// interface ProductCard {
//   data: Product;
// }

const ProductCard: React.FC<any> = ({ data }) => {
  return (
      <Link href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg">
        <Card className="rounded-lg border-2">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <Image
                src={`/img/cat${Math.ceil(Math.random()*4)}.jpg`}
                alt=""
                fill
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">test name</p>
              <p className="text-sm text-primary/80">test category</p>
            </div>
            <div className="flex items-center justify-between">test price</div>
          </CardFooter>
        </Card>
      </Link>
  );
};

export default ProductCard;
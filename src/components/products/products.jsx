import { SubHeader } from "../custom/Headers";
import ProductCard from "./productCard";

export default function Products(){
    const items =[
        {

        },
        {

        }, {

        }, {

        }, {

        }, {

        }, {

        }, {

        }, {

        }, {

        }
    ]
    return(
        <div className="mt-20">
            <div className="flex justify-between">
                <SubHeader style="text-start" title="Always choose the best"/>
                <div className="lg:max-w-[300px]">
                    <p>lhiueuife ugteuge huyeourgeuy egroueoref ggeufeyuey bghjge egeoregr igeggeurgiehriuh hiuyiehe uguegehgiuh eugeheiu </p>
                </div>

            </div>
            <div className="products-body grid grid-rows-2 grid-flow-col gap-4">
{
    items.map((item, index)=>(
        <ProductCard/>
    ))
}
            </div>
        </div>
    )
}
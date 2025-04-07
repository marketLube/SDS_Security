import React from "react";
import { SectionTitle } from "../SectionTitle";

export const FooterForm = () => {
    return (
        <div className="font-dm-sans pt-16 pb-12 md:flex md:justify-between">
            <div className="pb-8 md:max-w-4/12 ">
                <h2 className="max-w-56 sm:max-w-72 md:max-w-96 mb-4 font-medium tracking-normal">Facing an Issue? Let’s Fix It Fast</h2>
                <p className="opacity-80">Facing an issue with our product? Let us know the details, and we’ll fix it quickly and efficiently.</p>
            </div>

            {/* footer form */}
            <form action="" className="pt-4 md:max-w-6/12 w-full flex flex-col gap-4">
                {/* fullName */}
                <div className="flex flex-col gap-2 text-start">
                    <label className="text-lg font-medium" htmlFor="fullName">
                        Full Name
                    </label>
                    <input type="text" name="fullName" id="fullName" className="input-styled" placeholder="Enter your full name" />
                </div>

                {/* product dropdown */}
                <div className="flex flex-col gap-2 text-start">
                    <label htmlFor="products" className="text-lg font-medium">
                        Select Product
                    </label>
                    <select name="products" className="text-gray-500 select-styled" id="products">
                        <option value="nil">Choose the product facing an issue</option>
                        <option value="product1">product1</option>
                        <option value="product2">product2</option>
                        <option value="product3">product3</option>
                        <option value="product4">product4</option>
                    </select>
                </div>

                {/* Issue description */}
                <div className="flex flex-col gap-2 text-start ">
                    <label htmlFor="issueDescription" className="text-lg font-medium">
                        Issue Description
                    </label>
                    <textarea className="textarea-styled" placeholder="Share more details about the issue..." name="issueDescription" id="issueDescription">
                        
                    </textarea>
                </div>
            </form>
        </div>
    );
};

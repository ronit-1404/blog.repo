import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody, Input } from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            {/* Search Icon */}
            <div onClick={handleOpen}>
                <AiOutlineSearch size={20} color="white" />
            </div>
            {/* Dialog */}
            <Dialog
                className="relative right-[1em] w-[25em] md:right-0 lg:right-0"
                open={open}
                handler={handleOpen}
                style={{
                    background: mode === 'light' ? '#2f3542' : '#2f3542',
                    color: mode === 'dark' ? 'white' : 'black'
                }}
            >
                {/* Dialog Body */}
                <DialogBody>
                    <div className="flex w-full justify-center">
                        {/* Input */}
                        <Input
                            color="white"
                            type="search"
                            label="Type here..."
                            className="bg-[#2C3A47] text-white"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>

                    {/* Blog Card */}
                    <div className="flex justify-center flex-wrap mt-4 mb-2">
                        <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="container mx-auto px-4 bg-gray-200 p-2 rounded-lg w-full">
                                {/* Blog Thumbnail */}
                                <img
                                    className="w-20 mb-2 rounded-lg"
                                    src=""
                                    alt=""
                                />
                                {/* Blog Date */}
                                <p className="text-sm text-black">{"date"}</p>
                                {/* Blog Title */}
                                <h1 className="text-black">{"title"}</h1>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="text-center">
                        <h1 className="text-white">Powered By quickblog</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}

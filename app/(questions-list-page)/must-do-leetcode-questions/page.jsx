import { RxArrowLeft } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
    return (
        <div className="w-screen h-full flex flex-col gap-2 justify-center items-center">

            <h1 className="">Coming Soon....</h1>
            <Link href={"/"}>
                <Button size="sm" className="flex gap-2">
                    <RxArrowLeft /> Go back to home
                </Button>
            </Link>
        </div>
    )
}

export default page
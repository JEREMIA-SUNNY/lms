import Card from "../../components/custom/card";
import Notification from "./notification";
import Pending from "./pending";
import Recent from "./recent";
import Transaction from "./transaction";

const HomeLayout = () => {
    return (
        <div className="mt-8 h-full w-full grid grid-rows-2 grid-flow-col gap-4">
            <Card className='p-4 lg:w-1/2'><Notification /></Card>
            <Card className='p-4 lg:w-1/2'><Pending /></Card>
            <Card className='p-4 lg:w-1/2'><Recent /></Card>
            <Card className='p-4 lg:w-1/2'><Transaction /></Card>
        </div>
    )
}

export default HomeLayout;
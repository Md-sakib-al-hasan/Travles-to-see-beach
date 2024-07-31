import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Selection = () => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[20%] mx-auto border-none text-gray-900">
                    <SelectValue placeholder="Plan terms" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>


        </div>
    );
};

export default Selection;  
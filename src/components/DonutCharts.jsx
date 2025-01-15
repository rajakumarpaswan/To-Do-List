import { DonutChart } from '@mantine/charts';
import { IconPointFilled } from '@tabler/icons-react';

const DonutCharts = () => {
    const data = [
        { name: 'pending', value: 400, color: 'indigo.6' },
        { name: 'completed', value: 300, color: 'yellow.6' },
    ];

    return (
        <div>
            <div className="flex items-center  w-32 h-32 xs-mx:w-24 xs-mx:h-24 md-mx:w-40 md-mx:h-40 justify-center xs-mx:flex xs-mx:items-center xs-mx:justify-center md-mx:flex md-mx:items-center md-mx:justify-center ">
                <DonutChart
                    withLabelsLine
                    labelsType="value"
                    withLabels
                    size={96}
                    className="w-32 h-32 xs-mx:w-24 xs-mx:h-24 md-mx:w-28 md-mx:h-28 "
                    data={data}
                    thickness={10}
                />
            </div>
            <div className="flex items-center text-sm mt-2 gap-2 xs-mx:flex xs-mx:items-center xs-mx:mt-1 xs-mx:gap-1 xs-mx:text-[10px] md-mx:flex md-mx:items-center md-mx:mt-2 md-mx:gap-2 md-mx:text-sm ">
                <span className="flex items-end gap-1 xs-mx:flex xs-mx:items-end xs-mx:gap-1 xs-mx:text-[6px] md-mx:flex md-mx:items-end md-mx:gap-1 md-mx:text-[10px]">
                    <IconPointFilled className="text-green-500 xs-mx:w-2 xs-mx:h-2 xs-mx:flex xs-mx:items-center xs-mx:justify-center md-mx:w-4 md-mx:h-4 md-mx:flex md-mx:items-center md-mx:justify-center" size={10} />
                    pending (400)
                </span>
                <span className="flex items-end gap-1 xs-mx:flex xs-mx:items-end xs-mx:gap-1 xs-mx:text-[6px] md-mx:flex md-mx:items-end md-mx:gap-1 md-mx:text-[10px]">
                    <IconPointFilled size={10} className="xs-mx:w-2 xs-mx:h-2 xs-mx:flex xs-mx:items-center xs-mx:justify-center md-mx:w-4 md-mx:h-4 md-mx:flex md-mx:items-center md-mx:justify-center" />
                    done (300)
                </span>
            </div>
        </div>
    );
}

export default DonutCharts;